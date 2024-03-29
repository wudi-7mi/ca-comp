# 赛题3：群体用户情感分析与挖掘

## 任务介绍

情感是人们表达立场观点的重要途经，社交媒体平台群体会话交互过程中蕴含丰富的情感信息。通过精准识别群体用户情感倾向，及时发现用户情感波动，是理解用户立场观点，推动会话过程持续进行的关键，对舆情有效监控与疏导、用户心理状态预警等方面具有重要意义。

本赛题要求参赛者对提供的群体会话数据进行情感分类，共包含主流的6类基本情感标注（高兴、惊讶、伤心、生气、厌恶，害怕）以及正常无明显情感，共7类情感标签。每组对话数据中可能包含多轮对话过程，参赛者需要综合考虑对话上下文信息，对每组多轮群体对话中的每轮次对话内容所对应的情感标签。

## 数据介绍

我们从50余部中文电视剧的500集左右的对话数据中，选取900多个对话片段进行了多情感标签的标注，共标注超过24,000句话。

数据相关的统计数据如下：

<p align="center"><font face="黑体" size=2.>表1 统计数据示例表</font></p>

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
      <td>场景数</td>
      <td>775</td>
      <td>106</td>
      <td>105</td>
      <td>986</td>
    </tr>
  </tbody>
</table>

**数据以json格式发布（参见后附数据样例）。**

数据集中，使用电视剧名称的全拼区分不同的剧集，一部电视剧中选取多个场景，后缀增加序号以区分场景。首先给出对话人信息，并用字母指代说话人，再展开对话内容并标注情感标签。

### 文档文件：

数据示例：

```json
{
  "shaonianpai": {
    "shaonianpai_1": {
      "SpeakerInfo": {
        "A": {
          "Name": "王胜男",
          "Age": "mid",
          "Gender": "female",
          "OtherName": []
        },
        "B": {
          "Name": "林大为",
          "Age": "mid",
          "Gender": "male",
          "OtherName": []
        }
      },
      "Dialog": {
        "shaonianpai_1_1": {
          "Text": "钟点工阿姨",
          "Speaker": "A",
          "EmoAnnotation": {
            "EmoAnnotator": "Neutral"
          }
        },
        "shaonianpai_1_2": {
          "Text": "你在叫我？",
          "Speaker": "B",
          "EmoAnnotation": {
            "EmoAnnotator": "Surprise"
          }
        },
        "shaonianpai_1_3": {
          "Text": "看把你给殷勤的",
          "Speaker": "A",
          "EmoAnnotation": {
            "EmoAnnotator": "Disgust"
          }
        },
        "shaonianpai_1_4": {
          "Text": "爬上爬下费劲讨好的",
          "Speaker": "A",
          "EmoAnnotation": {
            "EmoAnnotator": "Disgust"
          }
        }
      }
    }
  }
}
```
      
各个字段说明如下表所示：

<p align="center"><font face="黑体" size=2.>表2 文档文件字段说明示例表</font></p>

<table>
    <tr>
        <td></td> 
        <td>字段</td> 
        <td>类型</td>
        <td>说明</td>
    </tr>
    <tr>
        <td rowspan="4">SpeakerInfo</td>
        <td>Name</td> 
        <td>str</td>
        <td>对话人姓名</td>
    </tr>
    <tr>
        <td>Age</td> 
        <td>str</td>
        <td>说话人年龄层次</td>
    </tr>
    <tr>
        <td>Gender</td> 
        <td>str</td>
        <td>说话人性别</td>
    </tr>
    <tr>
        <td>OtherName</td> 
        <td>str</td>
        <td>说话人别名</td>
    </tr>
    <tr>
        <td rowspan="3">Dialog</td>    
        <td >Text</td> 
        <td >str</td>
        <td >该说话人的对话语句</td> 
    </tr>
    <tr>
        <td >Speaker</td>  
        <td >str</td>
        <td >说话人标识</td>
    </tr>
    <tr>
        <td >EmoAnnotation</td>  
        <td >str</td>
        <td >标注的该对话语句的情感标签</td>
    </tr>
</table>

验证集与训练集数据结构完全相同。

测试集与训练集数据结构相同，已隐去情感标签。


## 提交形式

竞赛组委会将在规定时间内发布测试集数据，参赛者需要对对话内容的情感倾向进行预测，保存到结果文件`test_label.json`中，格式与原始测试集文件保持一致。

## 评价标准

该赛题采用macro-F1值进行评测，需要提到的是，在计算准确和召回的时候，是按照分析的实体数进行计数的，而非样本数。即如果一个样本中包含两个需要分析的对象，则计算时计数2次，而非一次。
