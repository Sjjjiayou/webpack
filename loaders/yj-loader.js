module.exports = function (content, map, meta) {
  console.log('执行loader');
  return this.callback(null, content);
};
