```
               _      _                                        _          _
 __      _____(_)_  _(_)_ __      __ _  __ _ _ __ ___   ___   | |__   ___| |_ __   ___ _ __
 \ \ /\ / / _ \ \ \/ / | '_ \    / _` |/ _` | '_ ` _ \ / _ \  | '_ \ / _ \ | '_ \ / _ \ '__|
  \ V  V /  __/ |>  <| | | | |  | (_| | (_| | | | | | |  __/  | | | |  __/ | |_) |  __/ |
   \_/\_/ \___|_/_/\_\_|_| |_|   \__, |\__,_|_| |_| |_|\___|  |_| |_|\___|_| .__/ \___|_|
                                 |___/                                     |_|
```

微信小游戏辅助合集

> 本项目仅供学习交流之用，不定时增加新的游戏辅助

## 帮助

<details>
<summary>如何抓取微信小程序 HTTPS 请求？</summary>

### mac

推荐使用 Charles

- 菜单 -> Proxy -> SSL Proxying Settings... -> 勾选Enable SSL Proxying -> 点击Add  -> 填入 * 抓所有域名

![image](https://user-images.githubusercontent.com/8413791/34810238-03f72f70-f6d5-11e7-99b2-32871f6a4b46.png)

-  菜单 -> Help -> SSL Proxying 

![image](https://user-images.githubusercontent.com/8413791/34810057-1e342902-f6d4-11e7-9619-fa51675bba08.png)

![image](https://user-images.githubusercontent.com/8413791/34810106-578105a4-f6d4-11e7-80a8-a95be83bb0ea.png)

确保手机和电脑处于同一个局域网下，并在手机上设置代理 IP 和 端口（你电脑的局域网 IP 和抓包工具设置的端口，通常为 `8080` 或者 `8888` 也可以自己设置）

手机访问 `chls.pro/ssl` 地址，下载和安装抓包工具的 CA 证书。

部分 iOS 系统需要在：设置 -> 通用 -> 关于本机 -> 证书信任设置 -> 启用完全信任Charles证书

### win

推荐使用 Fiddler

- 菜单 -> Tools -> Fiddler Options... -> Decrypt HTTPS traffic

- 点击右上角的Actions => 点击Export Root Certificate to Desktop

- 导入证书并安装 

手机连接到电脑上，从电脑上打开手机的内存卡，直接把证书导入SD卡中。点击设置 -> 安全 -> 从 SD 卡安装 -> 从内部存储空间中找到证书，点击安装即可（不能直接点击安装，会出现无法安装证书，因为无法读取证书文件。）

---

暂时没有 win 的图，有的欢迎截图补充，大概的操作方式都一样

有问题可以提 issue
</details>

<details>
<summary>如何安装 AnyProxy 证书？</summary>

###

先根据具体的辅助文档说明，执行相关的命令生成 RootCA

将生成的证书安装到手机上，有困难参考[AnyProxy 文档](http://anyproxy.io/cn/#%E8%AF%81%E4%B9%A6%E9%85%8D%E7%BD%AE)

最后在手机上设置代理 IP（电脑的局域网 IP） 和 端口（默认 8001）
</details>