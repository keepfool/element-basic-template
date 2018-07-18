# element-basic-template

> 基于vue, vue-router, vuex, axios, mockjs和element ui构建

## 构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 主要依赖

- vue
- vue-router
- vuex
- axios
- less
- mockjs
- normalize.css
- element-ui

## 目录说明

```bash
.
├── App.vue       根实例
├── api           HTTP API
├── components    组件
├── config        配置
├── main.js       入口js
├── mock          mock请求
├── router        路由配置
├── store         全局状态管理
├── styles        全局样式
├── utils         工具
└── views         页面视图
```

## classPrefix

classPrefix用于定义统一的样式前缀，需要在两个地方设定classPrefix

`src/main.js`

```js
Vue.prototype.classPrefix = 'kf'
```

`src/styles/theme.less`

```less
@classPrefix: kf;
```

## 主题色定制

`src/styles/theme.less`

```less
@primaryColor: #ff6600;
```

`src/styles/element-variables.scss`

```scss
$--color-primary: #ff6600;
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import '~element-ui/packages/theme-chalk/src/index';
```

主题色定制可参考[在项目中改变 SCSS 变量](http://element-cn.eleme.io/#/zh-CN/component/custom-theme#zai-xiang-mu-zhong-gai-bian-scss-bian-liang)

## 规范

### 组件

- 组件放在components目录下
- 组件的根节点至少包含一个class，并且以`${classPrefix}-c-`作为前缀
- 全局样式变量定义在`src/styles/theme.less`文件中，不需要显式地引入

### 视图

- 视图放在`views`目录下
- 视图的根节点至少包含一个class，并且以`${classPrefix}-v-`作为前缀
- 全局样式变量定义在`src/styles/theme.less`文件中，不需要显式地引入