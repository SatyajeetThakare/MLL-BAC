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
	
	    this.getAllFuelRates(this.$stateParams.cityid);
	  }
	
	  _createClass(RateQueryController, [{
	    key: 'init',
	    value: function init() {}
	  }, {
	    key: 'getAllCity',
	    value: function getAllCity() {
	      var _this = this;
	
	      this._api.get('location/0').then(function (res) {
	        _this.city = res.data;
	
	        var getid = _this.$stateParams.cityid;
	        var cityid = parseInt(getid);
	        _this.selectedOption = _.find(_this.city, ['LOCATIONID', cityid]);
	      }, function (err) {
	        _this.toaster.error(err.status + ' : ' + err.statusText);
	      });
	    }
	  }, {
	    key: 'getAllFuelRates',
	    value: function getAllFuelRates(cityid) {
	      var _this2 = this;
	
	      var fromdt = this.$filter('date')(new Date(this.FUELFROMDATE), 'yyyy-MM-dd');
	      var todt = this.$filter('date')(new Date(this.FUELTODATE), 'yyyy-MM-dd');
	      var urlnew = 'getratequery/' + cityid + '/' + fromdt + '/' + todt;
	
	      this._api.get('getratequery/' + cityid + '/' + fromdt + '/' + todt).then(function (res) {
	        _this2.fuelRates = res.data;
	
	        var newOutputData = _.each(_this2.fuelRates, function (key, value) {
	          var FUELDATE = _this2.fuelRates[value].FUELDATE;
	          FUELDATE = _this2.$filter('date')(new Date(_this2.fuelRates[value].FUELDATE), 'dd-MMM-yyyy');
	          _this2.fuelRates[value].FUELDATE = FUELDATE;
	        });
	
	        _this2.fuelRates = newOutputData;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmNiMGY3OTg0MzhiOWFiMzNiYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fw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QUFROztPQ2ZkLE9BQU8sS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssWUFBTTtTQUN4RCxNQUFLLEtBQUssS0FBSzs7O01Eb0JoQjtLQUNELEtBQUs7S0FDTCxPQ2xCYSx5QkFBQyxtQkFBbUI7T0RtQi9CLElBQUksU0FBUzs7T0NsQmYsT0FBTyxrQkFBa0IsZ0JBQWdCLElBQUksS0FBSyxVQUFDLE1BQVM7U0FDMUQsT0FBSyxlQUFlOztTQUVwQixPQUFPLE9BQUs7Ozs7O0dEeUJoQixPQzdDSSIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGZjYjBmNzk4NDM4YjlhYjMzYmExXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4Q29uZmlnID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleFJvdXRlID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4UnVuID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluTWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfbG9naW5Mb2dpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInKTtcblxudmFyIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyID0gcmVxdWlyZSgnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInKTtcblxudmFyIF9yYXRlbWFzdGVyUmF0ZW1hc3RlckNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyJyk7XG5cbnZhciBfcmF0ZXF1ZXJ5UmF0ZXF1ZXJ5Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBDb21wb25lbnRzR2l0aHViQ29udHJpYnV0b3JHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwTG9naW5BdXRoU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzQXBpQXBpU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c05hdmJhck5hdmJhckRpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcblxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4Q29uZmlnLmNvbmZpZykuY29uZmlnKF9pbmRleFJvdXRlLnJvdXRlckNvbmZpZykucnVuKF9pbmRleFJ1bi5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlLldlYkRldlRlY1NlcnZpY2UpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW5NYWluQ29udHJvbGxlci5NYWluQ29udHJvbGxlcikuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgX2xvZ2luTG9naW5Db250cm9sbGVyLkxvZ2luQ29udHJvbGxlcikuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyLkRhc2hib2FyZENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1JhdGVNYXN0ZXJDb250cm9sbGVyJywgX3JhdGVtYXN0ZXJSYXRlbWFzdGVyQ29udHJvbGxlci5SYXRlTWFzdGVyQ29udHJvbGxlcikuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIF9yYXRlcXVlcnlSYXRlcXVlcnlDb250cm9sbGVyLlJhdGVRdWVyeUNvbnRyb2xsZXIpLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgX2FwcExvZ2luQXV0aFNlcnZpY2UuYXV0aFNlcnZpY2UpLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UuYXBpU2VydmljZSkuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUuTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIF9hcHBDb21wb25lbnRzTWFsYXJrZXlNYWxhcmtleURpcmVjdGl2ZS5NYWxhcmtleURpcmVjdGl2ZSkuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIF9hcHBDb21wb25lbnRzQXBwQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSAnLi9tYWluL21haW4uY29udHJvbGxlcic7XG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29udHJvbGxlciB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyJztcbmltcG9ydCB7IFJhdGVNYXN0ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlcic7XG5pbXBvcnQgeyBSYXRlUXVlcnlDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlcic7XG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2xvZ2luL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBhcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdtbGxCYWMnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0ciddKVxuXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ1JhdGVNYXN0ZXJDb250cm9sbGVyJywgUmF0ZU1hc3RlckNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdSYXRlUXVlcnlDb250cm9sbGVyJywgUmF0ZVF1ZXJ5Q29udHJvbGxlcilcbiAgLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgYXV0aFNlcnZpY2UpXG4gIC5zZXJ2aWNlKCdhcGlTZXJ2aWNlJywgYXBpU2VydmljZSlcbiAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpXG4gIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgQXBwQ29udHJvbGxlcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuXG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xyXG4gICduZ0luamVjdCc7XHJcbiAgLy8gRW5hYmxlIGxvZ1xyXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XHJcblxyXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxyXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcclxuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xyXG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XHJcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuXG5mdW5jdGlvbiByb3V0ZXJDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAvKlxuICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgdXJsOiAnLycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgfSlcbiAgKi9cbiAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgYXV0aGVudGljYXRlOiBmYWxzZVxuICB9KS5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcbiAgICB1cmw6ICcvcmF0ZW1hc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZScsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pLnN0YXRlKCdyYXRlcXVlcnknLCB7XG4gICAgdXJsOiAnL3JhdGVxdWVyeS86Y2l0eWlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlUXVlcnlDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxuICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICB9KS5zdGF0ZSgnZGFzaGJvYXJkJywge1xuICAgIHVybDogJy9kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZENvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2Rhc2gnLFxuICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAgIC8qXG4gICAgLnN0YXRlKCdob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgICB9KVxuICAgICovXG4gICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ2xvZ2luJyxcbiAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcbiAgICB9KVxuICAgLnN0YXRlKCdyYXRlbWFzdGVyJywge1xuICAgICAgdXJsOiAnL3JhdGVtYXN0ZXInLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1JhdGVNYXN0ZXJDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3JhdGUnLFxuICAgICAgYXV0aGVudGljYXRlOiB0cnVlXG4gICAgfSlcbiAgIC5zdGF0ZSgncmF0ZXF1ZXJ5Jywge1xuICAgICAgdXJsOiAnL3JhdGVxdWVyeS86Y2l0eWlkJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JhdGVxdWVyeS9yYXRlcXVlcnkuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnUmF0ZVF1ZXJ5Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxuICAgICAgYXV0aGVudGljYXRlOiB0cnVlXG4gICAgfSlcbiAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ2Rhc2gnLFxuICAgICAgYXV0aGVudGljYXRlOiB0cnVlXG4gICAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcblxuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xuICAgIC8vdGhpcy50b2FzdHIgPSB0b2FzdHI7XG5cbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1haW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgICB9LCA0MDAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRXZWJEZXZUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XG4gICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKCk7XG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIGZ1bmN0aW9uIChhd2Vzb21lVGhpbmcpIHtcbiAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvd1RvYXN0cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dUb2FzdHIoKSB7XG4gICAgICAvL3RoaXMudG9hc3RyLmluZm8oJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+Jyk7XG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1haW5Db250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBNYWluQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcclxuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTQ2MDcyNTk5MjE2MztcclxuICAgIC8vdGhpcy50b2FzdHIgPSB0b2FzdHI7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XHJcbiAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XHJcbiAgICB9LCA0MDAwKTtcclxuICB9XHJcblxyXG4gIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcclxuXHJcbiAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCAoYXdlc29tZVRoaW5nKSA9PiB7XHJcbiAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RvYXN0cigpIHtcclxuICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcclxuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBMb2dpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICAvL3RvYXN0ZXIuaW5mbygnSGknKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2dpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYXV0aGVudGljYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgIGlmICghIXJlcykge1xuICAgICAgICAgIGlmIChfdGhpcy4kcm9vdFNjb3BlLnJldHVyblRvU3RhdGUgPT09ICcnKSB7fSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2Rhc2hib2FyZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzZXRNc2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldE1zZygpIHtcbiAgICAgIHRoaXMuYXV0aC5hdXRoRmFpbGVkTXNnID0gJyc7XG4gICAgfVxuXG4gICAgLy8gaXNMb2dpbigpIHtcbiAgICAvLyAgIHJldHVybiAnbG9naW5ib2R5JztcbiAgICAvLyB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9naW5Db250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5Mb2dpbkNvbnRyb2xsZXIgPSBMb2dpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgTG9naW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UsIHRvYXN0ZXIpIHtcclxuICBjb25zdHJ1Y3Rvcigkc3RhdGUsICRyb290U2NvcGUsIGF1dGhTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XHJcbiAgICAvL3RvYXN0ZXIuaW5mbygnSGknKTtcclxuICB9XHJcblxyXG4gIGF1dGhlbnRpY2F0ZSgpIHtcclxuXHJcbiAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbigocmVzKSA9PiB7XHJcblxyXG4gICAgICBpZiAoISFyZXMpIHtcclxuICAgICAgICBpZiAodGhpcy4kcm9vdFNjb3BlLnJldHVyblRvU3RhdGUgPT09ICcnKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0TXNnKCl7XHJcbiAgICAgIHRoaXMuYXV0aC5hdXRoRmFpbGVkTXNnID0gJyc7XHJcbiAgfVxyXG5cclxuICAvLyBpc0xvZ2luKCkge1xyXG4gIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xyXG4gIC8vIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBEYXNoYm9hcmRDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvL2NvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlLCBtYXN0ZXJTZXJ2aWNlLCB0b2FzdGVyKSB7XG4gICAgZnVuY3Rpb24gRGFzaGJvYXJkQ29udHJvbGxlcigkaHR0cCwgYXBpU2VydmljZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXNoYm9hcmRDb250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzVG9CZU5lZ28oKTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGFzaGJvYXJkQ29udHJvbGxlciwgW3tcbiAgICAgICAga2V5OiAnaW5pdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNFeHAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c0V4cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNleHAvMScpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyYWN0c0V4cGlyZWQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNDbG9zZVRvRXhwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNUb0JlTmVnbygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzdG9iZW5lZ28vMScpLnRoZW4oZnVuY3Rpb24gKG5lZ28pIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuY29udHJhY3RzVG9CZU5lZ28gPSBuZWdvLmRhdGE7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzQW1tZW5kZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNhbW1lbmRlZC8xJykudGhlbihmdW5jdGlvbiAobmVnbykge1xuICAgICAgICAgICAgICAgIF90aGlzNC5jb250cmFjdHNBbW1lbmRlZCA9IG5lZ28uZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGFzaGJvYXJkQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuRGFzaGJvYXJkQ29udHJvbGxlciA9IERhc2hib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlLCBtYXN0ZXJTZXJ2aWNlLCB0b2FzdGVyKSB7XHJcbiAgY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgLy90aGlzLl9tYXN0ZXIgPSBtYXN0ZXJTZXJ2aWNlO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XHJcbiAgICB0aGlzLmdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCk7XHJcbiAgICB0aGlzLmdldERhc2hDb250cmFjdHNUb0JlTmVnbygpO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG5nZXREYXNoQ29udHJhY3RzRXhwKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2V4cC8xYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzRXhwaXJlZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKXtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzY2xvc2V0b2V4cC8xYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c3RvYmVuZWdvLzFgKVxyXG4gICAgICAgIC50aGVuKChuZWdvKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzVG9CZU5lZ28gPSBuZWdvLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2FtbWVuZGVkLzFgKVxyXG4gICAgICAgIC50aGVuKChuZWdvKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzQW1tZW5kZWQgPSBuZWdvLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlTWFzdGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBSYXRlTWFzdGVyQ29udHJvbGxlcigkdGltZW91dCwgYXBpU2VydmljZSwgJGZpbHRlciwgJHN0YXRlKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvL3RoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYXRlTWFzdGVyQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmF0ZU1hc3RlckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsRnVlbFJhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRnVlbFJhdGVzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0cmF0ZXMvYWxsJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuICAgICAgICB2YXIgbmV3T3V0cHV0RGF0YSA9IF8uZWFjaChfdGhpcy5mdWVsUmF0ZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIEZVRUxEQVRFID0gX3RoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURTtcbiAgICAgICAgICBGVUVMREFURSA9IF90aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZShfdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFKSwgJ2RkLU1NTS15eXl5Jyk7XG4gICAgICAgICAgX3RoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSA9IEZVRUxEQVRFO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5mdWVsUmF0ZXMgPSBuZXdPdXRwdXREYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5mdWVsUmF0ZXMpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfdGhpcy50b2FzdGVyLmVycm9yKGVyci5zdGF0dXMgKyAnIDogJyArIGVyci5zdGF0dXNUZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZEZ1ZWxSYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRnVlbFJhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZ1ZWxSYXRlU2F2ZVVSTCA9ICdmdWVscmF0ZS9JTlNFUlQnO1xuXG4gICAgICB2YXIgcmV2aXNlZFJhdGVzID0gXy5jaGFpbih0aGlzLmZ1ZWxSYXRlcykubWFwKGZ1bmN0aW9uIChyYXRlKSB7XG5cbiAgICAgICAgcmF0ZS5GVUVMUkFURVNfSUQgPSByYXRlLkNVUlJBVEUgPiAwID8gMCA6IHJhdGUuRlVFTFJBVEVTX0lEO1xuICAgICAgICByYXRlLkZVRUxDSVRZID0gcmF0ZS5MT0NBVElPTk5BTUU7XG4gICAgICAgIHJhdGUuUkFURSA9IHJhdGUuQ1VSUkFURTtcbiAgICAgICAgcmF0ZS5GVUVMREFURSA9IF90aGlzMi4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgcmF0ZS5BQ1RJVkUgPSBcIkFcIjtcbiAgICAgICAgcmF0ZS5DUkVBVEVEQlkgPSAxO1xuICAgICAgICByYXRlLkNSRUFURURPTiA9IF90aGlzMi4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgcmF0ZS5NT0RFID0gXCJJTlNFUlRcIjtcblxuICAgICAgICByZXR1cm4gcmF0ZTtcbiAgICAgIH0pLnZhbHVlKCk7XG5cbiAgICAgIHZhciBuZXdSYXRlID0ge1xuICAgICAgICBmdWVscmF0ZTogcmV2aXNlZFJhdGVzXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9hcGkucG9zdChmdWVsUmF0ZVNhdmVVUkwsIG5ld1JhdGUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBfdGhpczIuZ2V0QWxsRnVlbFJhdGVzKCk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZpZXdIaXN0RGF0YScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZpZXdIaXN0RGF0YSh0YWJsZSkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHRhYmxlLkZVRUxDSVRZKTtcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdyYXRlcXVlcnknLCB7IGNpdHlpZDogdGFibGUuRlVFTENJVFkgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGVNYXN0ZXJDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5SYXRlTWFzdGVyQ29udHJvbGxlciA9IFJhdGVNYXN0ZXJDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBSYXRlTWFzdGVyQ29udHJvbGxlciB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSwgJGZpbHRlciwgJHN0YXRlKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvL3RoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XG4gIH1cblxuICBpbml0KCkge1xuXG4gIH1cblxuICBnZXRBbGxGdWVsUmF0ZXMoKSB7XG4gICAgdGhpcy5fYXBpLmdldChgZ2V0cmF0ZXMvYWxsYCkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuICAgICAgdmFyIG5ld091dHB1dERhdGEgPVxuICAgICAgICBfLmVhY2godGhpcy5mdWVsUmF0ZXMsXG4gICAgICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhciBGVUVMREFURSA9IHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURTtcbiAgICAgICAgICAgIEZVRUxEQVRFID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFKSwgJ2RkLU1NTS15eXl5Jyk7XG4gICAgICAgICAgICB0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUgPSBGVUVMREFURTtcbiAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5mdWVsUmF0ZXMgPSBuZXdPdXRwdXREYXRhO1xuICAgICAgY29uc29sZS5sb2codGhpcy5mdWVsUmF0ZXMpO1xuXG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEZ1ZWxSYXRlKCkge1xuXG4gICAgdmFyIGZ1ZWxSYXRlU2F2ZVVSTCA9ICdmdWVscmF0ZS9JTlNFUlQnO1xuXG4gICAgdmFyIHJldmlzZWRSYXRlcyA9IF8uY2hhaW4odGhpcy5mdWVsUmF0ZXMpXG4gICAgICAubWFwKChyYXRlKSA9PiB7XG5cbiAgICAgICAgcmF0ZS5GVUVMUkFURVNfSUQgPSAocmF0ZS5DVVJSQVRFID4gMCA/IDAgOiByYXRlLkZVRUxSQVRFU19JRCk7XG4gICAgICAgIHJhdGUuRlVFTENJVFkgPSByYXRlLkxPQ0FUSU9OTkFNRTtcbiAgICAgICAgcmF0ZS5SQVRFID0gcmF0ZS5DVVJSQVRFO1xuICAgICAgICByYXRlLkZVRUxEQVRFID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgcmF0ZS5BQ1RJVkUgPSBcIkFcIjtcbiAgICAgICAgcmF0ZS5DUkVBVEVEQlkgPSAxO1xuICAgICAgICByYXRlLkNSRUFURURPTiA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHJhdGUuTU9ERSA9IFwiSU5TRVJUXCI7XG5cbiAgICAgICAgcmV0dXJuIHJhdGU7XG5cbiAgICAgIH0pLnZhbHVlKCk7XG5cblxuXG4gICAgdmFyIG5ld1JhdGUgPSB7XG4gICAgICBmdWVscmF0ZTogcmV2aXNlZFJhdGVzXG4gICAgfTtcblxuICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgbmV3UmF0ZSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICB2aWV3SGlzdERhdGEodGFibGUpIHtcblxuICAgIC8vY29uc29sZS5sb2codGFibGUuRlVFTENJVFkpO1xuICAgIHRoaXMuJHN0YXRlLmdvKCdyYXRlcXVlcnknLCB7Y2l0eWlkIDp0YWJsZS5GVUVMQ0lUWX0pO1xuICB9XG5cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlUXVlcnlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIFJhdGVRdWVyeUNvbnRyb2xsZXIoJHRpbWVvdXQsIGFwaVNlcnZpY2UsICRzdGF0ZVBhcmFtcywgJGZpbHRlcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF0ZVF1ZXJ5Q29udHJvbGxlcik7XG5cbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIHRoaXMuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIHRoaXMuJGZpbHRlciA9ICRmaWx0ZXI7XG5cbiAgICB0aGlzLmdldEFsbENpdHkoKTtcblxuICAgIHRoaXMuRlVFTFRPREFURSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGZ1ZWxGcm9tRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZnVlbEZyb21EYXRlLnNldERhdGUoZnVlbEZyb21EYXRlLmdldERhdGUoKSAtIDE4MCk7XG4gICAgdGhpcy5GVUVMRlJPTURBVEUgPSBmdWVsRnJvbURhdGU7XG5cbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcyh0aGlzLiRzdGF0ZVBhcmFtcy5jaXR5aWQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJhdGVRdWVyeUNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsQ2l0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbENpdHkoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdsb2NhdGlvbi8wJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzLmNpdHkgPSByZXMuZGF0YTtcblxuICAgICAgICB2YXIgZ2V0aWQgPSBfdGhpcy4kc3RhdGVQYXJhbXMuY2l0eWlkO1xuICAgICAgICB2YXIgY2l0eWlkID0gcGFyc2VJbnQoZ2V0aWQpO1xuICAgICAgICBfdGhpcy5zZWxlY3RlZE9wdGlvbiA9IF8uZmluZChfdGhpcy5jaXR5LCBbJ0xPQ0FUSU9OSUQnLCBjaXR5aWRdKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXMudG9hc3Rlci5lcnJvcihlcnIuc3RhdHVzICsgJyA6ICcgKyBlcnIuc3RhdHVzVGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxGdWVsUmF0ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxGdWVsUmF0ZXMoY2l0eWlkKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZyb21kdCA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuRlVFTEZST01EQVRFKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgIHZhciB0b2R0ID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5GVUVMVE9EQVRFKSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgIHZhciB1cmxuZXcgPSAnZ2V0cmF0ZXF1ZXJ5LycgKyBjaXR5aWQgKyAnLycgKyBmcm9tZHQgKyAnLycgKyB0b2R0O1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRyYXRlcXVlcnkvJyArIGNpdHlpZCArICcvJyArIGZyb21kdCArICcvJyArIHRvZHQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBfdGhpczIuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG5cbiAgICAgICAgdmFyIG5ld091dHB1dERhdGEgPSBfLmVhY2goX3RoaXMyLmZ1ZWxSYXRlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgRlVFTERBVEUgPSBfdGhpczIuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURTtcbiAgICAgICAgICBGVUVMREFURSA9IF90aGlzMi4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoX3RoaXMyLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUpLCAnZGQtTU1NLXl5eXknKTtcbiAgICAgICAgICBfdGhpczIuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSA9IEZVRUxEQVRFO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpczIuZnVlbFJhdGVzID0gbmV3T3V0cHV0RGF0YTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXMyLnRvYXN0ZXIuZXJyb3IoZXJyLnN0YXR1cyArICcgOiAnICsgZXJyLnN0YXR1c1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGVRdWVyeUNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVRdWVyeUNvbnRyb2xsZXIgPSBSYXRlUXVlcnlDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmF0ZVF1ZXJ5Q29udHJvbGxlciB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSwgJHN0YXRlUGFyYW1zLCAkZmlsdGVyKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIHRoaXMuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAgIHRoaXMuJGZpbHRlciA9ICRmaWx0ZXI7XG5cbiAgICB0aGlzLmdldEFsbENpdHkoKTtcblxuICAgIHRoaXMuRlVFTFRPREFURSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGZ1ZWxGcm9tRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZnVlbEZyb21EYXRlLnNldERhdGUoZnVlbEZyb21EYXRlLmdldERhdGUoKSAtIDE4MCk7XG4gICAgdGhpcy5GVUVMRlJPTURBVEUgPSBmdWVsRnJvbURhdGU7XG5cbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcyh0aGlzLiRzdGF0ZVBhcmFtcy5jaXR5aWQpO1xuICB9XG5cbiAgaW5pdCgpIHtcblxuICB9XG5cbiAgZ2V0QWxsQ2l0eSgpIHtcbiAgICB0aGlzLl9hcGkuZ2V0KCdsb2NhdGlvbi8wJykudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNpdHkgPSByZXMuZGF0YTtcblxuICAgICAgdmFyIGdldGlkID0gdGhpcy4kc3RhdGVQYXJhbXMuY2l0eWlkO1xuICAgICAgdmFyIGNpdHlpZCA9IHBhcnNlSW50KGdldGlkKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBfLmZpbmQodGhpcy5jaXR5LCBbJ0xPQ0FUSU9OSUQnLCBjaXR5aWRdKTtcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnRvYXN0ZXIuZXJyb3IoYCR7ZXJyLnN0YXR1c30gOiAke2Vyci5zdGF0dXNUZXh0fWApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsRnVlbFJhdGVzKGNpdHlpZCkge1xuXG4gICAgdmFyIGZyb21kdCA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuRlVFTEZST01EQVRFKSwgJ3l5eXktTU0tZGQnKTtcbiAgICB2YXIgdG9kdCA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuRlVFTFRPREFURSksICd5eXl5LU1NLWRkJyk7XG4gICAgdmFyIHVybG5ldyA9IGBnZXRyYXRlcXVlcnkvJHtjaXR5aWR9LyR7ZnJvbWR0fS8ke3RvZHR9YDtcblxuICAgIHRoaXMuX2FwaS5nZXQoYGdldHJhdGVxdWVyeS8ke2NpdHlpZH0vJHtmcm9tZHR9LyR7dG9kdH1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG5cbiAgICAgIHZhciBuZXdPdXRwdXREYXRhID1cbiAgICAgICAgXy5lYWNoKHRoaXMuZnVlbFJhdGVzLFxuICAgICAgICAgIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YXIgRlVFTERBVEUgPSB0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEU7XG4gICAgICAgICAgICBGVUVMREFURSA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSksICdkZC1NTU0teXl5eScpO1xuICAgICAgICAgICAgdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFID0gRlVFTERBVEU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mdWVsUmF0ZXMgPSBuZXdPdXRwdXREYXRhO1xuXG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcbiAgICB9KTtcbiAgfVxuXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBcHBDb250cm9sbGVyKGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHBDb250cm9sbGVyKTtcblxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaXNMb2dnZWRpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTG9nZ2VkaW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvZ2luQm9keScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luQm9keSgpIHtcbiAgICAgIGlmICh0aGlzLmF1dGguYXV0aGVudGljYXRlZCkge1xuICAgICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25PdXRVc2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbk91dFVzZXIoKSB7XG4gICAgICB0aGlzLmF1dGguc2lnbm91dCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHBDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5BcHBDb250cm9sbGVyID0gQXBwQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZGluICgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgfVxyXG5cclxuICBsb2dpbkJvZHkgKCkge1xyXG4gICAgaWYodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lnbk91dFVzZXIoKXtcclxuICAgIHRoaXMuYXV0aC5zaWdub3V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghbGltaXQpIHtcbiAgICAgICAgbGltaXQgPSAzMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5HaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICBpZiAoIWxpbWl0KSB7XG4gICAgICBsaW1pdCA9IDMwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGF1dGhTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYXV0aFNlcnZpY2UoJHEsICRzdGF0ZSwgYXBpU2VydmljZSwgJHdpbmRvdykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXV0aFNlcnZpY2UpO1xuXG4gICAgdGhpcy4kcSA9ICRxO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB0aGlzLnVzZXJJbmZvID0ge307XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJyc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoYXV0aFNlcnZpY2UsIFt7XG4gICAga2V5OiAnbG9naW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcblxuICAgICAgdGhpcy5fYXBpLmdldCgnbG9naW4vJyArIHVzZXJuYW1lICsgJy8nICsgcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgX3RoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgX3RoaXMudXNlckluZm8gPSByZXN1bHQuZGF0YVswXTtcbiAgICAgICAgICAvL3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8pO1xuICAgICAgICAgIF90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBhbmd1bGFyLnRvSnNvbihfdGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfdGhpcy51c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuYXV0aEZhaWxlZE1zZyA9ICdVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuJztcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXNlckluZm8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVc2VySW5mbygpIHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQXV0aGVudGljYXRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8pO1xuICAgICAgaWYgKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSB1bmRlZmluZWQgJiYgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9ICcnKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaWdub3V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbm91dCgpIHtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gJyc7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gYXV0aFNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBhdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHEsICRzdGF0ZSwgYXBpU2VydmljZSwgJHdpbmRvdykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMuJHEgPSAkcTtcclxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcclxuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLnVzZXJJbmZvID0ge307XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICB2YXIgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgbG9naW4vJHt1c2VybmFtZX0vJHtwYXNzd29yZH1gKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzdWx0LmRhdGFbMF07XHJcbiAgICAgICAgLy90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBhbmd1bGFyLnRvSnNvbih0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRoaXMudXNlckluZm8pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICdVc2VybmFtZSBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuJztcclxuICAgICAgfVxyXG5cclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRoZW50aWNhdGVkKCkge1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvKTtcclxuICAgIGlmICh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gdW5kZWZpbmVkICYmIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSAnJykge1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcclxuICB9XHJcblxyXG4gIHNpZ25vdXQoKSB7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9ICcnO1xyXG4gICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGFwaVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhcGlTZXJ2aWNlKCRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhcGlTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAvL3RoaXMuX2hvc3QgPSAnaHR0cDovLzE3Mi4zMi4wLjIyNic7XG4gICAgdGhpcy5faG9zdCA9ICdodHRwOi8vMTE1LjExMy4xMzUuMjM5JztcblxuICAgIHRoaXMuX2Jhc2VVUkwgPSB0aGlzLl9ob3N0ICsgJy9CQUNfV0NGL0JBQ09OVFJBQ1RSZXN0U2VydmljZS5zdmMnO1xuXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0ge1xuICAgICAgbWV0aG9kOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoYXBpU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQodXJsKSB7XG5cbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnR0VUJztcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSB0aGlzLl9iYXNlVVJMICsgJy8nICsgdXJsO1xuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3N0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEsIGlzRnVsbFVSTCkge1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBpc0Z1bGxVUkwgPyB1cmwgOiB0aGlzLl9iYXNlVVJMICsgJy8nICsgdXJsO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLmRhdGEgPSBkYXRhO1xuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRIb3N0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SG9zdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBhcGlTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5hcGlTZXJ2aWNlID0gYXBpU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgYXBpU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJGh0dHApIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgLy90aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xNzIuMzIuMC4yMjYnO1xyXG4gICAgdGhpcy5faG9zdCA9ICdodHRwOi8vMTE1LjExMy4xMzUuMjM5JztcclxuXHJcbiAgICB0aGlzLl9iYXNlVVJMID0gYCR7dGhpcy5faG9zdH0vQkFDX1dDRi9CQUNPTlRSQUNUUmVzdFNlcnZpY2Uuc3ZjYDtcclxuXHJcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUgPSB7XHJcbiAgICAgIG1ldGhvZDogJycsXHJcbiAgICAgIHVybDogJycsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0KHVybCkge1xyXG5cclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnR0VUJztcclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBgJHt0aGlzLl9iYXNlVVJMfS8ke3VybH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHBvc3QodXJsLCBkYXRhLCBpc0Z1bGxVUkwpIHtcclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnUE9TVCc7XHJcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gaXNGdWxsVVJMID8gdXJsIDogYCR7dGhpcy5fYmFzZVVSTH0vJHt1cmx9YDtcclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5kYXRhID0gZGF0YTtcclxuICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3N0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvc3Q7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgV2ViRGV2VGVjU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJEZXZUZWNTZXJ2aWNlKTtcblxuICAgIHRoaXMuZGF0YSA9IFt7XG4gICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgIH1dO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdlYkRldlRlY1NlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGVjKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuV2ViRGV2VGVjU2VydmljZSA9IFdlYkRldlRlY1NlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcclxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxyXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcclxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXHJcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxyXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcclxuICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcclxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXRUZWMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5OYXZiYXJEaXJlY3RpdmUgPSBOYXZiYXJEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIobW9tZW50KSB7XG4gICduZ0luamVjdCc7XG5cbiAgLy8gXCJ0aGlzLmNyZWF0aW9uXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmF2YmFyQ29udHJvbGxlcik7XG5cbiAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25cIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0cy5NYWxhcmtleURpcmVjdGl2ZSA9IE1hbGFya2V5RGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKVsnZGVsZXRlJ10oKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIGZ1bmN0aW9uIChjb250cmlidXRvcikge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKVsnZGVsZXRlJ10oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWxhcmtleUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFsYXJrZXlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIF90aGlzMi5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiBfdGhpczIuY29udHJpYnV0b3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9