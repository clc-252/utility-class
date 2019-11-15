/*  
    要生成一个十六进制的颜色
    首先定义一个数组，存放十六进制可能出现的数字：0~9、A、B、C、D、E、F
    再随机取出它们，组成像#fff这样的十六进制颜色
    再定义一个数组，存放随机取出来的数据，但是必须存在#这个字符
  */
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var color = ['#'];
for (i = 0; i < 6; i++) {
  var r = Math.floor(Math.random() * arr.length);
  color.push(arr[r]);
}
console.log(color);
color.join('');
console.log(color.join(''));