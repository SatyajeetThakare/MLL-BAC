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
	
	      var newRates = _.each(this.outputdata, function (key, value) {});
	
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
	
	    //this._host = 'http://172.32.0.226';
	    this._host = 'http://115.113.135.239';
	    this._baseURL = this._host + '/BAC_WCF/BACONTRACTRestService.svc';
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI0Y2JiNTg0OTg1MWQ0YTkyYjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fw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QVEsTUFBTSxhQUFhLFVBQUMsT0FBVTtPQUM1QyxPQUFPLEtBQUssT0FBTyxRQUFPOzs7S0FHNUIsVUFBVSxNQUFNLE9BQU8sbUJBQW1CLFlBQU07T0FDOUMsUUFBUSxRQUFRLEdBQUcsY0FBYyxVQUFDLGFBQWdCO1NBQ2hELE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBTzs7OztLQUkxQyxNQUFNLElBQUksWUFBWSxZQUFNO09BQzFCOzs7Ozs7OERBTWtCO0dBQ1YsU0FEUixtQkFDUyxNQUFNLG1CQUFtQjtLQUNwQzs7S0RhQSxnQkFBZ0IsTUNmZDs7S0FJRixLQUFLLE9BQU87S0FDWixLQUFLLGVBQWU7O0tBRXBCLEtBQUssU0FBUzs7O0dEZ0JoQixhQ3ZCSSxvQkFBa0I7S0R3QnBCLEtBQUs7S0FDTCxPQ2ZNLGtCQUFDLG1CQUFtQjtPRGdCeEIsSUFBSSxRQUFROztPQ2ZkLE9BQU8sS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssWUFBTTtTQUN4RCxNQUFLLEtBQUssS0FBSzs7O01Eb0JoQjtLQUNELEtBQUs7S0FDTCxPQ2xCYSx5QkFBQyxtQkFBbUI7T0RtQi9CLElBQUksU0FBUzs7T0NsQmYsT0FBTyxrQkFBa0IsZ0JBQWdCLElBQUksS0FBSyxVQUFDLE1BQVM7U0FDMUQsT0FBSyxlQUFlOztTQUVwQixPQUFPLE9BQUs7Ozs7O0dEeUJoQixPQzdDSSIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDEyNGNiYjU4NDk4NTFkNGE5MmI2XG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4Q29uZmlnID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleFJvdXRlID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4UnVuID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluTWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfbG9naW5Mb2dpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInKTtcblxudmFyIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyID0gcmVxdWlyZSgnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInKTtcblxudmFyIF9yYXRlbWFzdGVyUmF0ZW1hc3RlckNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyJyk7XG5cbnZhciBfcmF0ZXF1ZXJ5UmF0ZXF1ZXJ5Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBDb21wb25lbnRzR2l0aHViQ29udHJpYnV0b3JHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwTG9naW5BdXRoU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzQXBpQXBpU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c05hdmJhck5hdmJhckRpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcblxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4Q29uZmlnLmNvbmZpZykuY29uZmlnKF9pbmRleFJvdXRlLnJvdXRlckNvbmZpZykucnVuKF9pbmRleFJ1bi5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlLldlYkRldlRlY1NlcnZpY2UpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW5NYWluQ29udHJvbGxlci5NYWluQ29udHJvbGxlcikuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgX2xvZ2luTG9naW5Db250cm9sbGVyLkxvZ2luQ29udHJvbGxlcikuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyLkRhc2hib2FyZENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1JhdGVNYXN0ZXJDb250cm9sbGVyJywgX3JhdGVtYXN0ZXJSYXRlbWFzdGVyQ29udHJvbGxlci5SYXRlTWFzdGVyQ29udHJvbGxlcikuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIF9yYXRlcXVlcnlSYXRlcXVlcnlDb250cm9sbGVyLlJhdGVRdWVyeUNvbnRyb2xsZXIpLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgX2FwcExvZ2luQXV0aFNlcnZpY2UuYXV0aFNlcnZpY2UpLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UuYXBpU2VydmljZSkuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUuTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIF9hcHBDb21wb25lbnRzTWFsYXJrZXlNYWxhcmtleURpcmVjdGl2ZS5NYWxhcmtleURpcmVjdGl2ZSkuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIF9hcHBDb21wb25lbnRzQXBwQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cclxuXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcclxuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XHJcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xyXG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSYXRlTWFzdGVyQ29udHJvbGxlciB9IGZyb20gJy4vcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSYXRlUXVlcnlDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2xvZ2luL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IGFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXHJcblxyXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcclxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcclxuICAuY29uZmlnKGNvbmZpZylcclxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcclxuICAucnVuKHJ1bkJsb2NrKVxyXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcclxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcclxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignUmF0ZU1hc3RlckNvbnRyb2xsZXInLCBSYXRlTWFzdGVyQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIFJhdGVRdWVyeUNvbnRyb2xsZXIpXHJcbiAgLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgYXV0aFNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBhcGlTZXJ2aWNlKVxyXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXHJcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpXHJcbiAgLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBBcHBDb250cm9sbGVyKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcblxuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gIC8vIEVuYWJsZSBsb2dcclxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xyXG5cclxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcclxuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XHJcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgLypcclxuICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXHJcbiAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gIH0pXHJcbiAgKi9cbiAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgYXV0aGVudGljYXRlOiBmYWxzZVxuICB9KS5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcbiAgICB1cmw6ICcvcmF0ZW1hc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZScsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pLnN0YXRlKCdyYXRlcXVlcnknLCB7XG4gICAgdXJsOiAnL3JhdGVxdWVyeScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnUmF0ZVF1ZXJ5Q29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZXF1ZXJ5JyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSkuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdkYXNoJyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAvKlxyXG4gICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gICAgfSlcclxuICAgICovXHJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcclxuICAgIH0pXHJcbiAgIC5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcclxuICAgICAgdXJsOiAnL3JhdGVtYXN0ZXInLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3JhdGUnLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgIC5zdGF0ZSgncmF0ZXF1ZXJ5Jywge1xyXG4gICAgICB1cmw6ICcvcmF0ZXF1ZXJ5JyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ1JhdGVRdWVyeUNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcclxuICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnZGFzaCcsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucm91dGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuXG5mdW5jdGlvbiBydW5CbG9jaygkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0NjA3MjU5OTIxNjM7XG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcbiAgICAgIH0sIDQwMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFdlYkRldlRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcbiAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcblxuICAgICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG93VG9hc3RyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1RvYXN0cigpIHtcbiAgICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcclxuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xyXG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcclxuICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcclxuICAgIH0sIDQwMDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xyXG5cclxuICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpID0+IHtcclxuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93VG9hc3RyKCkge1xyXG4gICAgLy90aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIExvZ2luQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xuICBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvZ2luQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhdXRoZW50aWNhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgaWYgKCEhcmVzKSB7XG4gICAgICAgICAgaWYgKF90aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHt9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldE1zZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0TXNnKCkge1xuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgICB9XG5cbiAgICAvLyBpc0xvZ2luKCkge1xuICAgIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xuICAgIC8vIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2dpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkxvZ2luQ29udHJvbGxlciA9IExvZ2luQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xyXG4gIH1cclxuXHJcbiAgYXV0aGVudGljYXRlKCkge1xyXG5cclxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKS50aGVuKChyZXMpID0+IHtcclxuXHJcbiAgICAgIGlmICghIXJlcykge1xyXG4gICAgICAgIGlmICh0aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRNc2coKXtcclxuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcclxuICB9XHJcblxyXG4gIC8vIGlzTG9naW4oKSB7XHJcbiAgLy8gICByZXR1cm4gJ2xvZ2luYm9keSc7XHJcbiAgLy8gfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBEYXNoYm9hcmRDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSwgdG9hc3Rlcikge1xuICBmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCRodHRwLCBhcGlTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXNoYm9hcmRDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhc2hib2FyZENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c0V4cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNFeHAoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBfdGhpcy5jb250cmFjdHNFeHBpcmVkID0gcmVzLmRhdGE7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICBfdGhpczIuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhc2hib2FyZENvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkRhc2hib2FyZENvbnRyb2xsZXIgPSBEYXNoYm9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0V4cCgpO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xyXG5cclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG5nZXREYXNoQ29udHJhY3RzRXhwKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2V4cC8xYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNFeHBpcmVkID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpe1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzFgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0c0Nsb3NlVG9FeHBpcnkgPSByZXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlTWFzdGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBSYXRlTWFzdGVyQ29udHJvbGxlcigkdGltZW91dCwgYXBpU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF0ZU1hc3RlckNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlTWFzdGVyQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxGdWVsUmF0ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxGdWVsUmF0ZXMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRyYXRlcy9nZXRhbGwnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKF90aGlzLmZ1ZWxSYXRlcyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF90aGlzLnRvYXN0ZXIuZXJyb3IoZXJyLnN0YXR1cyArICcgOiAnICsgZXJyLnN0YXR1c1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkRnVlbFJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGdWVsUmF0ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnVlbFJhdGVTYXZlVVJMID0gJ2Z1ZWxyYXRlL0lOU0VSVCc7XG5cbiAgICAgIHZhciBuZXdSYXRlcyA9IF8uZWFjaCh0aGlzLm91dHB1dGRhdGEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7fSk7XG5cbiAgICAgIHZhciBmdWVsUmF0ZURhdGEgPSB7XG4gICAgICAgIFwiZnVlbHJhdGV1cGR0XCI6IHtcbiAgICAgICAgICBcIkZVRUxSQVRFU19JRFwiOiB0aGlzLmZ1ZWxSYXRlc1swXS5GVUVMUkFURVNfSUQsXG4gICAgICAgICAgXCJGVUVMQ0lUWVwiOiB0aGlzLmZ1ZWxSYXRlc1swXS5GVUVMQ0lUWSxcbiAgICAgICAgICBcIlJBVEVcIjogdGhpcy5mdWVsUmF0ZXNbMF0uQ1VSUkFURSxcbiAgICAgICAgICBcIkZVRUxEQVRFXCI6IFwiMTgwMC0wMS0wMVwiLFxuICAgICAgICAgIFwiQUNUSVZFXCI6IFwiQVwiLFxuICAgICAgICAgIFwiQ1JFQVRFREJZXCI6IFwiMVwiLFxuICAgICAgICAgIFwiQ1JFQVRFRE9OXCI6IFwiMjAxNi0wNC0xOFwiXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgZnVlbFJhdGVEYXRhKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMyLmdldEFsbEZ1ZWxSYXRlcygpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmF0ZU1hc3RlckNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVNYXN0ZXJDb250cm9sbGVyID0gUmF0ZU1hc3RlckNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFJhdGVNYXN0ZXJDb250cm9sbGVyIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCBhcGlTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvL3RoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xuICB9XG5cbiAgaW5pdCgpIHtcblxuICB9XG5cbiAgZ2V0QWxsRnVlbFJhdGVzKCl7XG4gICAgdGhpcy5fYXBpLmdldCgnZ2V0cmF0ZXMvZ2V0YWxsJykudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVlbFJhdGVzKTtcblxuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICB0aGlzLnRvYXN0ZXIuZXJyb3IoYCR7ZXJyLnN0YXR1c30gOiAke2Vyci5zdGF0dXNUZXh0fWApO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGRGdWVsUmF0ZSgpe1xuXG4gICAgdmFyIGZ1ZWxSYXRlU2F2ZVVSTCA9ICdmdWVscmF0ZS9JTlNFUlQnO1xuXG4gICAgdmFyIG5ld1JhdGVzID0gXy5lYWNoKHRoaXMub3V0cHV0ZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgIChrZXksIHZhbHVlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgdmFyIGZ1ZWxSYXRlRGF0YSA9XG4gICAge1xuICAgICAgICBcImZ1ZWxyYXRldXBkdFwiIDpcbiAgICAgICAge1xuICAgICAgICAgICAgXCJGVUVMUkFURVNfSURcIjogdGhpcy5mdWVsUmF0ZXNbMF0uRlVFTFJBVEVTX0lELFxuICAgICAgICAgICAgXCJGVUVMQ0lUWVwiIDogdGhpcy5mdWVsUmF0ZXNbMF0uRlVFTENJVFksXG4gICAgICAgICAgICBcIlJBVEVcIiA6IHRoaXMuZnVlbFJhdGVzWzBdLkNVUlJBVEUsXG4gICAgICAgICAgICBcIkZVRUxEQVRFXCIgOiBcIjE4MDAtMDEtMDFcIixcbiAgICAgICAgICAgIFwiQUNUSVZFXCIgOiBcIkFcIixcbiAgICAgICAgICAgIFwiQ1JFQVRFREJZXCIgOiBcIjFcIixcbiAgICAgICAgICAgIFwiQ1JFQVRFRE9OXCIgOiBcIjIwMTYtMDQtMThcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgZnVlbFJhdGVEYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFJhdGVRdWVyeUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcbiAgZnVuY3Rpb24gUmF0ZVF1ZXJ5Q29udHJvbGxlcigkdGltZW91dCwgYXBpU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF0ZVF1ZXJ5Q29udHJvbGxlcik7XG5cbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlUXVlcnlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2luaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICB2YXIgYXBpRGF0YSA9IFt7XG4gICAgICAgICdjaXR5JzogJ01VTUJBSScsXG4gICAgICAgICdsYXN0dXBkYXRlZHJhdGUnOiAnNTAuMTAnLFxuICAgICAgICAnbGFzdHVwZGF0ZWRkYXRlJzogJzAxLUphbi0yMDE2JyxcbiAgICAgICAgJ2N1cnJlbnRyYXRlJzogJzAxLUphbi0yMDE2J1xuICAgICAgfSwge1xuICAgICAgICAnY2l0eSc6ICdNVU1CQUknLFxuICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJzogJzUwLjEwJyxcbiAgICAgICAgJ2xhc3R1cGRhdGVkZGF0ZSc6ICcwMS1KYW4tMjAxNicsXG4gICAgICAgICdjdXJyZW50cmF0ZSc6ICcwMS1KYW4tMjAxNidcbiAgICAgIH0sIHtcbiAgICAgICAgJ2NpdHknOiAnTVVNQkFJJyxcbiAgICAgICAgJ2xhc3R1cGRhdGVkcmF0ZSc6ICc1MC4xMCcsXG4gICAgICAgICdsYXN0dXBkYXRlZGRhdGUnOiAnMDEtSmFuLTIwMTYnLFxuICAgICAgICAnY3VycmVudHJhdGUnOiAnMDEtSmFuLTIwMTYnXG4gICAgICB9XTtcblxuICAgICAgdGhpcy5hcGlEYXRhID0gYXBpRGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGFwaURhdGEpO1xuICAgICAgLypcclxuICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0cmZwbGlzdC9nZXRhbGwnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdmFyIGJhYyA9IHJlcy5kYXRhO1xyXG4gICAgICBiYWMgPSBfLm1hcChiYWMsIChjb250cmFjdCkgPT4ge1xyXG4gICAgICAvLyAgY29udHJhY3QuUkZQREFURSA9IG5ldyBEYXRlKGNvbnRyYWN0LlJGUERBVEUpO1xyXG4gICAgICAvLyAgY29udHJhY3QuRFVFREFURSA9IG5ldyBEYXRlKGNvbnRyYWN0LkRVRURBVEUpO1xyXG4gICAgICAgIHJldHVybiBjb250cmFjdDtcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5iYWMgPSBiYWM7XHJcbiAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgfSk7XHJcbiAgICAgICovXG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGVRdWVyeUNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVRdWVyeUNvbnRyb2xsZXIgPSBSYXRlUXVlcnlDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmF0ZVF1ZXJ5Q29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XHJcbiAgY29uc3RydWN0b3IoJHRpbWVvdXQsIGFwaVNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICAvL3RoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XHJcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG5cclxuICAgIHZhciBhcGlEYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ2NpdHknIDogJ01VTUJBSScsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZHJhdGUnIDogJzUwLjEwJyxcclxuICAgICAgICAgICAgJ2xhc3R1cGRhdGVkZGF0ZScgOiAnMDEtSmFuLTIwMTYnLFxyXG4gICAgICAgICAgICAnY3VycmVudHJhdGUnIDogJzAxLUphbi0yMDE2J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ2NpdHknIDogJ01VTUJBSScsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZHJhdGUnIDogJzUwLjEwJyxcclxuICAgICAgICAgICAgJ2xhc3R1cGRhdGVkZGF0ZScgOiAnMDEtSmFuLTIwMTYnLFxyXG4gICAgICAgICAgICAnY3VycmVudHJhdGUnIDogJzAxLUphbi0yMDE2J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ2NpdHknIDogJ01VTUJBSScsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZHJhdGUnIDogJzUwLjEwJyxcclxuICAgICAgICAgICAgJ2xhc3R1cGRhdGVkZGF0ZScgOiAnMDEtSmFuLTIwMTYnLFxyXG4gICAgICAgICAgICAnY3VycmVudHJhdGUnIDogJzAxLUphbi0yMDE2J1xyXG4gICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLmFwaURhdGEgPSBhcGlEYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFwaURhdGEpO1xyXG4gICAgICAgIC8qXHJcbiAgICB0aGlzLl9hcGkuZ2V0KCdnZXRyZnBsaXN0L2dldGFsbCcpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHZhciBiYWMgPSByZXMuZGF0YTtcclxuICAgICAgICBiYWMgPSBfLm1hcChiYWMsIChjb250cmFjdCkgPT4ge1xyXG4gICAgICAgIC8vICBjb250cmFjdC5SRlBEQVRFID0gbmV3IERhdGUoY29udHJhY3QuUkZQREFURSk7XHJcbiAgICAgICAgLy8gIGNvbnRyYWN0LkRVRURBVEUgPSBuZXcgRGF0ZShjb250cmFjdC5EVUVEQVRFKTtcclxuICAgICAgICAgIHJldHVybiBjb250cmFjdDtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iYWMgPSBiYWM7XHJcbiAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICB0aGlzLnRvYXN0ZXIuZXJyb3IoYCR7ZXJyLnN0YXR1c30gOiAke2Vyci5zdGF0dXNUZXh0fWApO1xyXG4gICAgICB9KTtcclxuICAgICovXHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL3JhdGVxdWVyeS9yYXRlcXVlcnkuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgQXBwQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFwcENvbnRyb2xsZXIoYXV0aFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcENvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpc0xvZ2dlZGluJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNMb2dnZWRpbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG9naW5Cb2R5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9naW5Cb2R5KCkge1xuICAgICAgaWYgKHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHJldHVybiAnaXNsb2dnZWRpbic7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2lnbk91dFVzZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaWduT3V0VXNlcigpIHtcbiAgICAgIHRoaXMuYXV0aC5zaWdub3V0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcENvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkFwcENvbnRyb2xsZXIgPSBBcHBDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZSkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkaW4gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuICB9XHJcblxyXG4gIGxvZ2luQm9keSAoKSB7XHJcbiAgICBpZih0aGlzLmF1dGguYXV0aGVudGljYXRlZCl7XHJcbiAgICAgIHJldHVybiAnaXNsb2dnZWRpbic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaWduT3V0VXNlcigpe1xyXG4gICAgdGhpcy5hdXRoLnNpZ25vdXQoKTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldENvbnRyaWJ1dG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycyhsaW1pdCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFsaW1pdCkge1xuICAgICAgICBsaW1pdCA9IDMwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdCkge1xuICAgIGlmICghbGltaXQpIHtcbiAgICAgIGxpbWl0ID0gMzA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgYXV0aFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhdXRoU2VydmljZSgkcSwgJHN0YXRlLCBhcGlTZXJ2aWNlLCAkd2luZG93KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRoU2VydmljZSk7XG5cbiAgICB0aGlzLiRxID0gJHE7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgIHRoaXMudXNlckluZm8gPSB7fTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhhdXRoU2VydmljZSwgW3tcbiAgICBrZXk6ICdsb2dpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdsb2dpbi8nICsgdXNlcm5hbWUgKyAnLycgKyBwYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBfdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpcy51c2VySW5mbyA9IHJlc3VsdC5kYXRhWzBdO1xuICAgICAgICAgIC8vdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgX3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IGFuZ3VsYXIudG9Kc29uKF90aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF90aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5hdXRoRmFpbGVkTXNnID0gJ1VzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4nO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVc2VySW5mbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZXJJbmZvKCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckluZm87XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNBdXRoZW50aWNhdGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyk7XG4gICAgICBpZiAodGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9IHVuZGVmaW5lZCAmJiB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gJycpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25vdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaWdub3V0KCkge1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSAnJztcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdsb2dpbicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBhdXRoU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkcSwgJHN0YXRlLCBhcGlTZXJ2aWNlLCAkd2luZG93KSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgIHRoaXMudXNlckluZm8gPSB7fTtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJyc7XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBsb2dpbi8ke3VzZXJuYW1lfS8ke3Bhc3N3b3JkfWApLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlckluZm8gPSByZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAvL3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IGFuZ3VsYXIudG9Kc29uKHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodGhpcy51c2VySW5mbyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJ1VzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlckluZm87XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8pO1xyXG4gICAgaWYgKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSB1bmRlZmluZWQgJiYgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9ICcnKSB7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xyXG4gIH1cclxuXHJcbiAgc2lnbm91dCgpIHtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gJyc7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgYXBpU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGFwaVNlcnZpY2UoJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGFwaVNlcnZpY2UpO1xuXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgLy90aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xNzIuMzIuMC4yMjYnO1xuICAgIHRoaXMuX2hvc3QgPSAnaHR0cDovLzExNS4xMTMuMTM1LjIzOSc7XG4gICAgdGhpcy5fYmFzZVVSTCA9IHRoaXMuX2hvc3QgKyAnL0JBQ19XQ0YvQkFDT05UUkFDVFJlc3RTZXJ2aWNlLnN2Yyc7XG5cbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUgPSB7XG4gICAgICBtZXRob2Q6ICcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhhcGlTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcblxuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IHRoaXMuX2Jhc2VVUkwgKyAnLycgKyB1cmw7XG4gICAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSwgaXNGdWxsVVJMKSB7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGlzRnVsbFVSTCA/IHVybCA6IHRoaXMuX2Jhc2VVUkwgKyAnLycgKyB1cmw7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUuZGF0YSA9IGRhdGE7XG4gICAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIb3N0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIGFwaVNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLmFwaVNlcnZpY2UgPSBhcGlTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBhcGlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgLy90aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xNzIuMzIuMC4yMjYnO1xuICAgIHRoaXMuX2hvc3QgPSAnaHR0cDovLzExNS4xMTMuMTM1LjIzOSc7XG4gICAgdGhpcy5fYmFzZVVSTCA9IGAke3RoaXMuX2hvc3R9L0JBQ19XQ0YvQkFDT05UUkFDVFJlc3RTZXJ2aWNlLnN2Y2A7XG5cbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUgPSB7XG4gICAgICBtZXRob2Q6ICcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIGdldCh1cmwpIHtcblxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnR0VUJztcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gYCR7dGhpcy5fYmFzZVVSTH0vJHt1cmx9YDtcbiAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICB9XG5cbiAgcG9zdCh1cmwsIGRhdGEsIGlzRnVsbFVSTCkge1xuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnUE9TVCc7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGlzRnVsbFVSTCA/IHVybCA6IGAke3RoaXMuX2Jhc2VVUkx9LyR7dXJsfWA7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLmRhdGEgPSBkYXRhO1xuICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gIH1cblxuICBnZXRIb3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFdlYkRldlRlY1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXZWJEZXZUZWNTZXJ2aWNlKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViRGV2VGVjU2VydmljZSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbe1xuICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICB9XTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhXZWJEZXZUZWNTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldFRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRlYygpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXHJcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcclxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdLYXJtYScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxyXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcclxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGVjKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTmF2YmFyRGlyZWN0aXZlID0gTmF2YmFyRGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxudmFyIE5hdmJhckNvbnRyb2xsZXIgPSBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKG1vbWVudCkge1xuICAnbmdJbmplY3QnO1xuXG4gIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmJhckNvbnRyb2xsZXIpO1xuXG4gIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHMuTWFsYXJrZXlEaXJlY3RpdmUgPSBNYWxhcmtleURpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIHZhciB3YXRjaGVyID0gdW5kZWZpbmVkO1xuICAgIHZhciB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKClbJ2RlbGV0ZSddKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCBmdW5jdGlvbiAoY29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKClbJ2RlbGV0ZSddKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFsYXJrZXlDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbGFya2V5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBfdGhpczIuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRyaWJ1dG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==