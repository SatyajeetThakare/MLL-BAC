export class DashboardController {
  //constructor($http, apiService, masterService, toaster) {
  constructor($http, apiService, $state) {
    'ngInject';
    this.$http = $http;
    this._api = apiService;
    this.$state = $state;
    //this._master = masterService;
    this.getDashContractsExp();
    this.getDashContractsCloseToExp();
    this.getDashContractsToBeNego();
    this.getDashContractsAmmended();
  }

  init() {


  }

getDashContractsExp(){

    this._api.get(`getdashcontractsexp/1`)
        .then((res) => {
            this.contractsExpired = res.data;
        },
        (err) => {
            console.log(err);
        });
  }

  getDashContractsCloseToExp(){

    this._api.get(`getdashcontractsclosetoexp/1`)
        .then((res) => {
            this.contractsCloseToExpiry = res.data;
        },
        (err) => {
            console.log(err);
        });
  }

  getDashContractsToBeNego(){

    this._api.get(`getdashcontractstobenego/1`)
        .then((nego) => {
            this.contractsToBeNego = nego.data;
        },
        (err) => {
            console.log(err);
        });

  }

  getDashContractsAmmended(){

    this._api.get(`getdashcontractsammended/1`)
        .then((nego) => {
            this.contractsAmmended = nego.data;
        },
        (err) => {
            console.log(err);
        });
  }

  navigatetToRateMaster(){

    console.log('This event called');
    this.$state.go('ratemaster');
  }
}
