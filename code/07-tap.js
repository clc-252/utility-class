/**
 * 注册轻击操作的函数
 * @param { Element } element 绑定tap事件的元素
 * @param { Function } callback 事件处理程序
 * @param { Number } spanTime 轻击操作的时限
 * @param { Number } distance 轻击操作的距离
 * @returns { undefined }
 */

function tap(element, callback, spanTime, distance) {
  // 短路运算，如果没有设定值就按250、50运算
  spanTime = spanTime || 250;
  distance = distance || 50;
  // 定义变量记录触摸开始和结束的时间
  let startTime, endTime;
  // 定义变量记录触摸开始和结束时的点的位置
  let startX, startY, endX, endY;

  //注册触摸开始事件
  element.addEventListener('touchstart', function (e) {
    // 先判断是不是单指操作
    if (e.touches.length !== 1) {
      console.log('不是单指操作');
    }

    // 记录下当前的时间
    startTime = Date.now();
    // console.log(startTime);获取到的是当前时间的毫秒数

    // 记录当前的位置
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    // console.log(startX, startY);
  })

  // 注册触摸结束事件
  element.addEventListener('touchend', function (e) {
    // 同样先判断是不是单指操作
    if (e.changedTouches.length !== 1) {
      console.log('不是单指操作');
      return;
    }

    // 记录当前的时间
    endTime = Date.now();
    // 相减得到触摸开始到结束经历了多少时间，判断
    if (endTime - startTime > spanTime) {
      console.log('点击的时间太长了');
      return;
      // 不加return的话，长时间点击的时候也会触发轻击事件
    }
    // 记录结束时候点的位置
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    // 相减得到触摸开始到结束时候位置移动了多少，我们只需要得到位移差，忽略方向
    if (Math.abs(endX - startX) > distance || Math.abs(endY - startY) > distance) {
      console.log('滑动的距离太远了');
      return;
    }
    // 如果以上条件都不成立的话，那就是实现了轻击操作
    // else {
    //   console.log('轻击');
    // }
    callback();
  })
}