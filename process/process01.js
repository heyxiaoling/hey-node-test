process.on('exit', function() {
  // 设置一个延迟执行
  setTimeout(function() {
    console.log('主事件循环已停止，所以不会执行');
  }, 0);
  console.log('退出前执行');
});