# 我最在行

爬取题库、答题辅助

## 准备

- Node.js 9.x 以上
- MongoDB
- 安装依赖 `npm i`

## 功能

**抓请求之前，请完全删除小程序，重新搜索小程序名字进入。因为你之前登录过，后续抓不到登录请求了**

### 爬取题库 

> 爬题思路：不断进行好友对战获取题目，随意提交答案会返回正确答案，存入数据库，重复的忽略

分别使用两个微信号登录游戏，抓登录的请求 `https://puzzle-gateway.zaih.com/pauthp/jwt`

复制返回的 `access_token` 和 `account_id`，填入 [src/crawl.js](src/crawl.js) 中

执行 `npm run crawl` 开始自动爬取

如果出现带 `leave` 单词的提示，说明上一局是异常退出的。只要关掉脚本，重新再运行就好了。

爬题需要一定的时间，也可以直接导入[我爬好的题库 MongoShell BSON(.json)](questions.json) 数据库名为 `wzzh`

导入命令，注意你的文件路径

```bash
mongoimport -d tnwz -c quizzes --file ~/Downloads/questions.json --jsonArray --drop
```

### 答题辅助 

用你要答题的号登录游戏，抓登录的请求 `https://puzzle-gateway.zaih.com/pauthp/jwt`

复制返回的 `access_token` 和 `account_id`，填入 [src/robot.js](src/robot.js) 中

执行 `npm run robot` 开始智能答题，答题过程是全自动的

遇到题库里没有的题，程序会随机选一个答案提交，并将正确答案入库（所以尽量全的题库，才能保证胜率）

你只需要关注终端打印的信息即可，如果有报错，请提 issue 反馈我们
