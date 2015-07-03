
AngularJS:

1. 双向数据绑定—— model 和 view 绑定；
2. 模板——在AngularJS中，模板相当于HTML文件被浏览器解析到DOM中，AngularJS遍历这些DOM，也就是说AuguarJS把模板当做DOM来操作，去生成一些指令来完成对view的数据绑定；
3. MVVM：Model-View-ViewModel；
4. 依赖注入；
5. 指令——可以用来创建自定义的标签，也可以用来装饰元素或者操作DOM属性；



当浏览器启动、开始解析HTML时，DOM元素上的指令属性就会跟其他属性一样被解析，也就是说当一个Angular.js应用启动，Angular编译器就会遍历DOM树来解析HTML，寻找这些指令属性函数，在一个DOM元素上找到一个或多个这样的指令属性函数，它们就会被收集起来、排序，然后按照优先级顺序被执行。


ng-app指令来标明一个AngularJS应用程序，并通过AngularJS完成自动初始化应用和标记应用根作用域，同时载入和指令内容相关的模块，并通过拥有ng-app指令的标签为根节点开始编译其中的DOM。


Q1; ng-app  放在哪儿，index.html 入口？ ng-app="ykt"


单向绑定 view----->model  的绑定

    <body ng-app>
        <p><input type="text" ng-model="name"></p>
        <p>{{name}}</p>
    </body>

ng-bind 是在angular **解析渲染**完毕之后才将数据显示出来。


常用的切换 tab 内容页时 可以使用 ng-click 来实现。

MVVM模式是Model-View-ViewMode模式的简称。由视图(View)、视图模型(ViewModel)、模型(Model)三部分组成，通过这三部分实现 UI逻辑、呈现逻辑和状态控制、数据与业务逻辑的分离。

Model将和ViewModel互动(通过$scope对象)，将监听Model的变化。这些可以通过View来发送和渲染，由HTML来展示你的 代码。View可以通过$routeProvider对象来支配，所以你可以深度的链接和组织你的View和Controller，将他们变成导航 URL。AngualrJS同时提供了无状态的Controller，可以用来初始化和控制$scope对象。


Model用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法。它具有对数据直接访问的权利，例如对数据库的访问，Model不依赖于View和ViewModel，也就是说，模型不关心会被如何显示或是如何被操作，模型也不能包含任何用户使用的与界面相关的逻辑。

ViewModel是一个用来提供特别数据和方法从而维护指定view的对象,。ViewModel是$scope的对象，只存在于AnguarJS的应用中。$scope只是一个简单的js对象，这个对象使用简单的API来侦测和广播状态变化。

Controller负责设置初始状态和参数化$scope方法用以控制行为。需要指出的controller并不保存状态也不和远程服务互动。

View是AngularJS解析后渲染和绑定后生成的HTML。这个部分帮助你创建web应用的架构。$scope拥有一个针对数据的参考，controller定义行为，view处理布局和互动。

ng-controller指令就是用来定义应用程序控制器的，并且同时创建了一个新的作用域关联到相应的DOM元素上。



1. 声明式界面开发
2. 双向数据绑定
3. 使用依赖注入解耦


    /*
        修改scope上的sb对象的name属性
    */
    //方法1：直接修改sb对象. 不会自动触发监听函数
    scope.sb.name = 'Tonny';

    //方法2：使用scope的$apply方法，在数据修改后会自动触发监听函数
    scope.$apply("sb.name = 'Tonny'");

    //方法3：直接修改sb对象，然后调用$apply方法来传播变化。
    scope.sb.name = 'Tonny';
    scope.$apply("");
