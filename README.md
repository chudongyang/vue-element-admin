# vue-element-admin
通过vue-cli3.0实现vue-element-admin项目简化版，达到加深对vue的理解和认识，熟练使用element-ui组件库的目的。对之前没用过的知识点进行总结，注释多多、方便回看...

### src目录的构成
```
--assets            放置image、css和js等静态文件
--components        放置公用的一些组件
  |--Hamburger      Navbar导航区里面的点击隐藏和显示左侧边栏的图标按钮
--controller        放置页面的控制层相关（主要用来处理获取到的数据）
--layout            放置页面的布局相关
  |--Sidebar        侧边栏
  |--AppMain        内容区
  |--Navbar         头部导航区
--router            页面的路由
--service           页面的请求相关
--store             vuex相关
  |--modules        功能模块
    |--permission.js允许路由的模块(包含用户的state、mutations、actions）
    |--user.js      用户模块（包含用户的state、mutations、actions）
  |--getters.js     store 的计算属性
  |--index.js       store的出口文件
  |--mutations.js   更改state状态的方法
  |--state.js       vuex的状态
--views             放置页面级组件
```

### 路由的配置项
- hidden: true                 设置为true的时候，该路由不会出现在侧边栏，比如401、login等页面
- redirect: 'noredirect'       设置 noredirect 的时候该路由在面包屑导航中不可被点击
- alwaysShow: true             当路由的children参数中声明的路由大于1个时，自动会变成嵌套模式；只有一个时，会将子路由当做根路由显示在侧边栏。如果你不想按照这个规则设定，可以设置alwaysShow为true，这样就会一直显示根路由
- name: 'router-name'          设定路由的名字， 一定要填写，否则使用keep-alive时会出现各种问题
- meta路由元信息的参数
  - roles: ['admin', 'editor'] 设置该路由进入的权限，支持多个权限叠加
  - title: 'title'             设置该路由在侧边栏和面包屑中展示的名字
  - icon: 'svg-name'           设置该路由的图标
  - noCache: true              设置为true，则不会被keep-alive 缓存（默认是false）
  - breadcrumb: false          设置为false，则不会在breadcrumb面包屑中显示

### 学到的知识点
- require.context(directory, useSubdirectories = false, regExp = /^\.\//);
  - 用来创建自己的上下来，便于更细粒度的控制模块的引入
  - 三个参数， 后两个可选。directory路径， useSubdirectories是否检索子目录，默认是true， regExp是匹配文件的正则表达式
  - 更多详情可以查看[英文文档](https://webpack.js.org/guides/dependency-management/#requirecontext)和[中文文档](https://www.webpackjs.com/api/module-methods/#require-context)
- nprogress 适用于应用程序的超薄进度条
  - NProgress.start(); 进度条开始
  - NProgress.done(); 进度条结束
  - 查看更多[nprogress](https://github.com/rstacruz/nprogress/)
- js-cookie 一个简单、轻量的处理cookie的js的API
  - 设置cookie
    ```
      Cookie.set('name', 'value', [options])
    ```
  - 获取cookie
    ```
      Cookie.get('name')
    ```
  - 删除cookie
    ```
      Cookies.remove('name')
    ```



### server.js文件说明
- 采用node的express框架编写后台代码
- 使用jwt(JSON Web Tokens)第三方node插件生成token