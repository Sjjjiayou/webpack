const path = require('path');

module.exports = {
  root: true,
  extends: ['@shuyun-ep-team/eslint-config'],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    ecmaVersion: 2018,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  rules: {
    /**
     * 由于react17增加了新的jsx的转换语法，所以如果使用的是大于等于17的版本，且使用了新的jsx转换
     * 如果你正在使用 eslint-plugin-react，其中的 react/jsx-uses-react 和 react/react-in-jsx-scope 规则将不再需要，可以关闭它们或者删除。
     * 官方文档：https://zh-hans.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
