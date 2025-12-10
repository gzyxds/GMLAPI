# New-API 备份与迁移指南

本指南适用于使用宝塔面板 Docker Compose 部署的 New-API 项目。

## 需要备份的数据

| 数据类型 | 容器路径 | 宿主机路径/卷名 |
|---------|---------|----------------|
| 应用数据 | `/data` | `./data` |
| 日志文件 | `/app/logs` | `./logs` |
| PostgreSQL 数据库 | `/var/lib/postgresql/data` | `pg_data` (Docker 卷) |

---

## 备份步骤

### 1. 停止服务（推荐，确保数据一致性）

```bash
cd /www/wwwroot/你的项目目录
docker-compose stop
```

### 2. 备份应用数据（本地目录）

```bash
# 直接打包 data 和 logs 目录
tar -czvf new-api-files-backup.tar.gz ./data ./logs
```

### 3. 备份 PostgreSQL 数据库

**方法一：导出 SQL 文件（推荐）**

```bash
# 先启动数据库
docker-compose start postgres

# 导出数据库
docker exec postgres pg_dump -U root new-api > new-api-db-backup.sql
```

**方法二：备份 Docker 卷**

```bash
# 找到卷的实际路径
docker volume inspect 项目目录名_pg_data

# 打包卷数据（需要 root 权限）
sudo tar -czvf pg_data-backup.tar.gz /var/lib/docker/volumes/项目目录名_pg_data/_data
```

### 4. 重新启动服务

```bash
docker-compose start
```

---

## 迁移到新服务器

### 1. 在新服务器准备环境

```bash
# 安装 Docker 和 Docker Compose
# 创建项目目录
mkdir -p /www/wwwroot/new-api
cd /www/wwwroot/new-api

# 复制 docker-compose.yml 到新服务器
```

### 2. 传输备份文件

```bash
# 使用 scp 或宝塔面板上传
scp new-api-files-backup.tar.gz new-api-db-backup.sql root@新服务器IP:/www/wwwroot/new-api/
```

### 3. 恢复应用数据

```bash
cd /www/wwwroot/new-api
tar -xzvf new-api-files-backup.tar.gz
```

### 4. 启动服务并恢复数据库

```bash
# 先启动基础服务
docker-compose up -d postgres redis

# 等待 PostgreSQL 完全启动（约 10 秒）
sleep 10

# 恢复数据库
docker exec -i postgres psql -U root -d new-api < new-api-db-backup.sql

# 启动应用
docker-compose up -d
```

---

## 一键备份脚本

创建 `backup.sh` 文件：

```bash
#!/bin/bash
# New-API 自动备份脚本
# 使用方法: chmod +x backup.sh && ./backup.sh

BACKUP_DIR="/www/backup/new-api"
DATE=$(date +%Y%m%d_%H%M%S)
PROJECT_DIR="/www/wwwroot/new-api"

# 创建备份目录
mkdir -p $BACKUP_DIR

cd $PROJECT_DIR

# 导出数据库
echo "正在备份数据库..."
docker exec postgres pg_dump -U root new-api > $BACKUP_DIR/db_$DATE.sql

# 备份文件
echo "正在备份应用数据..."
tar -czvf $BACKUP_DIR/files_$DATE.tar.gz ./data ./logs

# 保留最近 7 天备份
echo "清理过期备份..."
find $BACKUP_DIR -mtime +7 -delete

echo "✅ 备份完成: $BACKUP_DIR"
echo "   - 数据库: db_$DATE.sql"
echo "   - 文件: files_$DATE.tar.gz"
```

### 设置定时备份

在宝塔面板中：

1. 进入 **计划任务**
2. 添加任务类型：**Shell 脚本**
3. 执行周期：每天凌晨 3:00
4. 脚本内容：`/www/wwwroot/new-api/backup.sh`

---

## 使用 MySQL 时的备份

如果使用 MySQL 而非 PostgreSQL，备份命令如下：

**备份：**

```bash
docker exec mysql mysqldump -uroot -p123456 new-api > new-api-db-backup.sql
```

**恢复：**

```bash
docker exec -i mysql mysql -uroot -p123456 new-api < new-api-db-backup.sql
```

---

## 注意事项

1. **生产环境**：备份前建议先停止服务，确保数据一致性
2. **密码安全**：备份脚本中不要硬编码敏感密码，可使用环境变量
3. **异地备份**：建议将备份文件同步到其他服务器或云存储
4. **定期测试**：定期在测试环境验证备份文件的可恢复性
