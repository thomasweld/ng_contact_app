function PeepsController ($scope, $http, URL) {

  init();

  function init () {

    $http.get(URL).then( (res) => {
      $scope.allPeeps = res.data;
    });

  }

}

PeepsController.$inject = ['$scope', '$http', 'URL'];
export { PeepsController };
