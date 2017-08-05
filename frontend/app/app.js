(function functionName() {
  'use strict';
  angular
    .module('scriptApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'homeVm'
        })
        .state('chuck-norris', {
          url: '/chuck-norris',
          templateUrl: 'app/chuck.html',
          controller: function chcuk($http, $scope) {
            $scope.text = 'bla'

            $http({
              method: 'GET',
              url: '/chuck'
            }).then(function(res) {
               return res.data;
            }).then(function(data) {
              $scope.chuck = data
            })
          }
        })
    })
})();
