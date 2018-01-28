# 大家来找茬腾讯版

自动用红色区块，标记所有不同之处

## 准备

- Node.js 9.x 以上
- 安装依赖 `npm i`

## 使用

执行 `npm run ca` 生成 RootCA，将生成的证书安装到手机上，并在手机上设置代理 IP（电脑的局域网 IP） 和 端口（8001）

证书配置遇到困难可以看[这里](http://anyproxy.io/cn/#%E8%AF%81%E4%B9%A6%E9%85%8D%E7%BD%AE)

一切都配置好之后，**完全退出游戏进程**，执行 `npm start`，再重新进入游戏

## 截图

<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/8413791/35481371-571a8a86-045d-11e8-8130-f235049dfcb1.png" alt="截图1">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/8413791/35481552-db9222d0-0460-11e8-8ef4-70e270d2fafd.png" alt="截图2">
    </td>
  </tr>
</table>

## 原理

通过代理方式，拦截游戏 .dat 请求的加密图片，通过辅助解密之后标记红色，再重新加密返回给游戏客户端。
