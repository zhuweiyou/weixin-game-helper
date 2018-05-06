from PIL import Image
from TimeIt import time_it
import numpy as np
import json


def binarize(img, threshold=200):
    """二值化"""
    img = img.convert('L')
    table = []
    for i in range(256):
        if i > threshold:
            table.append(0)
        else:
            table.append(1)
    bin_img = img.point(table, '1')
    return bin_img


@time_it
def vertical_cut(img):
    """纵向切割"""
    _, height = img.size
    px = list(np.sum(np.array(img) == 0, axis=0))
    # 列表保存像素累加值大于0的列
    x0 = []
    for x in range(len(px)):
        if px[x] > 1:
            x0.append(x)

    # 找出边界
    cut_list = [x0[0]]
    for i in range(1, len(x0)):
        if abs(x0[i] - x0[i - 1]) > 1:
            cut_list.extend([x0[i - 1], x0[i]])
    cut_list.append(x0[-1])

    cut_imgs = []
    # 切割顺利的话应该是整对
    if len(cut_list) % 2 == 0:
        for i in range(len(cut_list) // 2):
            cut_img = img.crop([cut_list[i * 2], 0, cut_list[i * 2 + 1], height])
            cut_imgs.append(cut_img)
        return cut_imgs
    else:
        print('Vertical cut failed.')
        return


@time_it
def horizontal_cut(img):
    """横向切割"""
    width, _ = img.size
    px = list(np.sum(np.array(img) == 0, axis=1))
    # 列表保存像素累加值大于0的行
    y0 = []
    for y in range(len(px)):
        if px[y] > 1:
            y0.append(y)

    # 找出边界
    cut_list = [y0[0]]
    for i in range(1, len(y0)):
        if abs(y0[i] - y0[i - 1]) > 1:
            cut_list.extend([y0[i - 1], y0[i]])
    cut_list.append(y0[-1])

    # 切割顺利的话应该是长度为4的list
    if len(cut_list) == 4:
        cut_img1 = img.crop([0, cut_list[0], width, cut_list[1]])
        cut_img2 = img.crop([0, cut_list[2], width, cut_list[3]])
        return [cut_img1, cut_img2]
    else:
        print('Horizontal cut failed.')
        return


def hashing(img):
    """计算哈希值"""
    img = img.resize((20, 30), Image.LANCZOS).convert("L")
    px = np.array(img).flatten()
    hash_val = (px > px.mean()).astype(int)
    hash_val = ''.join(str(e) for e in hash_val)
    return hash_val


def hamming(hash1, hash2):
    """计算汉明距离"""
    if len(hash1) != len(hash2):
        print('hash1: ', hash1)
        print('hash2: ', hash2)
        raise ValueError("Undefined for sequences of unequal length")

    return sum(i != j for i, j in zip(hash1, hash2))


@time_it
def recognize(img):
    """输入：经过裁剪的含有等式的区域图像"""
    img = img.convert('L')
    img = binarize(img)

    h_cut_imgs = horizontal_cut(img)
    chars1 = vertical_cut(h_cut_imgs[0])
    chars2 = vertical_cut(h_cut_imgs[1])

    with open('HashFiles/hash.json', 'r') as fp:
        hash_vals = json.load(fp)

    # 相近度列表
    nearness1 = {}
    expr = ''
    for char in chars1:
        hash_val = hashing(char)
        for h in hash_vals:
            nearness1[h] = hamming(hash_val, hash_vals[h])
        expr += sorted(nearness1.items(), key=lambda d: d[1])[0][0]

    nearness2 = {}
    for char in chars2:
        hash_val = hashing(char)
        for h in hash_vals:
            nearness2[h] = hamming(hash_val, hash_vals[h])
        expr += sorted(nearness2.items(), key=lambda d: d[1])[0][0]

    expr = expr.replace('subtract', '-').replace('plus', '+').replace('equal', '==')

    return expr


if __name__ == '__main__':
    """
    以下代码只用于debug
    """
    scr = Image.open('Screenshots/0th.png')
    scr = scr.crop([0, 750, 1080, 1150])
    print(recognize(scr))
