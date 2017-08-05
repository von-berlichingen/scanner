angular
  .module('scriptApp')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http']

function HomeCtrl($http) {
  var vm = this;

  vm.result = 'click to see me';

  vm.user = {
    firstName: 'Anissss',
    lastName: 'Ben Amara'
  }

  vm.scan = {
    serviceName: '',
    servicePodHost: '',
    scanType: 'all',
    port: ''
  };

  vm.types = [
    { name: 'sslabs', value: 'Check SSL'},
    { name: 'sslvuln', value: 'a2sv'},
    { name: 'ws', value: 'Scan websocket'},
    { name: 'nikto', value: 'Check server'},
    { name: 'all', value: 'Scan All'}
  ]

  function getData(user) {
    return $http.post('/home', user).then(function(res) {
      return res.data;
    }).then(function(data) {
      return data;
    })
  }
  vm.submitScan = function(user) {
    console.log(user);
    vm.result = 'loading';
    getData(user).then(function (data) {
      vm.result = 'done';
    })
  };
}
