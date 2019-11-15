/* 效果：
    1. 自动轮播
    2. 点击左右按钮轮播
    3. 序号轮播
      把鼠标移到序号上，会切换图片
      步骤
        3.1.获取元素
        3.2.注册鼠标移入事件
        3.3.修改ul的位置
            3.3.1 计算出ul的位置
            3.3.2 设置ul的left属性
        4.修改圆点的样式
    4. 鼠标悬停就停止轮播，鼠标移开就自动恢复

    今天做的这个是一个左右移动的轮播图
      - 如何实现图片的左右移动
        - 在pc端的轮播图里面，一般使用定位来实现位置的移动

      - 轮播图就是每隔一段时间，就修改元素的left属性
 */

//  获取元素
let list = document.querySelectorAll('.list > i');
let ul = document.querySelector('#imglist');
let leftBtn = document.querySelector('.arrow-left');
let rightBtn = document.querySelector('.arrow-right');


// 获取元素的实际宽度 - 先用，后天在讲解
// let imgWidth = document.querySelector('#imglist img').offsetWidth;
// console.log(imgWidth); // 如果是网络问题导致图片的宽度获取不准确，可以使用window.onload 来处理
// 还可以使用一个和图片一样大小的元素来代替
let imgWidth = document.querySelector('.inner').offsetWidth;
// console.log(imgWidth);

// 注册鼠标的移入事件
// 实现序号轮播
list.forEach(function (e, i) {
  e.onmouseover = function () {
    // console.log('有鼠标移入');
    // 移入的时候，设置ul的left，就可以换一张图片
    // left=图片的宽度*索引号
    // 但是因为图片是往反方向走的，所以left=图片的宽度*索引号*-1

    let target = imgWidth * i * -1;
    // 设置ul的left值
    ul.style.left = target + 'px';
    // 设置当前图片的小圆点高亮 - 排他思想
    // 先把所有的小圆点的current全部去掉，再重新设置当前图片的小圆点
    list.forEach(function (circle) {
      circle.classList.remove('current');
    });
    // 设置当前图片的小圆点高亮
    this.classList.add('current');
  }
});


// 实现左右按钮的点击轮播
// 注册右边按钮的点击事件
let currentIndex = 0;
rightBtn.onclick = function () {
  // 但图片到最后一张的时候，再点击就要回到第一张
  if (currentIndex === ul.children.length - 1) {
    currentIndex = -1;
  }
  // 点击右边的按钮，ul的位置
  // let target=730*索引*-1
  // 没有索引就自己创造一个索引
  currentIndex++;
  let target = imgWidth * currentIndex * -1;
  ul.style.left = target + 'px';

  // 设置小圆点的高亮
  list.forEach(function (circle) {
    circle.classList.remove('current');
  });
  list[currentIndex].classList.add('current');
}

// 左边按钮的点击事件
leftBtn.onclick = function () {
  // 但图片到最后一张的时候，再点击就要回到第一张
  if (currentIndex === 0) {
    currentIndex = ul.children.length;
  }
  // 点击右边的按钮，ul的位置
  // let target=730*索引*-1
  // 没有索引就自己创造一个索引
  currentIndex--;
  let target = imgWidth * currentIndex * -1;
  ul.style.left = target + 'px';

  // 设置小圆点的高亮
  list.forEach(function (circle) {
    circle.classList.remove('current');
  });
  list[currentIndex].classList.add('current');
}

// 实现自动轮播，实际上就是定时调用右边按钮的点击事件
let timer = setInterval(function () {
  rightBtn.onclick();
}, 2000);

//实现当鼠标移入轮播图的时候，停止自动轮播，也就是清除定时器
let inner = document.querySelector('#inner');
inner.onmouseover = function () {
  clearInterval(timer);
}

// 当鼠标移出的时候重新开始自动轮播
inner.onmouseout = function () {
  timer = setInterval(function () {
    rightBtn.onclick();
  }, 2000);
}