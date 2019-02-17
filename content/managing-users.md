---
title: Zhihu Apps - 知乎客服系统
image: /images/team.jpg
imageMeta:
  attribution:
  attributionLink:
featured: true
author: ghost
date: Tue Jun 12 2018 17:55:01 GMT+0100 (IST)
tags:
  - getting-started
---

### 背景
• 知乎 VIP 会员体系将在近期推出，VIP 权益包括了「实时客服」。

• 目前已经实现了 1.0 版本的「实时客服」流程，前台依赖私信服务，后台依赖工单-用户反馈板块。目前存在以下问题：

• 私信服务只支持发送对话消息，不支持发送「系统消息」；

• 实时客服流程目前不支持排队、评价等功能，流程不完整；

• 工单后台对实时客服流程的支持不好，需要管理员频繁拉取工单，使用繁琐，回复时效不高，且容易漏掉消息；

### 目标
• 为知乎 VIP 用户提供实时人工客服体验。

• 未来可拓展到其他高价值用户（高盐值、创作者、PU、优秀回答者等）

• 为 VIP 用户提供跟电商产品体验类似的实时客服服务；

• 为管理员提供高效的客服后台；

• 为管理者提供好用的数据、管理功能，服务于整个用户反馈体系的迭代优化；

### 衡量指标
• 单个管理员日均处理的反馈量相比工单用户反馈提升 15%

• 初期，提供实时客服服务的用户数占到所有反馈用户的 10%用户调研满意度评分大于 4.8

### 设计研究
在项目开始之前，我调查了别的产品的客服系统是怎么做的，我根据自己平时在购物、维权的经验找了 Apple、京东、淘宝、马蜂窝、这些产品。
这其中我认为 Apple 的体验是最好的，它在用户与客服的沟通过程中使用了表单的形式，作为客服系统来说，会让用户有很踏实的感觉，也大大降低了谩骂客服的行为，这个设计会让用户有一种我会为我说过的所有话负责任的感觉。
下面是我真对这几个产品的优劣分析。
*** wiki 上的分析图

### 方案概述
• 在用户在管家列表 / VIP 服务中心 进入 VIP 专属渠道后，系统回复「尊敬的会员你好，请表述你遇到的问题，随后我们会为你分配专属管家」用户提出问题

• 系统提示「正在为您分配专属管家」，分配成功后会提示「管家 XXX 为你服务」，头像会使用客服头像

• 当用户在对话页面等待超过 10s (暂定） 后，提示「当前客服正忙，共有 xx 人排队，我们会尽快回复。」

• 当用户不等待选择退出时再次进入依旧保持排队状态

• 当用户退出对话列表，有回复时客服第一句话直接解决用户问题

• 当客服回复后超过 10min（暂定）用户没有回复时机器小管家提示超时；用户回复之前的对话再次开始排队（二期可以重新链接之前的管家）

• 当对话结束后，管家会给用户提供一个评分模块

### 流程图及页面详细结构

### 项目体验



Ember Ghost does not, and will never have the concept of user roles!

This is because it is entirely a static system. You can assign authors to posts and generate new ones using `ember generate author` but if you need full user permissions (outside of something like Github) and collaboration features I highly recommend that you sign up for a [hosted Ghost instance](https://ghost.org/).


It's a good idea to fill out the metadata on authors, including bio and social links. These will populate rich structured data for posts and generally create more opportunities for themes to fully populate their design.
