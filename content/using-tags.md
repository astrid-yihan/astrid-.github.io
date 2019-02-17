---
title: Zhihu 微信小程序 Guest 帐号方案
image: /images/tags.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
author: ghost
date: Tue Jun 12 2018 17:57:10 GMT+0100 (IST)
tags:
  - getting-started
---

### 背景
• 微信小程序每天新增 4000 左右的「未激活」用户

• 这些「未激活」用户导致了帐号的分裂，和用户的困惑

• 在购买付费内容时，由于 App 和微信帐号不一致，在 App 内看不到购买的内容，导致用户投诉

### 目标
• 统一小程序的登录注册逻辑，形成统一的组件

• 减少用户帐号的分裂

### 数据指标
• 每天新增的「未激活」用户下降到 300 以下
*** wiki 产品流程图

### 遇到的问题
• 会有手机号登陆和微信登录两种情况，我们无法判断～～～

### 最终设计
解决了什么问题
*** 图片

### 最终数据

### 项目体验

Ember Ghost has a single, powerful organisational taxonomy, called tags.

It doesn't matter whether you want to call them categories, tags, boxes, or anything else. You can think of tags a lot like Gmail labels. By tagging posts with one or more keyword, you can organise articles into buckets of related content.


## Basic tagging

When you write a post, you can assign tags to help differentiate between categories of content. For example, you might tag some posts with `News` and other posts with `Cycling`, which would create two distinct categories of content listed on `/tag/news/` and `/tag/cycling/`, respectively.

If you tag a post with both `News` *and* `Cycling` - then it appears in both sections.

Tag archives are like dedicated home-pages for each category of content that you have. They have their own pages and [hopefully soon](https://github.com/stonecircle/ember-ghost/issues/1) will support their own cover images and meta data.


## The primary tag

At the top of every post there is a tiny bit of YAML, and the tags key is an [array](http://yaml.org/spec/1.0/#type-seq) of tags. The first tag in the list is always given the most importance, and some themes will only display the primary tag (the first tag in the list) by default. So you can add the most important tag which you want to show up in your theme, but also add a bunch of related tags which are less important.

```yaml
tags:
  - news
  - cycling
  - bart-stevens
  - extreme-sports
```

In this example, **News** is the primary tag which will be displayed by the theme, but the post will also still receive all the other tags, and show up in their respective archives.
