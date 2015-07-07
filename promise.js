var promise = new Promise(function(resolve,reject){
    // 做一些异步操作的事情，然后......

    if( /*一切正常*/) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke!"));
    }
});


promise.then(function(result){
    console.log(result); //"完美！"
},function(err){
    console.log(err);  //Error: "出问题了"
})


function get(url) {
    // 返回一个新的 Promise
    return new Promise(function(resolve,reject){
        // 经典 XHR 操作
        var req = new XMLHttpRequest();
        req.open('get',url);
        req.onload = function(){
            //  当发生404 等状况时候调用此函数
            //  所以先检查状态码
            if(req.status == 200) {
                // 以响应文本为结果，完成此 promise
                resolve(req.response);
            } else {
                //  否则就以此状态码为结果否定掉此次 promise
                //  提供一个有益的 Error 对象
                reject(Error(req.statusText));
            }
        };
        // 网络异常的处理方法
        req.onerror = function(){
            reject(Error("Network Error!")
        }
        req.send();
    });
}



get('strory.json').then(function(response){
    console.log("success",response);
},function(error){
    console.log("Failed!",error)
});


get('strory.json').then(function(response){
    return JSON.parse(response);
}).then(function(response){
    console.log("Yey JSON!",response);
});


get('story.json').then(JSON.parse).then(function(response){
    console.log("Yey JSON!",response);

});
var promise = new Promise(function(resolve,reject){
    resolve(1);
});

promise.then(function(val){
    console.log(val); //1
    return val + 2;
}).then(function(val){
    console.log(val); //3
});




img1.ready().then(function(){
    //  加载完成
}，function(){
    //  记载失败
})


// 以及

Promise.all([img1.ready(),img2.ready()])
.then(function(){
    // 全部完成
},function(){
    //一个或多个加载失败
})



// Promise 的状态：

// fulfilled 成功
// rejected  失败
// pending   等待
// settled   结束




var  promise = new Promise(
    function(resolve,reject){
        // 做一些异步操作的事情，然后`````

        if(/*一切正常*/) {
            resolve("stuff worked!");
        } else {
            reject(Error("It broke!"));
        }
    });



// Promise 的 构造器接受一个函数作为参数，它
// 会传递给这个回调函数两个变量 reslove,
// reject。 在回调函数中做一些异步操作，
// 成功之后调用 resolve  否则调用 reject。



promise.then(function(result){
    console.log(result); // 完美
}，function(err){
    console.log(err);// Error: "出问题了"
})
// “then”接受两个参数，成功的时候调用一个，
// 失败的时候调用另一个，两个都是可选的，
// 所以你可以只处理成功的情况或者失败的情况。


// 显示一个加载指示图标
// 加载一篇小说的 JSON，包含小说名和每一章内容的 URL。
// 在页面中填上小说名
// 加载所有章节正文
// 在页面中添加章节正文
// 停止加载指示



function get(url) {
    return new Promise(
        function(resolve,reject){
            var req = new XMLHttpRequest();

            req.open('GET',url);

            req.onload = function(){
                if(req.status == 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function(){
                reject(Error(" Network Error"));
            }
            req.send();
        });
}


get('story.json').then(function(response){
    console.log("success!",response);
},function(error){
    console.error("Failed",error);
})




var promise = new  Promise(
    function(resolve,reject){
        resolve(1);
    });


promise.then(function(val){
    console.log(val);
    return val+2;
}).then(function(val){
    console.log(val);
})


get('story.json').then(function(response){
    return JSON.parse(response);
}).then(function(response){
    console.log("Yey JSON!",response);
})




// getJSON 会返回一个获取 JSON 并加以解析的 Promise。
function getJSON(url) {
    return get(url).then(JSON.parse);
}





// 你也可以把 “then” 串联起来依次执行异步操作。

// 当你从“then” 的回调函数返回的时候，这里有点小魔法，
// 如果你返回一个值，它就会被传给下一个“then”
// 的回调函数返回的时候，而如果你返回一个“类 Promise” 的
// 对象，则下一个“then”就会等待这个 Promise 明确结束
// （成功/失败）才会执行。



getJSON('story.json').then(function(story){
    return getJSON(story.chapterUrls[0]);
}).then(function(chapter1){
    console.log("Go chapter 1!",chapter1);
})



var storyPromise;



function getChpter(i) {
    storyPromise = storyPromise ||
        getJSON('story.json');

    return storyPromise.then(function(story){
        return getJSON(strory.chapterUrls[i]);
    })
}



getChpter(0).then(function(chapter){
    console.log(chapter);
    return getChpter(1)
}).then(function(chapter){
    console.log(chapter);
});


// 我们一开始并不加载 story.json，直到第一次 getChapter，
// 而以后每次 getChapter 的时候都可以重用已经加载完成的
// story Promise，所以 story.json 只需要请求一次。Promise 好棒！


get('story.json').then(function(response){
    console.log("Success",response);
}).catch(function(error){
    console.log("Failed!",error);
});

// Promise 的否定回调可以由 Promise.reject() 触发，
// 也可以由构造器回调中抛出的错误触发：


var jsonPromise = new Promise(
    function(reslove,reject){
        reslove(JSON.parse("This ain't JSON"));
    });

jsonPromise.then(function(data){
    console.log("It worked",data);
}).catch(function(err){
    console.log("It failed!",err);
});


get('/').then(JSON.parse).then(function() {
  // This never happens, '/' is an HTML page, not JSON
  // so JSON.parse throws
  console.log("It worked!", data);
}).catch(function(err) {
  // Instead, this happens:
  console.log("It failed!", err);
});


// angularjs promise


var promise = callThatRunsInBackground();

promise.then(function(answer){
    // dosth
}, function(error){
    // report sth;
}, function(progress){
    // report progress
});




angular.module('atTheMoviesApp',[])
    .controller('getMoviesCtrl',function($log,$scope,movieService){
        $scope.getMovieListing = function(movie) {
            var promise = movieService.getMovie('avengers');
            promise.then(function(payload){
                $scope.listingData = payload.data;
            },function(errorPayload){
                $log.error('failure loading movie',errorPayload);
            });
        };
    })
    .factory('movieService', function($http){
        return {
            getMovie : function(id) {
                return $http.get('/api/v1/movies/'+id);
            }
        };
    })




app.factory('itemService', ['$http','$q' function($http,$q){
    return {
        query : function(){
            var deferred = $q.defer(); // 声明承诺
            $http({method:'GET',url:'/item/list'})
                .success(function(data){
                    deferred.resolve(data); // 请求成功
                })
                .error(function(data){
                    deferred.reject(data);// 请求失败
                });

            return deferred.promise; // 返回承诺，这里返回的是 API
        }
    };
}])



angular.module('app')
    .controller('MainCtrl', ['itemService','$scope' function(itemService,$scope){
        // 注入 itemService
        var promise = itemService.query(); //获得承诺接口

        promise.then(function(data){ //成功回调
            $scope.user = data;
        }，function(data){ //错误回调
            console.log("请求失败")
        });
    }])

