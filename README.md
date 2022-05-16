<div align="center">
    <h1>论文翻译降重助手(MyTranslator)</h1>
    <div>
        <a href="https://getbootstrap.com">
            <img src="https://raster.shields.io/badge/Bootstrap-4.6.1-red.svg" />
        </a>
        <a href="https://jquery.com/">
            <img src="https://raster.shields.io/badge/jQuery-3.6.0-brightgreen.svg" />
        </a>
                <a href="https://api.fanyi.baidu.com/">
            <img src="https://raster.shields.io/badge/百度翻译API-通用翻译服务-success.svg" />
        </a>
    </div>
    <div>
        <a href="https://github.com/freysu/MyTranslator">
            <img title="GitHub forks" src="https://img.shields.io/github/forks/freysu/MyTranslator.svg?style=social" />
        </a>
        <a href="https://github.com/freysu/MyTranslator">
            <img title="GitHub stars" src="https://img.shields.io/github/stars/freysu/MyTranslator.svg?style=social" />
        </a>
        <a href="https://github.com/freysu/MyTranslator">
            <img title="GitHub watchers"
                src="https://img.shields.io/github/watchers/freysu/MyTranslator.svg?style=social" />
        </a>
    </div>
</div>

---

## 项目介绍

- 项目概况
  **这是一个用于帮助毕业生写论文时提高降重效率的网站**

  由 `Github Pages` 部署的基于`百度翻译 API` 的网站，以提供翻译降重、文本对比等功能

- 项目演示地址：  
   _[https://freysu.github.io/MyTranslator](https://freysu.github.io/MyTranslator)_

- 项目演示动图：  
   ![演示动图](https://s2.loli.net/2022/03/28/ajSshiglPoc6Vw5.gif)


## 快速开始

1. 访问本项目的演示地址  
   [https://freysu.github.io/MyTranslator](https://freysu.github.io/MyTranslator)
1. 注册百度翻译 API
   关于这一步，就不占篇幅细说了，详情可见[论文翻译降重助手使用说明文档](https://freysu.github.io/2022/02/28/论文翻译降重助手使用说明文档)
1. 在论文翻译降重助手中填写百度翻译 API 的 APP ID 和密钥，然后输入要降重的内容点击翻译按钮即可

## 功能列表

- [x] 自定义翻译路线功能
- [x] 保存百度翻译 API 账号功能
- [x] 翻译功能、翻译出错重试功能
- [X] 免申请百度翻译 API 试用三分钟功能
- [x] 复制功能
- [x] 错误报警通知功能
- [x] 通知提示功能
- [x] 统计字符功能
- [X] 预估相似度功能
- [x] 修改布局功能
- [x] 一键提取查重报告标红内容功能
- [x] PC 端和移动端页面布局适配
- [x] 返回顶部功能
- [x] 公告与打赏功能

## 预览截图

- PC 端页面<br/>
  <img  src="https://s2.loli.net/2022/03/28/aks7Sn6HrZdjgeD.png" alt="PC端页面" title="" />
  <img  src="https://s2.loli.net/2022/03/28/Hh7vbUdBWtPNK4f.png" alt="PC端页面1" title="" />
  <img  src="https://s2.loli.net/2022/03/28/8EaB3WrmhnC2zcK.png" alt="PC端页面2" title="" />

- 移动端页面<br/>
  <img style="width: 50%;" src="https://s2.loli.net/2022/03/28/YjkXvFNnW6DGO48.jpg" alt="移动端页面" title="" />
  <img style="width: 50%;" src="https://s2.loli.net/2022/03/28/lHiZdTRLXbSpI3P.jpg" alt="移动端页面1" title="" />
  <img style="width: 50%;" src="https://s2.loli.net/2022/03/28/ZXn5pxyV361UFsg.jpg" alt="移动端页面2" title="" />

## 常见问题 QA：

1. Q：如果出现**配置账号出错**的情况
   A：请先检查**通用翻译服务**的开通情况，如果开通了再检查是否填错**百度翻译 API 的 `key` 和 `appid` **，确认无误后还是出现该情况请休息一会等会再重试，可能百度翻译 API 的服务器出了点小问题。
2. Q：如果出现 **翻译的时候出现很多翻译结果不出来(比如 6 个结果里只出来 1 个或 2 个)** 的情况

   A：**请留意一下自己申请的 api 是哪一个版本。** **标准版可能会发生以上情况。高级版大概率是不会的。**
   _实名认证之后可以免费申请高级版。_

3. Q：如果出现**配置账号正确但不出翻译结果**的情况
   A：请检查是否填写了**服务器地址**。

![Screenshot_20220316162534](https://s2.loli.net/2022/03/20/M6EUflobKXG8TpB.png)
