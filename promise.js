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
