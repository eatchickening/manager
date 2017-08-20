(function () {
    'use strict';

    function routeConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: 'login',
                views: {
                    'whole@': {
                        templateUrl: 'app/pages/login/login.html'
                    }
                },
                title: 'Login'
            });
    }

    angular.modules('BlurAdmin.pages.login', [])
        .config(routeConfig);
})();