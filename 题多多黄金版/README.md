# 题多多黄金版

智能答题辅助，没有爬题库，目前只是百度搜索 + 提示

接口加密解密方法已破解 [src/crypto.js](src/crypto.js)，有兴趣可自行抓包好友对战爬

## 准备

- Node.js 9.x 以上
- 安装依赖 `npm i`

## 使用

执行 `npm run ca` 生成 RootCA，将生成的证书安装到手机上，并在手机上设置代理 IP（电脑的局域网 IP） 和 端口（8001）

证书配置遇到困难可以看[这里](http://anyproxy.io/cn/#%E8%AF%81%E4%B9%A6%E9%85%8D%E7%BD%AE)

一切都配置好之后，**完全退出游戏进程**，执行 `npm run robot`，再重新进入游戏

## 截图

<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/8413791/37136419-8fcbdda6-22dc-11e8-8462-655cbf295d34.png" alt="">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/8413791/37136424-984b3a44-22dc-11e8-8be4-c92116b5a5f5.png" alt="">
    </td>
  </tr>
</table>
