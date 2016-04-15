export class LoginController {
  constructor($state, $rootScope, authService, toaster) {
    'ngInject';
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.auth = authService;
    this.toaster = toaster;
    toaster.info('Hi');
  }

  authenticate() {

    this.auth.login(this.username, this.password).then((res) => {

      if (!!res) {
        if (this.$rootScope.returnToState === '') {

        }
        else {
          this.$state.transitionTo('dashboard');
        }
      }
    });
  }

  resetMsg(){
      this.auth.authFailedMsg = '';
  }

  // isLogin() {
  //   return 'loginbody';
  // }
}
