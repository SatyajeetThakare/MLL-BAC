export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dash',
      authenticate: true
    })
    .state('login', {
      url: '/',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login',
      authenticate: false
    });

  $urlRouterProvider.otherwise('/');
}
