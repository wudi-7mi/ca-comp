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
      <tr v-for="i in 20" :key="i">
        <td>{{ TeamScore[0].name }}</td>
        <td>{{ TeamScore[0].score }}</td>
        <td>{{ TeamScore[0].rank }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      TeamScore: [
        { name: "TBD", score: "TBD", rank: "TBD" }
      ],
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
    }
  }
}
</script>