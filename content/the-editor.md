---
title: Redesign Bookmark for Zhihu
image: /images/bookmark.png
imageMeta:
  attribution:
  attributionLink:
featured: true
author: ghost
date: Tue Jun 12 2018 17:58:54 GMT+0100 (IST)
tags:
  - getting-started
---

### Background

1. 知乎上1.收藏夹内容本身已经经过了用户的一轮筛选，其内容的质量和相关性都有一定的保证，具备作为结构化内容在站内流通的基础.

2. 用户收藏流程如下，主要问题为新用户第一次收藏时，必然需要经历新建收藏夹的步骤，对于新用户来说成本太高.

3. 收藏夹目前的主要曝光途径只有 profile 页、我的关注以及热门收藏夹，在站内流通不足。的用户分层区别较大，不能使用单一常规的维度作为用户荣誉性的体现.

### 目标
1. 用最低的成本降低用户收藏内容的门槛.

2. 提升收藏夹在站内的曝光和流通，增加收藏夹内容的互动.

### 衡量指标
绑定话题量 300 ，可用收藏夹数 1000.

### 我的角色
### 收集反馈
### 北极星





### 设计方案
1. 点击收藏后跳转新页面，导致用户操作成本太高，不符合用户预期，所以简化流程，点击收藏后在当前页面直接弹窗展示.

2. 增加默认收藏夹，当用户没有收藏夹时点击收藏出现未生成的收藏夹，点击完成后收藏夹生成，并且与其他收藏夹没有区别，后期可以进行编辑操作.

3. 在话题页增加热门收藏夹的展示，提高收藏夹使用频率.
![bookmark](/images/bookmark.png)

Ember Ghost uses a language called **Markdown** to format text, and so does the original Ghost 🎉

The main difference between the hosted Ghost platform and Ember Ghost is that we just use files on disk, so you can either edit your Markdown files directly or you can use a desktop Markdown editor. It keeps things simple but it can sometimes feel like you are writing on pro-mode 😎

If you want to start a new post we recommend that you use the built in generator `ember generate post "The next big thing - Ember Ghost"`. This will create a file for you and setup the start of the metadata.

For now, though, let's run you through some of the basics of editing Markdown. You can see this post [directly on github](https://github.com/stonecircle/ember-ghost/blob/master/blueprints/ember-ghost/files/content/the-editor.md) if you want to see all the Markdown we've used. (don't forget to click the _Raw_ button to see the source).


## Formatting text

The most common shortcuts are of course, **bold** text, _italic_ text, and [hyperlinks](https://example.com). These generally make up the bulk of any document. You can also make headings using `#` at the start of the line (multiple `#` symbols for h2/h3/h4/etc)

With just a couple of extra characters here and there, you're well on your way to creating a beautifully formatted story.


## Inserting images

Images in Markdown look just the same as links, except they're prefixed with an exclamation mark, like this:

`![Image description](/path/to/image.jpg)`

![Computer](https://casper.ghost.org/v1.0.0/images/computer.jpg)

If you want to add images to your Ember Ghost app you can just drop them in the `/public` folder, which you should see if you are running this locally!

_**Important Note:** Ember Ghost does not currently have automatic image resizing, so it's always a good idea to make sure your images aren't gigantic files **before** adding them to your project._


## Making lists

Lists in HTML are a formatting nightmare, but in Markdown they become an absolute breeze with just a couple of characters and a bit of smart automation. For numbered lists, just write out the numbers. For bullet lists, just use `*` or `-` or `+`. Like this:

1. Crack the eggs over a bowl
2. Whisk them together
3. Make an omelette

or

- Remember to buy milk
- Feed the cat
- Come up with idea for next story


## Adding quotes

When you want to pull out a particularly good excerpt in the middle of a piece, you can use `>` at the beginning of a paragraph to turn it into a Blockquote. You might've seen this formatting before in email clients.

> A well placed quote guides a reader through a story, helping them to understand the most important points being made

All themes handles blockquotes slightly differently. Sometimes they'll look better kept shorter, while other times you can quote fairly hefty amounts of text and get away with it. Generally, the safest option is to use blockquotes sparingly.


## Dividing things up

If you're writing a piece in parts and you just feel like you need to divide a couple of sections distinctly from each other, a horizontal rule might be just what you need. Dropping `---` on a new line will create a sleek divider, anywhere you want it.

---

This should get you going with the vast majority of what you need to do in the editor, but if you're still curious about more advanced tips then check out the [Advanced Markdown Guide](/advanced-markdown/) - or if you'd rather learn about how tags work, we've got a overview of [how to use tags](/using-tags/).
