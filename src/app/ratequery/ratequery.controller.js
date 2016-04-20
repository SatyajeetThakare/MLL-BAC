export class RateQueryController {
  //constructor ($timeout, webDevTec, toastr) {
  constructor($timeout, apiService) {
    'ngInject';
    //this.$http = $http;
    this._api = apiService;
    //this.toaster = toaster;
  }

  init() {

    var apiData = [
        {
            'city' : 'MUMBAI',
            'lastupdatedrate' : '50.10',
            'lastupdateddate' : '01-Jan-2016',
            'currentrate' : '01-Jan-2016'
        }, {
            'city' : 'MUMBAI',
            'lastupdatedrate' : '50.10',
            'lastupdateddate' : '01-Jan-2016',
            'currentrate' : '01-Jan-2016'
        }, {
            'city' : 'MUMBAI',
            'lastupdatedrate' : '50.10',
            'lastupdateddate' : '01-Jan-2016',
            'currentrate' : '01-Jan-2016'
        }
        ];

        this.apiData = apiData;
        console.log(apiData);
        /*
    this._api.get('getrfplist/getall').then((res) => {
        var bac = res.data;
        bac = _.map(bac, (contract) => {
        //  contract.RFPDATE = new Date(contract.RFPDATE);
        //  contract.DUEDATE = new Date(contract.DUEDATE);
          return contract;

        });
        this.bac = bac;
      }, (err) => {
        this.toaster.error(`${err.status} : ${err.statusText}`);
      });
    */

  }

}
