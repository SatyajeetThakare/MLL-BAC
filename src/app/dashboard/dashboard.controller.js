export class DashboardController {
  constructor($http, apiService, masterService, toaster) {
    'ngInject';
    this.$http = $http;
    this._api = apiService;
    this._master = masterService;
    this.toaster = toaster;
  }

  init() {

  }

}
