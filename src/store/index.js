import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
// import permission from './modules/permission';

Vue.use(Vuex);

// 下面的逻辑解决了不用一个个引用modules下面文件的痛点
const modulesFiles = require.context('./modules', false, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 把./permission.js 替换成 permission
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  modules[moduleName] = modulesFiles(modulePath).default;
  return modules;
}, {});

const store = new Vuex.Store({
  getters,
  modules
  // modules: {
  //   permission
  // }
});

export default store;
