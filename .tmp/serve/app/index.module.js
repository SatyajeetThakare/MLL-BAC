/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global malarkey:false, moment:false */
	
	'use strict';
	
	var _indexConfig = __webpack_require__(1);
	
	var _indexRoute = __webpack_require__(2);
	
	var _indexRun = __webpack_require__(3);
	
	var _mainMainController = __webpack_require__(4);
	
	var _loginLoginController = __webpack_require__(5);
	
	var _dashboardDashboardController = __webpack_require__(6);
	
	var _ratemasterRatemasterController = __webpack_require__(7);
	
	var _ratequeryRatequeryController = __webpack_require__(8);
	
	var _appComponentsAppAppController = __webpack_require__(9);
	
	var _appComponentsGithubContributorGithubContributorService = __webpack_require__(10);
	
	var _appLoginAuthService = __webpack_require__(11);
	
	var _appComponentsApiApiService = __webpack_require__(12);
	
	var _appComponentsWebDevTecWebDevTecService = __webpack_require__(13);
	
	var _appComponentsNavbarNavbarDirective = __webpack_require__(14);
	
	var _appComponentsMalarkeyMalarkeyDirective = __webpack_require__(15);
	
	angular.module('mllBac', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(_indexConfig.config).config(_indexRoute.routerConfig).run(_indexRun.runBlock).service('githubContributor', _appComponentsGithubContributorGithubContributorService.GithubContributorService).service('webDevTec', _appComponentsWebDevTecWebDevTecService.WebDevTecService).controller('MainController', _mainMainController.MainController).controller('LoginController', _loginLoginController.LoginController).controller('DashboardController', _dashboardDashboardController.DashboardController).controller('RateMasterController', _ratemasterRatemasterController.RateMasterController).controller('RateQueryController', _ratequeryRatequeryController.RateQueryController).service('authService', _appLoginAuthService.authService).service('apiService', _appComponentsApiApiService.apiService).directive('acmeNavbar', _appComponentsNavbarNavbarDirective.NavbarDirective).directive('acmeMalarkey', _appComponentsMalarkeyMalarkeyDirective.MalarkeyDirective).controller('AppController', _appComponentsAppAppController.AppController);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;
	
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.routerConfig = routerConfig;
	
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider
	  /*
	  .state('home', {
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  })
	  */
	  .state('login', {
	    url: '/',
	    templateUrl: 'app/login/login.html',
	    controller: 'LoginController',
	    controllerAs: 'login',
	    authenticate: false
	  }).state('ratemaster', {
	    url: '/ratemaster',
	    templateUrl: 'app/ratemaster/ratemaster.html',
	    controller: 'RateMasterController',
	    controllerAs: 'rate',
	    authenticate: true
	  }).state('ratequery', {
	    url: '/ratequery',
	    templateUrl: 'app/ratequery/ratequery.html',
	    controller: 'RateQueryController',
	    controllerAs: 'ratequery',
	    authenticate: true
	  }).state('dashboard', {
	    url: '/dashboard',
	    templateUrl: 'app/dashboard/dashboard.html',
	    controller: 'DashboardController',
	    controllerAs: 'dash',
	    authenticate: true
	  });
	
	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.runBlock = runBlock;
	
	function runBlock($log) {
	  'ngInject';
	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MainController = (function () {
	  //constructor ($timeout, webDevTec, toastr) {
	  MainController.$inject = ["$timeout", "webDevTec"];
	  function MainController($timeout, webDevTec) {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	
	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1460725992163;
	    //this.toastr = toastr;
	
	    this.activate($timeout, webDevTec);
	  }
	
	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;
	
	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();
	
	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      //this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	      this.classAnimation = '';
	    }
	  }]);
	
	  return MainController;
	})();
	
	exports.MainController = MainController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var LoginController = (function () {
	  //constructor($state, $rootScope, authService, toaster) {
	  LoginController.$inject = ["$state", "$rootScope", "authService"];
	  function LoginController($state, $rootScope, authService) {
	    'ngInject';
	
	    _classCallCheck(this, LoginController);
	
	    this.$state = $state;
	    this.$rootScope = $rootScope;
	    this.auth = authService;
	    //this.toaster = toaster;
	    //toaster.info('Hi');
	  }
	
	  _createClass(LoginController, [{
	    key: 'authenticate',
	    value: function authenticate() {
	      var _this = this;
	
	      this.auth.login(this.username, this.password).then(function (res) {
	
	        if (!!res) {
	          if (_this.$rootScope.returnToState === '') {} else {
	            _this.$state.transitionTo('dashboard');
	          }
	        }
	      });
	    }
	  }, {
	    key: 'resetMsg',
	    value: function resetMsg() {
	      this.auth.authFailedMsg = '';
	    }
	
	    // isLogin() {
	    //   return 'loginbody';
	    // }
	  }]);
	
	  return LoginController;
	})();
	
	exports.LoginController = LoginController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var DashboardController = (function () {
	  //constructor($http, apiService, masterService, toaster) {
	  DashboardController.$inject = ["$http", "apiService"];
	  function DashboardController($http, apiService) {
	    'ngInject';
	
	    _classCallCheck(this, DashboardController);
	
	    this.$http = $http;
	    this._api = apiService;
	    //this._master = masterService;
	    //this.toaster = toaster;
	    this.getDashContractsExp();
	    this.getDashContractsCloseToExp();
	  }
	
	  _createClass(DashboardController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'getDashContractsExp',
	    value: function getDashContractsExp() {
	      var _this = this;
	
	      this._api.get('getdashcontractsexp/1').then(function (res) {
	        console.log(res.data);
	        _this.contractsExpired = res.data;
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }, {
	    key: 'getDashContractsCloseToExp',
	    value: function getDashContractsCloseToExp() {
	      var _this2 = this;
	
	      this._api.get('getdashcontractsclosetoexp/1').then(function (res) {
	        console.log(res.data);
	        _this2.contractsCloseToExpiry = res.data;
	      }, function (err) {
	        console.log(err);
	      });
	    }
	  }]);
	
	  return DashboardController;
	})();
	
	exports.DashboardController = DashboardController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var RateMasterController = (function () {
	  //constructor ($timeout, webDevTec, toastr) {
	  RateMasterController.$inject = ["$timeout", "apiService"];
	  function RateMasterController($timeout, apiService) {
	    'ngInject';
	    //this.$http = $http;
	
	    _classCallCheck(this, RateMasterController);
	
	    this._api = apiService;
	    //this.toaster = toaster;
	    this.getAllFuelRates();
	  }
	
	  _createClass(RateMasterController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'getAllFuelRates',
	    value: function getAllFuelRates() {
	      var _this = this;
	
	      this._api.get('getrates/getall').then(function (res) {
	        _this.fuelRates = res.data;
	        console.log(_this.fuelRates);
	      }, function (err) {
	        _this.toaster.error(err.status + ' : ' + err.statusText);
	      });
	    }
	  }, {
	    key: 'addFuelRate',
	    value: function addFuelRate() {
	      var _this2 = this;
	
	      var fuelRateSaveURL = 'fuelrate/INSERT';
	
	      var fuelRateData = {
	        "fuelrateupdt": {
	          "FUELRATES_ID": this.fuelRates[0].FUELRATES_ID,
	          "FUELCITY": this.fuelRates[0].FUELCITY,
	          "RATE": this.fuelRates[0].CURRATE,
	          "FUELDATE": "1800-01-01",
	          "ACTIVE": "A",
	          "CREATEDBY": "1",
	          "CREATEDON": "2016-04-18"
	        }
	      };
	
	      this._api.post(fuelRateSaveURL, fuelRateData).then(function (res) {
	        _this2.getAllFuelRates();
	      }, function (err) {
	        console.error(err);
	      });
	    }
	  }]);
	
	  return RateMasterController;
	})();
	
	exports.RateMasterController = RateMasterController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var RateQueryController = (function () {
	  //constructor ($timeout, webDevTec, toastr) {
	  RateQueryController.$inject = ["$timeout", "apiService"];
	  function RateQueryController($timeout, apiService) {
	    'ngInject';
	    //this.$http = $http;
	
	    _classCallCheck(this, RateQueryController);
	
	    this._api = apiService;
	    //this.toaster = toaster;
	  }
	
	  _createClass(RateQueryController, [{
	    key: 'init',
	    value: function init() {
	
	      var apiData = [{
	        'city': 'MUMBAI',
	        'lastupdatedrate': '50.10',
	        'lastupdateddate': '01-Jan-2016',
	        'currentrate': '01-Jan-2016'
	      }, {
	        'city': 'MUMBAI',
	        'lastupdatedrate': '50.10',
	        'lastupdateddate': '01-Jan-2016',
	        'currentrate': '01-Jan-2016'
	      }, {
	        'city': 'MUMBAI',
	        'lastupdatedrate': '50.10',
	        'lastupdateddate': '01-Jan-2016',
	        'currentrate': '01-Jan-2016'
	      }];
	
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
	  }]);
	
	  return RateQueryController;
	})();
	
	exports.RateQueryController = RateQueryController;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var AppController = (function () {
	  AppController.$inject = ["authService"];
	  function AppController(authService) {
	    'ngInject';
	
	    _classCallCheck(this, AppController);
	
	    this.auth = authService;
	  }
	
	  _createClass(AppController, [{
	    key: 'isLoggedin',
	    value: function isLoggedin() {
	      return this.auth.isAuthenticated();
	    }
	  }, {
	    key: 'loginBody',
	    value: function loginBody() {
	      if (this.auth.authenticated) {
	        return 'isloggedin';
	      }
	    }
	  }, {
	    key: 'signOutUser',
	    value: function signOutUser() {
	      this.auth.signout();
	    }
	  }]);
	
	  return AppController;
	})();
	
	exports.AppController = AppController;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var GithubContributorService = (function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors(limit) {
	      var _this = this;
	
	      if (!limit) {
	        limit = 30;
	      }
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      })['catch'](function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	})();
	
	exports.GithubContributorService = GithubContributorService;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var authService = (function () {
	  authService.$inject = ["$q", "$state", "apiService", "$window"];
	  function authService($q, $state, apiService, $window) {
	    'ngInject';
	
	    _classCallCheck(this, authService);
	
	    this.$q = $q;
	    this.$state = $state;
	    this._api = apiService;
	    this.$window = $window;
	    this.userInfo = {};
	    this.authenticated = false;
	    this.authFailedMsg = '';
	  }
	
	  _createClass(authService, [{
	    key: 'login',
	    value: function login(username, password) {
	      var _this = this;
	
	      var deferred = this.$q.defer();
	
	      this._api.get('login/' + username + '/' + password).then(function (result) {
	
	        if (result.data.length > 0) {
	          _this.authenticated = true;
	          _this.userInfo = result.data[0];
	          //this.$window.sessionStorage.userInfo = JSON.stringify(this.userInfo);
	          _this.$window.sessionStorage.userInfo = angular.toJson(_this.userInfo);
	          deferred.resolve(_this.userInfo);
	        } else {
	          _this.authFailedMsg = 'Username or Password is incorrect.';
	        }
	      }, function (error) {
	        deferred.reject(error);
	      });
	
	      return deferred.promise;
	    }
	  }, {
	    key: 'getUserInfo',
	    value: function getUserInfo() {
	      return this.userInfo;
	    }
	  }, {
	    key: 'isAuthenticated',
	    value: function isAuthenticated() {
	
	      //console.log(this.$window.sessionStorage.userInfo);
	      if (this.$window.sessionStorage.userInfo != undefined && this.$window.sessionStorage.userInfo != '') {
	        this.authenticated = true;
	      } else {
	        this.authenticated = false;
	      }
	
	      return this.authenticated;
	    }
	  }, {
	    key: 'signout',
	    value: function signout() {
	      this.authenticated = false;
	      this.$window.sessionStorage.userInfo = '';
	      this.$state.go('login');
	    }
	  }]);
	
	  return authService;
	})();
	
	exports.authService = authService;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var apiService = (function () {
	  apiService.$inject = ["$http"];
	  function apiService($http) {
	    'ngInject';
	
	    _classCallCheck(this, apiService);
	
	    this.$http = $http;
	
	    this._host = 'http://115.113.135.239';
	    //this._host = 'http://172.32.0.226';
	    this._baseURL = this._host + '/BAC_WCF/BACONTRACTRestService.svc';
	    //this._baseURL = `${this._host}/RFPRest/RFPRestService.svc`;
	
	    this._requestTemplate = {
	      method: '',
	      url: '',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      data: {}
	    };
	  }
	
	  _createClass(apiService, [{
	    key: 'get',
	    value: function get(url) {
	
	      this._requestTemplate.method = 'GET';
	      this._requestTemplate.url = this._baseURL + '/' + url;
	      return this.$http(this._requestTemplate);
	    }
	  }, {
	    key: 'post',
	    value: function post(url, data, isFullURL) {
	      this._requestTemplate.method = 'POST';
	      this._requestTemplate.url = isFullURL ? url : this._baseURL + '/' + url;
	      this._requestTemplate.data = data;
	      return this.$http(this._requestTemplate);
	    }
	  }, {
	    key: 'getHost',
	    value: function getHost() {
	      return this._host;
	    }
	  }]);
	
	  return apiService;
	})();
	
	exports.apiService = apiService;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var WebDevTecService = (function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	})();
	
	exports.WebDevTecService = WebDevTecService;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creation" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = undefined;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause()['delete']();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause()['delete']();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = (function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTQ0ODRiZjFlZDY3OTdhN2E4MjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcz9mNWQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBLEtBQUksZUFBZSxvQkNGSTs7QURJdkIsS0FBSSxjQUFjLG9CQ0hXOztBREs3QixLQUFJLFlBQVksb0JDSlM7O0FETXpCLEtBQUksc0JBQXNCLG9CQ0xLOztBRE8vQixLQUFJLHdCQUF3QixvQkNOSTs7QURRaEMsS0FBSSxnQ0FBZ0Msb0JDUEE7O0FEU3BDLEtBQUksa0NBQWtDLG9CQ1JEOztBRFVyQyxLQUFJLGdDQUFnQyxvQkNUQTs7QURXcEMsS0FBSSxpQ0FBaUMsb0JDVlA7O0FEWTlCLEtBQUksMERBQTBELG9CQ1hyQjs7QURhekMsS0FBSSx1QkFBdUIsb0JDWkM7O0FEYzVCLEtBQUksOEJBQThCLG9CQ2JQOztBRGUzQixLQUFJLDBDQUEwQyxvQkNkYjs7QURnQmpDLEtBQUksc0NBQXNDLG9CQ2ZWOztBRGlCaEMsS0FBSSwwQ0FBMEMsb0JDaEJaOztBQUdsQyxTQUFRLE9BQU8sVUFBVSxDQUFDLGFBQWEsYUFBYSxXQUFXLGNBQWMsY0FBYyxVQUFVLGNBQWMsYUFBYSxXQUU3SCxTQUFTLFlBQVksVUFDckIsU0FBUyxVQUFVLFFBQ25CLE9BQU0scUJBQ04sT0FBTSwwQkFDTixJQUFHLG9CQUNILFFBQVEscUJBQW1CLGtGQUMzQixRQUFRLGFBQVcsMERBQ25CLFdBQVcsa0JBQWdCLG9DQUMzQixXQUFXLG1CQUFpQix1Q0FDNUIsV0FBVyx1QkFBcUIsbURBQ2hDLFdBQVcsd0JBQXNCLHNEQUNqQyxXQUFXLHVCQUFxQixtREFDaEMsUUFBUSxlQUFhLGtDQUNyQixRQUFRLGNBQVksd0NBQ3BCLFVBQVUsY0FBWSxxREFDdEIsVUFBVSxnQkFBYywyREFDeEIsV0FBVyxpQkFBZSw4Qzs7Ozs7O0FDckM3Qjs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBQVEsU0FBUzs7QUNMVixVQUFTLE9BQVEsY0FBYyxjQUFjO0dBQ2xEOztHQUVBLGFBQWEsYUFBYTs7O0dBRzFCLGFBQWEsWUFBWTtHQUN6QixhQUFhLFVBQVU7R0FDdkIsYUFBYSxnQkFBZ0I7R0FDN0IsYUFBYSxvQkFBb0I7R0FDakMsYUFBYSxjQUFjOzs7Ozs7O0FDVjdCOzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87O0FBRVQsU0FBUSxlQUFlOztBQ0xoQixVQUFTLGFBQWMsZ0JBQWdCLG9CQUFvQjtHQUNoRTtHQUNBOzs7Ozs7Ozs7SUFTRyxNQUFNLFNBQVM7S0FDZCxLQUFLO0tBQ0wsYUFBYTtLQUNiLFlBQVk7S0FDWixjQUFjO0tBQ2QsY0FBYztNQUVoQixNQUFNLGNBQWM7S0FDbEIsS0FBSztLQUNMLGFBQWE7S0FDYixZQUFZO0tBQ1osY0FBYztLQUNkLGNBQWM7TUFFaEIsTUFBTSxhQUFhO0tBQ2pCLEtBQUs7S0FDTCxhQUFhO0tBQ2IsWUFBWTtLQUNaLGNBQWM7S0FDZCxjQUFjO01BRWYsTUFBTSxhQUFhO0tBQ2xCLEtBQUs7S0FDTCxhQUFhO0tBQ2IsWUFBWTtLQUNaLGNBQWM7S0FDZCxjQUFjOzs7R0FHbEIsbUJBQW1CLFVBQVU7Ozs7Ozs7QUN4Qy9COzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87O0FBRVQsU0FBUSxXQUFXOztBQ0xaLFVBQVMsU0FBVSxNQUFNO0dBQzlCO0dBQ0EsS0FBSyxNQUFNOzs7Ozs7O0FDRmI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxLQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUFFaEgsS0NWYSxpQkFBYzs7O0dBRVgsU0FGSCxlQUVJLFVBQVUsV0FBVztLQUNsQzs7S0RZQSxnQkFBZ0IsTUNmUDs7S0FLVCxLQUFLLGdCQUFnQjtLQUNyQixLQUFLLGlCQUFpQjtLQUN0QixLQUFLLGVBQWU7OztLQUdwQixLQUFLLFNBQVMsVUFBVTs7O0dEZTFCLGFDekJXLGdCQUFjO0tEMEJ2QixLQUFLO0tBQ0wsT0NkTSxrQkFBQyxVQUFVLFdBQVc7T0RlMUIsSUFBSSxRQUFROztPQ2RkLEtBQUssYUFBYTtPQUNsQixTQUFTLFlBQU07U0FDYixNQUFLLGlCQUFpQjtVQUNyQjs7TURrQkY7S0FDRCxLQUFLO0tBQ0wsT0NqQlUsc0JBQUMsV0FBVztPQUN0QixLQUFLLGdCQUFnQixVQUFVOztPQUUvQixRQUFRLFFBQVEsS0FBSyxlQUFlLFVBQUMsY0FBaUI7U0FDcEQsYUFBYSxPQUFPLEtBQUs7OztNRG9CMUI7S0FDRCxLQUFLO0tBQ0wsT0NsQlEsc0JBQUc7O09BRVgsS0FBSyxpQkFBaUI7Ozs7R0RzQnhCLE9DcERXOzs7QUR1RGIsU0FBUSxpQkFBaUIsZTs7Ozs7O0FFdkR6Qjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksZUFBZSxDQUFDLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFamlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxLQ1ZhLGtCQUFlOzs7R0FFZixTQUZBLGdCQUVDLFFBQVEsWUFBWSxhQUFhO0tBQzNDOztLRFlBLGdCQUFnQixNQ2ZQOztLQUlULEtBQUssU0FBUztLQUNkLEtBQUssYUFBYTtLQUNsQixLQUFLLE9BQU87Ozs7O0dEa0JkLGFDeEJXLGlCQUFlO0tEeUJ4QixLQUFLO0tBQ0wsT0NmVSx3QkFBRztPRGdCWCxJQUFJLFFBQVE7O09DZGQsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQUMsS0FBUTs7U0FFMUQsSUFBSSxDQUFDLENBQUMsS0FBSztXQUNULElBQUksTUFBSyxXQUFXLGtCQUFrQixJQUFJLFFBR3JDO2FBQ0gsTUFBSyxPQUFPLGFBQWE7Ozs7O01Ea0I5QjtLQUNELEtBQUs7S0FDTCxPQ2RNLG9CQUFFO09BQ04sS0FBSyxLQUFLLGdCQUFnQjs7Ozs7Ozs7R0RzQjlCLE9DakRXOzs7QURvRGIsU0FBUSxrQkFBa0IsZ0I7Ozs7OztBRXBEMUI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxLQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUFFaEgsS0NWYSxzQkFBbUI7OztHQUVuQixTQUZBLG9CQUVDLE9BQU8sWUFBWTtLQUM3Qjs7S0RZQSxnQkFBZ0IsTUNmUDs7S0FJVCxLQUFLLFFBQVE7S0FDYixLQUFLLE9BQU87OztLQUdaLEtBQUs7S0FDTCxLQUFLOzs7R0RnQlAsYUN6QlcscUJBQW1CO0tEMEI1QixLQUFLO0tBQ0wsT0NkRSxnQkFBRztNRGVKO0tBQ0QsS0FBSztLQUNMLE9DWmUsK0JBQUU7T0RhZixJQUFJLFFBQVE7O09DWGQsS0FBSyxLQUFLLElBQUcseUJBQ1IsS0FBSyxVQUFDLEtBQVE7U0FDWCxRQUFRLElBQUksSUFBSTtTQUNoQixNQUFLLG1CQUFtQixJQUFJO1VBRWhDLFVBQUMsS0FBUTtTQUNMLFFBQVEsSUFBSTs7O01EY25CO0tBQ0QsS0FBSztLQUNMLE9DWndCLHNDQUFFO09EYXhCLElBQUksU0FBUzs7T0NYZixLQUFLLEtBQUssSUFBRyxnQ0FDUixLQUFLLFVBQUMsS0FBUTtTQUNYLFFBQVEsSUFBSSxJQUFJO1NBQ2hCLE9BQUsseUJBQXlCLElBQUk7VUFFdEMsVUFBQyxLQUFRO1NBQ0wsUUFBUSxJQUFJOzs7OztHRGdCdEIsT0N0RFc7OztBRHlEYixTQUFRLHNCQUFzQixvQjs7Ozs7O0FFekQ5Qjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksZUFBZSxDQUFDLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFamlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxLQ1ZhLHVCQUFvQjs7O0dBRXBCLFNBRkEscUJBRUMsVUFBVSxZQUFZO0tBQ2hDOzs7S0RhQSxnQkFBZ0IsTUNoQlA7O0tBS1QsS0FBSyxPQUFPOztLQUVaLEtBQUs7OztHRGdCUCxhQ3ZCVyxzQkFBb0I7S0R3QjdCLEtBQUs7S0FDTCxPQ2ZFLGdCQUFHO01EZ0JKO0tBQ0QsS0FBSztLQUNMLE9DZGEsMkJBQUU7T0RlYixJQUFJLFFBQVE7O09DZGQsS0FBSyxLQUFLLElBQUksbUJBQW1CLEtBQUssVUFBQyxLQUFRO1NBQzNDLE1BQUssWUFBWSxJQUFJO1NBQ3JCLFFBQVEsSUFBSSxNQUFLO1VBRWhCLFVBQUMsS0FBUTtTQUNWLE1BQUssUUFBUSxNQUFTLElBQUksU0FBTSxRQUFNLElBQUk7OztNRGtCN0M7S0FDRCxLQUFLO0tBQ0wsT0NoQlMsdUJBQUU7T0RpQlQsSUFBSSxTQUFTOztPQ2ZmLElBQUksa0JBQWtCOztPQUV0QixJQUFJLGVBQ0o7U0FDSSxnQkFDQTtXQUNJLGdCQUFnQixLQUFLLFVBQVUsR0FBRztXQUNsQyxZQUFhLEtBQUssVUFBVSxHQUFHO1dBQy9CLFFBQVMsS0FBSyxVQUFVLEdBQUc7V0FDM0IsWUFBYTtXQUNiLFVBQVc7V0FDWCxhQUFjO1dBQ2QsYUFBYzs7OztPQUl0QixLQUFLLEtBQUssS0FBSyxpQkFBaUIsY0FDM0IsS0FBSyxVQUFDLEtBQVE7U0FDYixPQUFLO1VBR1AsVUFBQyxLQUFRO1NBQ1AsUUFBUSxNQUFNOzs7OztHRGlCdEIsT0NqRVc7OztBRG9FYixTQUFRLHVCQUF1QixxQjs7Ozs7O0FFcEUvQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksZUFBZSxDQUFDLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFamlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxLQ1ZhLHNCQUFtQjs7O0dBRW5CLFNBRkEsb0JBRUMsVUFBVSxZQUFZO0tBQ2hDOzs7S0RhQSxnQkFBZ0IsTUNoQlA7O0tBS1QsS0FBSyxPQUFPOzs7O0dEaUJkLGFDdEJXLHFCQUFtQjtLRHVCNUIsS0FBSztLQUNMLE9DZkUsZ0JBQUc7O09BRUwsSUFBSSxVQUFVLENBQ1Y7U0FDSSxRQUFTO1NBQ1QsbUJBQW9CO1NBQ3BCLG1CQUFvQjtTQUNwQixlQUFnQjtVQUNqQjtTQUNDLFFBQVM7U0FDVCxtQkFBb0I7U0FDcEIsbUJBQW9CO1NBQ3BCLGVBQWdCO1VBQ2pCO1NBQ0MsUUFBUztTQUNULG1CQUFvQjtTQUNwQixtQkFBb0I7U0FDcEIsZUFBZ0I7OztPQUlwQixLQUFLLFVBQVU7T0FDZixRQUFRLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0dEOEJsQixPQzdEVzs7O0FEZ0ViLFNBQVEsc0JBQXNCLG9COzs7Ozs7QUVoRTlCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OzsyQ0NSdEY7R0FDYixTQURBLGNBQ0MsYUFBYTtLQUN2Qjs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FJVCxLQUFLLE9BQU87OztHRGVkLGFDbkJXLGVBQWE7S0RvQnRCLEtBQUs7S0FDTCxPQ2RTLHNCQUFHO09BQ1osT0FBTyxLQUFLLEtBQUs7O01EZ0JoQjtLQUNELEtBQUs7S0FDTCxPQ2ZRLHFCQUFHO09BQ1gsSUFBRyxLQUFLLEtBQUssZUFBYztTQUN6QixPQUFPOzs7TURrQlI7S0FDRCxLQUFLO0tBQ0wsT0NoQlMsdUJBQUU7T0FDWCxLQUFLLEtBQUs7Ozs7R0RvQlosT0N0Q1c7OztBRHlDYixTQUFRLGdCQUFnQixjOzs7Ozs7QUV6Q3hCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7Ozt3RENSM0U7R0FDdkIsU0FERCx5QkFDRSxNQUFNLE9BQU87S0FDeEI7O0tEWUEsZ0JBQWdCLE1DZFA7O0tBSVQsS0FBSyxPQUFPO0tBQ1osS0FBSyxRQUFRO0tBQ2IsS0FBSyxVQUFVOzs7R0RlakIsYUNyQlcsMEJBQXdCO0tEc0JqQyxLQUFLO0tBQ0wsT0NkYSx5QkFBQyxPQUFPO09EZW5CLElBQUksUUFBUTs7T0NkZCxJQUFJLENBQUMsT0FBTztTQUNWLFFBQVE7OztPQUdWLE9BQU8sS0FBSyxNQUFNLElBQUksS0FBSyxVQUFVLDRCQUE0QixPQUM5RCxLQUFLLFVBQUMsVUFBYTtTQUNsQixPQUFPLFNBQVM7VUFDaEIsU0FDSyxVQUFDLE9BQVU7U0FDaEIsTUFBSyxLQUFLLE1BQU0sc0NBQXNDLFFBQVEsT0FBTyxNQUFNLE1BQU07Ozs7O0dEbUJ2RixPQ3RDVzs7O0FEeUNiLFNBQVEsMkJBQTJCLHlCOzs7Ozs7QUV6Q25DOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OzttRUNSeEY7R0FDWCxTQURBLFlBQ0MsSUFBSSxRQUFRLFlBQVksU0FBUztLQUMzQzs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FHVCxLQUFLLEtBQUs7S0FDVixLQUFLLFNBQVM7S0FDZCxLQUFLLE9BQU87S0FDWixLQUFLLFVBQVU7S0FDZixLQUFLLFdBQVc7S0FDaEIsS0FBSyxnQkFBZ0I7S0FDckIsS0FBSyxnQkFBZ0I7OztHRGdCdkIsYUN6QlcsYUFBVztLRDBCcEIsS0FBSztLQUNMLE9DZkcsZUFBQyxVQUFVLFVBQVU7T0RnQnRCLElBQUksUUFBUTs7T0NmZCxJQUFJLFdBQVcsS0FBSyxHQUFHOztPQUV2QixLQUFLLEtBQUssSUFBRyxXQUFVLFdBQVEsTUFBSSxVQUFZLEtBQUssVUFBQyxRQUFXOztTQUU5RCxJQUFJLE9BQU8sS0FBSyxTQUFTLEdBQUc7V0FDMUIsTUFBSyxnQkFBZ0I7V0FDckIsTUFBSyxXQUFXLE9BQU8sS0FBSzs7V0FFNUIsTUFBSyxRQUFRLGVBQWUsV0FBVyxRQUFRLE9BQU8sTUFBSztXQUMzRCxTQUFTLFFBQVEsTUFBSztnQkFFbkI7V0FDSCxNQUFLLGdCQUFnQjs7VUFHdEIsVUFBQyxPQUFVO1NBQ1osU0FBUyxPQUFPOzs7T0FHbEIsT0FBTyxTQUFTOztNRGlCZjtLQUNELEtBQUs7S0FDTCxPQ2hCUyx1QkFBRztPQUNaLE9BQU8sS0FBSzs7TURrQlg7S0FDRCxLQUFLO0tBQ0wsT0NqQmEsMkJBQUc7OztPQUdoQixJQUFJLEtBQUssUUFBUSxlQUFlLFlBQVksYUFBYSxLQUFLLFFBQVEsZUFBZSxZQUFZLElBQUk7U0FDbkcsS0FBSyxnQkFBZ0I7Y0FDaEI7U0FDTCxLQUFLLGdCQUFnQjs7O09BR3ZCLE9BQU8sS0FBSzs7TURtQlg7S0FDRCxLQUFLO0tBQ0wsT0NsQkssbUJBQUc7T0FDUixLQUFLLGdCQUFnQjtPQUNyQixLQUFLLFFBQVEsZUFBZSxXQUFXO09BQ3ZDLEtBQUssT0FBTyxHQUFHOzs7O0dEc0JqQixPQzVFVzs7O0FEK0ViLFNBQVEsY0FBYyxZOzs7Ozs7QUUvRXRCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OztrQ0NSekY7R0FDVixTQURBLFdBQ0MsT0FBTztLQUNqQjs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FJVCxLQUFLLFFBQVE7O0tBRWIsS0FBSyxRQUFROztLQUViLEtBQUssV0FBYyxLQUFLLFFBQUs7OztLQUk3QixLQUFLLG1CQUFtQjtPQUN0QixRQUFRO09BQ1IsS0FBSztPQUNMLFNBQVM7U0FDUCxnQkFBZ0I7O09BRWxCLE1BQU07Ozs7R0RlVixhQ2pDVyxZQUFVO0tEa0NuQixLQUFLO0tBQ0wsT0NiQyxhQUFDLEtBQUs7O09BRVAsS0FBSyxpQkFBaUIsU0FBUztPQUMvQixLQUFLLGlCQUFpQixNQUFTLEtBQUssV0FBUSxNQUFJO09BQ2hELE9BQU8sS0FBSyxNQUFNLEtBQUs7O01EZXRCO0tBQ0QsS0FBSztLQUNMLE9DZEUsY0FBQyxLQUFLLE1BQU0sV0FBVztPQUN6QixLQUFLLGlCQUFpQixTQUFTO09BQy9CLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxNQUFTLEtBQUssV0FBUSxNQUFJO09BQ2xFLEtBQUssaUJBQWlCLE9BQU87T0FDN0IsT0FBTyxLQUFLLE1BQU0sS0FBSzs7TURnQnRCO0tBQ0QsS0FBSztLQUNMLE9DZkssbUJBQUc7T0FDUixPQUFPLEtBQUs7Ozs7R0RtQmQsT0N4RFc7OztBRDJEYixTQUFRLGFBQWEsVzs7Ozs7O0FFM0RyQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksZUFBZSxDQUFDLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFamlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxLQ1ZhLG1CQUFnQjtHQUNmLFNBREQsbUJBQ0k7S0FDYjs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FJVCxLQUFLLE9BQU8sQ0FDVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7UUFFVjtPQUNFLFNBQVM7T0FDVCxPQUFPO09BQ1AsZUFBZTtPQUNmLFFBQVE7Ozs7R0RPZCxhQ2hFVyxrQkFBZ0I7S0RpRXpCLEtBQUs7S0FDTCxPQ0pJLGtCQUFHO09BQ1AsT0FBTyxLQUFLOzs7O0dEUWQsT0N2RVc7OztBRDBFYixTQUFRLG1CQUFtQixpQjs7Ozs7O0FFMUUzQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87O0FBRVQsU0FBUSxrQkFBa0I7O0FBRTFCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQ1B6RyxVQUFTLGtCQUFrQjtHQUNoQzs7R0FFQSxJQUFJLFlBQVk7S0FDZCxVQUFVO0tBQ1YsYUFBYTtLQUNiLE9BQU87T0FDSCxjQUFjOztLQUVsQixZQUFZO0tBQ1osY0FBYztLQUNkLGtCQUFrQjs7O0dBR3BCLE9BQU87OztBRFlULEtDVE0sbUJBQ1EsU0FEUixpQkFDUyxRQUFRO0dBQ25COzs7O0dEWUYsZ0JBQWdCLE1DZFo7O0dBS0YsS0FBSyxlQUFlLE9BQU8sS0FBSyxjQUFjOzs7Ozs7OztBQ3RCbEQ7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsU0FBUSxvQkFBb0I7O0FBRTVCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQ1Z6RyxVQUFTLGtCQUFrQixVQUFVO0dBQzFDOztHQUVBLElBQUksWUFBWTtLQUNkLFVBQVU7S0FDVixPQUFPO09BQ0gsYUFBYTs7S0FFakIsVUFBVTtLQUNWLE1BQU07S0FDTixZQUFZO0tBQ1osY0FBYzs7O0dBR2hCLE9BQU87O0dBRVAsU0FBUyxTQUFTLE9BQU8sSUFBSSxNQUFNLElBQUk7S0FDckMsSUFBSSxVQUFPO0tBQ1gsSUFBSSxTQUFTLFNBQVMsR0FBRyxJQUFJO09BQzNCLFdBQVc7T0FDWCxhQUFhO09BQ2IsWUFBWTtPQUNaLE1BQU07T0FDTixTQUFTOzs7S0FHWCxHQUFHLFNBQVM7O0tBRVosUUFBUSxRQUFRLE1BQU0sYUFBYSxVQUFDLE9BQVU7T0FDNUMsT0FBTyxLQUFLLE9BQU8sUUFBTzs7O0tBRzVCLFVBQVUsTUFBTSxPQUFPLG1CQUFtQixZQUFNO09BQzlDLFFBQVEsUUFBUSxHQUFHLGNBQWMsVUFBQyxhQUFnQjtTQUNoRCxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQU87Ozs7S0FJMUMsTUFBTSxJQUFJLFlBQVksWUFBTTtPQUMxQjs7Ozs7OzhEQU1rQjtHQUNWLFNBRFIsbUJBQ1MsTUFBTSxtQkFBbUI7S0FDcEM7O0tEYUEsZ0JBQWdCLE1DZmQ7O0tBSUYsS0FBSyxPQUFPO0tBQ1osS0FBSyxlQUFlOztLQUVwQixLQUFLLFNBQVM7OztHRGdCaEIsYUN2Qkksb0JBQWtCO0tEd0JwQixLQUFLO0tBQ0wsT0NmTSxrQkFBQyxtQkFBbUI7T0RnQnhCLElBQUksUUFBUTs7T0NmZCxPQUFPLEtBQUssZ0JBQWdCLG1CQUFtQixLQUFLLFlBQU07U0FDeEQsTUFBSyxLQUFLLEtBQUs7OztNRG9CaEI7S0FDRCxLQUFLO0tBQ0wsT0NsQmEseUJBQUMsbUJBQW1CO09EbUIvQixJQUFJLFNBQVM7O09DbEJmLE9BQU8sa0JBQWtCLGdCQUFnQixJQUFJLEtBQUssVUFBQyxNQUFTO1NBQzFELE9BQUssZUFBZTs7U0FFcEIsT0FBTyxPQUFLOzs7OztHRHlCaEIsT0M3Q0kiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhNDQ4NGJmMWVkNjc5N2E3YTgyM1xuICoqLyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmRleENvbmZpZyA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG5cbnZhciBfaW5kZXhSb3V0ZSA9IHJlcXVpcmUoJy4vaW5kZXgucm91dGUnKTtcblxudmFyIF9pbmRleFJ1biA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG5cbnZhciBfbWFpbk1haW5Db250cm9sbGVyID0gcmVxdWlyZSgnLi9tYWluL21haW4uY29udHJvbGxlcicpO1xuXG52YXIgX2xvZ2luTG9naW5Db250cm9sbGVyID0gcmVxdWlyZSgnLi9sb2dpbi9sb2dpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfZGFzaGJvYXJkRGFzaGJvYXJkQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyJyk7XG5cbnZhciBfcmF0ZW1hc3RlclJhdGVtYXN0ZXJDb250cm9sbGVyID0gcmVxdWlyZSgnLi9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlcicpO1xuXG52YXIgX3JhdGVxdWVyeVJhdGVxdWVyeUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3JhdGVxdWVyeS9yYXRlcXVlcnkuY29udHJvbGxlcicpO1xuXG52YXIgX2FwcENvbXBvbmVudHNBcHBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xuXG52YXIgX2FwcExvZ2luQXV0aFNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzV2ViRGV2VGVjV2ViRGV2VGVjU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNNYWxhcmtleU1hbGFya2V5RGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdtbGxCYWMnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0ciddKS5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSkuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudCkuY29uZmlnKF9pbmRleENvbmZpZy5jb25maWcpLmNvbmZpZyhfaW5kZXhSb3V0ZS5yb3V0ZXJDb25maWcpLnJ1bihfaW5kZXhSdW4ucnVuQmxvY2spLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgX2FwcENvbXBvbmVudHNHaXRodWJDb250cmlidXRvckdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZS5HaXRodWJDb250cmlidXRvclNlcnZpY2UpLnNlcnZpY2UoJ3dlYkRldlRlYycsIF9hcHBDb21wb25lbnRzV2ViRGV2VGVjV2ViRGV2VGVjU2VydmljZS5XZWJEZXZUZWNTZXJ2aWNlKS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIF9tYWluTWFpbkNvbnRyb2xsZXIuTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIF9sb2dpbkxvZ2luQ29udHJvbGxlci5Mb2dpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBfZGFzaGJvYXJkRGFzaGJvYXJkQ29udHJvbGxlci5EYXNoYm9hcmRDb250cm9sbGVyKS5jb250cm9sbGVyKCdSYXRlTWFzdGVyQ29udHJvbGxlcicsIF9yYXRlbWFzdGVyUmF0ZW1hc3RlckNvbnRyb2xsZXIuUmF0ZU1hc3RlckNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1JhdGVRdWVyeUNvbnRyb2xsZXInLCBfcmF0ZXF1ZXJ5UmF0ZXF1ZXJ5Q29udHJvbGxlci5SYXRlUXVlcnlDb250cm9sbGVyKS5zZXJ2aWNlKCdhdXRoU2VydmljZScsIF9hcHBMb2dpbkF1dGhTZXJ2aWNlLmF1dGhTZXJ2aWNlKS5zZXJ2aWNlKCdhcGlTZXJ2aWNlJywgX2FwcENvbXBvbmVudHNBcGlBcGlTZXJ2aWNlLmFwaVNlcnZpY2UpLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIF9hcHBDb21wb25lbnRzTmF2YmFyTmF2YmFyRGlyZWN0aXZlLk5hdmJhckRpcmVjdGl2ZSkuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUuTWFsYXJrZXlEaXJlY3RpdmUpLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb250cm9sbGVyJztcbmltcG9ydCB7IERhc2hib2FyZENvbnRyb2xsZXIgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlcic7XG5pbXBvcnQgeyBSYXRlTWFzdGVyQ29udHJvbGxlciB9IGZyb20gJy4vcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUmF0ZVF1ZXJ5Q29udHJvbGxlciB9IGZyb20gJy4vcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyJztcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hbGFya2V5RGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJztcblxuXG5hbmd1bGFyLm1vZHVsZSgnbWxsQmFjJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd0b2FzdHInXSlcblxuICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAuY29uZmlnKGNvbmZpZylcbiAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXG4gIC5ydW4ocnVuQmxvY2spXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcbiAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIFdlYkRldlRlY1NlcnZpY2UpXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIERhc2hib2FyZENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdSYXRlTWFzdGVyQ29udHJvbGxlcicsIFJhdGVNYXN0ZXJDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIFJhdGVRdWVyeUNvbnRyb2xsZXIpXG4gIC5zZXJ2aWNlKCdhdXRoU2VydmljZScsIGF1dGhTZXJ2aWNlKVxuICAuc2VydmljZSgnYXBpU2VydmljZScsIGFwaVNlcnZpY2UpXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKVxuICAuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIEFwcENvbnRyb2xsZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcblxuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gIC8vIEVuYWJsZSBsb2dcclxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xyXG5cclxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcclxuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XHJcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgLypcclxuICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXHJcbiAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gIH0pXHJcbiAgKi9cbiAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgYXV0aGVudGljYXRlOiBmYWxzZVxuICB9KS5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcbiAgICB1cmw6ICcvcmF0ZW1hc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZScsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pLnN0YXRlKCdyYXRlcXVlcnknLCB7XG4gICAgdXJsOiAnL3JhdGVxdWVyeScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnUmF0ZVF1ZXJ5Q29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZXF1ZXJ5JyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSkuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdkYXNoJyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAvKlxyXG4gICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gICAgfSlcclxuICAgICovXHJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcclxuICAgIH0pXHJcbiAgIC5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcclxuICAgICAgdXJsOiAnL3JhdGVtYXN0ZXInLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3JhdGUnLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgIC5zdGF0ZSgncmF0ZXF1ZXJ5Jywge1xyXG4gICAgICB1cmw6ICcvcmF0ZXF1ZXJ5JyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ1JhdGVRdWVyeUNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcclxuICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnZGFzaCcsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucm91dGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuXG5mdW5jdGlvbiBydW5CbG9jaygkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0NjA3MjU5OTIxNjM7XG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcbiAgICAgIH0sIDQwMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFdlYkRldlRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcbiAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcblxuICAgICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG93VG9hc3RyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1RvYXN0cigpIHtcbiAgICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcclxuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xyXG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcclxuICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcclxuICAgIH0sIDQwMDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xyXG5cclxuICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpID0+IHtcclxuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93VG9hc3RyKCkge1xyXG4gICAgLy90aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIExvZ2luQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xuICBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvZ2luQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhdXRoZW50aWNhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgaWYgKCEhcmVzKSB7XG4gICAgICAgICAgaWYgKF90aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHt9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldE1zZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0TXNnKCkge1xuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgICB9XG5cbiAgICAvLyBpc0xvZ2luKCkge1xuICAgIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xuICAgIC8vIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2dpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkxvZ2luQ29udHJvbGxlciA9IExvZ2luQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xyXG4gIH1cclxuXHJcbiAgYXV0aGVudGljYXRlKCkge1xyXG5cclxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKS50aGVuKChyZXMpID0+IHtcclxuXHJcbiAgICAgIGlmICghIXJlcykge1xyXG4gICAgICAgIGlmICh0aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRNc2coKXtcclxuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcclxuICB9XHJcblxyXG4gIC8vIGlzTG9naW4oKSB7XHJcbiAgLy8gICByZXR1cm4gJ2xvZ2luYm9keSc7XHJcbiAgLy8gfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBEYXNoYm9hcmRDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSwgdG9hc3Rlcikge1xuICBmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCRodHRwLCBhcGlTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXNoYm9hcmRDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhc2hib2FyZENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c0V4cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNFeHAoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBfdGhpcy5jb250cmFjdHNFeHBpcmVkID0gcmVzLmRhdGE7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBfdGhpczIuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhc2hib2FyZENvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkRhc2hib2FyZENvbnRyb2xsZXIgPSBEYXNoYm9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0V4cCgpO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG5nZXREYXNoQ29udHJhY3RzRXhwKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2V4cC8xYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNFeHBpcmVkID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpe1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzFgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0c0Nsb3NlVG9FeHBpcnkgPSByZXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlTWFzdGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBSYXRlTWFzdGVyQ29udHJvbGxlcigkdGltZW91dCwgYXBpU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF0ZU1hc3RlckNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlTWFzdGVyQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxGdWVsUmF0ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxGdWVsUmF0ZXMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRyYXRlcy9nZXRhbGwnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKF90aGlzLmZ1ZWxSYXRlcyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF90aGlzLnRvYXN0ZXIuZXJyb3IoZXJyLnN0YXR1cyArICcgOiAnICsgZXJyLnN0YXR1c1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkRnVlbFJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGdWVsUmF0ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnVlbFJhdGVTYXZlVVJMID0gJ2Z1ZWxyYXRlL0lOU0VSVCc7XG5cbiAgICAgIHZhciBmdWVsUmF0ZURhdGEgPSB7XG4gICAgICAgIFwiZnVlbHJhdGV1cGR0XCI6IHtcbiAgICAgICAgICBcIkZVRUxSQVRFU19JRFwiOiB0aGlzLmZ1ZWxSYXRlc1swXS5GVUVMUkFURVNfSUQsXG4gICAgICAgICAgXCJGVUVMQ0lUWVwiOiB0aGlzLmZ1ZWxSYXRlc1swXS5GVUVMQ0lUWSxcbiAgICAgICAgICBcIlJBVEVcIjogdGhpcy5mdWVsUmF0ZXNbMF0uQ1VSUkFURSxcbiAgICAgICAgICBcIkZVRUxEQVRFXCI6IFwiMTgwMC0wMS0wMVwiLFxuICAgICAgICAgIFwiQUNUSVZFXCI6IFwiQVwiLFxuICAgICAgICAgIFwiQ1JFQVRFREJZXCI6IFwiMVwiLFxuICAgICAgICAgIFwiQ1JFQVRFRE9OXCI6IFwiMjAxNi0wNC0xOFwiXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgZnVlbFJhdGVEYXRhKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMyLmdldEFsbEZ1ZWxSYXRlcygpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmF0ZU1hc3RlckNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVNYXN0ZXJDb250cm9sbGVyID0gUmF0ZU1hc3RlckNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFJhdGVNYXN0ZXJDb250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcclxuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIC8vdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIGdldEFsbEZ1ZWxSYXRlcygpe1xyXG4gICAgdGhpcy5fYXBpLmdldCgnZ2V0cmF0ZXMvZ2V0YWxsJykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1ZWxSYXRlcyk7XHJcblxyXG4gICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRGdWVsUmF0ZSgpe1xyXG5cclxuICAgIHZhciBmdWVsUmF0ZVNhdmVVUkwgPSAnZnVlbHJhdGUvSU5TRVJUJztcclxuXHJcbiAgICB2YXIgZnVlbFJhdGVEYXRhID1cclxuICAgIHtcclxuICAgICAgICBcImZ1ZWxyYXRldXBkdFwiIDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiRlVFTFJBVEVTX0lEXCI6IHRoaXMuZnVlbFJhdGVzWzBdLkZVRUxSQVRFU19JRCxcclxuICAgICAgICAgICAgXCJGVUVMQ0lUWVwiIDogdGhpcy5mdWVsUmF0ZXNbMF0uRlVFTENJVFksXHJcbiAgICAgICAgICAgIFwiUkFURVwiIDogdGhpcy5mdWVsUmF0ZXNbMF0uQ1VSUkFURSxcclxuICAgICAgICAgICAgXCJGVUVMREFURVwiIDogXCIxODAwLTAxLTAxXCIsXHJcbiAgICAgICAgICAgIFwiQUNUSVZFXCIgOiBcIkFcIixcclxuICAgICAgICAgICAgXCJDUkVBVEVEQllcIiA6IFwiMVwiLFxyXG4gICAgICAgICAgICBcIkNSRUFURURPTlwiIDogXCIyMDE2LTA0LTE4XCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgZnVlbFJhdGVEYXRhKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlUXVlcnlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIFJhdGVRdWVyeUNvbnRyb2xsZXIoJHRpbWVvdXQsIGFwaVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIC8vdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGVRdWVyeUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmF0ZVF1ZXJ5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcblxuICAgICAgdmFyIGFwaURhdGEgPSBbe1xuICAgICAgICAnY2l0eSc6ICdNVU1CQUknLFxuICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJzogJzUwLjEwJyxcbiAgICAgICAgJ2xhc3R1cGRhdGVkZGF0ZSc6ICcwMS1KYW4tMjAxNicsXG4gICAgICAgICdjdXJyZW50cmF0ZSc6ICcwMS1KYW4tMjAxNidcbiAgICAgIH0sIHtcbiAgICAgICAgJ2NpdHknOiAnTVVNQkFJJyxcbiAgICAgICAgJ2xhc3R1cGRhdGVkcmF0ZSc6ICc1MC4xMCcsXG4gICAgICAgICdsYXN0dXBkYXRlZGRhdGUnOiAnMDEtSmFuLTIwMTYnLFxuICAgICAgICAnY3VycmVudHJhdGUnOiAnMDEtSmFuLTIwMTYnXG4gICAgICB9LCB7XG4gICAgICAgICdjaXR5JzogJ01VTUJBSScsXG4gICAgICAgICdsYXN0dXBkYXRlZHJhdGUnOiAnNTAuMTAnLFxuICAgICAgICAnbGFzdHVwZGF0ZWRkYXRlJzogJzAxLUphbi0yMDE2JyxcbiAgICAgICAgJ2N1cnJlbnRyYXRlJzogJzAxLUphbi0yMDE2J1xuICAgICAgfV07XG5cbiAgICAgIHRoaXMuYXBpRGF0YSA9IGFwaURhdGE7XG4gICAgICBjb25zb2xlLmxvZyhhcGlEYXRhKTtcbiAgICAgIC8qXHJcbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldHJmcGxpc3QvZ2V0YWxsJykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHZhciBiYWMgPSByZXMuZGF0YTtcclxuICAgICAgYmFjID0gXy5tYXAoYmFjLCAoY29udHJhY3QpID0+IHtcclxuICAgICAgLy8gIGNvbnRyYWN0LlJGUERBVEUgPSBuZXcgRGF0ZShjb250cmFjdC5SRlBEQVRFKTtcclxuICAgICAgLy8gIGNvbnRyYWN0LkRVRURBVEUgPSBuZXcgRGF0ZShjb250cmFjdC5EVUVEQVRFKTtcclxuICAgICAgICByZXR1cm4gY29udHJhY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYmFjID0gYmFjO1xyXG4gICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3Rlci5lcnJvcihgJHtlcnIuc3RhdHVzfSA6ICR7ZXJyLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAqL1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYXRlUXVlcnlDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5SYXRlUXVlcnlDb250cm9sbGVyID0gUmF0ZVF1ZXJ5Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFJhdGVRdWVyeUNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xyXG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCBhcGlTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcbiAgICB2YXIgYXBpRGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdjaXR5JyA6ICdNVU1CQUknLFxyXG4gICAgICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJyA6ICc1MC4xMCcsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZGRhdGUnIDogJzAxLUphbi0yMDE2JyxcclxuICAgICAgICAgICAgJ2N1cnJlbnRyYXRlJyA6ICcwMS1KYW4tMjAxNidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdjaXR5JyA6ICdNVU1CQUknLFxyXG4gICAgICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJyA6ICc1MC4xMCcsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZGRhdGUnIDogJzAxLUphbi0yMDE2JyxcclxuICAgICAgICAgICAgJ2N1cnJlbnRyYXRlJyA6ICcwMS1KYW4tMjAxNidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdjaXR5JyA6ICdNVU1CQUknLFxyXG4gICAgICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJyA6ICc1MC4xMCcsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZGRhdGUnIDogJzAxLUphbi0yMDE2JyxcclxuICAgICAgICAgICAgJ2N1cnJlbnRyYXRlJyA6ICcwMS1KYW4tMjAxNidcclxuICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5hcGlEYXRhID0gYXBpRGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcGlEYXRhKTtcclxuICAgICAgICAvKlxyXG4gICAgdGhpcy5fYXBpLmdldCgnZ2V0cmZwbGlzdC9nZXRhbGwnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB2YXIgYmFjID0gcmVzLmRhdGE7XHJcbiAgICAgICAgYmFjID0gXy5tYXAoYmFjLCAoY29udHJhY3QpID0+IHtcclxuICAgICAgICAvLyAgY29udHJhY3QuUkZQREFURSA9IG5ldyBEYXRlKGNvbnRyYWN0LlJGUERBVEUpO1xyXG4gICAgICAgIC8vICBjb250cmFjdC5EVUVEQVRFID0gbmV3IERhdGUoY29udHJhY3QuRFVFREFURSk7XHJcbiAgICAgICAgICByZXR1cm4gY29udHJhY3Q7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFjID0gYmFjO1xyXG4gICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBcHBDb250cm9sbGVyKGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHBDb250cm9sbGVyKTtcblxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaXNMb2dnZWRpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTG9nZ2VkaW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvZ2luQm9keScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luQm9keSgpIHtcbiAgICAgIGlmICh0aGlzLmF1dGguYXV0aGVudGljYXRlZCkge1xuICAgICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25PdXRVc2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbk91dFVzZXIoKSB7XG4gICAgICB0aGlzLmF1dGguc2lnbm91dCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHBDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5BcHBDb250cm9sbGVyID0gQXBwQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZGluICgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgfVxyXG5cclxuICBsb2dpbkJvZHkgKCkge1xyXG4gICAgaWYodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lnbk91dFVzZXIoKXtcclxuICAgIHRoaXMuYXV0aC5zaWdub3V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghbGltaXQpIHtcbiAgICAgICAgbGltaXQgPSAzMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5HaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICBpZiAoIWxpbWl0KSB7XG4gICAgICBsaW1pdCA9IDMwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGF1dGhTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYXV0aFNlcnZpY2UoJHEsICRzdGF0ZSwgYXBpU2VydmljZSwgJHdpbmRvdykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXV0aFNlcnZpY2UpO1xuXG4gICAgdGhpcy4kcSA9ICRxO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB0aGlzLnVzZXJJbmZvID0ge307XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJyc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoYXV0aFNlcnZpY2UsIFt7XG4gICAga2V5OiAnbG9naW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcblxuICAgICAgdGhpcy5fYXBpLmdldCgnbG9naW4vJyArIHVzZXJuYW1lICsgJy8nICsgcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgX3RoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMudXNlckluZm8gPSByZXN1bHQuZGF0YVswXTtcbiAgICAgICAgICAvL3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8pO1xuICAgICAgICAgIF90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBhbmd1bGFyLnRvSnNvbihfdGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfdGhpcy51c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuYXV0aEZhaWxlZE1zZyA9ICdVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuJztcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXNlckluZm8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVc2VySW5mbygpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQXV0aGVudGljYXRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8pO1xuICAgICAgaWYgKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSB1bmRlZmluZWQgJiYgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9ICcnKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaWdub3V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbm91dCgpIHtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gJyc7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gYXV0aFNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBhdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHEsICRzdGF0ZSwgYXBpU2VydmljZSwgJHdpbmRvdykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMuJHEgPSAkcTtcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLnVzZXJJbmZvID0ge307XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICB2YXIgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgbG9naW4vJHt1c2VybmFtZX0vJHtwYXNzd29yZH1gKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzdWx0LmRhdGFbMF07XHJcbiAgICAgICAgLy90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBhbmd1bGFyLnRvSnNvbih0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRoaXMudXNlckluZm8pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICdVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuJztcclxuICAgICAgfVxyXG5cclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRoZW50aWNhdGVkKCkge1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvKTtcclxuICAgIGlmICh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gdW5kZWZpbmVkICYmIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSAnJykge1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcclxuICB9XHJcblxyXG4gIHNpZ25vdXQoKSB7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9ICcnO1xyXG4gICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGFwaVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhcGlTZXJ2aWNlKCRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhcGlTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgIHRoaXMuX2hvc3QgPSAnaHR0cDovLzExNS4xMTMuMTM1LjIzOSc7XG4gICAgLy90aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xNzIuMzIuMC4yMjYnO1xuICAgIHRoaXMuX2Jhc2VVUkwgPSB0aGlzLl9ob3N0ICsgJy9CQUNfV0NGL0JBQ09OVFJBQ1RSZXN0U2VydmljZS5zdmMnO1xuICAgIC8vdGhpcy5fYmFzZVVSTCA9IGAke3RoaXMuX2hvc3R9L1JGUFJlc3QvUkZQUmVzdFNlcnZpY2Uuc3ZjYDtcblxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcbiAgICAgIG1ldGhvZDogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKGFwaVNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVybCkge1xuXG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ0dFVCc7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gdGhpcy5fYmFzZVVSTCArICcvJyArIHVybDtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBpc0Z1bGxVUkwpIHtcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnUE9TVCc7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gaXNGdWxsVVJMID8gdXJsIDogdGhpcy5fYmFzZVVSTCArICcvJyArIHVybDtcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5kYXRhID0gZGF0YTtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhvc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gYXBpU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuYXBpU2VydmljZSA9IGFwaVNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG5cbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xuICAgIC8vdGhpcy5faG9zdCA9ICdodHRwOi8vMTcyLjMyLjAuMjI2JztcbiAgICB0aGlzLl9iYXNlVVJMID0gYCR7dGhpcy5faG9zdH0vQkFDX1dDRi9CQUNPTlRSQUNUUmVzdFNlcnZpY2Uuc3ZjYDtcbiAgICAvL3RoaXMuX2Jhc2VVUkwgPSBgJHt0aGlzLl9ob3N0fS9SRlBSZXN0L1JGUFJlc3RTZXJ2aWNlLnN2Y2A7XG5cblxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcbiAgICAgIG1ldGhvZDogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgZ2V0KHVybCkge1xuXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBgJHt0aGlzLl9iYXNlVVJMfS8ke3VybH1gO1xuICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gIH1cblxuICBwb3N0KHVybCwgZGF0YSwgaXNGdWxsVVJMKSB7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdQT1NUJztcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gaXNGdWxsVVJMID8gdXJsIDogYCR7dGhpcy5fYmFzZVVSTH0vJHt1cmx9YDtcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUuZGF0YSA9IGRhdGE7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcbiAgfVxuXG4gIGdldEhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgV2ViRGV2VGVjU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJEZXZUZWNTZXJ2aWNlKTtcblxuICAgIHRoaXMuZGF0YSA9IFt7XG4gICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgIH1dO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdlYkRldlRlY1NlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGVjKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuV2ViRGV2VGVjU2VydmljZSA9IFdlYkRldlRlY1NlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcclxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxyXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcclxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXHJcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxyXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcclxuICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcclxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXRUZWMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5OYXZiYXJEaXJlY3RpdmUgPSBOYXZiYXJEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIobW9tZW50KSB7XG4gICduZ0luamVjdCc7XG5cbiAgLy8gXCJ0aGlzLmNyZWF0aW9uXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmF2YmFyQ29udHJvbGxlcik7XG5cbiAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25cIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0cy5NYWxhcmtleURpcmVjdGl2ZSA9IE1hbGFya2V5RGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKVsnZGVsZXRlJ10oKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIGZ1bmN0aW9uIChjb250cmlidXRvcikge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKVsnZGVsZXRlJ10oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWxhcmtleUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFsYXJrZXlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIF90aGlzMi5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiBfdGhpczIuY29udHJpYnV0b3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9