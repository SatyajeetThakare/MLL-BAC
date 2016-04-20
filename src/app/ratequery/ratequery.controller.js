export class RateQueryController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService) {
    'ngInject';
    //this.$http = $http;
    this._api = apiService;
    //this.toaster = toaster;
     this.getAllFuelRates();
  }

/*//Test

  getTransactionData(isFlag, fromLoc, vehTypeName)
  {

    this._api.get(`location/0`)
         .then((res) => {
          this.outputdata = res.data;
          var newOutputData =
              _.each(this.outputdata,
                     (key, value) => {
}
}
//Test*/

  init() {
this.CITYNAME_option = this.fuelRates.getLocation();

  }
     getAllFuelRates(){
       this._api.get('getrates/all').then((res) => {
        this.fuelRates = res.data;

        this.CITYNAME_option = this.fuelRates.getLocation();

        console.log(this.fuelRates);

      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
    }
}
