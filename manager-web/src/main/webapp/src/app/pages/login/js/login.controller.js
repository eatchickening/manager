(function () {
    'use strict';

    angular.module('BlurAdmin.pages.login')
        .controller('LoginCtrl', function ($rootScope, $scope, $state, toastr, LoginService) {
            console.log("test");
            $scope.login = function () {
                LoginService.login($scope.user.username, $scope.user.password).then(function(data){
                    if (data && data.code === 0) {
                        $rootScope.user = {
                            username: $scope.user.username,
                            password: $scope.user.password
                        };

                    }
                }).catch(function(err) {
                    toastr.error(err);
                });
            };
        });
})();