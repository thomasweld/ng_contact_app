
function config ($stateProvider, $urlRouterProvider) {

  // If not `state` is matched, go to the home page
  $urlRouterProvider.otherwise('/');

  // Define our app states
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/peepsTemplate.html',
      controller: 'PeepsController'
    })
    .state('single', {
      url: '/single/:peepId',
      templateUrl: 'templates/singlePeepTemplate.html',
      controller: 'SinglePeepController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/addPeepsTemplate.html',
      controller: 'AddPeepsController'
    })
  ;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
