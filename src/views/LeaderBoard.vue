<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li :class="item.status" v-for="(item, index) in breadcrumbItems" :key="index">
        <a href="#target" @click="switchLeaderBoard(index)">
          {{ item.label }}
        </a>
      </li>
    </ol>
  </nav>
  <h1>{{ currentLabel }}评测结果</h1>
  <table class="table table-bordered">
    <thead>
      <tr v-if="currentMode == 1">
        <th>队伍名</th>
        <th>得分</th>
        <th>排名</th>
      </tr>
      <tr v-if="currentMode == 2">
        <th>队伍名</th>
        <th>发言角色预测准确率</th>
        <th>生成内容质量评分</th>
        <th>加权综合评分</th>
        <th>排名</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="currentMode == 1" v-for="(t, index) in currentScore" :key="index">
        <td>{{ t.name }}</td>
        <td>{{ t.score }}</td>
        <td>{{ t.rank }}</td>
      </tr>
      <tr v-if="currentMode == 2" v-for="(t, index) in currentScore" :key="index">
        <td>{{ t.name }}</td>
        <td>{{ t.score_01 }}</td>
        <td>{{ t.score_02 }}</td>
        <td>{{ t.score_03 }}</td>
        <td>{{ t.rank }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      TeamScore: [
        [{ 'name': '小怪兽', 'rank': '\ufeff1', 'score': '0.824456676' },
        { 'name': '兽窟探险队', 'rank': '2', 'score': '0.814516129' },
        { 'name': 'ZYDFDNB', 'rank': '3', 'score': '0.812001264' },
        { 'name': '绿豆沙', 'rank': '4', 'score': '0.810587389' },
        { 'name': '深挖特征队', 'rank': '5', 'score': '0.809867769' },
        { 'name': '一周乐园队', 'rank': '6', 'score': '0.808127064' },
        { 'name': '航天队', 'rank': '7', 'score': '0.802054651' },
        { 'name': '虚假账号检测小队', 'rank': '8', 'score': '0.800775036' },
        { 'name': '行则将至', 'rank': '9', 'score': '0.798387097' },
        { 'name': 'ahh队', 'rank': '10', 'score': '0.796513144' },
        { 'name': '我去结束乐队', 'rank': '11', 'score': '0.792643405' },
        { 'name': '对对对队', 'rank': '12', 'score': '0.791224713' },
        { 'name': '梓妍对对队', 'rank': '13', 'score': '0.787286467' },
        { 'name': '大猫队', 'rank': '14', 'score': '0.781033403' },
        { 'name': '听潮阁', 'rank': '15', 'score': '0.777504836' },
        { 'name': '可以不离开嘛', 'rank': '16', 'score': '0.774193548' },
        { 'name': '哈哈哈啥都对', 'rank': '17', 'score': '0.772094721' },
        { 'name': '小卫星', 'rank': '18', 'score': '0.771904534' },
        { 'name': 'Undefined', 'rank': '19', 'score': '0.770710663' },
        { 'name': '为什么要学量子力学', 'rank': '20', 'score': '0.767050268' },
        { 'name': '仿生AI与电子人类', 'rank': '21', 'score': '0.762665423' },
        { 'name': '数据科学基础2023秋季', 'rank': '22', 'score': '0.759138229' },
        { 'name': '睡大觉', 'rank': '23', 'score': '0.754941319' },
        { 'name': '翻斗花园不养闲人', 'rank': '24', 'score': '0.753578239' },
        { 'name': '阁下应该如何应队', 'rank': '25', 'score': '0.750495017' },
        { 'name': '年底冲业绩', 'rank': '26', 'score': '0.730484464' },
        { 'name': '一眼丁真', 'rank': '27', 'score': '0.630732163' },
        { 'name': '上分', 'rank': '28', 'score': '0.475221179' },
        { 'name': '则何如', 'rank': '29', 'score': '0.409723129' }],
        [
          { 'name': '重在参与队', 'rank': '1', 'score': '0.335745297' }
        ],
        [
          { 'name': 'Twice_8', 'rank': '1', 'score': '0.340162118' },
          { 'name': 'trtr1', 'rank': '2', 'score': '0.125611158' },
          { 'name': '翻斗花园的王', 'rank': '3', 'score': '0.128261647' },
          { 'name': 'CPU跑深度学习', 'rank': '4', 'score': '0.084982845' }
        ],
        [
          { 'name': 'biubiubiu', 'rank': '1', 'score': '0.479166667' },
        ],
        [
          { 'name': 'biubiubiu', 'rank': '1', 'score_01': '0.738', 'score_02': '0.595', 'score_03': '0.653', }
        ]
      ],
      currentScore: [],
      breadcrumbItems: [
        { label: '赛题1', status: { 'breadcrumb-item': true } },
        { label: '赛题2', status: { 'breadcrumb-item': true } },
        { label: '赛题3', status: { 'breadcrumb-item': true } },
        { label: '赛题4', status: { 'breadcrumb-item': true } },
        { label: '赛题5', status: { 'breadcrumb-item': true } },
      ],
      currentLabel: "赛题1",
      currentMode: 1,
    }
  },
  methods: {
    switchLeaderBoard(index) {
      if (index != 4) {
        this.currentMode = 1
        this.currentLabel = this.breadcrumbItems[index].label
        this.swapScore(index)
      } else {
        this.currentMode = 2
        this.currentLabel = this.breadcrumbItems[index].label
        this.swapScoreTwo()
      }
    },
    swapScore(index) {
      if (this.TeamScore[index].length == 0) {
        this.currentScore = []
        for (let i = 0; i < 20; i++) {
          this.currentScore.push({ name: "TBD", score: "TBD", rank: "TBD" })
        }
      } else {
        this.currentScore = this.TeamScore[index]
      }
      console.log({
        "index": index,
        "current": this.currentScore
      })
    },
    swapScoreTwo() {
      this.currentScore = this.TeamScore[4]
    }
  },
  mounted() {
    this.swapScore(0)
  }
}
</script>