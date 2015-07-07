/**
* listApp Module
*
* Description
*/

angular.module('listApp', [])
.controller('ListAndOneDetailCtrl', function($scope){
    $scope.users = [
        {name:'马春娣',email:'macd@lzx.com.cn',desc:'我们比比谁先到家',img:'images/5.jpg'},
        {name:'邹俊',email:'zenj@lzx.com.cn',desc:'300斤有我！',img:'images/3.jpg'},
        {name:'曾贱',email:'zoujian@lzx.com.cn',desc:'我胸大,我说了算！',img:'images/1.jpg'}
    ];
    $scope.selected = function(user) {
        $scope.selectedUser = user;
    }
    $scope.isSelected = function(user) {
        return $scope.selectedUser === user;
    }
})

