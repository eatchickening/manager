/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
      'ui.router',
      'BlurAdmin.pages.login',
      'BlurAdmin.pages.home',
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
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
          userObj: function($rootScope, $state) {
            if ($rootScope.user) {
              return;
            }
            if (!$rootScope.user) {
              $state.go('login');
              return;
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/login');

  }

  // angular.module('BlurAdmin.pages')
  //   .constant('_', window._);

})();