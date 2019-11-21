  /*  
    效果： 
      1.鼠标移入小图
        - 黄色遮罩显示
        - 大图片也显示
      2.鼠标移出小图
        - 黄色遮罩隐藏
        - 大图片也隐藏
      3.鼠标在小图里面移动的时候
        - 黄色遮罩也跟着移动
        - 大图片也跟着移动
  */

  // 实现鼠标的移入移出
  // 获取元素
  let small = document.querySelector('.small');
  let mask = document.querySelector('.mask');
  let big = document.querySelector('.big');

  // 获取元素box，计算出它离body左上角的距离
  let box = document.querySelector('.box');

  // 想要算出大图的当前位置，先获取大盒子里面的大图
  let bigImg = document.querySelector('.big img');

  // 给small盒子注册鼠标移入事件
  small.onmouseover = function () {
    // 当鼠标移入small盒子的时候，黄色遮罩mask和大盒子big显示
    mask.style.display = 'block';
    big.style.display = 'block';
  }

  // 给small盒子注册鼠标移出事件
  small.onmouseout = function () {
    // 当鼠标移出small盒子的时候，黄色遮罩mask和大盒子big隐藏
    mask.style.display = 'none';
    big.style.display = 'none';
  }

  // 实现鼠标在small盒子里面移动的时候黄色遮罩跟着移动
  // 给small盒子注册鼠标移动事件
  small.onmousemove = function (e) {
    // 想让黄色遮罩跟着鼠标的移动而移动
    // 1.获取鼠标的坐标
    let mx = e.pageX;
    let my = e.pageY;
    // 经过画图推算，黄色遮罩的位置 = 鼠标的位置 - box离body左上角的位置的距离 - 黄色遮罩自身宽高的一半
    let x = mx - box.offsetLeft - mask.offsetWidth / 2;
    let y = my - box.offsetTop - mask.offsetHeight / 2;
    // 为了不让黄色遮罩超出small盒子的范围，我们需要给黄色遮罩的坐标限定范围
    // 当x坐标即left的值<0的时候，就会超出small盒子的范围，所以只要限定当left的值永远>=0就可以了，top同理
    // if (x <= 0) {
    //   x = 0;
    // }
    // 三元表达式
    x = x <= 0 ? 0 : x;
    // if (y <= 0) {
    //   y = 0;
    // }
    y = y <= 0 ? 0 : y;
    // 还需要限定left和top的最大值
    // 黄色遮罩最大的移动距离 = small盒子的宽高 - mask自身的宽高
    let maxX = small.offsetWidth - mask.offsetWidth;
    let maxY = small.offsetHeight - mask.offsetHeight;
    //如果超出了最大值的范围，就直接设定为最大值
    // if (x >= maxX) {
    //   x = maxX;
    // }
    x = x >= maxX ? maxX : x;
    // if (y >= maxY) {
    //   y = maxY;
    // }
    y = y >= maxY ? maxY : y;
    // 把位置设置给黄色遮罩
    mask.style.left = x + 'px';
    mask.style.top = y + 'px';


    // 实现大图随着鼠标的移动而移动
    // 通过画图推算(等比例换算)，得到大图的位置 = 遮罩当前的位置*大图最大的移动距离/遮罩最大的移动距离
    // 先要算出大图的位置，要先算出大图的最大移动位置
    // 大图的最大移动位置 = 大图的宽高 - 大盒子的宽高
    let bigImgMaxX = bigImg.offsetWidth - big.offsetWidth;
    let bigImgMaxY = bigImg.offsetHeight - big.offsetHeight;
    // 根据公式计算出大图的位置
    let bigImgX = x * bigImgMaxX / maxX;
    let bigImgY = y * bigImgMaxY / maxY;
    // 给大图设置位置
    // 注意：当遮罩往下走的时候，大图是往上走的，方向是相反的，所以给大图的位置*-1
    bigImg.style.left = -bigImgX + 'px';
    bigImg.style.top = -bigImgY + 'px';
  }