import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "GMLAPI",
  "keywords": "GMLAPI,OpenAI,Openkey,API中转,OpenAI接入,apikey,chatgptapikey,midjourney接口,Stable Diffusion,Suno,Luma,DALL-E,Runway,Kling,Viggle,Ideogram,Flex",
  "description": "CGMLAPI行业领先的AI资源服务提供商，汇集OpenAI, Claude, MidJourney, Suno, Luma ，DALL-E，CLIP，MidJourney，Stable Diffusion 等全球顶级品牌的先进API接口。提供零月费、按需付费的灵活计费模式，让技术爱好者、小型企业、学校和个人用户都能轻松享受高质量的人工智能服务。无论是聊天机器人、绘图机器人还是高效语音转换与精确文字识别，加入CNAI-API，带来的无限可能，探索并集成最前沿的技术到您的产品中，共同推动创新与发展，为客户创造更多价值。",
  "themeConfig": {
    "siteTitle": false,
    "logo": "https://payphp.oss-cn-shenzhen.aliyuncs.com/CNAPI.svg",
    "outDir": "docs",
    "lastUpdated": true,
    "sidebarMenuLabel": "目录",
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/gzyxds/cnapi"
      }
    ],
    "editLink": {
      "pattern": "https://github.com/gzyxds/cnapi",
      "text": "编辑本页"
    },
    "nav": [
      {
        "text": "🖥网站首页",
        "link": "/"
      },
      {
        "text": "💹控制台",
        "link": "https://api.cnai.art"
      },
      {
        "text": "🍵AIGC系统",
        "link": "https://docs.xgphp.cn"
      },
      {
        "text": "💬在线体验",
        "link": "https://api.cnai.art/playground"
      },
      {
        "text": "🎉️帮助中心",
        "link": "/api/help"
      }
    ],
    "sidebar": [
      {
        "text": "🖥️帮助中心",
        collapsed: false, // 是否默认展开
        "items": [
          {
            "text": "✅ 快速接入",
            "link": "/api/index"
          },
          {
            "text": "😊 服务定价",
            "link": "/api/shop"
          },
          {
            "text": "😍 获取apiKey",
            "link": ""
          },
          {
            "text": "😊 常见问题",
            "link": ""
          },
          {
            "text": "🚀 直接使用",
            "link": ""
          },
          {
            "text": "🔨 应用部署",
            "link": ""
          },
          {
            "text": "😊 画图 dall-e-3模型",
            "link": ""
          },
          {
            "text": "😊 gpt-4-vision-preview 模型",
            "link": ""
          },
          {
            "text": "😊 GPTs 多模态",
            "link": ""
          },
          {
            "text": "😊 whisper tts 语音模型",
            "link": ""
          },
          {
            "text": "😊 Assistants API",
            "link": ""
          }
        ]
      },
      {
        "text": "🎨midjourney",
        collapsed: false,
        "items": [
          {
            "text": "✅ Midjourney接入",
            "link": ""
          },
          {
            "text": "😊 任务API",
            "link": ""
          },
          {
            "text": "😊 应用部署",
            "link": ""
          },
          {
            "text": "🚀 直接使用",
            "link": ""
          }
        ]
      },
      {
        "text": "📖其他or",
        collapsed: false,
        "items": [
          {
            "text": "😊 claude-3 ",
            "link": ""
          },
          {
            "text": "🎧 音乐模型 suno",
            "link": ""
          },
          {
            "text": "🎬 视频模型 luma",
            "link": ""
          },
          {
            "text": "🎬 视频模型 runway",
            "link": ""
          },
          {
            "text": "🎬 视频模型 kling可灵",
            "link": ""
          },
          {
            "text": "💃🏻 舞蹈模型 viggle",
            "link": ""
          },
          {
            "text": "🖼 绘图模型 ideogram",
            "link": ""
          },
          {
            "text": "🖼 绘图模型 flux",
            "link": ""
          },
          {
            "text": "😊 免费公益接口",
            "link": ""
          }
        ]
      },
      {
        "text": "🍵友情连接",
        collapsed: false,
        "items": [
          {
            "text": "📫枭格科技",
            "link": "http://www.xgphp.cn/"
          },
          {
            "text": "☁优刻云",
            "link": "https://www.cloudcvm.com/"
          },
          {
            "text": "🎉AI创作",
            "link": "https://comnew.cn/"
          },
          {
            "text": "🎨AIGC系统",
            "link": "https://docs.xgphp.cn/"
          },
          {
            "text": "👀CodePu",
            "link": "http://www.codepu.cn/"
          }
        ]
      }
    ],
    "footer": {
      "message": "Released under the CNAPI.cn Public License.",
      "copyright": "Copyright © 2024-api.cnar.art All Rights Reserved"
    },
    "prev": "上一篇",
    "returnToTopLabel": "返回顶部",
    "outline": "目录",
    "externalLinkIcon": true,
    "i18nRouting": false,
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    }
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://payphp.cn",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "行业领先的AI资源服务提供商, 汇集全球顶级大模型API接口",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
