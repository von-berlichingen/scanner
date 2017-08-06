angular
  .module('scriptApp')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http']

function HomeCtrl($http) {
  var vm = this;

  vm.result = 'click to see me';

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
  ];

  vm.submitScan = function(scan) {
    vm.result = 'loading';
    getData(scan).then(function (data) {
      vm.result = 'done';
      console.log(data);
    })
  };

  function getData(scan) {
    return $http.post('/', scan)
      .then(function(res) {
        return res.data;
      })
      .then(function(data) {
        return data;
      });
  }
}
