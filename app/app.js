/**
 * Created by lxl on 2019/3/3.
 */
var app = angular.module("myApp",[]);
app.controller("myCtrl", function ($scope, AppService) {
    //初始化一些数据
    $scope.datas = [];  //下拉框中的数据
    $scope.copyDatas = $scope.datas;   //下拉框中的数值拷贝一份
    $scope.hide = true; //显示隐藏下拉框
    $scope.textValue = "";  //文本框数值

    //将下拉选的数据值赋值给文本框，并且隐藏下拉框
    $scope.change = function (x) {
        $scope.hide = true;  //下拉框隐藏
        $scope.textValue = x;   //文本框中的值

    };
    //获取的数据值与下拉选逐个比较，如果包含则放在临时变量副本，并用临时变量副本替换下拉选原先的数值，如果数据为空或找不到，就用初始下拉选项副本替换
    $scope.changeKeyValue = function (v) {
        var newData = [];  //创建一个临时下拉框副本

        // angular.forEach($scope.datas, function (data, index, array) {
        //     //如果
        //     if (data.indexOf(v)>=0){
        //         newData.unshift(data);
        //     }
        // });
        if (v.indexOf("run") == 0 && v.length <= 4){
           newData = AppService.run_commends()
        }else{
         angular.forEach($scope.datas, function (data, index, array) {
            //如果
             v_tmp = v.slice(4)
            if (data.indexOf(v_tmp)>=0){
                newData.unshift(data);
            }
        });
        }
        $scope.datas = newData; //newData中的数值赋值给$scope.datas
        $scope.hide = false;   //文本框显示

        //如果不包含或者输入框中的值为空时，把拷贝出的$scope.copyDatas赋值给$scope.datas
        if ($scope.datas.length==0||v==""){
            $scope.datas = $scope.copyDatas;
        }
    };

    //输入框中的值必须是下拉选择框中的数值
    $scope.test = function () {
        if($scope.datas.length>1){
            $scope.hide = false;
        }
    };

    $scope.enterEvent = function(e){
        var keycode = window.event?e.keyCode:e.which;
        if (keycode == 13) {
            // $scope.textValue = AppService.test()
            AppService.send_action("run test")
            AppService.send_action("disappear")
        }else if (keycode==9){
            $scope.x.selected = $scope.datas[0]
        }
    }

    console.log($scope.datas.length);
})

