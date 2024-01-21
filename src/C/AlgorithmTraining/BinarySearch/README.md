---
title: 二分查找
icon: tdesign:tree-square-dot-vertical
# cover: /assets/images/database/database-2.webp
author: 王泽权
date: 2023-09-26
category:
  - C
tag:
  - "C"
  - "算法训练"
sticky: true
star: true
copyright: 王泽权
---

给定一个拥有 n 个不同元素的有序（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

当遇到这样的题目时我们就可以采用二分查找来完成，二分查找又称折半查找，是一种常见的查找算法，它的基本思想是将一个有序的数组按照中间值分成两个部分，然后判断目标值与中间值的大小关系，如果相等，则查找成功，如果目标值比中间值小，则在左半部分继续查找，如果目标值比中间值大，则在右半部分继续查找，直到找到目标值或者查找范围为空为止。

二分查找的具体实现过程如下：

1. 设置查找范围的左右边界 left 和 right，分别指向数组的第一个元素和最后一个元素。

![](./image/b_one.svg)

<center>图 1：左右边界值</center><br>

2. 计算中间位置 mid，mid = (left + right) / 2。

![](./image/b_two.svg)

<center>图 2：计算中间位置</center><br>

3. 判断目标值与中间值的大小关系：
   - 如果目标值等于中间值，则查找成功，返回 mid。

![](./image/b_three.svg)

<center>图 3：目标值等于中间值</center><br>

- 如果目标值比中间值小，则在左半部分继续查找，即 right = mid - 1。

![](./image/b_four.svg)

<center>图 4：目标值比中间值小</center><br>

- 如果目标值比中间值大，则在右半部分继续查找，即 left = mid + 1。

![](./image/b_five.svg)

<center>图 5：目标值比中间值大</center><br>

- 如果查找范围为空，即 left > right，则说明目标值不存在于数组中，查找失败。

![](./image/b_seven.svg)

<center>图 6：查找范围为空</center><br>

[二分查找动态演示](https://codepen.io/zequanr/embed/Yzdarmr)

如 code - 1 所示，一个完整且正常的二分查找并不是很容易可以完成的，这里强调几个要点：

1. 在第 7 行由于 left 和 right 都是 int 类型，因此 left + right 可能会超出 int 类型的取值范围，为了避免大数越界，我们通常采用公式 left + (right - left) / 2 来计算 mid 值。
2. 在第 6 行 while 循环的条件中是 <=，而不是 <，因为初始化 right 的赋值是 len - 1，即最后一个元素的索引，而不是 len，前者相当于两端都闭区间 [ left, right ]，后者相当于左闭右开区间 [ left, right )。

```c
#include <stdio.h>

int binarySearch(int* nums, int target, int len) {
    int left = 0, right = len - 1;

    while(left <= right) {
        int mid = left + (right - left) / 2;

        if(nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    return -1;
}

int main() {
    int sorted[] = { 1, 2, 3, 4, 5, 6, 7, 8 };
    int const length = sizeof(sorted) / sizeof(sorted[0]);

    int const key = 1;
    int const result = binarySearch(sorted, key, length);
    if (result > -1) {
        printf("sorted[%d] = %d, search succeed.\n", result, key);
    } else {
        printf("%d not found, search failed.\n", key);
    }

    return 0;
}
```

<center>code - 1：二分查找</center><br>
