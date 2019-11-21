// 将数据存到本地
function saveLocalDataArray(key, arr) {
  // 先把数组转换为json格式
  let json = JSON.stringify(arr);
  // 再把符合json格式的数据存到本地
  localStorage.setItem('key', json);
}

// 从本地存储中取数据
function getLocalDataArray(key) {
  // 获取本地存储的数据
  let data = localStorage.getItem('key');
  // 再把json转为对象
  let arr = JSON.parse(data);
}