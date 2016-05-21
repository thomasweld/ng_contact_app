function config ($stateProvider, $urlRouterProvider) {

  // If not `state` is matched, go to the home page
  $urlRouterProvider.otherwise('/');

  // Define our app states
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      templateUrl: 'templates/list.tpl.html',
      controller: 'ListController as vm'
    })
    .state('root.single', {
      url: '/single/:itemId',
      templateUrl: 'templates/single.tpl.html',
      controller: 'SingleController as vm'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController as vm'
    })
  ;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
