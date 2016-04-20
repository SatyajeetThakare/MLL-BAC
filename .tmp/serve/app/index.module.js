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
	        this.getDashContractsToBeNego();
	        this.getDashContractsAmmended();
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
	    }, {
	        key: 'getDashContractsToBeNego',
	        value: function getDashContractsToBeNego() {
	            var _this3 = this;
	
	            this._api.get('getdashcontractstobenego/1').then(function (nego) {
	                console.log(nego.data);
	                _this3.contractsToBeNego = nego.data;
	            }, function (err) {
	                console.log(err);
	            });
	        }
	    }, {
	        key: 'getDashContractsAmmended',
	        value: function getDashContractsAmmended() {
	            var _this4 = this;
	
	            this._api.get('getdashcontractsammended/1').then(function (nego) {
	                console.log(nego.data);
	                _this4.contractsAmmended = nego.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDU3MmE5ZDBmNTBjOGRkNzU3ZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fw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S0FBSyxVQUFDLE1BQVM7U0FDMUQsT0FBSyxlQUFlOztTQUVwQixPQUFPLE9BQUs7Ozs7O0dEeUJoQixPQzdDSSIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDA1NzJhOWQwZjUwYzhkZDc1N2RkXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4Q29uZmlnID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleFJvdXRlID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4UnVuID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluTWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfbG9naW5Mb2dpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInKTtcblxudmFyIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyID0gcmVxdWlyZSgnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInKTtcblxudmFyIF9yYXRlbWFzdGVyUmF0ZW1hc3RlckNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyJyk7XG5cbnZhciBfcmF0ZXF1ZXJ5UmF0ZXF1ZXJ5Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBDb21wb25lbnRzR2l0aHViQ29udHJpYnV0b3JHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwTG9naW5BdXRoU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzQXBpQXBpU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c05hdmJhck5hdmJhckRpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcblxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4Q29uZmlnLmNvbmZpZykuY29uZmlnKF9pbmRleFJvdXRlLnJvdXRlckNvbmZpZykucnVuKF9pbmRleFJ1bi5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlLldlYkRldlRlY1NlcnZpY2UpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW5NYWluQ29udHJvbGxlci5NYWluQ29udHJvbGxlcikuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgX2xvZ2luTG9naW5Db250cm9sbGVyLkxvZ2luQ29udHJvbGxlcikuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyLkRhc2hib2FyZENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1JhdGVNYXN0ZXJDb250cm9sbGVyJywgX3JhdGVtYXN0ZXJSYXRlbWFzdGVyQ29udHJvbGxlci5SYXRlTWFzdGVyQ29udHJvbGxlcikuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIF9yYXRlcXVlcnlSYXRlcXVlcnlDb250cm9sbGVyLlJhdGVRdWVyeUNvbnRyb2xsZXIpLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgX2FwcExvZ2luQXV0aFNlcnZpY2UuYXV0aFNlcnZpY2UpLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UuYXBpU2VydmljZSkuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUuTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIF9hcHBDb21wb25lbnRzTWFsYXJrZXlNYWxhcmtleURpcmVjdGl2ZS5NYWxhcmtleURpcmVjdGl2ZSkuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIF9hcHBDb21wb25lbnRzQXBwQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cclxuXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcclxuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XHJcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xyXG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSYXRlTWFzdGVyQ29udHJvbGxlciB9IGZyb20gJy4vcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSYXRlUXVlcnlDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2xvZ2luL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IGFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXHJcblxyXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcclxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcclxuICAuY29uZmlnKGNvbmZpZylcclxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcclxuICAucnVuKHJ1bkJsb2NrKVxyXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcclxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcclxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignUmF0ZU1hc3RlckNvbnRyb2xsZXInLCBSYXRlTWFzdGVyQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIFJhdGVRdWVyeUNvbnRyb2xsZXIpXHJcbiAgLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgYXV0aFNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBhcGlTZXJ2aWNlKVxyXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXHJcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpXHJcbiAgLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBBcHBDb250cm9sbGVyKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcblxuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gIC8vIEVuYWJsZSBsb2dcclxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xyXG5cclxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcclxuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XHJcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgLypcclxuICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXHJcbiAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gIH0pXHJcbiAgKi9cbiAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgYXV0aGVudGljYXRlOiBmYWxzZVxuICB9KS5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcbiAgICB1cmw6ICcvcmF0ZW1hc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZScsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pLnN0YXRlKCdyYXRlcXVlcnknLCB7XG4gICAgdXJsOiAnL3JhdGVxdWVyeScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnUmF0ZVF1ZXJ5Q29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZXF1ZXJ5JyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSkuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdkYXNoJyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAvKlxyXG4gICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gICAgfSlcclxuICAgICovXHJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcclxuICAgIH0pXHJcbiAgIC5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcclxuICAgICAgdXJsOiAnL3JhdGVtYXN0ZXInLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3JhdGUnLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgIC5zdGF0ZSgncmF0ZXF1ZXJ5Jywge1xyXG4gICAgICB1cmw6ICcvcmF0ZXF1ZXJ5JyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ1JhdGVRdWVyeUNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcclxuICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnZGFzaCcsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucm91dGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuXG5mdW5jdGlvbiBydW5CbG9jaygkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0NjA3MjU5OTIxNjM7XG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcbiAgICAgIH0sIDQwMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFdlYkRldlRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcbiAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcblxuICAgICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG93VG9hc3RyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1RvYXN0cigpIHtcbiAgICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcclxuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xyXG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcclxuICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcclxuICAgIH0sIDQwMDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xyXG5cclxuICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpID0+IHtcclxuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93VG9hc3RyKCkge1xyXG4gICAgLy90aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIExvZ2luQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xuICBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvZ2luQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhdXRoZW50aWNhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgaWYgKCEhcmVzKSB7XG4gICAgICAgICAgaWYgKF90aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHt9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldE1zZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0TXNnKCkge1xuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgICB9XG5cbiAgICAvLyBpc0xvZ2luKCkge1xuICAgIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xuICAgIC8vIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2dpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkxvZ2luQ29udHJvbGxlciA9IExvZ2luQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xyXG4gIH1cclxuXHJcbiAgYXV0aGVudGljYXRlKCkge1xyXG5cclxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKS50aGVuKChyZXMpID0+IHtcclxuXHJcbiAgICAgIGlmICghIXJlcykge1xyXG4gICAgICAgIGlmICh0aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRNc2coKXtcclxuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcclxuICB9XHJcblxyXG4gIC8vIGlzTG9naW4oKSB7XHJcbiAgLy8gICByZXR1cm4gJ2xvZ2luYm9keSc7XHJcbiAgLy8gfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIERhc2hib2FyZENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UsIG1hc3RlclNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgICBmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCRodHRwLCBhcGlTZXJ2aWNlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhc2hib2FyZENvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAgICAgLy90aGlzLl9tYXN0ZXIgPSBtYXN0ZXJTZXJ2aWNlO1xuICAgICAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0V4cCgpO1xuICAgICAgICB0aGlzLmdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCk7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCk7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERhc2hib2FyZENvbnRyb2xsZXIsIFt7XG4gICAgICAgIGtleTogJ2luaXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzRXhwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNFeHAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29udHJhY3RzRXhwaXJlZCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0ZGFzaGNvbnRyYWN0c2Nsb3NldG9leHAvMScpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpczIuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNUb0JlTmVnbygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzdG9iZW5lZ28vMScpLnRoZW4oZnVuY3Rpb24gKG5lZ28pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZWdvLmRhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzMy5jb250cmFjdHNUb0JlTmVnbyA9IG5lZ28uZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNBbW1lbmRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0ZGFzaGNvbnRyYWN0c2FtbWVuZGVkLzEnKS50aGVuKGZ1bmN0aW9uIChuZWdvKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmVnby5kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpczQuY29udHJhY3RzQW1tZW5kZWQgPSBuZWdvLmRhdGE7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERhc2hib2FyZENvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkRhc2hib2FyZENvbnRyb2xsZXIgPSBEYXNoYm9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciB7XG4gIC8vY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UsIG1hc3RlclNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCk7XG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cblxuICB9XG5cbmdldERhc2hDb250cmFjdHNFeHAoKXtcblxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHNleHAvMWApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzRXhwaXJlZCA9IHJlcy5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCl7XG5cbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzY2xvc2V0b2V4cC8xYClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNDbG9zZVRvRXhwaXJ5ID0gcmVzLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCl7XG5cbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzdG9iZW5lZ28vMWApXG4gICAgICAgIC50aGVuKChuZWdvKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZWdvLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNUb0JlTmVnbyA9IG5lZ28uZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIGdldERhc2hDb250cmFjdHNBbW1lbmRlZCgpe1xuXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2FtbWVuZGVkLzFgKVxuICAgICAgICAudGhlbigobmVnbykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmVnby5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzQW1tZW5kZWQgPSBuZWdvLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgUmF0ZU1hc3RlckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcbiAgZnVuY3Rpb24gUmF0ZU1hc3RlckNvbnRyb2xsZXIoJHRpbWVvdXQsIGFwaVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIC8vdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGVNYXN0ZXJDb250cm9sbGVyKTtcblxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmF0ZU1hc3RlckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsRnVlbFJhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRnVlbFJhdGVzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0cmF0ZXMvZ2V0YWxsJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5mdWVsUmF0ZXMpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfdGhpcy50b2FzdGVyLmVycm9yKGVyci5zdGF0dXMgKyAnIDogJyArIGVyci5zdGF0dXNUZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZEZ1ZWxSYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRnVlbFJhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZ1ZWxSYXRlU2F2ZVVSTCA9ICdmdWVscmF0ZS9JTlNFUlQnO1xuXG4gICAgICB2YXIgbmV3UmF0ZXMgPSBfLmVhY2godGhpcy5vdXRwdXRkYXRhLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge30pO1xuXG4gICAgICB2YXIgZnVlbFJhdGVEYXRhID0ge1xuICAgICAgICBcImZ1ZWxyYXRldXBkdFwiOiB7XG4gICAgICAgICAgXCJGVUVMUkFURVNfSURcIjogdGhpcy5mdWVsUmF0ZXNbMF0uRlVFTFJBVEVTX0lELFxuICAgICAgICAgIFwiRlVFTENJVFlcIjogdGhpcy5mdWVsUmF0ZXNbMF0uRlVFTENJVFksXG4gICAgICAgICAgXCJSQVRFXCI6IHRoaXMuZnVlbFJhdGVzWzBdLkNVUlJBVEUsXG4gICAgICAgICAgXCJGVUVMREFURVwiOiBcIjE4MDAtMDEtMDFcIixcbiAgICAgICAgICBcIkFDVElWRVwiOiBcIkFcIixcbiAgICAgICAgICBcIkNSRUFURURCWVwiOiBcIjFcIixcbiAgICAgICAgICBcIkNSRUFURURPTlwiOiBcIjIwMTYtMDQtMThcIlxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9hcGkucG9zdChmdWVsUmF0ZVNhdmVVUkwsIGZ1ZWxSYXRlRGF0YSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzMi5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGVNYXN0ZXJDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5SYXRlTWFzdGVyQ29udHJvbGxlciA9IFJhdGVNYXN0ZXJDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBSYXRlTWFzdGVyQ29udHJvbGxlciB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgfVxuXG4gIGdldEFsbEZ1ZWxSYXRlcygpe1xuICAgIHRoaXMuX2FwaS5nZXQoJ2dldHJhdGVzL2dldGFsbCcpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZ1ZWxSYXRlcyk7XG5cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkRnVlbFJhdGUoKXtcblxuICAgIHZhciBmdWVsUmF0ZVNhdmVVUkwgPSAnZnVlbHJhdGUvSU5TRVJUJztcblxuICAgIHZhciBuZXdSYXRlcyA9IF8uZWFjaCh0aGlzLm91dHB1dGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIHZhciBmdWVsUmF0ZURhdGEgPVxuICAgIHtcbiAgICAgICAgXCJmdWVscmF0ZXVwZHRcIiA6XG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiRlVFTFJBVEVTX0lEXCI6IHRoaXMuZnVlbFJhdGVzWzBdLkZVRUxSQVRFU19JRCxcbiAgICAgICAgICAgIFwiRlVFTENJVFlcIiA6IHRoaXMuZnVlbFJhdGVzWzBdLkZVRUxDSVRZLFxuICAgICAgICAgICAgXCJSQVRFXCIgOiB0aGlzLmZ1ZWxSYXRlc1swXS5DVVJSQVRFLFxuICAgICAgICAgICAgXCJGVUVMREFURVwiIDogXCIxODAwLTAxLTAxXCIsXG4gICAgICAgICAgICBcIkFDVElWRVwiIDogXCJBXCIsXG4gICAgICAgICAgICBcIkNSRUFURURCWVwiIDogXCIxXCIsXG4gICAgICAgICAgICBcIkNSRUFURURPTlwiIDogXCIyMDE2LTA0LTE4XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9hcGkucG9zdChmdWVsUmF0ZVNhdmVVUkwsIGZ1ZWxSYXRlRGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlUXVlcnlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIFJhdGVRdWVyeUNvbnRyb2xsZXIoJHRpbWVvdXQsIGFwaVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIC8vdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGVRdWVyeUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmF0ZVF1ZXJ5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcblxuICAgICAgdmFyIGFwaURhdGEgPSBbe1xuICAgICAgICAnY2l0eSc6ICdNVU1CQUknLFxuICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJzogJzUwLjEwJyxcbiAgICAgICAgJ2xhc3R1cGRhdGVkZGF0ZSc6ICcwMS1KYW4tMjAxNicsXG4gICAgICAgICdjdXJyZW50cmF0ZSc6ICcwMS1KYW4tMjAxNidcbiAgICAgIH0sIHtcbiAgICAgICAgJ2NpdHknOiAnTVVNQkFJJyxcbiAgICAgICAgJ2xhc3R1cGRhdGVkcmF0ZSc6ICc1MC4xMCcsXG4gICAgICAgICdsYXN0dXBkYXRlZGRhdGUnOiAnMDEtSmFuLTIwMTYnLFxuICAgICAgICAnY3VycmVudHJhdGUnOiAnMDEtSmFuLTIwMTYnXG4gICAgICB9LCB7XG4gICAgICAgICdjaXR5JzogJ01VTUJBSScsXG4gICAgICAgICdsYXN0dXBkYXRlZHJhdGUnOiAnNTAuMTAnLFxuICAgICAgICAnbGFzdHVwZGF0ZWRkYXRlJzogJzAxLUphbi0yMDE2JyxcbiAgICAgICAgJ2N1cnJlbnRyYXRlJzogJzAxLUphbi0yMDE2J1xuICAgICAgfV07XG5cbiAgICAgIHRoaXMuYXBpRGF0YSA9IGFwaURhdGE7XG4gICAgICBjb25zb2xlLmxvZyhhcGlEYXRhKTtcbiAgICAgIC8qXHJcbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldHJmcGxpc3QvZ2V0YWxsJykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHZhciBiYWMgPSByZXMuZGF0YTtcclxuICAgICAgYmFjID0gXy5tYXAoYmFjLCAoY29udHJhY3QpID0+IHtcclxuICAgICAgLy8gIGNvbnRyYWN0LlJGUERBVEUgPSBuZXcgRGF0ZShjb250cmFjdC5SRlBEQVRFKTtcclxuICAgICAgLy8gIGNvbnRyYWN0LkRVRURBVEUgPSBuZXcgRGF0ZShjb250cmFjdC5EVUVEQVRFKTtcclxuICAgICAgICByZXR1cm4gY29udHJhY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYmFjID0gYmFjO1xyXG4gICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMudG9hc3Rlci5lcnJvcihgJHtlcnIuc3RhdHVzfSA6ICR7ZXJyLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAqL1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYXRlUXVlcnlDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5SYXRlUXVlcnlDb250cm9sbGVyID0gUmF0ZVF1ZXJ5Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFJhdGVRdWVyeUNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xyXG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCBhcGlTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcbiAgICB2YXIgYXBpRGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdjaXR5JyA6ICdNVU1CQUknLFxyXG4gICAgICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJyA6ICc1MC4xMCcsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZGRhdGUnIDogJzAxLUphbi0yMDE2JyxcclxuICAgICAgICAgICAgJ2N1cnJlbnRyYXRlJyA6ICcwMS1KYW4tMjAxNidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdjaXR5JyA6ICdNVU1CQUknLFxyXG4gICAgICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJyA6ICc1MC4xMCcsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZGRhdGUnIDogJzAxLUphbi0yMDE2JyxcclxuICAgICAgICAgICAgJ2N1cnJlbnRyYXRlJyA6ICcwMS1KYW4tMjAxNidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdjaXR5JyA6ICdNVU1CQUknLFxyXG4gICAgICAgICAgICAnbGFzdHVwZGF0ZWRyYXRlJyA6ICc1MC4xMCcsXHJcbiAgICAgICAgICAgICdsYXN0dXBkYXRlZGRhdGUnIDogJzAxLUphbi0yMDE2JyxcclxuICAgICAgICAgICAgJ2N1cnJlbnRyYXRlJyA6ICcwMS1KYW4tMjAxNidcclxuICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5hcGlEYXRhID0gYXBpRGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcGlEYXRhKTtcclxuICAgICAgICAvKlxyXG4gICAgdGhpcy5fYXBpLmdldCgnZ2V0cmZwbGlzdC9nZXRhbGwnKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB2YXIgYmFjID0gcmVzLmRhdGE7XHJcbiAgICAgICAgYmFjID0gXy5tYXAoYmFjLCAoY29udHJhY3QpID0+IHtcclxuICAgICAgICAvLyAgY29udHJhY3QuUkZQREFURSA9IG5ldyBEYXRlKGNvbnRyYWN0LlJGUERBVEUpO1xyXG4gICAgICAgIC8vICBjb250cmFjdC5EVUVEQVRFID0gbmV3IERhdGUoY29udHJhY3QuRFVFREFURSk7XHJcbiAgICAgICAgICByZXR1cm4gY29udHJhY3Q7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFjID0gYmFjO1xyXG4gICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBcHBDb250cm9sbGVyKGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHBDb250cm9sbGVyKTtcblxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaXNMb2dnZWRpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTG9nZ2VkaW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvZ2luQm9keScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luQm9keSgpIHtcbiAgICAgIGlmICh0aGlzLmF1dGguYXV0aGVudGljYXRlZCkge1xuICAgICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25PdXRVc2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbk91dFVzZXIoKSB7XG4gICAgICB0aGlzLmF1dGguc2lnbm91dCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHBDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5BcHBDb250cm9sbGVyID0gQXBwQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZGluICgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgfVxyXG5cclxuICBsb2dpbkJvZHkgKCkge1xyXG4gICAgaWYodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lnbk91dFVzZXIoKXtcclxuICAgIHRoaXMuYXV0aC5zaWdub3V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghbGltaXQpIHtcbiAgICAgICAgbGltaXQgPSAzMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5HaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICBpZiAoIWxpbWl0KSB7XG4gICAgICBsaW1pdCA9IDMwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGF1dGhTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYXV0aFNlcnZpY2UoJHEsICRzdGF0ZSwgYXBpU2VydmljZSwgJHdpbmRvdykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXV0aFNlcnZpY2UpO1xuXG4gICAgdGhpcy4kcSA9ICRxO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB0aGlzLnVzZXJJbmZvID0ge307XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJyc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoYXV0aFNlcnZpY2UsIFt7XG4gICAga2V5OiAnbG9naW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcblxuICAgICAgdGhpcy5fYXBpLmdldCgnbG9naW4vJyArIHVzZXJuYW1lICsgJy8nICsgcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgX3RoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMudXNlckluZm8gPSByZXN1bHQuZGF0YVswXTtcbiAgICAgICAgICAvL3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8pO1xuICAgICAgICAgIF90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBhbmd1bGFyLnRvSnNvbihfdGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfdGhpcy51c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuYXV0aEZhaWxlZE1zZyA9ICdVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuJztcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXNlckluZm8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVc2VySW5mbygpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQXV0aGVudGljYXRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8pO1xuICAgICAgaWYgKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSB1bmRlZmluZWQgJiYgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9ICcnKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaWdub3V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbm91dCgpIHtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gJyc7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gYXV0aFNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBhdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHEsICRzdGF0ZSwgYXBpU2VydmljZSwgJHdpbmRvdykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMuJHEgPSAkcTtcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLnVzZXJJbmZvID0ge307XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICB2YXIgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgbG9naW4vJHt1c2VybmFtZX0vJHtwYXNzd29yZH1gKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzdWx0LmRhdGFbMF07XHJcbiAgICAgICAgLy90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBhbmd1bGFyLnRvSnNvbih0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRoaXMudXNlckluZm8pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICdVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuJztcclxuICAgICAgfVxyXG5cclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRoZW50aWNhdGVkKCkge1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvKTtcclxuICAgIGlmICh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gdW5kZWZpbmVkICYmIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSAnJykge1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcclxuICB9XHJcblxyXG4gIHNpZ25vdXQoKSB7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9ICcnO1xyXG4gICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGFwaVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhcGlTZXJ2aWNlKCRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhcGlTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgIC8vdGhpcy5faG9zdCA9ICdodHRwOi8vMTcyLjMyLjAuMjI2JztcbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xuICAgIHRoaXMuX2Jhc2VVUkwgPSB0aGlzLl9ob3N0ICsgJy9CQUNfV0NGL0JBQ09OVFJBQ1RSZXN0U2VydmljZS5zdmMnO1xuXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0ge1xuICAgICAgbWV0aG9kOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoYXBpU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQodXJsKSB7XG5cbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnR0VUJztcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSB0aGlzLl9iYXNlVVJMICsgJy8nICsgdXJsO1xuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3N0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEsIGlzRnVsbFVSTCkge1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBpc0Z1bGxVUkwgPyB1cmwgOiB0aGlzLl9iYXNlVVJMICsgJy8nICsgdXJsO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLmRhdGEgPSBkYXRhO1xuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRIb3N0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SG9zdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBhcGlTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5hcGlTZXJ2aWNlID0gYXBpU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgYXBpU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgIC8vdGhpcy5faG9zdCA9ICdodHRwOi8vMTcyLjMyLjAuMjI2JztcbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xuICAgIHRoaXMuX2Jhc2VVUkwgPSBgJHt0aGlzLl9ob3N0fS9CQUNfV0NGL0JBQ09OVFJBQ1RSZXN0U2VydmljZS5zdmNgO1xuXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0ge1xuICAgICAgbWV0aG9kOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICBnZXQodXJsKSB7XG5cbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ0dFVCc7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGAke3RoaXMuX2Jhc2VVUkx9LyR7dXJsfWA7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcbiAgfVxuXG4gIHBvc3QodXJsLCBkYXRhLCBpc0Z1bGxVUkwpIHtcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ1BPU1QnO1xuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBpc0Z1bGxVUkwgPyB1cmwgOiBgJHt0aGlzLl9iYXNlVVJMfS8ke3VybH1gO1xuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5kYXRhID0gZGF0YTtcbiAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICB9XG5cbiAgZ2V0SG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYkRldlRlY1NlcnZpY2UpO1xuXG4gICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgfV07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2ViRGV2VGVjU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZWMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gV2ViRGV2VGVjU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxyXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcclxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxyXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldFRlYygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk5hdmJhckRpcmVjdGl2ZSA9IE5hdmJhckRpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbnZhciBOYXZiYXJDb250cm9sbGVyID0gZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcihtb21lbnQpIHtcbiAgJ25nSW5qZWN0JztcblxuICAvLyBcInRoaXMuY3JlYXRpb25cIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZiYXJDb250cm9sbGVyKTtcblxuICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzLk1hbGFya2V5RGlyZWN0aXZlID0gTWFsYXJrZXlEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpWydkZWxldGUnXSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgZnVuY3Rpb24gKCkge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24gKGNvbnRyaWJ1dG9yKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpWydkZWxldGUnXSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbGFya2V5Q29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWxhcmtleUNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnRyaWJ1dG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgX3RoaXMyLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMi5jb250cmlidXRvcnM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=