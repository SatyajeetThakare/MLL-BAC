export class RateMasterController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService, $filter, $state) {
    'ngInject';
    //this.$http = $http;
    this.$filter = $filter;
    this.$state = $state;
    this._api = apiService;
    //this.toaster = toaster;
    this.getAllFuelRates();
  }

  init() {

  }

  getAllFuelRates() {
    this._api.get(`getrates/all`).then((res) => {
      this.fuelRates = res.data;

      var newOutputData =
        _.each(this.fuelRates,
          (key, value) => {
            var FUELDATE = this.fuelRates[value].FUELDATE;
            FUELDATE = this.$filter('date')(new Date(this.fuelRates[value].FUELDATE), 'dd-MMM-yyyy');
            this.fuelRates[value].FUELDATE = FUELDATE;
          });

      this.fuelRates = newOutputData;

    }, (err) => {
      this.toaster.error(`${err.status} : ${err.statusText}`);
    });
  }

  addFuelRate() {

    var fuelRateSaveURL = 'fuelrate/INSERT';

    var revisedRates = _.chain(this.fuelRates)
      .map((rate) => {

        rate.FUELRATES_ID = (rate.CURRATE > 0 ? 0 : rate.FUELRATES_ID);
        rate.FUELCITY = rate.LOCATIONNAME;
        rate.RATE = rate.CURRATE;
        rate.FUELDATE = this.$filter('date')(new Date(), 'yyyy-MM-dd');
        rate.ACTIVE = "A";
        rate.CREATEDBY = 1;
        rate.CREATEDON = this.$filter('date')(new Date(), 'yyyy-MM-dd');
        rate.MODE = "INSERT";

        return rate;

      }).value();



    var newRate = {
      fuelrate: revisedRates
    };

    this._api.post(fuelRateSaveURL, newRate)
      .then((res) => {
          this.getAllFuelRates();
        },


        (err) => {
          console.error(err);
        });
  }

  viewHistData(table) {

    //console.log(table.FUELCITY);
    this.$state.go('ratequery', {cityid :table.FUELCITY});
  }

}
