<template>
  <main>
    <div class="bg-body-tertiary p-5 rounded mt-3">
      
      <p class="content-title" id="target">赛题设置</p>

      <p class="lead"><strong>【注意】参赛请填写该在线表格：<a href="http://docs.qq.com/sheet/DWFRaQWhJWERRSlBk?tab=BB08J2">群体智能算法大赛参赛队伍统计</a></strong></p>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li :class="item.status" v-for="(item, index) in breadcrumbItems" :key="index">
            <a v-if="item.file" href="#target" @click="renderFile(item.file, item.num)">{{ item.label }}</a>
          </li>
        </ol>
      </nav>

      <!-- <p class="content-subtitle">赛题一：社交媒体舆论场虚假账号检测</p>
      <p class="lead">为了推动社交媒体平台网络空间的健康发展，本竞赛以社交媒体平台的虚假账号检测为出发点，进一步挖掘网络事件中的观点片段，分析理解群体用户的情感倾向与会话关系，最终实现群体会话场景下的高质量会话内容生成，以主/被动结合的方式，提高社交媒体平台的信息质量。本次大赛共设计五大赛题，各个赛题相辅相成，探索群体智能在社交媒体空间的前沿应用，赋能社交媒体用户分析与挖掘、舆论引导等典型应用场景。</p>
      <a class="btn btn-lg btn-primary" href="https://pan.baidu.com/s/1I0vcfRmNBl4Nj71E9TJGPQ?pwd=cogi" role="button">赛题一数据 下载入口 &raquo;</a>

      <p class="content-subtitle">赛题二：社交媒体舆论场事件观点挖掘</p>
      <p class="lead">社交媒体中持续发生多样的热点事件与舆论事件，是用户参与度与讨论度最高的内容，人们通过表达、分享和传播对事件的观点，来交流自己的观念和经验。了解对事件不同角度的观点有助于了解事件全貌，从而即时判断事件态势，做出有效决策。本赛题要求参赛者根据给定的事件信息与相关新闻文档，从文档中提取出所有与事件相关的观点片段（短语片段或句子片段），当且仅当观点片段的左右边界都正确识别时，认为正确识别该观点片段。</p>
      <a class="btn btn-lg btn-primary" href="#" role="button">赛题二数据 下载入口 &raquo;</a>

      <p class="content-subtitle">赛题三：群体用户情感分析与挖掘</p>
      <p class="lead">情感是人们表达立场观点的重要途经，社交媒体平台群体会话交互过程中蕴含丰富的情感信息。通过精准识别群体用户情感倾向，及时发现用户情感波动，是理解用户立场观点，推动会话过程持续进行的关键，对舆情有效监控与疏导</p>
      <a class="btn btn-lg btn-primary" href="#" role="button">赛题三数据 下载入口 &raquo;</a>

      <p class="content-subtitle">赛题四：群体会话响应目标建模</p>
      <p class="lead">群体会话场景中，不同用户根据自身的立场观点针对不同用户的发言进行选择性回复，响应目标的选择决定了群体会话过程种话题与观点的走向，通过选择合适的响应目标，可以实现对整体对话流程的把控，保证群体会话演进方向不偏离既定目标。本赛题需要参赛者在群体会话场景中进行会话响应目标预测，提供的对话数据包含多轮对话过程，需要综合考虑对话上下文，预测每轮对话内容所针对的响应目标。</p>
      <a class="btn btn-lg btn-primary" href="#" role="button">赛题四数据 下载入口 &raquo;</a>
      
      <p class="content-subtitle">赛题五：目标驱动的群体决策会话内容生成</p>
      <p class="lead">以辩论场景为出发点，对话双方分为持有差异或相反观点的两方，通过轮流对话交互过程，说服对方接受己方观点。参赛者需要组织群体会话机器人扮演辩论赛中一方的角色，通过群体决策实现多个机器人之间的协同配合，首先预测不同角色机器人的发言时机，然后根据机器人角色生成贴合对话上下文以及说服目标的流畅对话内容，最终实现改变对方观点的目标。</p>
      <a class="btn btn-lg btn-primary" href="#" role="button">赛题五数据 下载入口 &raquo;</a> -->

      <div v-html="renderedMarkdown"></div>
      <a class="btn btn-lg btn-primary" :href="datasetLink[active]" role="button">{{ datasetText[active] }}</a>
    </div>
  </main>
</template>

<script>
import MarkdownIt from 'markdown-it';
import MarkdownItKatex from 'markdown-it-katex';
import { attrs } from '@mdit/plugin-attrs'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'

hljs.registerLanguage('json', json)

import t01 from '../assets/markdowns/task1_description.md?raw'
import t02 from '../assets/markdowns/task2_description.md?raw'
import t03 from '../assets/markdowns/task3_description.md?raw'
import t04 from '../assets/markdowns/task4_description.md?raw'
import t05 from '../assets/markdowns/task5_description.md?raw'

export default {
  data() {
    return {
      breadcrumbItems: [
        { label: '赛题1', file: t01, status: { 'breadcrumb-item': true }, num: 1 },
        { label: '赛题2', file: t02, status: { 'breadcrumb-item': true }, num: 2 },
        { label: '赛题3', file: t03, status: { 'breadcrumb-item': true }, num: 3 },
        { label: '赛题4', file: t04, status: { 'breadcrumb-item': true }, num: 4 },
        { label: '赛题5', file: t05, status: { 'breadcrumb-item': true }, num: 5 },
      ],
      markdownText: '',
      renderedMarkdown: '',
      active: 0,
      datasetLink: [
        "#",
        "#",
        "#",
        "#",
        "#",
      ],
      datasetText: [
        "赛题1数据下载入口",
        "赛题2数据下载入口",
        "赛题3数据下载入口",
        "赛题4数据下载入口",
        "赛题5数据下载入口",
      ],
    };
  },
  mounted() {
    this.renderFile(t01, 1);
    this.classSet()
  },
  methods: {
    renderMarkdown() {
      const md = new MarkdownIt({
        html: true,
        linkifyL: true,
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
            return hljs.highlight(str, { language: lang }).value;
            }  catch (__) {}
          }
          return '';
        }
      }).use(MarkdownItKatex).use(attrs, {});
      this.renderedMarkdown = md.render(this.markdownText);
    },
    renderFile(file, num) {
      this.markdownText = file;
      this.renderMarkdown();
      this.active = num - 1
    },
    classSet() {
      const tableElements = document.getElementsByTagName("table");

      for (let i = 0; i < tableElements.length; i++) {
        tableElements[i].classList.add("table");
        tableElements[i].classList.add("table-striped");
        tableElements[i].classList.add("center");
        tableElements[i].classList.add("table-bordered");
        tableElements[i].classList.add("text-center");
        tableElements[i].classList.add("align-middle");
      }

      const preElements = document.getElementsByTagName("pre")
      console.log(preElements)
      for (let i = 0; i < preElements.length; i++) {
        preElements[i].classList.add("bg-body-secondary");
        preElements[i].classList.add("rounded");
        preElements[i].classList.add("p-4");

      }
    },
  },
  updated() {
    this.classSet();
  }
};
</script>

<style>
  .katex-html {
    display: none;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
  }

  pre {
    margin-top: 20px;
  }
</style>