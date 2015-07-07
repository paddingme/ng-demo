1. ng-app  指令 Angularjs 应用的 root。

angular.module('myapp',[]); 声明这个模块


angular.module('myapp'); 引用这个模块


AngularJS script tag:

`<script src="bower_components/angular/angular.js">`

这个脚本会下载 Angularjs，并注册一个回调，当 html 下面加载完成之后将会被执行，执行时首先寻找 ngApp 指令。如果找到 ngApp 指令它将会从应用 DOM 的根节点(即ngApp 所在位置)开始引导。


This code downloads the angular.js script which registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, Angular looks for the ngApp directive. If Angular finds the directive, it will bootstrap the application with the root of the application DOM being the element on which the ngApp directive was defined.


There are 3 important things that happen during the app bootstrap:

The injector that will be used for dependency injection is created.

The injector will then create the root scope that will become the context for the model of our application.

Angular will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.






模板  模型   视图


控制器允许我们来增强在模型层和视图层的数据绑定，通过提供我们数据模型的上下文。；


By providing context for our data model, the controller allows us to establish data-binding between the model and the view.




<div class="col-md-2">
    Search : <input type="text" ng-model="query">
</div>

<ul>
    <li ng-repeat="phone in phones| filter:query">
        {{phone.name}}
        <p>{{phone.snippet}}</p>
    </li>
</ul>


这个可以用在 级联的过滤中。

<title>Google Phone Gallery: {{query}}</title>

While using double curlies works fine within the title element, you might have noticed that for a split second they are actually displayed to the user while the page is loading. A better solution would be to use the ngBind or ngBindTemplate directives, which are invisible to the user while the page is loading:

<title ng-bind-template="Google Phone Gallery: {{query}}">Google Phone Gallery</title>



$http


var phonecatApp = angular.module('phonecatApp',[]);
phonecatApp.controller('PhoneListCtrl', function($scope,$http){
    $http.get('phone/phones.json').success(
        function(data){
            $scope.phones = data;
        });
    $scope.orderProp = 'age';
})


$http makes an HTTP GET request to our web server, asking for phones/phones.json

The $http service returns a promise object with a success method. We call this method to handle the asynchronous response and assign the phone data to the scope controlled by this controller, as a model called phones. Notice that Angular detected the json response and parsed it for us!


To use a service in Angular, you simply declare the names of the dependencies you need as arguments to the controller's constructor function, as follows:

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {...}



Angular's dependency injector provides services to your controller when the controller is being constructed. The dependency injector also takes care of creating any transitive dependencies the service may have (services often depend upon other services).



 As a naming convention, Angular's built-in services, Scope methods and a few other Angular APIs have a $ prefix in front of the name.


If you inspect a Scope, you may also notice some properties that begin with $$. These properties are considered private, and should not be accessed or modified.




controller 压缩 js 时需要处理!



<pre>{{phones |json}}  输出json 数据


<ul class="phones">
    <li ng-repeat="phone in phones|filter:query|orderBy:orderProp" class="thumbnail">
        <a href="#/phones/{{phone.id}}" class="thumb">
            <img ng-src="{{phone.imagesUrl}}"/>
        </a>
        <a href="#/phones/{{phone.id}}">{{phone.name}}</a>
        <p>{{phone.snippet}}</p>
    </li>
</ul>


ng-view


layout template 布局模板 所有视图。
This is a template that is common for all views in our application.


partial tempaltes  局部模板  根据路由 插入 layout template


When the application bootstraps, Angular creates an injector that will be used to find and inject all of the services that are required by your app. The injector itself doesn't know anything about what $http or $route services do. In fact, the injector doesn't even know about the existence of these services unless it is configured with proper module definitions.


The injector only carries out the following steps :

load the module definition(s) that you specify in your app
register all Providers defined in these module definitions
when asked to do so, inject a specified function and any necessary dependencies (services) that it lazily instantiates via their Providers.



