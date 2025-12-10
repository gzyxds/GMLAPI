# 快速接入

只需三步，即可开始使用 gmlapi。

## 1. 注册账号
访问 gmlapi 控制台，注册并登录账号。

## 2. 获取 API Key
在控制台「令牌管理」页面创建一个新的 API Key (sk-...)。

## 3. 发起调用
使用 OpenAI 官方 SDK 或兼容库，将 API Key 替换为您刚才生成的 Key，并将 Base URL 设置为 `https://api.gmlapi.com/v1` (示例地址)。

### 示例代码 (Python)

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="https://api.gmlapi.com/v1"
)

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```
