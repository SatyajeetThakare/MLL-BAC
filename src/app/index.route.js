export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    /*
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    */
    .state('login', {
      url: '/',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login',
      authenticate: false
    })
   .state('ratemaster', {
      url: '/ratemaster',
      templateUrl: 'app/ratemaster/ratemaster.html',
      controller: 'RateMasterController',
      controllerAs: 'rate',
      authenticate: true
    })
   .state('ratequery', {
      url: '/ratequery',
      templateUrl: 'app/ratequery/ratequery.html',
      controller: 'RateQueryController',
      controllerAs: 'ratequery',
      authenticate: true
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dash',
      authenticate: true
    });

  $urlRouterProvider.otherwise('/');
}
