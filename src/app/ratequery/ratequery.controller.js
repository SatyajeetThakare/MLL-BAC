export class RateQueryController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService) {
    'ngInject';
    this._api = apiService;
    this.getAllFuelRates();
    this.getAllCity();
  }

  init() {

  }

  getAllFuelRates() {
    this._api.get('getrates/all').then((res) => {
      this.fuelRates = res.data;
      console.log(this.fuelRates);
    }, (err) => {
      this.toaster.error(`${err.status} : ${err.statusText}`);
    });
  }

  getAllCity() {
    this._api.get('location/0').then((res) => {
      this.city = res.data;
      console.log(this.city);
    }, (err) => {
      this.toaster.error(`${err.status} : ${err.statusText}`);
    });
  }
}
