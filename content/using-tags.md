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

###问题场景
小张是知乎 App 用户，用手机号注册了知乎帐号 A，未绑定微信；在点击朋友分享的热榜小程序时，进行了微信授权，注册了知乎帐号 B；在微信中帐号 B 操作需要「实名制」，提示用户进行绑定手机，用户操作后，出现绑定失败（手机号为 A 帐号的唯一方式）或困惑的体验（将 A 帐号的手机号换绑到了帐号 B）

### 解决思路
将微信小程序生成的帐号 B 的权限降低为 Guest，不产生过多操作。在帐号合并时，废弃帐号 B，将手机和微信绑定关系统一到帐号 A

### 目标
• 统一小程序的登录注册逻辑，形成统一的组件

• 减少用户帐号的分裂

• 小程序的浏览行为可以更好地被跟踪到，用于兴趣推荐

• 统一小程序的登录注册逻辑，形成统一的组件

• 减少用户帐号的分裂

• 每天新增的「未激活」用户下降到 300 以下

### 梳理流程
由于逻辑比较复杂，我画了一下文字样式的流程图，帮助自己更直观的了解整体流程。
![guest](/images/guest.png)

### 设计方案
• 将微信注册的「未激活」用户标记为 WeChat Guest 用户，权限与 Guest 用户一致。
• 当用户进行激活（绑定手机号）时如果这个手机号没有注册过，则直接将 WeChat Guest 用户升级为 User 用户，用户名取微信的用户名，如果微信的用户名非法（全是 emoji 或敏感词），需要让用户填写用户名。
• 如果这个手机号注册过知乎账号，且没有绑定微信，则进行合并操作，将 Unicon ID 从 B 帐号解绑，并绑定到帐号 A，自动登录帐号 A
如果这个手机号注册过，且绑定了微信，则提示换绑定（该手机号已绑定微信号：xxx，是否更换绑定）。确认后，则进行合并操作，效果同上
。取消则不变化，建议用户绑定其他手机号。
• WeChat Guest 帐号在除小程序外的其他平台登录时，需要走注册流程（即强制绑定手机号），注册后 WeChat Guest 用户升级为 User 用户。

### 最终设计
![guest-liucheng](/images/guest-liucheng.png)

### 各种状态
在用户注册、登陆、更换手机号登陆、修改名称时有很多情况发生，所以也需要将各种状态考虑清楚。
![guest-liucheng](/images/guest-liucheng.png)

### 项目体验
通过这个项目，更了解我们多平台运行的方式、也更加了解用户的行为，

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
