# 赛题1：社交媒体舆论场虚假账号检测

## 任务介绍

该赛题的主要目标是检测社交媒体中的虚假账号。这些虚假账号会模仿人类行为，利用点赞、评论、转发、发帖等行为与人类进行交互，从而达到以假乱真、引导舆论导向的目的。因此，检测社交媒体中的虚假账号成为整顿互联网秩序，建设良好网络环境的迫切之需。

给定数据集 $\mathcal{D}=\{d_1,d_2,...,d_n\}$ ，其中$d_i$表示一条社交媒体账户， $n$ 表示账户总数。该任务要求通过对数据集建模，检测出数据集中存在的虚假账号信息。

## 数据集介绍

评测数据由2484条账户信息构成。账户信息来自于知名社交媒体平台Twitter。我们通过数据爬虫技术抓去了Twitter上具有影响力的部分账户信息。对于保留的账户数据，我们都进行了人工筛查，以保证数据的质量。

数据相关的统计数据如下：

<p align="center"><font face="黑体" size=4.>表1 统计数据示例表</font></p>

<table>
  <thead>
    <tr>
      <th></th>
      <th>训练集</th>
      <th>验证集</th>
      <th>测试集</th>
      <th>总计</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>真实人类</td>
      <td>1130</td>
      <td>142</td>
      <td>141</td>
      <td>1413</td>
    </tr>
    <tr>
      <td>虚假机器人</td>
      <td>856</td>
      <td>108</td>
      <td>107</td>
      <td>1071</td>
    </tr>
  </tbody>
</table>

**数据以json格式发布（参见后附数据样例），账户数据位于`dataset.json`文件**

### 文档文件

数据示例：

```json
{
  "created_at": "Mon Jan 21 19:37:21 +0000 2019",
  "user": {
    "id": 613512037,
    "id_str": "613512037",
    "name": "Baseball Quotes",
    "screen_name": "BaseballQuotes1",
    "location": "The Diamond",
    "description": "Quoting America's Pastime in 280 characters or less.",
    "url": null,
    "entities": {
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 121500,
    "friends_count": 346,
    "listed_count": 532,
    "created_at": "Wed Jun 20 15:07:36 +0000 2012",
    "favourites_count": 35894,
    "utc_offset": null,
    "time_zone": null,
    "geo_enabled": true,
    "verified": false,
    "statuses_count": 21246,
    "lang": "en",
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "000000",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/559155402693423105/J1HBp3ht_normal.jpeg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/559155402693423105/J1HBp3ht_normal.jpeg",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/613512037/1437348323",
    "profile_link_color": "3B94D9",
    "profile_sidebar_border_color": "000000",
    "profile_sidebar_fill_color": "000000",
    "profile_text_color": "000000",
    "profile_use_background_image": false,
    "has_extended_profile": false,
    "default_profile": false,
    "default_profile_image": false,
    "following": false,
    "follow_request_sent": false,
    "notifications": false,
    "translator_type": "none"
  },
  "label": "human"
}
```

主要字段说明如下所示：

`created_at`: 账号创建时间，表示账号是在哪一天和时间创建的。

`user`: 用户信息
- `id`: 用户的唯一标识符（ID）。
- `id_str`: 用户ID的字符串表示。
- `name`: 用户的显示名称，通常是用户的姓名或用户名。
- `screen_name`: 用户的屏幕名称，是用户在 Twitter 上的唯一用户名。
- `location`: 用户填写的位置信息，表示用户所在地。
- `description`: 用户的个人描述，通常包含一些关于用户的简短信息。
- `url`: 用户的网站链接，如果用户提供了的话。
- `entities`: 包含用户描述及网站链接的实体信息。
- `protected`: 表示用户是否设置了账号的隐私保护。
- `followers_count`: 用户的关注者数量，即关注该用户的人数。
- `friends_count`: 用户的关注数量，即用户关注的其他用户数。
- `listed_count`: 用户被其他用户列入列表的次数，通常表示用户在社交媒体上的受欢迎程度。
- `created_at`: 用户账号创建时间，表示账号是在哪一天和时间创建的。
- `favourites_count`: 用户标记为喜欢（或收藏）的推文或帖子的数量。
- `utc_offset`: 用户的时区偏移量。
- `time_zone`: 用户所在的时区。
- `geo_enabled`: 用户是否启用地理位置信息。
- `verified`: 用户是否经过验证，即是否为认证账号。
- `statuses_count`: 用户发布的推文或帖子的总数量。
- `lang`: 用户账号的语言设置。
- `contributors_enabled`: 用户是否启用了贡献者功能。
- `is_translator`: 用户是否是翻译员。
- `is_translation_enabled`: 用户是否启用了翻译功能。
- `profile_background_color`: 用户的个人资料背景颜色。
- `profile_background_image_url`: 用户的个人资料背景图片 URL。
- `profile_background_image_url_https`: 用户的个人资料背景图片 URL（安全链接）。
- `profile_background_tile`: 用户的个人资料背景是否平铺。
- `profile_image_url`: 用户的个人资料图片 URL。
- `profile_image_url_https`: 用户的个人资料图片 URL（安全链接）。
- `profile_banner_url`: 用户的个人资料横幅图片 URL。
- `profile_link_color`: 用户的个人资料链接颜色。
- `profile_sidebar_border_color`: 用户的个人资料侧边栏边框颜色。
- `profile_sidebar_fill_color`: 用户的个人资料侧边栏填充颜色。
- `profile_text_color`: 用户的个人资料文本颜色。
- `profile_use_background_image`: 用户是否使用个人资料背景图片。
- `has_extended_profile`: 用户是否启用了扩展个人资料。
- `default_profile`: 用户是否使用默认个人资料。
- `default_profile_image`: 用户是否使用默认个人资料图片。
- `following`: 当前用户是否正在关注该用户。
- `follow_request_sent`: 当前用户是否发送了关注请求给该用户。
- `notifications`: 当前用户是否接收通知。
- `translator_type`: 用户类型，例如是否为翻译员。

`label`: 账号的标签，可能是 "human"（真实用户）或 "bot"（虚假账号），用于标识账号类型。

## 提交形式
竞赛组委会将在规定时间内发布测试集数据，参赛者需要对测试集中的账户标签进行预测，保存到结果文件`test_label.json`中，格式与原始测试集文件保持一致。结果文件上传到提交系统中。

## 评价标准

该赛题将模型预测的账号类型集合 $P_a=\{a_1^P,...,a_m^P\}$ 和所标注的账号类型集合 $T_a=\{a_1^T,...,a_m^T\}$ 进行对比，计算模型预测F1指标，并作为最终评价指标
