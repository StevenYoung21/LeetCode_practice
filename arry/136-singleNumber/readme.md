# 136-只出现一次的数
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4

## 解法1 暴力双循环
    - 设定一个非常大的数 MAX
    - 如果发现数组中有相等的两个元素，将其都设置为MAX
    - 再查找数组中不等于MAX的元素，即为答案

## 解法2 异或
    - 0 异或 N = N；
    - N 异或 N = 1；