(function () {
    'use strict';

    angular.module('BlurAdmin.pages.login')
        .controller('LoginCtrl', function ($rootScope, $scope, $state, toastr) {
            $scope.login = function () {
                LoginService.login($scope.user.name, $scope.user.password).then(function(data){
                    if (data && data.code === 0) {
                        $rootScope.user = {
                            username: $scope.user.name,
                            password: $scope.user.password
                        };

                    }
                }).catch(function(err) {
                    toastr.error(err);
                });
            };
        });
})();