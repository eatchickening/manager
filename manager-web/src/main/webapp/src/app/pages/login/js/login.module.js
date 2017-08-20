(function () {
    'use strict';

    function routeConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'whole@': {
                        templateUrl: 'app/pages/login/login.html'
                    }
                },
                title: 'Login'
            });
    }

    angular.module('BlurAdmin.pages.login', [])
        .config(routeConfig);
})();