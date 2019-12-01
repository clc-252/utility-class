  /*
  面向对象的封装 
    - tab栏的特征和行为
    - 特征
      -
    - 行为
      - 注册事件
      - 切换分类的样式
      - 切换内容
*/
class Tab {
  // 属性
  // 所以使用一个对象把这些属性存起来，因为对象里面的是无序的键值对，在传参的时候就可以不用按顺序传
  constructor(options) {
    // 这样使用之后如果不传参的话，options也不是一个对象，会报错，所以需要给options设置默认值
    options = options || {};
    // 使用短路运算，就可以不用传参，使用一个默认的参数值
    this.eventType = options.eventType || 'mouseover';
    this.itemsClass = options.itemsClass || '.item';
    this.itemsActiveClass = options.itemsActiveClass || 'active';
    this.contentClass = options.contentClass || '.content';
    this.contentShowClass = options.contentShowClass || 'show';

    // 获取元素
    this.items = document.querySelectorAll(this.itemsClass);
    this.contents = document.querySelectorAll(this.contentClass);

    // new之后就有效果
    this.addEvent();
  }
  // 方法封装
  // 1.注册事件
  addEvent() {
    // 注册事件
    this.items.forEach((e, i) => {
      e.addEventListener(this.eventType, e => {
        // console.log(e.target);//这个就是我们鼠标移进去的那个item
        let target = e.target;
        // 切换分类
        this.changeItems(target);
        // 切换内容
        this.changeContent(i);
      })
    })
  }

  // 2.切换分类
  changeItems(target) {
    // 先统一修改所有分类
    this.items.forEach(e => {
      e.classList.remove(this.itemsActiveClass);
    })
    // 再把当前的这一个单独修改
    target.classList.add(this.itemsActiveClass);
  }

  // 3.切换内容
  changeContent(i) {
    // 先把所有的内容隐藏
    this.contents.forEach(e => {
      e.classList.remove(this.contentShowClass);
    })
    // 再把把鼠标移入的那个分类对应的内容显示
    this.contents[i].classList.add(this.contentShowClass);
    // 这个索引i是从注册事件那里传过来的
  }
}
let tab = new Tab();
// 想要new了之后有效果，需要调用addEvent方法
// tab.addEvent();