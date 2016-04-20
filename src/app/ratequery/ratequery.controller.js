export class RateQueryController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService) {
    'ngInject';
    //this.$http = $http;
    this._api = apiService;
    //this.toaster = toaster;
     this.getAllFuelRates();
     this.getAllCity();
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

/* this.city_option = _.map([LOCATIONNAME], (i) => ({
      name: i,
      val: i
    }));*/

  }
     getAllFuelRates(){
       this._api.get('getrates/all').then((res) => {
        this.fuelRates = res.data;
        console.log(this.fuelRates);
      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
    }

    getAllCity(){
     this._api.get('location/0').then((res) => {
        this.city = res.data;
       console.log(this.city);
      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
   }
}
