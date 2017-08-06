(function functionName() {
  'use strict';
  angular
    .module('scriptApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'homeVm'
        });
    });
})();
