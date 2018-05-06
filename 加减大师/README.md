# 微信小游戏《加减大师》辅助



## 游戏介绍
「加减大师」是腾讯推出的一款微信小游戏，玩法极其简单，它给出一个等式，要玩家在指定时间内判断等式的对错，答对40个就算挑战成功，可以赢取娃娃。
游戏界面截图、辅助运行、讨战成功界面如下

<div align="center">
    <img src="./Images/PlusSubstractMaster1.jpg" height="200">
    <img src="./Images/PlusSubstractMaster2.jpg" height="200">
    <img src="./Images/PlusSubstractMaster3.png" height="200"> 
    <img src="./Images/PlusSubstractMaster4.gif" height="200">
    <img src="./Images/Succeed.jpg" height="200">
</div>

该辅助是用 python 语言实现的一个朴素脚本，可通过 ADB 从手机获得游戏界面截图，然后进行字符识别并判断所给等式的对错，实现自动点击。本脚本纯属娱乐，开心就好~

## 效果展示
GFM 不支持嵌入网页视频，我在 Zhihu 里发的一篇分享里有发效果录屏。[点击进入](https://zhuanlan.zhihu.com/p/36387916)

## 使用方法
+ 配置 ADB，Windows 系统需另装 ADB 驱动并将可执行文件加入到环境变量 Path 中。这一步是为了后面连接电脑并投屏。

+ 克隆/下载代码到本地
```
$ git clone https://github.com/clouduan/WechatGameAutoPlayer.git
```

+ 安装所需的包
```
$ sudo pip3 install -r requirements.txt
```
+ ~~将手机调到游戏界面，运行 AutoPlay.py 文件即可~~ ADB 太慢了，直接在手机上操作的话，无法对付最后几题，于是采用投屏大法。

+ 将手机调到第一题界面，用投屏软件将手机画面投到电脑上。这里推荐使用 [Vysor](https://vysor.io/)，目前提供 Windows/MacOSX 客户端和 Chrome 应用，推荐使用 Chrome 应用。好处是跨平台而且方便。

+ 先用相关软件测量包含等式的矩形区域的坐标（左上角的xy值和右下角的xy值），以及 √ 或 × 区域的坐标值，并填入 Config.py 中的相应位置。所用的工具 Windows 上推荐用系统自带画图软件，Linux 可以用 Gimp。矩形区域的选取很重要，可以参考下图标记的区域：

![Projection](./Images/Projection.png)

+ 运行 AutoPlayPC.py 即可。在一加三手机上测试通过。

## 实现原理
+ ~~ADB: 获取手机游戏界面截图，并对截图进行灰度化和二值化处理~~
+ 截图：在电脑上对手机等式区域截图，速度很快，极大减小耗时。
+ 字符识别：字符识别没有采用普遍的机器学习方法，而是采用一种叫感知哈希算法（PHA）的相似图片匹配法。在我的另一项目[CaptchaRecognizer](https://github.com/clouduan/CaptchaRecognizer)中有利用其识别验证码的实现。具体做法简述如下：

    先二值化图像，然后横向分割为两部分，再对每一部分进行纵向分割，得到单个字符（数字和运算符号）。将每个字符图片用一种特定的 hash 函数计算 hash 值，与预先储存的该字符的 hash 值比对（计算汉明距离），汉明距离最小的项所对应的即是该字符的值。
+ 判断：得到所有字符后，将其顺序连接还原为等式，用 `eval()` 函数判断对错。
+ 点击：根据判断结果点击电脑界面的 √ 或 ×，而投屏软件竟然几乎可以和手机实现同步，不可思议...

## Todo
投屏软件的使用一下子解决了全部问题...
- [x] 速度问题，这是个亟待解决的问题。详情参见[Issue-2](https://github.com/clouduan/WechatGameAutoPlayer/issues/2)
- [x] 适配 IOS 系统
- [x] 适配不同屏幕尺寸的手机

## 讨论反馈
使用过程中出现问题，欢迎在 Issues 区提出！ 也可以联系 dyzplus@gmail.com。