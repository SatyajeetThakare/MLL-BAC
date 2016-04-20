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
    this._api.get('getrates/all').then((res) => {
        this.fuelRates = res.data;
          // fuelrate = this.$filter('date')(new Date(this.fuelrate.FUELDATE),
          //console.log(this.fuelRates);
          var newOutputData =
              _.each(this.fuelRates,
                     (key, value) => {
                       var FUELDATE = this.fuelRates[value].FUELDATE;
                       //FUELDATE = this.$filter('date')(this.fuelRates[value].FUELDATE, 'yyyy-MM-dd');
                       FUELDATE = this.$filter('date')(new Date(this.fuelRates[value].FUELDATE), 'dd-MMM-yyyy');
                       this.fuelRates[value].FUELDATE = FUELDATE;

                     });

              this.fuelRates = newOutputData;

      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
  }

  addFuelRate(){

    var fuelRateSaveURL = 'fuelrate/INSERT';

    console.log(this.fuelRates.FUELDATE);

    var revisedRates = _.chain(this.fuelRates)
                     .map((rate) => {

                    /*rate.FUELRATES_ID =  (this.fuelRates[0].CURRATE > 0 ? 0 : this.fuelRates[0].FUELRATES_ID),
                    rate.FUELCITY     =  this.fuelRates[0].LOCATIONNAME,
                    rate.RATE         =  (this.fuelRates[0].CURRATE > 0 ? this.fuelRates[0].CURRATE : this.fuelRates[0].RATE) ,
                    rate.FUELDATE     =  this.$filter('date')(new Date(), 'yyyy-MM-dd'),
                    rate.ACTIVE       =  "A",
                    rate.CREATEDBY    =  1,
                    rate.CREATEDON    =  this.$filter('date')(new Date(), 'yyyy-MM-dd'),
                    rate.MODE         =  "INSERT";*/

                    rate.FUELRATES_ID =  (rate.CURRATE > 0 ? 0 : rate.FUELRATES_ID);
                    rate.FUELCITY     =  rate.LOCATIONNAME;
                    rate.RATE         =  (rate.CURRATE > 0 ? rate.CURRATE : rate.RATE);
                    rate.FUELDATE     =   (rate.CURRATE > rate.RATE ? FUELDATE : this.$filter('date')(new Date(), 'yyyy-MM-dd'));
                    rate.ACTIVE       =  "A";
                    rate.CREATEDBY    =  1;
                    rate.CREATEDON    =  this.$filter('date')(new Date(), 'yyyy-MM-dd');
                    rate.MODE         =  "INSERT";

                    return rate;

                     }).value();



    var newRate = {fuelrate : revisedRates};
    // console.log(newRate);

    this._api.post(fuelRateSaveURL, newRate)
        .then((res) => {
              console.log(res.data);
          this.getAllFuelRates();
        },


        (err) => {
          console.error(err);
        });
  }

}
