 /*  
    rgb随机颜色
      rgb(0~255,0~255,0~255);
      只需要生成3个0~255之间的随机整数，组合成为rgb格式即可
  */

 /* 生成指定区域内的随机数 */
 function randomInt(n, m) {
   return Math.floor(Math.random() * (m - n + 1) + n);
 }

 // 生成三个0~255之间的随机数
 // var r = randomInt(0, 255);
 // var g = randomInt(0, 255);
 // var b = randomInt(0, 255);
 // var color = 'rgb(' + r + ',' + g + ',' + b + ')';
 // console.log(color);
 // document.body.style.backgroundColor = color;


 // 背景渐变渐变
 function randomColor() {
   var r = randomInt(0, 255);
   var g = randomInt(0, 255);
   var b = randomInt(0, 255);
   var color = 'rgb(' + r + ',' + g + ',' + b + ')';
   return color;
 }

 // 随机生成两个颜色
 var color1 = randomColor();
 var color2 = randomColor();
 console.log(color1, color2);
 // 背景渐变实际上是背景图片，利用CSS中设置渐变的方式设置，但默认高度只有一点点，所以需要设置高度
 document.body.style.backgroundImage = 'linear-gradient(' + color1 + ',' + color2 + ')';