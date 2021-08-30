### 组件化的一个 search-addToList、list-input-check-delete、checkAll-clearChecked 的小demo
## 1. 配置webpack
## 2. 功能完成思维
      1). 拆分组件
      2). 静态组件
      3).动态组件
        a. 初始化动态显示
        b. 交互
## 3. 设计数据
      1). 类型：[{id:1, title:"xxx", complete:false}]
      2). 名称：todos/todoArr/todoList
      3). 在哪个组件？看哪个组件还是那些组件使用
## 4. demo文件结构(一下文件全在src内,用于webpack打包)
      components
        --Header.vue
        --List.vue
        --Item.vue
        --Footer.vue
      index.css
      index.js
      index.html
## 5. 核心：传入propertry 和 接收property和方法
     1).在路口文件index.js  使用render渲染函数
     2).在总组件(App.vue)导入其它组件,局部注册组件；使用<xxx/>渲染页面，传入data和方法；
     3).在各拆分组件设置接收data和方法(使用props，
            props接收的值相当于一个小vm的属性和方法,
            可以用this.xxx,
            一旦在props接收property,则直接在template中使用传过来的属性值)；
      4). 若想要从爷组件==>子组件(传递property) 则需逐层传递(也要记得接收property) 爷组件==>父组件==>子组件
## 6. 数据模板的来源
      1).data：自身可变数据
      2).props: 从外部接收的可变数据
      3).computed: 根据已有的data或props数据进行计算产生的数据