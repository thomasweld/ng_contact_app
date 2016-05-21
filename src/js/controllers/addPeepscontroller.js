function AddPeepsController ($scope, $http, URL, $state) {


  $scope.addPeep = function (peepObj) {

    $http.post(URL, peepObj).then( (res) => {
      console.log(res);

      // Route the User to the list page
      $state.go('list');
    });

  }


}

AddPeepsController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddPeepsController }
