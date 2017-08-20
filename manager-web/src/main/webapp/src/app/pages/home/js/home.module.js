(function () {
    'use strict';

    function routeConfig($stateProvider) {
        $stateProvider
            .state('root.home', {
                url: '/home',
                templateUrl: 'app/pages/home/home.html',
                title: '主页',
                controller: 'HomeControl',
                sidebarMeta: {
                    icon: 'fa fa-tachometer',
                    order: 0
                }
            });
    }

    angular.module('BlurAdmin.pages.login', [])
        .config(routeConfig);
})();