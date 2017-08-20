(function () {
    'use strict';

    angular.module('BlurAdmin.pages.home')
        .controller('HomeCtrl', function ($scope) {
            console.log("test");
            $scope.test = "hello world";
        });
})();