Providers are objects that provide (create) instances of services and expose configuration APIs that can be used to control the creation and runtime behavior of a service.

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','http',function($scope,$routeParams,$http){
        $http.get('phones/'+.phoneId +'.json').success(
            function(data){
                $scope.phone = data;
            });
}])




filter: 可以过滤 替换 可以写自己的filter定义在 filters.js

这个可以当作是公共的组件。

内建的 filter:
    {{ "lower cap string" | uppercase }}
    {{ {foo: "bar", baz: 23} | json }}
    {{ 1304375948024 | date }}
    {{ 1304375948024 | date:"MM/dd/yyyy @ h:mma" }}


REST and Custom Services（如‘$http’）



Be sure to use jQuery version 2.1 or newer when using Angular 1.3; jQuery 1.x is not officially supported. Be sure to load jQuery before all AngularJS scripts, otherwise AngularJS won't detect jQuery and animations will not work as expected.


## 精通 Angularjs



AngularJS 中的 $scope 对象 是模板的域模型（domian model）,也称为作用域实例，
通过为其属性赋值，可以传递数据给模板渲染。

作用域可以加入域模板相关的数据和提供相关的功能，例如为作用域实例定义方法，以封装 UI 交互逻辑提供模板使用。


从作用上讲，Angularjs 的作用域与 MVVM 模式的视图模型非常相似。



控制器的作用是初始化作用域实例:
1. 提供模型的初始值；
2.增加 UI 相关的行为（函数），以扩展 $scope 对象。




ng-controller 创建作用域$scope


<body ng-app ng-init="name='world'">
    <h1>Hello,{{name}}!</h1>
    <div ng-controller="HelloCtrl">
        Say Hello to: <input type="text" ng-model="name">
        <h2>Hello,{{name}}!</h2>
    </div>
</body>



<body ng-app ng-init="things={name:'world'}">
    <h1>Hello,{{things.name}}</h1>
    <div ng-controller="HelloCtrl">
        Say Hello to: <input type="text" ng-mode="things.name">
        <h2>Hello,{{things.name}}</h2>
    </div>
</body>


$scope.$on('$locationChangeSuccess',function(event,newUrl,oldUrl){
    // 这里对地址的变化做出反应
});



## 与后端通信


jsonp:

$http.jonp('http://angularjs.org/greet.php?callback=JSON_CALLBACK',{
    params: {name:'World'}
}).success(function(data){
    $scope.greeting = data;
});




### 显示与格式化数据


1. 插值指令：{{expression}}  == ng-bind

2. 表达式里的 html 内容：
  - ng-bind-html-unsafe
  - ng-bind-html

3. 条件话显示：
  - ng-show/ng-hide
  - ng-switch-*
        ```
        <div ng-switch on="showSecret">
            <div ng-switch-when="true">Secret</div>
            <div ng-switch-default>Won't show you secret!</div>
        </div>
        ```
  - ng-if
  - ng-include
        ```
        <div ng-include="user.admin && 'edit.admin.html'||'edit.user.html'" ></div>
        ```

4. ng-repeat

    ```
    <li ng-repeat="(key, value) in dataset">
        Property {{$index}} with {{key}} has value {{value}}
    </li>
    ```

    ```
    <table class="table table-bordered" ng-controller="ListAndPmeDetailCtrl">
        <tbody ng-repeat="user in users" ng-click="selectUser(user)" ng-switch on="isSeleted(user)">
            <tr>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
            <tr ng-switch-when="true">
                <td colspan="2">{{user.desc}}</td>
            </tr>
        </tbody>
    </table>

    <script>
    .controller('ListAndPmeDetailCtrl', function($scope,users){
        $scope.users = users;
        $scope.selectUser = function(user) {
            $scope.selectedUser = user;
        }

        $scope.isSeleted = function(user) {
            return $scope.selectedUser === user;
        }
    })
    </script>

    ```
5. 特殊变量：$index,$first,$middle,$last


