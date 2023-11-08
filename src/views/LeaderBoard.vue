<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li :class="item.status" v-for="(item, index) in breadcrumbItems" :key="index">
        <a
          href="#target"
          @click="switchLeaderBoard(index)">
          {{ item.label }}
        </a>
      </li>
    </ol>
  </nav>
  <h1>{{ currentLabel }}评测结果</h1>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>队伍名</th>
        <th>得分</th>
        <th>排名</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(t, index) in currentScore" :key="index">
        <td>{{ t.name }}</td>
        <td>{{ t.score }}</td>
        <td>{{ t.rank }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      TeamScore: [
        [
          { name: "深挖特征队", score: "0.809867769", rank: "1" },
          { name: "一周乐园队", score: "0.808127064", rank: "2" },
          { name: "行则将至", score: "0.798387097", rank: "3" },
          { name: "数据科学基础2023秋季", score: "0.759138229", rank: "4" },
          { name: "睡大觉", score: "0.754941319", rank: "5" },
        ],
        [],
        [],
        [],
        []
      ],
      currentScore: [],
      breadcrumbItems: [
        { label: '赛题1', status: { 'breadcrumb-item': true } },
        { label: '赛题2', status: { 'breadcrumb-item': true } },
        { label: '赛题3', status: { 'breadcrumb-item': true } },
        { label: '赛题4', status: { 'breadcrumb-item': true } },
        { label: '赛题5', status: { 'breadcrumb-item': true } },
      ],
      currentLabel: "赛题1"
    }
  },
  methods: {
    switchLeaderBoard(index) {
      this.currentLabel = this.breadcrumbItems[index].label
      this.swapScore(index)
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
    }
  },
  mounted() {
    this.swapScore(0)
  }
}
</script>