export class DashboardController {
  //constructor($http, apiService, masterService, toaster) {
  constructor($http, apiService, $state, $timeout) {
    'ngInject';
    this.$http = $http;
    this._api = apiService;
    this.$state = $state;
    this.$timeout = $timeout;
    //this._master = masterService;
    this.getDashContractsExp();
    this.getDashContractsCloseToExp();
    this.getDashContractsToBeNego();
    this.getDashContractsAmmended();

    document.getElementsByClassName('tbody-div4')[0].addEventListener('scroll', function(e) {
      document.querySelector('.thead-div2 table').style.left = `-${e.target.scrollLeft}px`;
    });
  }

  init() {


  }

  adjustScrollableTable() {

    var $div2HeadAll = document.querySelectorAll('.thead-div2 th');
    var $div4BodyAll = document.querySelectorAll('.tbody-div4 tr');

    //console.log($div4BodyAll.length);
    if ($div4BodyAll.length > 0) {

      let div2HeadWidth = _.map($div2HeadAll, (th) => (th.offsetWidth));
      let div4BodyWidth = _.map($div4BodyAll[0].getElementsByTagName('td'), (td) => (td.offsetWidth));

      let finalWidth = _.chain(div4BodyWidth)
        .map((item, i) => Math.max(item, div2HeadWidth[i]))
        .reject((item) => (_.isNaN(item)))
        .value();

      //Fix width for div2 (right head) & div4 (right body)
      let div2Head = document.querySelectorAll('.thead-div2 th');
      let div4Body = document.querySelectorAll('.tbody-div4 td');

      console.log(finalWidth);
      //-----------------------------
      _.each(finalWidth, (list, key) => {
        div2Head[key].children[0].style.width = finalWidth[key] + 'px';
        div4Body[key].children[0].style.width = finalWidth[key] + 'px';
      });
      //-----------------------------
    }
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
            this.$timeout(this.adjustScrollableTable);
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
    this.$state.go('ratemaster');
  }
}
