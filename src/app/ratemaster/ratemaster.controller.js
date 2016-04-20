export class RateMasterController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService) {
    'ngInject';
    //this.$http = $http;
    this._api = apiService;
    //this.toaster = toaster;
    this.getAllFuelRates();
  }

  init() {

  }

  getAllFuelRates(){
    this._api.get('getrates/getall').then((res) => {
        this.fuelRates = res.data;
        console.log(this.fuelRates);

      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
  }

  addFuelRate(){

    var fuelRateSaveURL = 'fuelrate/INSERT';

    var newRates = _.each(this.outputdata,
                     (key, value) => {

                     });

    var fuelRateData =
    {
        "fuelrateupdt" :
        {
            "FUELRATES_ID": this.fuelRates[0].FUELRATES_ID,
            "FUELCITY" : this.fuelRates[0].FUELCITY,
            "RATE" : this.fuelRates[0].CURRATE,
            "FUELDATE" : "1800-01-01",
            "ACTIVE" : "A",
            "CREATEDBY" : "1",
            "CREATEDON" : "2016-04-18"
        }
    };

    this._api.post(fuelRateSaveURL, fuelRateData)
        .then((res) => {
          this.getAllFuelRates();
        },

        (err) => {
          console.error(err);
        });
  }

}
