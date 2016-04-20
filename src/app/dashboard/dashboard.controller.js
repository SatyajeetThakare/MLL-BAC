export class DashboardController {
  //constructor($http, apiService, masterService, toaster) {
  constructor($http, apiService) {
    'ngInject';
    this.$http = $http;
    this._api = apiService;
    //this._master = masterService;
    //this.toaster = toaster;
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
            console.log(res.data);
            this.contractsExpired = res.data;
        },
        (err) => {
            console.log(err);
        });
  }

  getDashContractsCloseToExp(){

    this._api.get(`getdashcontractsclosetoexp/1`)
        .then((res) => {
            console.log(res.data);
            this.contractsCloseToExpiry = res.data;
        },
        (err) => {
            console.log(err);
        });
  }

  getDashContractsToBeNego(){

    this._api.get(`getdashcontractstobenego/1`)
        .then((nego) => {
            console.log(nego.data);
            this.contractsToBeNego = nego.data;
        },
        (err) => {
            console.log(err);
        });

  }

  getDashContractsAmmended(){

    this._api.get(`getdashcontractsammended/1`)
        .then((nego) => {
            console.log(nego.data);
            this.contractsAmmended = nego.data;
        },
        (err) => {
            console.log(err);
        });

  }
}

