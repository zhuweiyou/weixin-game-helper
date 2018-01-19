# 头脑王者

爬取题库、答题辅助

## 准备

- Node.js 8.x 以上
- MongoDB
- 安装依赖 `npm i`

## 功能 

### 爬取题库 

> 爬题思路：不断进行好友对战获取题目，随意提交答案会返回正确答案，存入数据库，重复的忽略

分别使用两个微信号登录游戏，抓登录的请求，复制返回的 `uid` 和 `token`

填入 [src/crawl.js](src/crawl.js) 中，执行 `npm run crawl` 开始自动爬取

如果出现 “上局异常退出，请重新登录” 的提示，先退出爬题脚本，用第一个微信号**完全退出游戏进程**，重新进入游戏，再重新爬即可

爬题需要一定的时间，也可以直接导入[我爬好的题库](quizzes.json)

### 答题辅助 

执行 `npm run ca` 生成 RootCA，将生成的证书安装到手机上，并在手机上设置代理 IP（电脑的局域网 IP） 和 端口（8001）

证书配置遇到困难可以看[这里](http://anyproxy.io/cn/#%E8%AF%81%E4%B9%A6%E9%85%8D%E7%BD%AE)

一切都配置好之后，**完全退出游戏进程**，执行 `npm run robot`，再重新进入游戏

答题时，如果该题在题库中，终端会输出正确答案，手机上正确答案前面会显示一个 `√`

如果本题不在题库里，会将本题正确答案记录到题库中

## 截图

<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/8413791/35086936-551678b8-fc69-11e7-8e58-a75ad403ffde.png" alt="王者截图">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/8413791/35084177-a7642b58-fc5d-11e7-9774-10a0b17dc39c.png" alt="辅助截图">
    </td>
  </tr>
</table>

![爬取截图](https://user-images.githubusercontent.com/8413791/35079048-36290192-fc40-11e7-9514-036e786dbe5d.png)

![题库截图](https://user-images.githubusercontent.com/8413791/35079110-7303a0a4-fc40-11e7-9e09-1b67415d8855.png)
