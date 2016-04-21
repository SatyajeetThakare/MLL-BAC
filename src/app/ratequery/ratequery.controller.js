export class RateQueryController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService, $stateParams, $filter) {
    'ngInject';
    this._api = apiService;
    this.$stateParams = $stateParams;
    this.$filter = $filter;


    this.getAllCity();

    this.FUELTODATE = new Date();

    var fuelFromDate = new Date();
    fuelFromDate.setDate(fuelFromDate.getDate() - 180);
    this.FUELFROMDATE = fuelFromDate;

    this.getAllFuelRates();
  }

  init() {

  }

  getAllFuelRates() {

    var fromdt =this.$filter('date')(new Date(this.FUELFROMDATE), 'yyyy-MM-dd');
    var todt =this.$filter('date')(new Date(this.FUELTODATE), 'yyyy-MM-dd');

    var urlnew = `getratequery/${this.$stateParams.cityid}/${fromdt}/${todt}`;
    console.log(urlnew);

    this._api.get(`getratequery/${this.$stateParams.cityid}/${fromdt}/${todt}`).then((res) => {
      this.fuelRates = res.data;
    }, (err) => {
      this.toaster.error(`${err.status} : ${err.statusText}`);
    });
  }

  getAllCity() {
    this._api.get('location/0').then((res) => {
      this.city = res.data;
      //console.log(this.city);

      var getid = this.$stateParams.cityid;
      var cityid = parseInt(getid);
      console.log(cityid);
      this.selectedOption = _.find(this.city, ['LOCATIONID', cityid]);
      console.log(this.selectedOption);
    }, (err) => {
      this.toaster.error(`${err.status} : ${err.statusText}`);
    });
  }
}
