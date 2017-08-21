(function () {
    'use strict';

    angular.module('chicken.pages.login')
        .controller('LoginCtrl', function ($rootScope, $scope, $state, toastr, LoginService) {
            $scope.login = function () {
                if(!$scope.user || !$scope.user.username){
                    toastr.error("请输入账号!");
                    return;
                }
                LoginService.login($scope.user.username, $scope.user.password).then(function(data){
                    if (data && data.status === 200) {
                        if(data.data.code == 0){
                            $rootScope.user = {
                                username: $scope.user.username,
                                password: $scope.user.password
                            };
                            $state.go('root.home');
                        }else{
                            toastr.error(data.data.msg);
                        }
                    }
                }).catch(function(err) {
                    toastr.error(err);
                });
            };
        });
})();