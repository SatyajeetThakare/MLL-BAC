export class DashboardController {
  //constructor($http, apiService, masterService, toaster) {
  constructor($http, apiService, masterService) {
    'ngInject';
    this.$http = $http;
    this._api = apiService;
    this._master = masterService;
    //this.toaster = toaster;
  }

  init() {

  }

}
