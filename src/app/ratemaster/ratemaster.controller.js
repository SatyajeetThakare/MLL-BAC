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
        console.log(this.fuelRates);

      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
  }

  addFuelRate(){

    var fuelRateSaveURL = 'fuelrate/INSERT';

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
