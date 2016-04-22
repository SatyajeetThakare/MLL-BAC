export class RateQueryController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService, $stateParams, $filter, $state) {
    'ngInject';
    this._api = apiService;
    this.$stateParams = $stateParams;
    this.$filter = $filter;
    this.$state = $state;

    this.getAllCity();

    this.FUELTODATE = new Date();
    var fuelFromDate = new Date();
    fuelFromDate.setDate(fuelFromDate.getDate() - 180);
    this.FUELFROMDATE = fuelFromDate;

    this.getAllFuelRates(this.$stateParams.cityid);
  }

  init() {

  }

  getAllCity() {
    this._api.get('location/0').then((res) => {
      this.city = res.data;

      var getid = this.$stateParams.cityid;
      var cityid = parseInt(getid);
      this.selectedOption = _.find(this.city, ['LOCATIONID', cityid]);
    }, (err) => {
      this.toaster.error(`${err.status} : ${err.statusText}`);
    });
  }

  getAllFuelRates(cityid) {

    var fromdt = this.$filter('date')(new Date(this.FUELFROMDATE), 'yyyy-MM-dd');
    var todt = this.$filter('date')(new Date(this.FUELTODATE), 'yyyy-MM-dd');
    var urlnew = `getratequery/${cityid}/${fromdt}/${todt}`;

    this._api.get(`getratequery/${cityid}/${fromdt}/${todt}`).then((res) => {
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


  search() {
    this.getAllFuelRates(this.selectedOption.LOCATIONNAME);
  }

  viewRateMaster(){
     this.$state.go('ratemaster');
  }


}
