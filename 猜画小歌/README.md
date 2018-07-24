# 猜画小歌

## 目录

## game

游戏源码，自行研究

## helper

辅助源码，目前仅支持把每一题变成线

### 准备

- Node.js 9.x 以上
- 安装依赖 `npm i`

### 配置

执行 `npm run ca` 生成 RootCA，将生成的证书安装到手机上，并在手机上设置代理 IP（电脑的局域网 IP） 和 端口（8001）

证书配置遇到困难可以看[这里](http://anyproxy.io/cn/#%E8%AF%81%E4%B9%A6%E9%85%8D%E7%BD%AE)

一切都配置好之后，**完全退出小程序进程**，执行 `npm start`，再重新进入小程序

### 截图

![image](https://user-images.githubusercontent.com/8413791/43114825-76ffffb4-8f33-11e8-87ef-2ae4e9b3e601.png)
