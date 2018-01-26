# 好友画我

查看画的作者还要花钱？本辅助可以免费显示所有作者！

## 准备

- Node.js 9.x 以上
- 安装依赖 `npm i`

## 改自己数据

执行 `npm run ca` 生成 RootCA，将生成的证书安装到手机上，并在手机上设置代理 IP（电脑的局域网 IP） 和 端口（8001）

证书配置遇到困难可以看[这里](http://anyproxy.io/cn/#%E8%AF%81%E4%B9%A6%E9%85%8D%E7%BD%AE)

一切都配置好之后，**完全退出小程序进程**，执行 `npm start`，再重新进入小程序

脚本会调用 API 修改数据，**修改过的数据永久显示**，下次无需运行辅助

## 改好友数据

先抓包看好友数据 `api/getDrawByTarget` 这个接口，将 userid 和响应内容填入 [src/friend.js](src/friend.js)

执行 `npm run friend` 即可

## 截图

<img width="480" src="https://user-images.githubusercontent.com/8413791/35426591-1d26928a-029f-11e8-883e-a0c1e62a9cb6.png" alt="截图">
