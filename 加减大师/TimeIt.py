import time


def time_it(func):
    def wrap(*args, **kwargs):
        time_flag = time.perf_counter()
        result = func(*args)
        print(func.__name__ + ': %.5fs' % (time.perf_counter() - time_flag))
        return result

    return wrap


from io import BytesIO
from ImgTools import *
from pymouse import PyMouse
from PIL import Image
import pyscreenshot as ImageGrab
import subprocess
import os


@time_it
def get_screenshot_adb_1():
    process = subprocess.Popen('adb shell screencap -p', shell=True, stdout=subprocess.PIPE)
    screenshot = process.stdout.read()
    imgFile = BytesIO(screenshot)
    img = Image.open(imgFile)


@time_it
def get_screenshot_adb_2():
    os.system('adb exec-out screencap -p > screenshot.png')
    img = Image.open('screenshot.png')


@time_it
def simulate_click_adb():
    os.system('adb shell input tap 300 1500')


@time_it
def get_screenshot_linux_1():
    '''
    不支持预选定area
    '''
    im = ImageGrab.grab()


@time_it
def get_screenshot_linux_2():
    os.system('import -window root -crop 300x180+100+300 screenshot.png')
    src = Image.open('screenshot.png')
    return src


@time_it
def get_screenshot_linux_3():
    '''
    不支持预选定area
        '''
    os.system('scrot screenshot.png')


@time_it
def get_screenshot_linux_4():
    '''
    不支持预选定area
    '''
    os.system('gnome-screenshot -f screenshot.png')


@time_it
def simulate_click_pc():
    m = PyMouse()
    m.click(150, 650, 1)


@time_it
def get_screenshot_windows():
    from PIL import ImageGrab
    img = ImageGrab.grab([100, 100, 400, 400])


if __name__ == '__main__':
    pass
