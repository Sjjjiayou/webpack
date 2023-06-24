const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils'); // 用于验证loader传参
const loaderSchema = require('./loader-schema.json');

module.exports = function (content, map, meta) {
  console.log('loader执行');

  // 获取参数
  const options = getOptions(this);
  console.log(options);

  // 参数校验
  validate(loaderSchema, options);

  // 获取异步loader
  const callback = this.async();

  setTimeout(() => {
    callback(null, content);
  }, 3000);
};
