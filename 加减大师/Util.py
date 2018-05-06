from ImgTools import *
from PIL import Image
import os
import time
import json


def get_screenshots():
    for i in range(50):
        os.system('adb exec-out screencap -p > {0}th.png'.format(i))
        time.sleep(1)


def get_chars():
    for img_name in os.listdir('Screenshots'):
        img = Image.open(os.path.join('Screenshots', img_name))
        img = binarize(img.crop([0, 700, 1080, 1200]))
        h_cut_imgs = horizontal_cut(img)
        char_list1 = vertical_cut(h_cut_imgs[0])
        # char_list2 = vertical_cut(h_cut_imgs[1])
        for char in char_list1:
            char.show()
            pic_name = input('name:')
            if pic_name != '':
                char.save('Characters/{0}.png'.format(pic_name))


def get_hashfile():
    hash_vals = {}
    for char in os.listdir('Characters'):
        img = Image.open(os.path.join('Characters', char))
        hash_val = hashing(binarize(img))
        char_name = char[:-4]
        hash_vals[char_name] = hash_val

    with open('HashFiles/hash.json', 'w') as fp:
        json.dump(hash_vals, fp)

    return True


if __name__ == '__main__':
    # get_chars()
    get_hashfile()
