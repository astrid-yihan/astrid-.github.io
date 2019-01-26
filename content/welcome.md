---
title: Zhihu Badge System
image: /images/badge-system.png
imageMeta:
  attribution:
  attributionLink:
featured: true
author: ghost
date: Tue Jun 12 2018 18:59:59 GMT+0100 (IST)
---

### 背景

• 知乎上的用户分层区别较大，不能使用单一常规的维度作为用户荣誉性的体现.

• 对于普通用户来说并没有能够证明存在感的体现.[Ghost](https://ghost.org/pricing/)

### 项目指标

• 通过成就化的展现，让更广泛的用户能够有属于自己的荣誉体现.

• 通过对徽章的追求，刺激用户完成社区的各种功能操作，为社区产出贡献.

• 提升整体社区行为次数 5%.

• 提升用户粘性.

### 我的角色

• 2018 年 1 月至 7 月为 Android 和 iOS 设计了从体验到视觉完整的知乎徽章系统.

• 与工程师协作，将我的设计转化为真实的视觉与交互的体验

### 收集信息

我从身边的同事开始收集信息.

身边有不同部门、不同职责的同事，他们可以给我更多元的见解，对于徽章系统的期望.同时也可以让我从这些建议中提取我做徽章系统的目标，这是开始一个设计之前必不可少的一步.

![shouji](/images/shouji.png)

### 北极星

根据同事与用户的反馈，我也给自己在做设计时定了对应的目标.

![beijixing](/images/beijixing.png)

### 开始设计
我习惯直接用高保真的形式开始设计，这样能够让我更加清晰的看到功能，也可以更方便的在设计过程中与别人讨论.

### 交互方案概述

• 进入徽章界面会有徽章介绍的弹窗，并且给出用户当前所获得的徽章，「点击领取」可领取，如果用户没有点击领取，则需要进入徽章详情页进行领取.

• 总共设定 15 个徽章，其中有 3 个是特殊徽章，有一定的门槛才能得到，除了特殊徽章，其余的徽章有 6 个级别.

• 在徽章详情页有设置为主徽章功能，也有主徽章介绍.

• 徽章有四种状态，普通可升级徽章、稀有徽章、未领取徽章、未获得徽章，在列表页会有相应的展示.

• 只有升级徽章详情页会有进度显示.

![UX](/images/UX.png)

### 视觉设计

第一版设计使用了比较理性的样式，类似于游戏里的徽章，有金属质感.

设计理念是基于知乎是一个理工科比较多的已分享专业知识为根本的网站，所以制作了一个比较刚硬的徽章样式. 

![illustration](/images/illustration.png)

### 获得反馈

小流量上线后，获得了了一些数据的分析和我们在使用中遇到的问题的反馈.

![research](/images/research.png)

### 基于反馈的迭代

###### 交互部分

• 在徽章列表页增加可领取、未获得、待升级的提示.

• 加大详情弹窗中等级徽章的点击区域.

• 增加外显功能.

• 优化弹窗的领取按钮

###### 视觉部分

• 使用知乎品牌的吉祥物，确保品牌的统一性.

• 根据徽章不同的展示位置同时设计了简化的版本，确保缩小到一定程度后依旧可以看出徽章的不同。

• 颜色使用了与知乎品牌色明度、纯度接近的颜色，确保每个徽章的统一性。

• 按照翅膀的数量以及越高等级颜色、样式越复杂体现徽章的级别感。

每个徽章制定了 6 个级别，在颜色、复杂程度上进行等级的区分，同一种徽章的等级区分是一个非常难做的事情，中间遇到了很多的挫折，改了很多个版本，最终确定了下面的版本.

### 最终设计

我设计了整个徽章在站内外显的规范，以及设置徽章外显的布局与体验.不断改进徽章的视觉风格并制定了规范.

![finaly](/images/finaly.png)

![liucheng](/images/liucheng.png)

![badge](/images/badge.png)

### 数据结果

![shuju](/images/shuju.png)

### 项目体验

在这个项目中，对我来说是一个挑战，因为要同时进行视觉与交互的工作，中间遇到了很多苦恼的时刻，但是通过各种方法的尝试，同事们的及时反馈，我得到了一个不错的结果. 现在，这个项目已经上线了，我们还在分析数据，准备着一次又一次的进步，迭代产品，我相信没有任何一个项目是上线了就结束了的，永远都有可以替换、迭代的空间，为了让产品做得更好，我还在很努力的学习.
我学到的是:

😁在交互成型时应该更好的加入策略

🎉永远不要忘记自己为项目制订的目标,有一个明确的目标可以大大提高我们设计时的工作效率!
hshs

```sh
# if you don't have ember-cli installed already
npm install -g ember-cli

ember new super-blog
cd super-blog

ember install ember-ghost ember-ghost-casper-template
```

It will ask you if you want to update the `index.html` file and you should say yes 👍

If you want to see the blog system running on your local machine just run `npm start` and you will
be able to navigate to  [http://localhost:4200](http://localhost:4200) to see the blog in action.

---

The main thing you'll want to read about next is probably: [editing files with Ember Ghost](/the-editor/).

Once you're done reading, you can simply delete the default **Ghost** user from your team to remove all of these introductory posts!
