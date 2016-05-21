
function SinglePeepController ($scope, $http, URL, $stateParams, $state) {

  init();

  function init () {
    $http.get(URL + $stateParams.peepId).then( (res) => {
      $scope.singlePeep = res.data;
    });
  }

  $scope.deletePeep = function (peepId) {
    $http.delete(URL + peepId).then( (res) => {
      $state.go('list');
    });
  }

}

SinglePeepController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { SinglePeepController };
