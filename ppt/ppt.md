

Angularjs 初探

1. angularjs 是什么？


    背景/现状
    Angularjs 1.4
    Angularjs 2.0


2. angularjs 能做什么？



    端到端测试/单元测试
    使用场景：XXX


3. angularjs 怎么做的？
    --- 介绍 MVVM
    ---  Service
    ---  directive
    ---  route


4. 怎么写 angularjs?


    1. 写声明化 html : 自定义指令 组件


    有jQuery背景，该如何用AngularJS编程思想？http://blog.jobbole.com/46589/
    以及 [《AngularJS进阶实践》](http://div.io/topic/684?page=1#2453)




单元测试： 测试控制器以及用JS 写的应用中的其他组件，但是不是很容易测试 DOM 操作或者整个应用的运行。

这时候就需要端到端测试。
Unit tests are perfect for testing controllers and other components of our application written in JavaScript, but they can't easily test DOM manipulation or the wiring of our application.



    端到端测试时指：End to End Testing。

    端到端测试类似于系统测试，测试级的“宏大”的端点，涉及整个应用系统环境在一个现实世界使用时的模拟情形的所有测试。例如与数据库对话，用网络通讯，或与外部硬件、应用系统或适当的系统对话。端到端架构测试包含所有访问点的功能测试及性能测试。端到端架构测试实质上是一种"灰盒"测试，一种集合了白盒测试和黑盒测试的优点的测试方法。

　　在 Google 测试世界里，端到端测试是指作用于从用户请求到响应的整个流程和全部服务器集群的测试。


端到端测试根据每个场景写脚本进行测试。

手机搜索输入框，
未搜索前是3个，
搜索S 是1个，
搜索S 是2个。


5. 介绍怎么 Angularjs 如何加载启动！
