---
title: Zhihu 空状态 & 报错状态优化
image: /images/design.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
author: ghost
date: Tue Jun 12 2018 17:49:21 GMT+0100 (IST)
tags:
  - getting-started
---

### 背景
• 空页面 UI 不统一 ——「我的」页和个人 Profile 页是 App 的交通枢纽，是用户找和 TA 相关的东西第一个会想到的入口。站内的各种产品和功能都在此汇合，由此产生了各业务模块的空状态 UI 不统一的问题。
• 空页面出现频率高，应该重视 —— 我们的周纯浏览型用户在 70% 左右，空状态对于他们来说出现频率很高；即使是高活用户，在 TA 的个人页和「我的」页也会有部分模块页面为空。
• 空页面缺乏有效引导 —— 部分空页面可能是用户接触某功能的第一个页面，目前用户的行为在空页面就停止了，没有或少有建议动作，对用户来说欠缺指引。
• 空页面文案可优化 —— 目前空状态的文案生硬，有些甚至有歧义。
• 空页面缺乏情感抚慰。
*** 目前线上方案图片

### 目标
• 统一目前空状态的 UI，统一用户体验，提升品牌感。
• 在必要的时候给用户有效的引导，指引用户下一步的动作。
• 输出空状态设计规范，之后所有涉及到「我的」页和 Profile 页的业务都需要遵循此规范，保证体验统一。

### 设计研究
###### 竞品
• 目前市面上的空状态页面没有参考价值，大多以放大 icon 的形式为主，设计粗糙。
• 部分国外产品会以插画的方式设计空状态样式，插画的形态样式也较多，大致会分成全屏样式、小图样式。
*** 案例图片
###### 知乎用户
• 知乎整体气氛是认真专业的，缺少趣味性,所以在设计上可以提高趣味性，使用户更有动力去实现下一步操作。
• 目前空状态页面没有任何引导性，可以对空状态加以利用，增加其功能性。
• 设计风格可以进行多种尝试。
*** 手绘图片

### 设计图

### 项目体验

Ember Ghost currently only supports 2 themes, the default [Casper template](https://github.com/stonecircle/ember-ghost-casper-template) and the [Attila template](https://github.com/stonecircle/ember-ghost-attila-template). If you want to swap between templates it is as simple as installing a different npm dependency 🎉

The [Ember Ghost documentation](https://github.com/stonecircle/ember-ghost/blob/master/README.md) recommends that you use the default theme called Casper, which is designed to be a clean, readable publication layout and can be easily adapted for most purposes. The ember-ghost-casper-template is a direct fork of Ghost's official Casper repository so it aims to be as close as possible to the original.

If you are interested in writing your own theme for Ember Ghost please [reach out to us](https://stonecircle.io) and we can walk you through the process. Hopefully if there is enough interest we can provide basic instructions on how to build your own theme using this system. As Ghost uses handlebars it is not too difficult to port an existing template to use Ember templates, so if you have any requests please let us know 👍
