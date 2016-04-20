export class RateMasterController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService , $filter) {
    'ngInject';
    //this.$http = $http;
     this.$filter = $filter;
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

    var revisedRates = _.chain(this.fuelRates[0])
                            .map((rate) => {

                              /*
                              "FUELRATES_ID": (this.fuelRates[0].CURRATE > 0 ? 0 : this.fuelRates[0].FUELRATES_ID),
                              "FUELCITY" : this.fuelRates[0].LOCATIONNAME,
                              "RATE" : (this.fuelRates[0].CURRATE > 0 ? this.fuelRates[0].CURRATE : this.fuelRates[0].RATE) ,
                              // "LASTUPDATEDRATE" : this.fuelRates[0].RATE,
                              "FUELDATE" : this.$filter('date')(new Date(), 'yyyy-MM-dd'),
                              "ACTIVE" : "A",
                              "CREATEDBY" : 1,
                              "CREATEDON" :  this.$filter('date')(new Date(), 'yyyy-MM-dd'),
                              "MODE" : "INSERT"*/
                              return rate;
                            });

    /*{
        "fuelrate" :[
        {
            "FUELRATES_ID": (this.fuelRates[0].CURRATE > 0 ? 0 : this.fuelRates[0].FUELRATES_ID),
            "FUELCITY" : this.fuelRates[0].LOCATIONNAME,
            "RATE" : (this.fuelRates[0].CURRATE > 0 ? this.fuelRates[0].CURRATE : this.fuelRates[0].RATE) ,
            // "LASTUPDATEDRATE" : this.fuelRates[0].RATE,
            "FUELDATE" : this.$filter('date')(new Date(), 'yyyy-MM-dd'),
            "ACTIVE" : "A",
            "CREATEDBY" : 1,
            "CREATEDON" :  this.$filter('date')(new Date(), 'yyyy-MM-dd'),
            "MODE" : "INSERT"
        }
        ];
    };*/

    var newRate = {fuelrate : revisedRates};
    console.log(newRate);

    /*this._api.post(fuelRateSaveURL, fuelRateData)
        .then((res) => {

          //console.log(res.data);
          this.getAllFuelRates();
        },


        (err) => {
          console.error(err);
        });*/
  }

}
