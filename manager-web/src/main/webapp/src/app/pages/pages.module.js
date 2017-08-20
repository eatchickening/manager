/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
      'ui.router',
      'BlurAdmin.pages.login',

      'BlurAdmin.pages.dashboard',
      'BlurAdmin.pages.ui',
      'BlurAdmin.pages.components',
      'BlurAdmin.pages.form',
      'BlurAdmin.pages.tables',
      'BlurAdmin.pages.charts',
      'BlurAdmin.pages.maps',
      'BlurAdmin.pages.profile',
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'whole@': {
            templateUrl: 'app/main.html'
          }
        },
        resolve: {
          userObj: function($rootScope) {
            if ($rootScope.user) {
              return;
            }
            if (!rootScope.user) {
              $state.go('login');
              return;
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/dashboard');

  }

})();