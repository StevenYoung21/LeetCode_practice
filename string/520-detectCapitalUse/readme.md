520. 检测大写字母
给定一个单词，你需要判断单词的大写使用是否正确。

我们定义，在以下情况时，单词的大写用法是正确的：

全部字母都是大写，比如"USA"。
单词中所有字母都不是大写，比如"leetcode"。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
否则，我们定义这个单词没有正确使用大写字母。

示例 1:

输入: "USA"
输出: True
示例 2:

输入: "FlaG"
输出: False
注意: 输入是由大写和小写拉丁字母组成的非空单词。

48:0 49:1 50:2 51:3 52:4 53:5 54:6 55:7 56:8 57:9 

65:A 66:B 67:C 68:D 69:E 70:F 71:G 72:H 73:I 74:J 75:K 76:L 77:M 78:N 79:O 80:P 81:Q 82:R 83:S 84:T 85:U 86:V 87:W 88:X 89:Y 90:Z 

97:a 98:b 99:c 100:d 101:e 102:f 103:g 104:h 105:i 106:j 107:k 108:l 109:m 110:n 111:o 112:p 113:q 114:r 115:s 116:t 117:u 118:v 119:w 120:x 121:y 122:z

- 首字母大写
    - 第二个字母大写
        - 后面字母全大写 合法
    - 第二个字母小写
        - 后面字母全小写 合法
- 首字母小写
    - 后面字母全小写 合法