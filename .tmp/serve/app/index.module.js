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
	    url: '/ratequery/:cityid',
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
	  RateMasterController.$inject = ["$timeout", "apiService", "$filter", "$state"];
	  function RateMasterController($timeout, apiService, $filter, $state) {
	    'ngInject';
	    //this.$http = $http;
	
	    _classCallCheck(this, RateMasterController);
	
	    this.$filter = $filter;
	    this.$state = $state;
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
	
	      this._api.get('getrates/all').then(function (res) {
	        _this.fuelRates = res.data;
	        var newOutputData = _.each(_this.fuelRates, function (key, value) {
	          var FUELDATE = _this.fuelRates[value].FUELDATE;
	          FUELDATE = _this.$filter('date')(new Date(_this.fuelRates[value].FUELDATE), 'dd-MMM-yyyy');
	          _this.fuelRates[value].FUELDATE = FUELDATE;
	        });
	
	        _this.fuelRates = newOutputData;
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
	
	      var revisedRates = _.chain(this.fuelRates).map(function (rate) {
	
	        rate.FUELRATES_ID = rate.CURRATE > 0 ? 0 : rate.FUELRATES_ID;
	        rate.FUELCITY = rate.LOCATIONNAME;
	        rate.RATE = rate.CURRATE;
	        rate.FUELDATE = _this2.$filter('date')(new Date(), 'yyyy-MM-dd');
	        rate.ACTIVE = "A";
	        rate.CREATEDBY = 1;
	        rate.CREATEDON = _this2.$filter('date')(new Date(), 'yyyy-MM-dd');
	        rate.MODE = "INSERT";
	
	        return rate;
	      }).value();
	
	      var newRate = {
	        fuelrate: revisedRates
	      };
	
	      this._api.post(fuelRateSaveURL, newRate).then(function (res) {
	        _this2.getAllFuelRates();
	      }, function (err) {
	        console.error(err);
	      });
	    }
	  }, {
	    key: 'viewHistData',
	    value: function viewHistData(table) {
	
	      //console.log(table.FUELCITY);
	      this.$state.go('ratequery', { cityid: table.FUELCITY });
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
	  RateQueryController.$inject = ["$timeout", "apiService", "$stateParams", "$filter"];
	  function RateQueryController($timeout, apiService, $stateParams, $filter) {
	    'ngInject';
	
	    _classCallCheck(this, RateQueryController);
	
	    this._api = apiService;
	    this.$stateParams = $stateParams;
	    this.$filter = $filter;
	
	    this.getAllCity();
	
	    this.FUELTODATE = new Date();
	
	    var fuelFromDate = new Date();
	    fuelFromDate.setDate(fuelFromDate.getDate() - 180);
	    this.FUELFROMDATE = fuelFromDate;
	
	    this.getAllFuelRates();
	  }
	
	  _createClass(RateQueryController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'getAllFuelRates',
	    value: function getAllFuelRates() {
	      var _this = this;
	
	      var fromdt = this.$filter('date')(new Date(this.FUELFROMDATE), 'yyyy-MM-dd');
	      var todt = this.$filter('date')(new Date(this.FUELTODATE), 'yyyy-MM-dd');
	
	      var urlnew = 'getratequery/' + this.$stateParams.cityid + '/' + fromdt + '/' + todt;
	      console.log(urlnew);
	
	      this._api.get('getratequery/' + this.$stateParams.cityid + '/' + fromdt + '/' + todt).then(function (res) {
	        _this.fuelRates = res.data;
	      }, function (err) {
	        _this.toaster.error(err.status + ' : ' + err.statusText);
	      });
	    }
	  }, {
	    key: 'getAllCity',
	    value: function getAllCity() {
	      var _this2 = this;
	
	      this._api.get('location/0').then(function (res) {
	        _this2.city = res.data;
	        //console.log(this.city);
	
	        var getid = _this2.$stateParams.cityid;
	        var cityid = parseInt(getid);
	        console.log(cityid);
	        _this2.selectedOption = _.find(_this2.city, ['LOCATIONID', cityid]);
	        console.log(_this2.selectedOption);
	      }, function (err) {
	        _this2.toaster.error(err.status + ' : ' + err.statusText);
	      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDNmZTFlNWRmNDhiNTQ2MmEzZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fw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a0JBQWtCLGdCQUFnQixJQUFJLEtBQUssVUFBQyxNQUFTO1NBQzFELE9BQUssZUFBZTs7U0FFcEIsT0FBTyxPQUFLOzs7OztHRHlCaEIsT0M3Q0kiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkM2ZlMWU1ZGY0OGI1NDYyYTNkN1xuICoqLyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmRleENvbmZpZyA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG5cbnZhciBfaW5kZXhSb3V0ZSA9IHJlcXVpcmUoJy4vaW5kZXgucm91dGUnKTtcblxudmFyIF9pbmRleFJ1biA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG5cbnZhciBfbWFpbk1haW5Db250cm9sbGVyID0gcmVxdWlyZSgnLi9tYWluL21haW4uY29udHJvbGxlcicpO1xuXG52YXIgX2xvZ2luTG9naW5Db250cm9sbGVyID0gcmVxdWlyZSgnLi9sb2dpbi9sb2dpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfZGFzaGJvYXJkRGFzaGJvYXJkQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyJyk7XG5cbnZhciBfcmF0ZW1hc3RlclJhdGVtYXN0ZXJDb250cm9sbGVyID0gcmVxdWlyZSgnLi9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlcicpO1xuXG52YXIgX3JhdGVxdWVyeVJhdGVxdWVyeUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3JhdGVxdWVyeS9yYXRlcXVlcnkuY29udHJvbGxlcicpO1xuXG52YXIgX2FwcENvbXBvbmVudHNBcHBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xuXG52YXIgX2FwcExvZ2luQXV0aFNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzV2ViRGV2VGVjV2ViRGV2VGVjU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNNYWxhcmtleU1hbGFya2V5RGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdtbGxCYWMnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0ciddKS5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSkuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudCkuY29uZmlnKF9pbmRleENvbmZpZy5jb25maWcpLmNvbmZpZyhfaW5kZXhSb3V0ZS5yb3V0ZXJDb25maWcpLnJ1bihfaW5kZXhSdW4ucnVuQmxvY2spLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgX2FwcENvbXBvbmVudHNHaXRodWJDb250cmlidXRvckdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZS5HaXRodWJDb250cmlidXRvclNlcnZpY2UpLnNlcnZpY2UoJ3dlYkRldlRlYycsIF9hcHBDb21wb25lbnRzV2ViRGV2VGVjV2ViRGV2VGVjU2VydmljZS5XZWJEZXZUZWNTZXJ2aWNlKS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIF9tYWluTWFpbkNvbnRyb2xsZXIuTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIF9sb2dpbkxvZ2luQ29udHJvbGxlci5Mb2dpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBfZGFzaGJvYXJkRGFzaGJvYXJkQ29udHJvbGxlci5EYXNoYm9hcmRDb250cm9sbGVyKS5jb250cm9sbGVyKCdSYXRlTWFzdGVyQ29udHJvbGxlcicsIF9yYXRlbWFzdGVyUmF0ZW1hc3RlckNvbnRyb2xsZXIuUmF0ZU1hc3RlckNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1JhdGVRdWVyeUNvbnRyb2xsZXInLCBfcmF0ZXF1ZXJ5UmF0ZXF1ZXJ5Q29udHJvbGxlci5SYXRlUXVlcnlDb250cm9sbGVyKS5zZXJ2aWNlKCdhdXRoU2VydmljZScsIF9hcHBMb2dpbkF1dGhTZXJ2aWNlLmF1dGhTZXJ2aWNlKS5zZXJ2aWNlKCdhcGlTZXJ2aWNlJywgX2FwcENvbXBvbmVudHNBcGlBcGlTZXJ2aWNlLmFwaVNlcnZpY2UpLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIF9hcHBDb21wb25lbnRzTmF2YmFyTmF2YmFyRGlyZWN0aXZlLk5hdmJhckRpcmVjdGl2ZSkuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUuTWFsYXJrZXlEaXJlY3RpdmUpLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb250cm9sbGVyJztcbmltcG9ydCB7IERhc2hib2FyZENvbnRyb2xsZXIgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlcic7XG5pbXBvcnQgeyBSYXRlTWFzdGVyQ29udHJvbGxlciB9IGZyb20gJy4vcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUmF0ZVF1ZXJ5Q29udHJvbGxlciB9IGZyb20gJy4vcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyJztcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hbGFya2V5RGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJztcblxuXG5hbmd1bGFyLm1vZHVsZSgnbWxsQmFjJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd0b2FzdHInXSlcblxuICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAuY29uZmlnKGNvbmZpZylcbiAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXG4gIC5ydW4ocnVuQmxvY2spXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcbiAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIFdlYkRldlRlY1NlcnZpY2UpXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKVxuICAuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIERhc2hib2FyZENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdSYXRlTWFzdGVyQ29udHJvbGxlcicsIFJhdGVNYXN0ZXJDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIFJhdGVRdWVyeUNvbnRyb2xsZXIpXG4gIC5zZXJ2aWNlKCdhdXRoU2VydmljZScsIGF1dGhTZXJ2aWNlKVxuICAuc2VydmljZSgnYXBpU2VydmljZScsIGFwaVNlcnZpY2UpXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKVxuICAuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIEFwcENvbnRyb2xsZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcblxuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gIC8vIEVuYWJsZSBsb2dcclxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xyXG5cclxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcclxuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XHJcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgLypcbiAgLnN0YXRlKCdob21lJywge1xuICAgIHVybDogJy8nLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gIH0pXG4gICovXG4gIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgdXJsOiAnLycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxuICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcbiAgfSkuc3RhdGUoJ3JhdGVtYXN0ZXInLCB7XG4gICAgdXJsOiAnL3JhdGVtYXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnUmF0ZU1hc3RlckNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ3JhdGUnLFxuICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICB9KS5zdGF0ZSgncmF0ZXF1ZXJ5Jywge1xuICAgIHVybDogJy9yYXRlcXVlcnkvOmNpdHlpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnUmF0ZVF1ZXJ5Q29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZXF1ZXJ5JyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSkuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdkYXNoJyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAvKlxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgfSlcbiAgICAqL1xuICAgIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgICBhdXRoZW50aWNhdGU6IGZhbHNlXG4gICAgfSlcbiAgIC5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcbiAgICAgIHVybDogJy9yYXRlbWFzdGVyJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlJyxcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICAgIH0pXG4gICAuc3RhdGUoJ3JhdGVxdWVyeScsIHtcbiAgICAgIHVybDogJy9yYXRlcXVlcnkvOmNpdHlpZCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1JhdGVRdWVyeUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAncmF0ZXF1ZXJ5JyxcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICAgIH0pXG4gICAgLnN0YXRlKCdkYXNoYm9hcmQnLCB7XG4gICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdkYXNoJyxcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJ1bkJsb2NrID0gcnVuQmxvY2s7XG5cbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LnJ1bi5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xyXG4gICduZ0luamVjdCc7XHJcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJ1bi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgTWFpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcbiAgZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHRpbWVvdXQsIHdlYkRldlRlYykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFpbkNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gW107XG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTQ2MDcyNTk5MjE2MztcbiAgICAvL3RoaXMudG9hc3RyID0gdG9hc3RyO1xuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWluQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xuICAgICAgfSwgNDAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0V2ViRGV2VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xuICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCBmdW5jdGlvbiAoYXdlc29tZVRoaW5nKSB7XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3dUb2FzdHInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93VG9hc3RyKCkge1xuICAgICAgLy90aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xuICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWluQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBNYWluQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xyXG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gW107XHJcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XHJcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0NjA3MjU5OTIxNjM7XHJcbiAgICAvL3RoaXMudG9hc3RyID0gdG9hc3RyO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XHJcbiAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xyXG4gICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xyXG4gICAgfSwgNDAwMCk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKCk7XHJcblxyXG4gICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgKGF3ZXNvbWVUaGluZykgPT4ge1xyXG4gICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dUb2FzdHIoKSB7XHJcbiAgICAvL3RoaXMudG9hc3RyLmluZm8oJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+Jyk7XHJcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgTG9naW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3Rvcigkc3RhdGUsICRyb290U2NvcGUsIGF1dGhTZXJ2aWNlLCB0b2FzdGVyKSB7XG4gIGZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcigkc3RhdGUsICRyb290U2NvcGUsIGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2dpbkNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgLy90b2FzdGVyLmluZm8oJ0hpJyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9naW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2F1dGhlbnRpY2F0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcblxuICAgICAgICBpZiAoISFyZXMpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuJHJvb3RTY29wZS5yZXR1cm5Ub1N0YXRlID09PSAnJykge30gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdkYXNoYm9hcmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0TXNnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRNc2coKSB7XG4gICAgICB0aGlzLmF1dGguYXV0aEZhaWxlZE1zZyA9ICcnO1xuICAgIH1cblxuICAgIC8vIGlzTG9naW4oKSB7XG4gICAgLy8gICByZXR1cm4gJ2xvZ2luYm9keSc7XG4gICAgLy8gfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvZ2luQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuTG9naW5Db250cm9sbGVyID0gTG9naW5Db250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIExvZ2luQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3Rvcigkc3RhdGUsICRyb290U2NvcGUsIGF1dGhTZXJ2aWNlLCB0b2FzdGVyKSB7XHJcbiAgY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xyXG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xyXG4gICAgLy90b2FzdGVyLmluZm8oJ0hpJyk7XHJcbiAgfVxyXG5cclxuICBhdXRoZW50aWNhdGUoKSB7XHJcblxyXG4gICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpLnRoZW4oKHJlcykgPT4ge1xyXG5cclxuICAgICAgaWYgKCEhcmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJHJvb3RTY29wZS5yZXR1cm5Ub1N0YXRlID09PSAnJykge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldE1zZygpe1xyXG4gICAgICB0aGlzLmF1dGguYXV0aEZhaWxlZE1zZyA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLy8gaXNMb2dpbigpIHtcclxuICAvLyAgIHJldHVybiAnbG9naW5ib2R5JztcclxuICAvLyB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRGFzaGJvYXJkQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy9jb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSwgdG9hc3Rlcikge1xuICAgIGZ1bmN0aW9uIERhc2hib2FyZENvbnRyb2xsZXIoJGh0dHAsIGFwaVNlcnZpY2UpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFzaGJvYXJkQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgICAgICAvL3RoaXMuX21hc3RlciA9IG1hc3RlclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0V4cCgpO1xuICAgICAgICB0aGlzLmdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCk7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCk7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERhc2hib2FyZENvbnRyb2xsZXIsIFt7XG4gICAgICAgIGtleTogJ2luaXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzRXhwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNFeHAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb250cmFjdHNFeHBpcmVkID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzY2xvc2V0b2V4cC8xJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmNvbnRyYWN0c0Nsb3NlVG9FeHBpcnkgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNUb0JlTmVnbycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXNoQ29udHJhY3RzVG9CZU5lZ28oKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0ZGFzaGNvbnRyYWN0c3RvYmVuZWdvLzEnKS50aGVuKGZ1bmN0aW9uIChuZWdvKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLmNvbnRyYWN0c1RvQmVOZWdvID0gbmVnby5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNBbW1lbmRlZCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzYW1tZW5kZWQvMScpLnRoZW4oZnVuY3Rpb24gKG5lZ28pIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuY29udHJhY3RzQW1tZW5kZWQgPSBuZWdvLmRhdGE7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERhc2hib2FyZENvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkRhc2hib2FyZENvbnRyb2xsZXIgPSBEYXNoYm9hcmRDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcclxuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0V4cCgpO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzVG9CZU5lZ28oKTtcclxuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG5cclxuXHJcbiAgfVxyXG5cclxuZ2V0RGFzaENvbnRyYWN0c0V4cCgpe1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHNleHAvMWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0c0V4cGlyZWQgPSByZXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2Nsb3NldG9leHAvMWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0c0Nsb3NlVG9FeHBpcnkgPSByZXMuZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERhc2hDb250cmFjdHNUb0JlTmVnbygpe1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHN0b2JlbmVnby8xYClcclxuICAgICAgICAudGhlbigobmVnbykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0c1RvQmVOZWdvID0gbmVnby5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGdldERhc2hDb250cmFjdHNBbW1lbmRlZCgpe1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHNhbW1lbmRlZC8xYClcclxuICAgICAgICAudGhlbigobmVnbykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyYWN0c0FtbWVuZGVkID0gbmVnby5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgUmF0ZU1hc3RlckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcbiAgZnVuY3Rpb24gUmF0ZU1hc3RlckNvbnRyb2xsZXIoJHRpbWVvdXQsIGFwaVNlcnZpY2UsICRmaWx0ZXIsICRzdGF0ZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF0ZU1hc3RlckNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kZmlsdGVyID0gJGZpbHRlcjtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJhdGVNYXN0ZXJDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2luaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge31cbiAgfSwge1xuICAgIGtleTogJ2dldEFsbEZ1ZWxSYXRlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEZ1ZWxSYXRlcygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldHJhdGVzL2FsbCcpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBfdGhpcy5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcbiAgICAgICAgdmFyIG5ld091dHB1dERhdGEgPSBfLmVhY2goX3RoaXMuZnVlbFJhdGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBGVUVMREFURSA9IF90aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEU7XG4gICAgICAgICAgRlVFTERBVEUgPSBfdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoX3RoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSksICdkZC1NTU0teXl5eScpO1xuICAgICAgICAgIF90aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUgPSBGVUVMREFURTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuZnVlbFJhdGVzID0gbmV3T3V0cHV0RGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coX3RoaXMuZnVlbFJhdGVzKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXMudG9hc3Rlci5lcnJvcihlcnIuc3RhdHVzICsgJyA6ICcgKyBlcnIuc3RhdHVzVGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRGdWVsUmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEZ1ZWxSYXRlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmdWVsUmF0ZVNhdmVVUkwgPSAnZnVlbHJhdGUvSU5TRVJUJztcblxuICAgICAgdmFyIHJldmlzZWRSYXRlcyA9IF8uY2hhaW4odGhpcy5mdWVsUmF0ZXMpLm1hcChmdW5jdGlvbiAocmF0ZSkge1xuXG4gICAgICAgIHJhdGUuRlVFTFJBVEVTX0lEID0gcmF0ZS5DVVJSQVRFID4gMCA/IDAgOiByYXRlLkZVRUxSQVRFU19JRDtcbiAgICAgICAgcmF0ZS5GVUVMQ0lUWSA9IHJhdGUuTE9DQVRJT05OQU1FO1xuICAgICAgICByYXRlLlJBVEUgPSByYXRlLkNVUlJBVEU7XG4gICAgICAgIHJhdGUuRlVFTERBVEUgPSBfdGhpczIuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHJhdGUuQUNUSVZFID0gXCJBXCI7XG4gICAgICAgIHJhdGUuQ1JFQVRFREJZID0gMTtcbiAgICAgICAgcmF0ZS5DUkVBVEVET04gPSBfdGhpczIuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHJhdGUuTU9ERSA9IFwiSU5TRVJUXCI7XG5cbiAgICAgICAgcmV0dXJuIHJhdGU7XG4gICAgICB9KS52YWx1ZSgpO1xuXG4gICAgICB2YXIgbmV3UmF0ZSA9IHtcbiAgICAgICAgZnVlbHJhdGU6IHJldmlzZWRSYXRlc1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fYXBpLnBvc3QoZnVlbFJhdGVTYXZlVVJMLCBuZXdSYXRlKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMyLmdldEFsbEZ1ZWxSYXRlcygpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2aWV3SGlzdERhdGEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2aWV3SGlzdERhdGEodGFibGUpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZyh0YWJsZS5GVUVMQ0lUWSk7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygncmF0ZXF1ZXJ5JywgeyBjaXR5aWQ6IHRhYmxlLkZVRUxDSVRZIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYXRlTWFzdGVyQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuUmF0ZU1hc3RlckNvbnRyb2xsZXIgPSBSYXRlTWFzdGVyQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmF0ZU1hc3RlckNvbnRyb2xsZXIge1xuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcbiAgY29uc3RydWN0b3IoJHRpbWVvdXQsIGFwaVNlcnZpY2UsICRmaWx0ZXIsICRzdGF0ZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy4kZmlsdGVyID0gJGZpbHRlcjtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xuICB9XG5cbiAgaW5pdCgpIHtcblxuICB9XG5cbiAgZ2V0QWxsRnVlbFJhdGVzKCkge1xuICAgIHRoaXMuX2FwaS5nZXQoYGdldHJhdGVzL2FsbGApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcbiAgICAgIHZhciBuZXdPdXRwdXREYXRhID1cbiAgICAgICAgXy5lYWNoKHRoaXMuZnVlbFJhdGVzLFxuICAgICAgICAgIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YXIgRlVFTERBVEUgPSB0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEU7XG4gICAgICAgICAgICBGVUVMREFURSA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSksICdkZC1NTU0teXl5eScpO1xuICAgICAgICAgICAgdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFID0gRlVFTERBVEU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZnVlbFJhdGVzID0gbmV3T3V0cHV0RGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZnVlbFJhdGVzKTtcblxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHRoaXMudG9hc3Rlci5lcnJvcihgJHtlcnIuc3RhdHVzfSA6ICR7ZXJyLnN0YXR1c1RleHR9YCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRGdWVsUmF0ZSgpIHtcblxuICAgIHZhciBmdWVsUmF0ZVNhdmVVUkwgPSAnZnVlbHJhdGUvSU5TRVJUJztcblxuICAgIHZhciByZXZpc2VkUmF0ZXMgPSBfLmNoYWluKHRoaXMuZnVlbFJhdGVzKVxuICAgICAgLm1hcCgocmF0ZSkgPT4ge1xuXG4gICAgICAgIHJhdGUuRlVFTFJBVEVTX0lEID0gKHJhdGUuQ1VSUkFURSA+IDAgPyAwIDogcmF0ZS5GVUVMUkFURVNfSUQpO1xuICAgICAgICByYXRlLkZVRUxDSVRZID0gcmF0ZS5MT0NBVElPTk5BTUU7XG4gICAgICAgIHJhdGUuUkFURSA9IHJhdGUuQ1VSUkFURTtcbiAgICAgICAgcmF0ZS5GVUVMREFURSA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHJhdGUuQUNUSVZFID0gXCJBXCI7XG4gICAgICAgIHJhdGUuQ1JFQVRFREJZID0gMTtcbiAgICAgICAgcmF0ZS5DUkVBVEVET04gPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICByYXRlLk1PREUgPSBcIklOU0VSVFwiO1xuXG4gICAgICAgIHJldHVybiByYXRlO1xuXG4gICAgICB9KS52YWx1ZSgpO1xuXG5cblxuICAgIHZhciBuZXdSYXRlID0ge1xuICAgICAgZnVlbHJhdGU6IHJldmlzZWRSYXRlc1xuICAgIH07XG5cbiAgICB0aGlzLl9hcGkucG9zdChmdWVsUmF0ZVNhdmVVUkwsIG5ld1JhdGUpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgdmlld0hpc3REYXRhKHRhYmxlKSB7XG5cbiAgICAvL2NvbnNvbGUubG9nKHRhYmxlLkZVRUxDSVRZKTtcbiAgICB0aGlzLiRzdGF0ZS5nbygncmF0ZXF1ZXJ5Jywge2NpdHlpZCA6dGFibGUuRlVFTENJVFl9KTtcbiAgfVxuXG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgUmF0ZVF1ZXJ5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBSYXRlUXVlcnlDb250cm9sbGVyKCR0aW1lb3V0LCBhcGlTZXJ2aWNlLCAkc3RhdGVQYXJhbXMsICRmaWx0ZXIpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGVRdWVyeUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuXG4gICAgdGhpcy5nZXRBbGxDaXR5KCk7XG5cbiAgICB0aGlzLkZVRUxUT0RBVEUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIGZ1ZWxGcm9tRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZnVlbEZyb21EYXRlLnNldERhdGUoZnVlbEZyb21EYXRlLmdldERhdGUoKSAtIDE4MCk7XG4gICAgdGhpcy5GVUVMRlJPTURBVEUgPSBmdWVsRnJvbURhdGU7XG5cbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJhdGVRdWVyeUNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsRnVlbFJhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRnVlbFJhdGVzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGZyb21kdCA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuRlVFTEZST01EQVRFKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgIHZhciB0b2R0ID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5GVUVMVE9EQVRFKSwgJ3l5eXktTU0tZGQnKTtcblxuICAgICAgdmFyIHVybG5ldyA9ICdnZXRyYXRlcXVlcnkvJyArIHRoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZCArICcvJyArIGZyb21kdCArICcvJyArIHRvZHQ7XG4gICAgICBjb25zb2xlLmxvZyh1cmxuZXcpO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRyYXRlcXVlcnkvJyArIHRoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZCArICcvJyArIGZyb21kdCArICcvJyArIHRvZHQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBfdGhpcy5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXMudG9hc3Rlci5lcnJvcihlcnIuc3RhdHVzICsgJyA6ICcgKyBlcnIuc3RhdHVzVGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxDaXR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsQ2l0eSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdsb2NhdGlvbi8wJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzMi5jaXR5ID0gcmVzLmRhdGE7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jaXR5KTtcblxuICAgICAgICB2YXIgZ2V0aWQgPSBfdGhpczIuJHN0YXRlUGFyYW1zLmNpdHlpZDtcbiAgICAgICAgdmFyIGNpdHlpZCA9IHBhcnNlSW50KGdldGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coY2l0eWlkKTtcbiAgICAgICAgX3RoaXMyLnNlbGVjdGVkT3B0aW9uID0gXy5maW5kKF90aGlzMi5jaXR5LCBbJ0xPQ0FUSU9OSUQnLCBjaXR5aWRdKTtcbiAgICAgICAgY29uc29sZS5sb2coX3RoaXMyLnNlbGVjdGVkT3B0aW9uKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXMyLnRvYXN0ZXIuZXJyb3IoZXJyLnN0YXR1cyArICcgOiAnICsgZXJyLnN0YXR1c1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGVRdWVyeUNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVRdWVyeUNvbnRyb2xsZXIgPSBSYXRlUXVlcnlDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmF0ZVF1ZXJ5Q29udHJvbGxlciB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSwgJHN0YXRlUGFyYW1zLCAkZmlsdGVyKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIHRoaXMuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIHRoaXMuJGZpbHRlciA9ICRmaWx0ZXI7XG5cblxuICAgIHRoaXMuZ2V0QWxsQ2l0eSgpO1xuXG4gICAgdGhpcy5GVUVMVE9EQVRFID0gbmV3IERhdGUoKTtcblxuICAgIHZhciBmdWVsRnJvbURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGZ1ZWxGcm9tRGF0ZS5zZXREYXRlKGZ1ZWxGcm9tRGF0ZS5nZXREYXRlKCkgLSAxODApO1xuICAgIHRoaXMuRlVFTEZST01EQVRFID0gZnVlbEZyb21EYXRlO1xuXG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgfVxuXG4gIGdldEFsbEZ1ZWxSYXRlcygpIHtcblxuICAgIHZhciBmcm9tZHQgPXRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuRlVFTEZST01EQVRFKSwgJ3l5eXktTU0tZGQnKTtcbiAgICB2YXIgdG9kdCA9dGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5GVUVMVE9EQVRFKSwgJ3l5eXktTU0tZGQnKTtcblxuICAgIHZhciB1cmxuZXcgPSBgZ2V0cmF0ZXF1ZXJ5LyR7dGhpcy4kc3RhdGVQYXJhbXMuY2l0eWlkfS8ke2Zyb21kdH0vJHt0b2R0fWA7XG4gICAgY29uc29sZS5sb2codXJsbmV3KTtcblxuICAgIHRoaXMuX2FwaS5nZXQoYGdldHJhdGVxdWVyeS8ke3RoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZH0vJHtmcm9tZHR9LyR7dG9kdH1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbENpdHkoKSB7XG4gICAgdGhpcy5fYXBpLmdldCgnbG9jYXRpb24vMCcpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jaXR5ID0gcmVzLmRhdGE7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY2l0eSk7XG5cbiAgICAgIHZhciBnZXRpZCA9IHRoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZDtcbiAgICAgIHZhciBjaXR5aWQgPSBwYXJzZUludChnZXRpZCk7XG4gICAgICBjb25zb2xlLmxvZyhjaXR5aWQpO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IF8uZmluZCh0aGlzLmNpdHksIFsnTE9DQVRJT05JRCcsIGNpdHlpZF0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL3JhdGVxdWVyeS9yYXRlcXVlcnkuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgQXBwQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFwcENvbnRyb2xsZXIoYXV0aFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcENvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpc0xvZ2dlZGluJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNMb2dnZWRpbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG9naW5Cb2R5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9naW5Cb2R5KCkge1xuICAgICAgaWYgKHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHJldHVybiAnaXNsb2dnZWRpbic7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2lnbk91dFVzZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaWduT3V0VXNlcigpIHtcbiAgICAgIHRoaXMuYXV0aC5zaWdub3V0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcENvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkFwcENvbnRyb2xsZXIgPSBBcHBDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZSkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkaW4gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuICB9XHJcblxyXG4gIGxvZ2luQm9keSAoKSB7XHJcbiAgICBpZih0aGlzLmF1dGguYXV0aGVudGljYXRlZCl7XHJcbiAgICAgIHJldHVybiAnaXNsb2dnZWRpbic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaWduT3V0VXNlcigpe1xyXG4gICAgdGhpcy5hdXRoLnNpZ25vdXQoKTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldENvbnRyaWJ1dG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycyhsaW1pdCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFsaW1pdCkge1xuICAgICAgICBsaW1pdCA9IDMwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdCkge1xuICAgIGlmICghbGltaXQpIHtcbiAgICAgIGxpbWl0ID0gMzA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgYXV0aFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhdXRoU2VydmljZSgkcSwgJHN0YXRlLCBhcGlTZXJ2aWNlLCAkd2luZG93KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRoU2VydmljZSk7XG5cbiAgICB0aGlzLiRxID0gJHE7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgIHRoaXMudXNlckluZm8gPSB7fTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhhdXRoU2VydmljZSwgW3tcbiAgICBrZXk6ICdsb2dpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdsb2dpbi8nICsgdXNlcm5hbWUgKyAnLycgKyBwYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBfdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpcy51c2VySW5mbyA9IHJlc3VsdC5kYXRhWzBdO1xuICAgICAgICAgIC8vdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgX3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IGFuZ3VsYXIudG9Kc29uKF90aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF90aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5hdXRoRmFpbGVkTXNnID0gJ1VzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4nO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVc2VySW5mbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZXJJbmZvKCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckluZm87XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNBdXRoZW50aWNhdGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyk7XG4gICAgICBpZiAodGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9IHVuZGVmaW5lZCAmJiB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gJycpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25vdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaWdub3V0KCkge1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSAnJztcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdsb2dpbicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBhdXRoU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkcSwgJHN0YXRlLCBhcGlTZXJ2aWNlLCAkd2luZG93KSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgIHRoaXMudXNlckluZm8gPSB7fTtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJyc7XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBsb2dpbi8ke3VzZXJuYW1lfS8ke3Bhc3N3b3JkfWApLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlckluZm8gPSByZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAvL3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IGFuZ3VsYXIudG9Kc29uKHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodGhpcy51c2VySW5mbyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJ1VzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlckluZm87XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8pO1xyXG4gICAgaWYgKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSB1bmRlZmluZWQgJiYgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9ICcnKSB7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xyXG4gIH1cclxuXHJcbiAgc2lnbm91dCgpIHtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gJyc7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgYXBpU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGFwaVNlcnZpY2UoJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGFwaVNlcnZpY2UpO1xuXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIC8vdGhpcy5faG9zdCA9ICdodHRwOi8vMTcyLjMyLjAuMjI2JztcbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xuXG4gICAgdGhpcy5fYmFzZVVSTCA9IHRoaXMuX2hvc3QgKyAnL0JBQ19XQ0YvQkFDT05UUkFDVFJlc3RTZXJ2aWNlLnN2Yyc7XG5cbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUgPSB7XG4gICAgICBtZXRob2Q6ICcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhhcGlTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcblxuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IHRoaXMuX2Jhc2VVUkwgKyAnLycgKyB1cmw7XG4gICAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSwgaXNGdWxsVVJMKSB7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGlzRnVsbFVSTCA/IHVybCA6IHRoaXMuX2Jhc2VVUkwgKyAnLycgKyB1cmw7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUuZGF0YSA9IGRhdGE7XG4gICAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIb3N0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIGFwaVNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLmFwaVNlcnZpY2UgPSBhcGlTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBhcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkaHR0cCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAvL3RoaXMuX2hvc3QgPSAnaHR0cDovLzE3Mi4zMi4wLjIyNic7XHJcbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xyXG5cclxuICAgIHRoaXMuX2Jhc2VVUkwgPSBgJHt0aGlzLl9ob3N0fS9CQUNfV0NGL0JBQ09OVFJBQ1RSZXN0U2VydmljZS5zdmNgO1xyXG5cclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcclxuICAgICAgbWV0aG9kOiAnJyxcclxuICAgICAgdXJsOiAnJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQodXJsKSB7XHJcblxyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGAke3RoaXMuX2Jhc2VVUkx9LyR7dXJsfWA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEsIGlzRnVsbFVSTCkge1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdQT1NUJztcclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBpc0Z1bGxVUkwgPyB1cmwgOiBgJHt0aGlzLl9iYXNlVVJMfS8ke3VybH1gO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIGdldEhvc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYkRldlRlY1NlcnZpY2UpO1xuXG4gICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgfV07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2ViRGV2VGVjU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZWMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gV2ViRGV2VGVjU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxyXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcclxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxyXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldFRlYygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk5hdmJhckRpcmVjdGl2ZSA9IE5hdmJhckRpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbnZhciBOYXZiYXJDb250cm9sbGVyID0gZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcihtb21lbnQpIHtcbiAgJ25nSW5qZWN0JztcblxuICAvLyBcInRoaXMuY3JlYXRpb25cIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZiYXJDb250cm9sbGVyKTtcblxuICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzLk1hbGFya2V5RGlyZWN0aXZlID0gTWFsYXJrZXlEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpWydkZWxldGUnXSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgZnVuY3Rpb24gKCkge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24gKGNvbnRyaWJ1dG9yKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpWydkZWxldGUnXSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbGFya2V5Q29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWxhcmtleUNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnRyaWJ1dG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgX3RoaXMyLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMi5jb250cmlidXRvcnM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=