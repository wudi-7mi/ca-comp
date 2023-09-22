# 赛题2：社交媒体舆论场事件观点挖掘

## 任务介绍

社交媒体中持续发生多样的热点事件与舆论事件，是用户参与度与讨论度最高的内容，人们通过表达、分享和传播对事件的观点，来交流自己的观点和看法。了解对事件不同角度的观点有助于了解事件全貌，从而即时判断事件态势，做出有效决策

本赛题要求参赛者根据给定的热点话题信息与相关新闻文档，从新闻内容中识别出所有与热点话题事件相关的观点句所在位置，当且仅当所有涵盖该事件观点的所有句子全部被正确识别时，认为结果正确

## 数据介绍

本赛题数据集由668个社会热点话题（短语）以及2401篇相关的新闻文档（划分为句子）构成。热点话题及相关的新闻均来自网络检索，并进行了人工筛查和标注，以保证数据的质量。

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
      <td>事件数</td>
      <td>534</td>
      <td>67</td>
      <td>67</td>
      <td>668</td>
    </tr>
    <tr>
      <td>文档数</td>
      <td>1864</td>
      <td>291</td>
      <td>246</td>
      <td>2401</td>
    </tr>
  </tbody>
</table>


**数据以json格式发布（参见后附数据样例），新闻内容和观点标注分别位于`_data.json`文件和`_label.json`文件**

### 文档文件

数据示例：

```json
{
    "Descriptor": {
        "event_id": event_id,
        "text": "话题短语"
    },
    "Doc": {
        "doc_id": doc_id,
        "title": "新闻标题",
        "content": [
            {
                "sent_idx": 0,
                "sent_text": "第1个句子文本。"
            },
            {
                "sent_idx": 1,
                "sent_text": "第2个句子文本。"
            },
            ...
            {
                "sent_idx": n-1,
                "sent_text": "第n个句子文本"
            }
        ]
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
        <td rowspan="2">Descriptor</td>
        <td>event_id</td> 
        <td>int</td>
        <td>话题事件编号</td>
    </tr>
    <tr>
        <td>text</td> 
        <td>str</td>
        <td>话题事件短语</td>
    </tr>
    <tr>
        <td rowspan="3">Doc</td>    
        <td >doc_id</td> 
        <td >int</td>
        <td >话题相关的新闻文档编号</td> 
    </tr>
    <tr>
        <td >title</td>  
        <td >str</td>
        <td >新闻标题</td>
    </tr>
    <tr>
        <td >content</td>  
        <td >list</td>
        <td >文档内容，包含的每个字典代表一个句子，两个元素分别是句子编号和句子文本</td>
    </tr>
</table>

### 标注文件

数据示例：

```json
[
    {
        "event_id": (int) event_id,
        "doc_id": (int) doc_id,
        "start_sent_idx": (int),
        "end_sent_idx": (int) 
    }
]
```

各个字段说明如下表所示：

<p align="center"><font face="黑体" size=2.>表3 标注文件字段说明示例表</font></p>

<table>
  <thead>
    <tr>
      <th>字段</th>
      <th>类型</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>event_id</td>
      <td>int</td>
      <td>观点相关的话题编号</td>
    </tr>
    <tr>
      <td>doc_id</td>
      <td>int</td>
      <td>观点所在的文档编号</td>
    </tr>
    <tr>
      <td>start_sent_idx</td>
      <td>int</td>
      <td>观点开始的句子位置</td>
    </tr>
    <tr>
      <td>end_sent_idx</td>
      <td>int</td>
      <td>观点结束的句子位置</td>
    </tr>
  </tbody>
</table>

## 提交形式

竞赛组委会将在规定时间内发布测试集数据，参赛者需要对测试数据中的观点片段进行预测，保存到结果文件test_label.json中，格式与训练集与验证集的label文件保持一致。结果文件上传到提交系统中。

## 评价标准

最终由专业人员将参赛人员所提交代码进行运行，将模型预测的观点句子集合 $P_a={a_1^P,...,a_m^P}$ 和所标注的观点句子集合 $T_a={a_1^T,...,a_m^T}$ 进行对比，计算模型预测正确率Accuracy，并作为最终评价指标


