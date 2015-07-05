1. ng-app  指令 Angularjs 应用的 root。

AngularJS script tag:
<script src="bower_components/angular/angular.js">

这个脚本会下载 Angularjs，并注册一个回调，当 html 下面加载完成之后将会被执行，执行时首先寻找 ngApp 指令。如果找到 ngApp 指令它将会从应用 DOM 的根节点(即ngApp 所在位置)开始引导。
    This code downloads the angular.js script which registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, Angular looks for the ngApp directive. If Angular finds the directive, it will bootstrap the application with the root of the application DOM being the element on which the ngApp directive was defined.


There are 3 important things that happen during the app bootstrap:

The injector that will be used for dependency injection is created.

The injector will then create the root scope that will become the context for the model of our application.

Angular will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.



In Angular, the view is a projection of the model through the HTML template.
This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.



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
