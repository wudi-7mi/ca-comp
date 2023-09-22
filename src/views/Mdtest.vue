<template>
  <markdown-it :content="markdownText" />
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
export default {
  components: {
    'markdown-it': MarkdownItVue,
  },
  data () {
    return {
      markdownText: '',     // 用于存储从文件中读取的 Markdown 文本
      // options: {
      //   markdownIt: {
      //     linkify: true
      //   },
      // }
    }
  },
  mounted() {
    fetch('src/views/text.md')
      .then((response) => response.text())
      .then((data) => {
        console.log(data)
        this.markdownText = data;
      });
  },
}
</script>