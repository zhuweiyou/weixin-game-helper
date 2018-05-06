from PIL import Image
from pymouse import PyMouse
from ImgTools import recognize
from TimeIt import time_it
from Config import location_on_pc as loc
import os
import time
import sys
import traceback


@time_it
def get_screenshot():
    if sys.platform == 'win32':
        from PIL import ImageGrab
        scr = ImageGrab.grab(
            [loc['left_top_x'], loc['left_top_y'], loc['right_buttom_x'], loc['right_buttom_y']])
        scr.save('screenshot.png')
        return scr
    elif sys.platform == 'linux':
        command = 'import -window root -crop {0}x{1}+{2}+{3} screenshot.png'
        command = command.format(loc['right_buttom_x'] - loc['left_top_x'],
                                 loc['right_buttom_y'] - loc['left_top_y'],
                                 loc['left_top_x'],
                                 loc['left_top_y'])
        os.system(command)
        scr = Image.open('screenshot.png')
        return scr
    else:
        print('Unsupported platform: ', sys.platform)
        os._exit(0)


def Play():
    m = PyMouse()
    flag = ""
    while True:
        # start = time.perf_counter()
        time.sleep(0.1)
        try:
            scr = get_screenshot()
            expr = recognize(scr)
            print(expr, eval(expr))
            if flag == expr:
                continue
            else:
                flag = expr
                if eval(expr):
                    m.click(loc['click_true_x'], loc['click_true_y'], 1)
                else:
                    m.click(loc['click_false_x'], loc['click_false_y'], 1)
        except:
            if 'scr' in vars():
                scr.save('failed.png')
            print('Error occurred: ')
            print(traceback.print_exc())
        # print('One loop: ', time.perf_counter() - a)


if __name__ == '__main__':
    Play()
