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
	  RateQueryController.$inject = ["$timeout", "apiService", "$stateParams", "$filter", "$state"];
	  function RateQueryController($timeout, apiService, $stateParams, $filter, $state) {
	    'ngInject';
	
	    _classCallCheck(this, RateQueryController);
	
	    this._api = apiService;
	    this.$stateParams = $stateParams;
	    this.$filter = $filter;
	    this.$state = $state;
	
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
	  }, {
	    key: 'search',
	    value: function search() {
	      this.getAllFuelRates(this.selectedOption.LOCATIONNAME);
	    }
	  }, {
	    key: 'viewRateMaster',
	    value: function viewRateMaster() {
	      this.$state.go('ratemaster');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY2NTFhNzY5OWQwZWZkNTk3OWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fw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QUlGLEtBQUssT0FBTztLQUNaLEtBQUssZUFBZTs7S0FFcEIsS0FBSyxTQUFTOzs7R0RnQmhCLGFDdkJJLG9CQUFrQjtLRHdCcEIsS0FBSztLQUNMLE9DZk0sa0JBQUMsbUJBQW1CO09EZ0J4QixJQUFJLFFBQVE7O09DZmQsT0FBTyxLQUFLLGdCQUFnQixtQkFBbUIsS0FBSyxZQUFNO1NBQ3hELE1BQUssS0FBSyxLQUFLOzs7TURvQmhCO0tBQ0QsS0FBSztLQUNMLE9DbEJhLHlCQUFDLG1CQUFtQjtPRG1CL0IsSUFBSSxTQUFTOztPQ2xCZixPQUFPLGtCQUFrQixnQkFBZ0IsSUFBSSxLQUFLLFVBQUMsTUFBUztTQUMxRCxPQUFLLGVBQWU7O1NBRXBCLE9BQU8sT0FBSzs7Ozs7R0R5QmhCLE9DN0NJIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjY2NTFhNzY5OWQwZWZkNTk3OWFcbiAqKi8iLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfaW5kZXhDb25maWcgPSByZXF1aXJlKCcuL2luZGV4LmNvbmZpZycpO1xuXG52YXIgX2luZGV4Um91dGUgPSByZXF1aXJlKCcuL2luZGV4LnJvdXRlJyk7XG5cbnZhciBfaW5kZXhSdW4gPSByZXF1aXJlKCcuL2luZGV4LnJ1bicpO1xuXG52YXIgX21haW5NYWluQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcblxudmFyIF9sb2dpbkxvZ2luQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbG9naW4vbG9naW4uY29udHJvbGxlcicpO1xuXG52YXIgX2Rhc2hib2FyZERhc2hib2FyZENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlcicpO1xuXG52YXIgX3JhdGVtYXN0ZXJSYXRlbWFzdGVyQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXInKTtcblxudmFyIF9yYXRlcXVlcnlSYXRlcXVlcnlDb250cm9sbGVyID0gcmVxdWlyZSgnLi9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBDb21wb25lbnRzQXBwQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlcicpO1xuXG52YXIgX2FwcENvbXBvbmVudHNHaXRodWJDb250cmlidXRvckdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnKTtcblxudmFyIF9hcHBMb2dpbkF1dGhTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2xvZ2luL2F1dGguc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNBcGlBcGlTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c1dlYkRldlRlY1dlYkRldlRlY1NlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzTmF2YmFyTmF2YmFyRGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcblxudmFyIF9hcHBDb21wb25lbnRzTWFsYXJrZXlNYWxhcmtleURpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZScpO1xuXG5hbmd1bGFyLm1vZHVsZSgnbWxsQmFjJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd0b2FzdHInXSkuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpLmNvbmZpZyhfaW5kZXhDb25maWcuY29uZmlnKS5jb25maWcoX2luZGV4Um91dGUucm91dGVyQ29uZmlnKS5ydW4oX2luZGV4UnVuLnJ1bkJsb2NrKS5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIF9hcHBDb21wb25lbnRzR2l0aHViQ29udHJpYnV0b3JHaXRodWJDb250cmlidXRvclNlcnZpY2UuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKS5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBfYXBwQ29tcG9uZW50c1dlYkRldlRlY1dlYkRldlRlY1NlcnZpY2UuV2ViRGV2VGVjU2VydmljZSkuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBfbWFpbk1haW5Db250cm9sbGVyLk1haW5Db250cm9sbGVyKS5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBfbG9naW5Mb2dpbkNvbnRyb2xsZXIuTG9naW5Db250cm9sbGVyKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgX2Rhc2hib2FyZERhc2hib2FyZENvbnRyb2xsZXIuRGFzaGJvYXJkQ29udHJvbGxlcikuY29udHJvbGxlcignUmF0ZU1hc3RlckNvbnRyb2xsZXInLCBfcmF0ZW1hc3RlclJhdGVtYXN0ZXJDb250cm9sbGVyLlJhdGVNYXN0ZXJDb250cm9sbGVyKS5jb250cm9sbGVyKCdSYXRlUXVlcnlDb250cm9sbGVyJywgX3JhdGVxdWVyeVJhdGVxdWVyeUNvbnRyb2xsZXIuUmF0ZVF1ZXJ5Q29udHJvbGxlcikuc2VydmljZSgnYXV0aFNlcnZpY2UnLCBfYXBwTG9naW5BdXRoU2VydmljZS5hdXRoU2VydmljZSkuc2VydmljZSgnYXBpU2VydmljZScsIF9hcHBDb21wb25lbnRzQXBpQXBpU2VydmljZS5hcGlTZXJ2aWNlKS5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBfYXBwQ29tcG9uZW50c05hdmJhck5hdmJhckRpcmVjdGl2ZS5OYXZiYXJEaXJlY3RpdmUpLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgX2FwcENvbXBvbmVudHNNYWxhcmtleU1hbGFya2V5RGlyZWN0aXZlLk1hbGFya2V5RGlyZWN0aXZlKS5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgX2FwcENvbXBvbmVudHNBcHBBcHBDb250cm9sbGVyLkFwcENvbnRyb2xsZXIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanNcbiAqKi8iLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xyXG5cclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xyXG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2luZGV4LnJvdXRlJztcclxuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XHJcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSAnLi9tYWluL21haW4uY29udHJvbGxlcic7XHJcbmltcG9ydCB7IExvZ2luQ29udHJvbGxlciB9IGZyb20gJy4vbG9naW4vbG9naW4uY29udHJvbGxlcic7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRyb2xsZXIgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFJhdGVNYXN0ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFJhdGVRdWVyeUNvbnRyb2xsZXIgfSBmcm9tICcuL3JhdGVxdWVyeS9yYXRlcXVlcnkuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hbGFya2V5RGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJztcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnbWxsQmFjJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd0b2FzdHInXSlcclxuXHJcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxyXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxyXG4gIC5jb25maWcoY29uZmlnKVxyXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxyXG4gIC5ydW4ocnVuQmxvY2spXHJcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxyXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXHJcbiAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBEYXNoYm9hcmRDb250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdSYXRlTWFzdGVyQ29udHJvbGxlcicsIFJhdGVNYXN0ZXJDb250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdSYXRlUXVlcnlDb250cm9sbGVyJywgUmF0ZVF1ZXJ5Q29udHJvbGxlcilcclxuICAuc2VydmljZSgnYXV0aFNlcnZpY2UnLCBhdXRoU2VydmljZSlcclxuICAuc2VydmljZSgnYXBpU2VydmljZScsIGFwaVNlcnZpY2UpXHJcbiAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZSlcclxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcclxuICAuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIEFwcENvbnRyb2xsZXIpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuXG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xyXG4gICduZ0luamVjdCc7XHJcbiAgLy8gRW5hYmxlIGxvZ1xyXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XHJcblxyXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxyXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcclxuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xyXG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XHJcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuXG5mdW5jdGlvbiByb3V0ZXJDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAvKlxyXG4gIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgIHVybDogJy8nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcclxuICAgIGNvbnRyb2xsZXJBczogJ21haW4nXHJcbiAgfSlcclxuICAqL1xuICAuc3RhdGUoJ2xvZ2luJywge1xuICAgIHVybDogJy8nLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2xvZ2luJyxcbiAgICBhdXRoZW50aWNhdGU6IGZhbHNlXG4gIH0pLnN0YXRlKCdyYXRlbWFzdGVyJywge1xuICAgIHVybDogJy9yYXRlbWFzdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ1JhdGVNYXN0ZXJDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdyYXRlJyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSkuc3RhdGUoJ3JhdGVxdWVyeScsIHtcbiAgICB1cmw6ICcvcmF0ZXF1ZXJ5LzpjaXR5aWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JhdGVxdWVyeS9yYXRlcXVlcnkuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ1JhdGVRdWVyeUNvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ3JhdGVxdWVyeScsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pLnN0YXRlKCdkYXNoYm9hcmQnLCB7XG4gICAgdXJsOiAnL2Rhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnZGFzaCcsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucm91dGUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLypcclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgdXJsOiAnLycsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICAgIH0pXHJcbiAgICAqL1xyXG4gICAgLnN0YXRlKCdsb2dpbicsIHtcclxuICAgICAgdXJsOiAnLycsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAuc3RhdGUoJ3JhdGVtYXN0ZXInLCB7XHJcbiAgICAgIHVybDogJy9yYXRlbWFzdGVyJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnUmF0ZU1hc3RlckNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlJyxcclxuICAgICAgYXV0aGVudGljYXRlOiB0cnVlXHJcbiAgICB9KVxyXG4gICAuc3RhdGUoJ3JhdGVxdWVyeScsIHtcclxuICAgICAgdXJsOiAnL3JhdGVxdWVyeS86Y2l0eWlkJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ1JhdGVRdWVyeUNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcclxuICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnZGFzaCcsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucm91dGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuXG5mdW5jdGlvbiBydW5CbG9jaygkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0NjA3MjU5OTIxNjM7XG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcbiAgICAgIH0sIDQwMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFdlYkRldlRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcbiAgICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcblxuICAgICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgZnVuY3Rpb24gKGF3ZXNvbWVUaGluZykge1xuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG93VG9hc3RyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1RvYXN0cigpIHtcbiAgICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLk1haW5Db250cm9sbGVyID0gTWFpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcclxuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xyXG4gICAgLy90aGlzLnRvYXN0ciA9IHRvYXN0cjtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcclxuICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICdydWJiZXJCYW5kJztcclxuICAgIH0sIDQwMDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xyXG5cclxuICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpID0+IHtcclxuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93VG9hc3RyKCkge1xyXG4gICAgLy90aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xyXG4gICAgdGhpcy5jbGFzc0FuaW1hdGlvbiA9ICcnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIExvZ2luQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xuICBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvZ2luQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhdXRoZW50aWNhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgaWYgKCEhcmVzKSB7XG4gICAgICAgICAgaWYgKF90aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHt9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldE1zZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0TXNnKCkge1xuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgICB9XG5cbiAgICAvLyBpc0xvZ2luKCkge1xuICAgIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xuICAgIC8vIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2dpbkNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLkxvZ2luQ29udHJvbGxlciA9IExvZ2luQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCBhdXRoU2VydmljZSwgdG9hc3Rlcikge1xyXG4gIGNvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcclxuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcclxuICAgIC8vdG9hc3Rlci5pbmZvKCdIaScpO1xyXG4gIH1cclxuXHJcbiAgYXV0aGVudGljYXRlKCkge1xyXG5cclxuICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKS50aGVuKChyZXMpID0+IHtcclxuXHJcbiAgICAgIGlmICghIXJlcykge1xyXG4gICAgICAgIGlmICh0aGlzLiRyb290U2NvcGUucmV0dXJuVG9TdGF0ZSA9PT0gJycpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdkYXNoYm9hcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRNc2coKXtcclxuICAgICAgdGhpcy5hdXRoLmF1dGhGYWlsZWRNc2cgPSAnJztcclxuICB9XHJcblxyXG4gIC8vIGlzTG9naW4oKSB7XHJcbiAgLy8gICByZXR1cm4gJ2xvZ2luYm9keSc7XHJcbiAgLy8gfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIERhc2hib2FyZENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UsIG1hc3RlclNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgICBmdW5jdGlvbiBEYXNoYm9hcmRDb250cm9sbGVyKCRodHRwLCBhcGlTZXJ2aWNlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhc2hib2FyZENvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAgICAgLy90aGlzLl9tYXN0ZXIgPSBtYXN0ZXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLmdldERhc2hDb250cmFjdHNFeHAoKTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpO1xuICAgICAgICB0aGlzLmdldERhc2hDb250cmFjdHNUb0JlTmVnbygpO1xuICAgICAgICB0aGlzLmdldERhc2hDb250cmFjdHNBbW1lbmRlZCgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEYXNoYm9hcmRDb250cm9sbGVyLCBbe1xuICAgICAgICBrZXk6ICdpbml0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c0V4cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXNoQ29udHJhY3RzRXhwKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0ZGFzaGNvbnRyYWN0c2V4cC8xJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29udHJhY3RzRXhwaXJlZCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0ZGFzaGNvbnRyYWN0c2Nsb3NldG9leHAvMScpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzMi5jb250cmFjdHNDbG9zZVRvRXhwaXJ5ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzVG9CZU5lZ28nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHN0b2JlbmVnby8xJykudGhlbihmdW5jdGlvbiAobmVnbykge1xuICAgICAgICAgICAgICAgIF90aGlzMy5jb250cmFjdHNUb0JlTmVnbyA9IG5lZ28uZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNBbW1lbmRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0ZGFzaGNvbnRyYWN0c2FtbWVuZGVkLzEnKS50aGVuKGZ1bmN0aW9uIChuZWdvKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmNvbnRyYWN0c0FtbWVuZGVkID0gbmVnby5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEYXNoYm9hcmRDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5EYXNoYm9hcmRDb250cm9sbGVyID0gRGFzaGJvYXJkQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UsIG1hc3RlclNlcnZpY2UsIHRvYXN0ZXIpIHtcclxuICBjb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XHJcbiAgICAvL3RoaXMuX21hc3RlciA9IG1hc3RlclNlcnZpY2U7XHJcbiAgICB0aGlzLmdldERhc2hDb250cmFjdHNFeHAoKTtcclxuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKTtcclxuICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCk7XHJcbiAgICB0aGlzLmdldERhc2hDb250cmFjdHNBbW1lbmRlZCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbmdldERhc2hDb250cmFjdHNFeHAoKXtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzZXhwLzFgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNFeHBpcmVkID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXNoQ29udHJhY3RzQ2xvc2VUb0V4cCgpe1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGdldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzFgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNDbG9zZVRvRXhwaXJ5ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXNoQ29udHJhY3RzVG9CZU5lZ28oKXtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzdG9iZW5lZ28vMWApXHJcbiAgICAgICAgLnRoZW4oKG5lZ28pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNUb0JlTmVnbyA9IG5lZ28uZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBnZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKXtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzYW1tZW5kZWQvMWApXHJcbiAgICAgICAgLnRoZW4oKG5lZ28pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cmFjdHNBbW1lbmRlZCA9IG5lZ28uZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFJhdGVNYXN0ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIFJhdGVNYXN0ZXJDb250cm9sbGVyKCR0aW1lb3V0LCBhcGlTZXJ2aWNlLCAkZmlsdGVyLCAkc3RhdGUpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIC8vdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGVNYXN0ZXJDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGZpbHRlciA9ICRmaWx0ZXI7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlTWFzdGVyQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxGdWVsUmF0ZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxGdWVsUmF0ZXMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRyYXRlcy9hbGwnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XG5cbiAgICAgICAgdmFyIG5ld091dHB1dERhdGEgPSBfLmVhY2goX3RoaXMuZnVlbFJhdGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBGVUVMREFURSA9IF90aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEU7XG4gICAgICAgICAgRlVFTERBVEUgPSBfdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoX3RoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSksICdkZC1NTU0teXl5eScpO1xuICAgICAgICAgIF90aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUgPSBGVUVMREFURTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuZnVlbFJhdGVzID0gbmV3T3V0cHV0RGF0YTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgX3RoaXMudG9hc3Rlci5lcnJvcihlcnIuc3RhdHVzICsgJyA6ICcgKyBlcnIuc3RhdHVzVGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRGdWVsUmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEZ1ZWxSYXRlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmdWVsUmF0ZVNhdmVVUkwgPSAnZnVlbHJhdGUvSU5TRVJUJztcblxuICAgICAgdmFyIHJldmlzZWRSYXRlcyA9IF8uY2hhaW4odGhpcy5mdWVsUmF0ZXMpLm1hcChmdW5jdGlvbiAocmF0ZSkge1xuXG4gICAgICAgIHJhdGUuRlVFTFJBVEVTX0lEID0gcmF0ZS5DVVJSQVRFID4gMCA/IDAgOiByYXRlLkZVRUxSQVRFU19JRDtcbiAgICAgICAgcmF0ZS5GVUVMQ0lUWSA9IHJhdGUuTE9DQVRJT05OQU1FO1xuICAgICAgICByYXRlLlJBVEUgPSByYXRlLkNVUlJBVEU7XG4gICAgICAgIHJhdGUuRlVFTERBVEUgPSBfdGhpczIuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHJhdGUuQUNUSVZFID0gXCJBXCI7XG4gICAgICAgIHJhdGUuQ1JFQVRFREJZID0gMTtcbiAgICAgICAgcmF0ZS5DUkVBVEVET04gPSBfdGhpczIuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XG4gICAgICAgIHJhdGUuTU9ERSA9IFwiSU5TRVJUXCI7XG5cbiAgICAgICAgcmV0dXJuIHJhdGU7XG4gICAgICB9KS52YWx1ZSgpO1xuXG4gICAgICB2YXIgbmV3UmF0ZSA9IHtcbiAgICAgICAgZnVlbHJhdGU6IHJldmlzZWRSYXRlc1xuICAgICAgfTtcblxuICAgICAgdGhpcy5fYXBpLnBvc3QoZnVlbFJhdGVTYXZlVVJMLCBuZXdSYXRlKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMyLmdldEFsbEZ1ZWxSYXRlcygpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2aWV3SGlzdERhdGEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2aWV3SGlzdERhdGEodGFibGUpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZyh0YWJsZS5GVUVMQ0lUWSk7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygncmF0ZXF1ZXJ5JywgeyBjaXR5aWQ6IHRhYmxlLkZVRUxDSVRZIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYXRlTWFzdGVyQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuUmF0ZU1hc3RlckNvbnRyb2xsZXIgPSBSYXRlTWFzdGVyQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmF0ZU1hc3RlckNvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xyXG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCBhcGlTZXJ2aWNlLCAkZmlsdGVyLCAkc3RhdGUpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICAvL3RoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuJGZpbHRlciA9ICRmaWx0ZXI7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XHJcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XHJcbiAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBnZXRBbGxGdWVsUmF0ZXMoKSB7XHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRyYXRlcy9hbGxgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdGhpcy5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcclxuXHJcbiAgICAgIHZhciBuZXdPdXRwdXREYXRhID1cclxuICAgICAgICBfLmVhY2godGhpcy5mdWVsUmF0ZXMsXHJcbiAgICAgICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgRlVFTERBVEUgPSB0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEU7XHJcbiAgICAgICAgICAgIEZVRUxEQVRFID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFKSwgJ2RkLU1NTS15eXl5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSA9IEZVRUxEQVRFO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmZ1ZWxSYXRlcyA9IG5ld091dHB1dERhdGE7XHJcblxyXG4gICAgfSwgKGVycikgPT4ge1xyXG4gICAgICB0aGlzLnRvYXN0ZXIuZXJyb3IoYCR7ZXJyLnN0YXR1c30gOiAke2Vyci5zdGF0dXNUZXh0fWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRGdWVsUmF0ZSgpIHtcclxuXHJcbiAgICB2YXIgZnVlbFJhdGVTYXZlVVJMID0gJ2Z1ZWxyYXRlL0lOU0VSVCc7XHJcblxyXG4gICAgdmFyIHJldmlzZWRSYXRlcyA9IF8uY2hhaW4odGhpcy5mdWVsUmF0ZXMpXHJcbiAgICAgIC5tYXAoKHJhdGUpID0+IHtcclxuXHJcbiAgICAgICAgcmF0ZS5GVUVMUkFURVNfSUQgPSAocmF0ZS5DVVJSQVRFID4gMCA/IDAgOiByYXRlLkZVRUxSQVRFU19JRCk7XHJcbiAgICAgICAgcmF0ZS5GVUVMQ0lUWSA9IHJhdGUuTE9DQVRJT05OQU1FO1xyXG4gICAgICAgIHJhdGUuUkFURSA9IHJhdGUuQ1VSUkFURTtcclxuICAgICAgICByYXRlLkZVRUxEQVRFID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcclxuICAgICAgICByYXRlLkFDVElWRSA9IFwiQVwiO1xyXG4gICAgICAgIHJhdGUuQ1JFQVRFREJZID0gMTtcclxuICAgICAgICByYXRlLkNSRUFURURPTiA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XHJcbiAgICAgICAgcmF0ZS5NT0RFID0gXCJJTlNFUlRcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhdGU7XHJcblxyXG4gICAgICB9KS52YWx1ZSgpO1xyXG5cclxuXHJcblxyXG4gICAgdmFyIG5ld1JhdGUgPSB7XHJcbiAgICAgIGZ1ZWxyYXRlOiByZXZpc2VkUmF0ZXNcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fYXBpLnBvc3QoZnVlbFJhdGVTYXZlVVJMLCBuZXdSYXRlKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcygpO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3SGlzdERhdGEodGFibGUpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRhYmxlLkZVRUxDSVRZKTtcclxuICAgIHRoaXMuJHN0YXRlLmdvKCdyYXRlcXVlcnknLCB7Y2l0eWlkIDp0YWJsZS5GVUVMQ0lUWX0pO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlUXVlcnlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGZ1bmN0aW9uIFJhdGVRdWVyeUNvbnRyb2xsZXIoJHRpbWVvdXQsIGFwaVNlcnZpY2UsICRzdGF0ZVBhcmFtcywgJGZpbHRlciwgJHN0YXRlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYXRlUXVlcnlDb250cm9sbGVyKTtcblxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgdGhpcy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICAgdGhpcy4kZmlsdGVyID0gJGZpbHRlcjtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblxuICAgIHRoaXMuZ2V0QWxsQ2l0eSgpO1xuXG4gICAgdGhpcy5GVUVMVE9EQVRFID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZnVlbEZyb21EYXRlID0gbmV3IERhdGUoKTtcbiAgICBmdWVsRnJvbURhdGUuc2V0RGF0ZShmdWVsRnJvbURhdGUuZ2V0RGF0ZSgpIC0gMTgwKTtcbiAgICB0aGlzLkZVRUxGUk9NREFURSA9IGZ1ZWxGcm9tRGF0ZTtcblxuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKHRoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmF0ZVF1ZXJ5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxDaXR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsQ2l0eSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2xvY2F0aW9uLzAnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMuY2l0eSA9IHJlcy5kYXRhO1xuXG4gICAgICAgIHZhciBnZXRpZCA9IF90aGlzLiRzdGF0ZVBhcmFtcy5jaXR5aWQ7XG4gICAgICAgIHZhciBjaXR5aWQgPSBwYXJzZUludChnZXRpZCk7XG4gICAgICAgIF90aGlzLnNlbGVjdGVkT3B0aW9uID0gXy5maW5kKF90aGlzLmNpdHksIFsnTE9DQVRJT05JRCcsIGNpdHlpZF0pO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfdGhpcy50b2FzdGVyLmVycm9yKGVyci5zdGF0dXMgKyAnIDogJyArIGVyci5zdGF0dXNUZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFsbEZ1ZWxSYXRlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEZ1ZWxSYXRlcyhjaXR5aWQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnJvbWR0ID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5GVUVMRlJPTURBVEUpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgdmFyIHRvZHQgPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSh0aGlzLkZVRUxUT0RBVEUpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgdmFyIHVybG5ldyA9ICdnZXRyYXRlcXVlcnkvJyArIGNpdHlpZCArICcvJyArIGZyb21kdCArICcvJyArIHRvZHQ7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldHJhdGVxdWVyeS8nICsgY2l0eWlkICsgJy8nICsgZnJvbWR0ICsgJy8nICsgdG9kdCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzMi5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcblxuICAgICAgICB2YXIgbmV3T3V0cHV0RGF0YSA9IF8uZWFjaChfdGhpczIuZnVlbFJhdGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBGVUVMREFURSA9IF90aGlzMi5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFO1xuICAgICAgICAgIEZVRUxEQVRFID0gX3RoaXMyLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZShfdGhpczIuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSksICdkZC1NTU0teXl5eScpO1xuICAgICAgICAgIF90aGlzMi5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFID0gRlVFTERBVEU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzMi5mdWVsUmF0ZXMgPSBuZXdPdXRwdXREYXRhO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfdGhpczIudG9hc3Rlci5lcnJvcihlcnIuc3RhdHVzICsgJyA6ICcgKyBlcnIuc3RhdHVzVGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWFyY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgICB0aGlzLmdldEFsbEZ1ZWxSYXRlcyh0aGlzLnNlbGVjdGVkT3B0aW9uLkxPQ0FUSU9OTkFNRSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmlld1JhdGVNYXN0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2aWV3UmF0ZU1hc3RlcigpIHtcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdyYXRlbWFzdGVyJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGVRdWVyeUNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVRdWVyeUNvbnRyb2xsZXIgPSBSYXRlUXVlcnlDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgUmF0ZVF1ZXJ5Q29udHJvbGxlciB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSwgJHN0YXRlUGFyYW1zLCAkZmlsdGVyLCAkc3RhdGUpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgdGhpcy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICAgdGhpcy4kZmlsdGVyID0gJGZpbHRlcjtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblxuICAgIHRoaXMuZ2V0QWxsQ2l0eSgpO1xuXG4gICAgdGhpcy5GVUVMVE9EQVRFID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZnVlbEZyb21EYXRlID0gbmV3IERhdGUoKTtcbiAgICBmdWVsRnJvbURhdGUuc2V0RGF0ZShmdWVsRnJvbURhdGUuZ2V0RGF0ZSgpIC0gMTgwKTtcbiAgICB0aGlzLkZVRUxGUk9NREFURSA9IGZ1ZWxGcm9tRGF0ZTtcblxuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKHRoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZCk7XG4gIH1cblxuICBpbml0KCkge1xuXG4gIH1cblxuICBnZXRBbGxDaXR5KCkge1xuICAgIHRoaXMuX2FwaS5nZXQoJ2xvY2F0aW9uLzAnKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY2l0eSA9IHJlcy5kYXRhO1xuXG4gICAgICB2YXIgZ2V0aWQgPSB0aGlzLiRzdGF0ZVBhcmFtcy5jaXR5aWQ7XG4gICAgICB2YXIgY2l0eWlkID0gcGFyc2VJbnQoZ2V0aWQpO1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IF8uZmluZCh0aGlzLmNpdHksIFsnTE9DQVRJT05JRCcsIGNpdHlpZF0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHRoaXMudG9hc3Rlci5lcnJvcihgJHtlcnIuc3RhdHVzfSA6ICR7ZXJyLnN0YXR1c1RleHR9YCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxGdWVsUmF0ZXMoY2l0eWlkKSB7XG5cbiAgICB2YXIgZnJvbWR0ID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5GVUVMRlJPTURBVEUpLCAneXl5eS1NTS1kZCcpO1xuICAgIHZhciB0b2R0ID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5GVUVMVE9EQVRFKSwgJ3l5eXktTU0tZGQnKTtcbiAgICB2YXIgdXJsbmV3ID0gYGdldHJhdGVxdWVyeS8ke2NpdHlpZH0vJHtmcm9tZHR9LyR7dG9kdH1gO1xuXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0cmF0ZXF1ZXJ5LyR7Y2l0eWlkfS8ke2Zyb21kdH0vJHt0b2R0fWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5mdWVsUmF0ZXMgPSByZXMuZGF0YTtcblxuICAgICAgdmFyIG5ld091dHB1dERhdGEgPVxuICAgICAgICBfLmVhY2godGhpcy5mdWVsUmF0ZXMsXG4gICAgICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhciBGVUVMREFURSA9IHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURTtcbiAgICAgICAgICAgIEZVRUxEQVRFID0gdGhpcy4kZmlsdGVyKCdkYXRlJykobmV3IERhdGUodGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFKSwgJ2RkLU1NTS15eXl5Jyk7XG4gICAgICAgICAgICB0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUgPSBGVUVMREFURTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZ1ZWxSYXRlcyA9IG5ld091dHB1dERhdGE7XG5cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnRvYXN0ZXIuZXJyb3IoYCR7ZXJyLnN0YXR1c30gOiAke2Vyci5zdGF0dXNUZXh0fWApO1xuICAgIH0pO1xuICB9XG5cblxuICBzZWFyY2goKSB7XG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXModGhpcy5zZWxlY3RlZE9wdGlvbi5MT0NBVElPTk5BTUUpO1xuICB9XG5cbiAgdmlld1JhdGVNYXN0ZXIoKXtcbiAgICAgdGhpcy4kc3RhdGUuZ28oJ3JhdGVtYXN0ZXInKTtcbiAgfVxuXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEFwcENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBcHBDb250cm9sbGVyKGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHBDb250cm9sbGVyKTtcblxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaXNMb2dnZWRpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTG9nZ2VkaW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvZ2luQm9keScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luQm9keSgpIHtcbiAgICAgIGlmICh0aGlzLmF1dGguYXV0aGVudGljYXRlZCkge1xuICAgICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25PdXRVc2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2lnbk91dFVzZXIoKSB7XG4gICAgICB0aGlzLmF1dGguc2lnbm91dCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHBDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5BcHBDb250cm9sbGVyID0gQXBwQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgQXBwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZGluICgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgfVxyXG5cclxuICBsb2dpbkJvZHkgKCkge1xyXG4gICAgaWYodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICByZXR1cm4gJ2lzbG9nZ2VkaW4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lnbk91dFVzZXIoKXtcclxuICAgIHRoaXMuYXV0aC5zaWdub3V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMobGltaXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghbGltaXQpIHtcbiAgICAgICAgbGltaXQgPSAzMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5HaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XHJcbiAgfVxyXG5cclxuICBnZXRDb250cmlidXRvcnMobGltaXQpIHtcclxuICAgIGlmICghbGltaXQpIHtcclxuICAgICAgbGltaXQgPSAzMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBhdXRoU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGF1dGhTZXJ2aWNlKCRxLCAkc3RhdGUsIGFwaVNlcnZpY2UsICR3aW5kb3cpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGF1dGhTZXJ2aWNlKTtcblxuICAgIHRoaXMuJHEgPSAkcTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgdGhpcy51c2VySW5mbyA9IHt9O1xuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICcnO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKGF1dGhTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2xvZ2luJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2xvZ2luLycgKyB1c2VybmFtZSArICcvJyArIHBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblxuICAgICAgICBpZiAocmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIF90aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLnVzZXJJbmZvID0gcmVzdWx0LmRhdGFbMF07XG4gICAgICAgICAgLy90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICBfdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gYW5ndWxhci50b0pzb24oX3RoaXMudXNlckluZm8pO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoX3RoaXMudXNlckluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmF1dGhGYWlsZWRNc2cgPSAnVXNlcm5hbWUgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0Lic7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFVzZXJJbmZvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlckluZm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySW5mbztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0F1dGhlbnRpY2F0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG5cbiAgICAgIC8vY29uc29sZS5sb2codGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvKTtcbiAgICAgIGlmICh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gdW5kZWZpbmVkICYmIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSAnJykge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2lnbm91dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpZ25vdXQoKSB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9ICcnO1xuICAgICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIGF1dGhTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgYXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRxLCAkc3RhdGUsIGFwaVNlcnZpY2UsICR3aW5kb3cpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XHJcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgdGhpcy51c2VySW5mbyA9IHt9O1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnJztcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgdmFyIGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGxvZ2luLyR7dXNlcm5hbWV9LyR7cGFzc3dvcmR9YCkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlc3VsdC5kYXRhWzBdO1xyXG4gICAgICAgIC8vdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbyk7XHJcbiAgICAgICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gYW5ndWxhci50b0pzb24odGhpcy51c2VySW5mbyk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnVXNlcm5hbWUgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0Lic7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VySW5mbztcclxuICB9XHJcblxyXG4gIGlzQXV0aGVudGljYXRlZCgpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyk7XHJcbiAgICBpZiAodGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9IHVuZGVmaW5lZCAmJiB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gJycpIHtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XHJcbiAgfVxyXG5cclxuICBzaWdub3V0KCkge1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSAnJztcclxuICAgIHRoaXMuJHN0YXRlLmdvKCdsb2dpbicpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBhcGlTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYXBpU2VydmljZSgkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXBpU2VydmljZSk7XG5cbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgLy90aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xNzIuMzIuMC4yMjYnO1xuICAgIHRoaXMuX2hvc3QgPSAnaHR0cDovLzExNS4xMTMuMTM1LjIzOSc7XG5cbiAgICB0aGlzLl9iYXNlVVJMID0gdGhpcy5faG9zdCArICcvQkFDX1dDRi9CQUNPTlRSQUNUUmVzdFNlcnZpY2Uuc3ZjJztcblxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcbiAgICAgIG1ldGhvZDogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKGFwaVNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVybCkge1xuXG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ0dFVCc7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gdGhpcy5fYmFzZVVSTCArICcvJyArIHVybDtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBpc0Z1bGxVUkwpIHtcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnUE9TVCc7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gaXNGdWxsVVJMID8gdXJsIDogdGhpcy5fYmFzZVVSTCArICcvJyArIHVybDtcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5kYXRhID0gZGF0YTtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhvc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gYXBpU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuYXBpU2VydmljZSA9IGFwaVNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGFwaVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRodHRwKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIC8vdGhpcy5faG9zdCA9ICdodHRwOi8vMTcyLjMyLjAuMjI2JztcclxuICAgIHRoaXMuX2hvc3QgPSAnaHR0cDovLzExNS4xMTMuMTM1LjIzOSc7XHJcblxyXG4gICAgdGhpcy5fYmFzZVVSTCA9IGAke3RoaXMuX2hvc3R9L0JBQ19XQ0YvQkFDT05UUkFDVFJlc3RTZXJ2aWNlLnN2Y2A7XHJcblxyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlID0ge1xyXG4gICAgICBtZXRob2Q6ICcnLFxyXG4gICAgICB1cmw6ICcnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCh1cmwpIHtcclxuXHJcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ0dFVCc7XHJcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gYCR7dGhpcy5fYmFzZVVSTH0vJHt1cmx9YDtcclxuICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwb3N0KHVybCwgZGF0YSwgaXNGdWxsVVJMKSB7XHJcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGlzRnVsbFVSTCA/IHVybCA6IGAke3RoaXMuX2Jhc2VVUkx9LyR7dXJsfWA7XHJcbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUuZGF0YSA9IGRhdGE7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG9zdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFdlYkRldlRlY1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXZWJEZXZUZWNTZXJ2aWNlKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViRGV2VGVjU2VydmljZSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbe1xuICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICB9XTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhXZWJEZXZUZWNTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldFRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRlYygpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBXZWJEZXZUZWNTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXHJcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcclxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdLYXJtYScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxyXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcclxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGVjKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTmF2YmFyRGlyZWN0aXZlID0gTmF2YmFyRGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxudmFyIE5hdmJhckNvbnRyb2xsZXIgPSBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKG1vbWVudCkge1xuICAnbmdJbmplY3QnO1xuXG4gIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmJhckNvbnRyb2xsZXIpO1xuXG4gIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcclxuICAnbmdJbmplY3QnO1xyXG5cclxuICBsZXQgZGlyZWN0aXZlID0ge1xyXG4gICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxyXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBkaXJlY3RpdmU7XHJcbn1cclxuXHJcbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcclxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0cy5NYWxhcmtleURpcmVjdGl2ZSA9IE1hbGFya2V5RGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKVsnZGVsZXRlJ10oKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIGZ1bmN0aW9uIChjb250cmlidXRvcikge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKVsnZGVsZXRlJ10oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgTWFsYXJrZXlDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWxhcmtleUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFsYXJrZXlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIF90aGlzMi5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiBfdGhpczIuY29udHJpYnV0b3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XHJcbiAgJ25nSW5qZWN0JztcclxuXHJcbiAgbGV0IGRpcmVjdGl2ZSA9IHtcclxuICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICBzY29wZToge1xyXG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXHJcbiAgICBsaW5rOiBsaW5rRnVuYyxcclxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBkaXJlY3RpdmU7XHJcblxyXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcclxuICAgIGxldCB3YXRjaGVyO1xyXG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XHJcbiAgICAgIHR5cGVTcGVlZDogNDAsXHJcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcclxuICAgICAgcGF1c2VEZWxheTogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBwb3N0Zml4OiAnICdcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XHJcblxyXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcclxuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XHJcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xyXG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XHJcbiAgICAgIHdhdGNoZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XHJcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9