from Util import time_it
from ImgTools import recognize
import os
from PIL import Image


def get_screenshot():
    os.system('adb exec-out screencap -p > screenshot.png')
    scr = Image.open('screenshot.png')
    scr = scr.crop([0, 700, 1080, 1200])
    return scr


@time_it
def Play():
    flag = ""
    while True:
        scr = get_screenshot()
        expr = recognize(scr)
        print(expr, eval(expr))
        if flag == expr:
            continue
        else:
            flag = expr
            if eval(expr):
                os.system("adb shell input tap 300 1500")
            else:
                os.system("adb shell input tap 800 1500")


if __name__ == '__main__':
    Play()
