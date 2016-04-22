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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY2NTFhNzY5OWQwZWZkNTk3OWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlbWFzdGVyL3JhdGVtYXN0ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzPzJmYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXIuanM/YmVhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXIuanM/MzE1YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz81MjE3Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzP2RjNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzPzY0YmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzPzllZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcz8zMTY5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fw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S0FJRixLQUFLLE9BQU87S0FDWixLQUFLLGVBQWU7O0tBRXBCLEtBQUssU0FBUzs7O0dEZ0JoQixhQ3ZCSSxvQkFBa0I7S0R3QnBCLEtBQUs7S0FDTCxPQ2ZNLGtCQUFDLG1CQUFtQjtPRGdCeEIsSUFBSSxRQUFROztPQ2ZkLE9BQU8sS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssWUFBTTtTQUN4RCxNQUFLLEtBQUssS0FBSzs7O01Eb0JoQjtLQUNELEtBQUs7S0FDTCxPQ2xCYSx5QkFBQyxtQkFBbUI7T0RtQi9CLElBQUksU0FBUzs7T0NsQmYsT0FBTyxrQkFBa0IsZ0JBQWdCLElBQUksS0FBSyxVQUFDLE1BQVM7U0FDMUQsT0FBSyxlQUFlOztTQUVwQixPQUFPLE9BQUs7Ozs7O0dEeUJoQixPQzdDSSIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI2NjUxYTc2OTlkMGVmZDU5NzlhXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4Q29uZmlnID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleFJvdXRlID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4UnVuID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluTWFpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL21haW4vbWFpbi5jb250cm9sbGVyJyk7XG5cbnZhciBfbG9naW5Mb2dpbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInKTtcblxudmFyIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyID0gcmVxdWlyZSgnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInKTtcblxudmFyIF9yYXRlbWFzdGVyUmF0ZW1hc3RlckNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyJyk7XG5cbnZhciBfcmF0ZXF1ZXJ5UmF0ZXF1ZXJ5Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBDb21wb25lbnRzR2l0aHViQ29udHJpYnV0b3JHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwTG9naW5BdXRoU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzQXBpQXBpU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c05hdmJhck5hdmJhckRpcmVjdGl2ZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnKTtcblxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4Q29uZmlnLmNvbmZpZykuY29uZmlnKF9pbmRleFJvdXRlLnJvdXRlckNvbmZpZykucnVuKF9pbmRleFJ1bi5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgX2FwcENvbXBvbmVudHNXZWJEZXZUZWNXZWJEZXZUZWNTZXJ2aWNlLldlYkRldlRlY1NlcnZpY2UpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW5NYWluQ29udHJvbGxlci5NYWluQ29udHJvbGxlcikuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgX2xvZ2luTG9naW5Db250cm9sbGVyLkxvZ2luQ29udHJvbGxlcikuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIF9kYXNoYm9hcmREYXNoYm9hcmRDb250cm9sbGVyLkRhc2hib2FyZENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1JhdGVNYXN0ZXJDb250cm9sbGVyJywgX3JhdGVtYXN0ZXJSYXRlbWFzdGVyQ29udHJvbGxlci5SYXRlTWFzdGVyQ29udHJvbGxlcikuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIF9yYXRlcXVlcnlSYXRlcXVlcnlDb250cm9sbGVyLlJhdGVRdWVyeUNvbnRyb2xsZXIpLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgX2FwcExvZ2luQXV0aFNlcnZpY2UuYXV0aFNlcnZpY2UpLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UuYXBpU2VydmljZSkuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUuTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIF9hcHBDb21wb25lbnRzTWFsYXJrZXlNYWxhcmtleURpcmVjdGl2ZS5NYWxhcmtleURpcmVjdGl2ZSkuY29udHJvbGxlcignQXBwQ29udHJvbGxlcicsIF9hcHBDb21wb25lbnRzQXBwQXBwQ29udHJvbGxlci5BcHBDb250cm9sbGVyKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzXG4gKiovIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cclxuXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcclxuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XHJcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xyXG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSYXRlTWFzdGVyQ29udHJvbGxlciB9IGZyb20gJy4vcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSYXRlUXVlcnlDb250cm9sbGVyIH0gZnJvbSAnLi9yYXRlcXVlcnkvcmF0ZXF1ZXJ5LmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2xvZ2luL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IGFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXHJcblxyXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcclxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcclxuICAuY29uZmlnKGNvbmZpZylcclxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcclxuICAucnVuKHJ1bkJsb2NrKVxyXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcclxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcclxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgRGFzaGJvYXJkQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignUmF0ZU1hc3RlckNvbnRyb2xsZXInLCBSYXRlTWFzdGVyQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignUmF0ZVF1ZXJ5Q29udHJvbGxlcicsIFJhdGVRdWVyeUNvbnRyb2xsZXIpXHJcbiAgLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgYXV0aFNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ2FwaVNlcnZpY2UnLCBhcGlTZXJ2aWNlKVxyXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXHJcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpXHJcbiAgLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBBcHBDb250cm9sbGVyKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcblxuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gIC8vIEVuYWJsZSBsb2dcclxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xyXG5cclxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcclxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcclxuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XHJcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcclxuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xyXG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdXRlckNvbmZpZyA9IHJvdXRlckNvbmZpZztcblxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgLypcclxuICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICB1cmw6ICcvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXHJcbiAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gIH0pXHJcbiAgKi9cbiAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgYXV0aGVudGljYXRlOiBmYWxzZVxuICB9KS5zdGF0ZSgncmF0ZW1hc3RlcicsIHtcbiAgICB1cmw6ICcvcmF0ZW1hc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlTWFzdGVyQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAncmF0ZScsXG4gICAgYXV0aGVudGljYXRlOiB0cnVlXG4gIH0pLnN0YXRlKCdyYXRlcXVlcnknLCB7XG4gICAgdXJsOiAnL3JhdGVxdWVyeS86Y2l0eWlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yYXRlcXVlcnkvcmF0ZXF1ZXJ5Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdSYXRlUXVlcnlDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdyYXRlcXVlcnknLFxuICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICB9KS5zdGF0ZSgnZGFzaGJvYXJkJywge1xuICAgIHVybDogJy9kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZENvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2Rhc2gnLFxuICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxuICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICduZ0luamVjdCc7XHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC8qXHJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XHJcbiAgICAgIHVybDogJy8nLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXHJcbiAgICB9KVxyXG4gICAgKi9cclxuICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgIHVybDogJy8nLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ2xvZ2luJyxcclxuICAgICAgYXV0aGVudGljYXRlOiBmYWxzZVxyXG4gICAgfSlcclxuICAgLnN0YXRlKCdyYXRlbWFzdGVyJywge1xyXG4gICAgICB1cmw6ICcvcmF0ZW1hc3RlcicsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ1JhdGVNYXN0ZXJDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAncmF0ZScsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZVxyXG4gICAgfSlcclxuICAgLnN0YXRlKCdyYXRlcXVlcnknLCB7XHJcbiAgICAgIHVybDogJy9yYXRlcXVlcnkvOmNpdHlpZCcsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JhdGVxdWVyeS9yYXRlcXVlcnkuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdSYXRlUXVlcnlDb250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAncmF0ZXF1ZXJ5JyxcclxuICAgICAgYXV0aGVudGljYXRlOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKCdkYXNoYm9hcmQnLCB7XHJcbiAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ2Rhc2gnLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcblxuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xuICAgIC8vdGhpcy50b2FzdHIgPSB0b2FzdHI7XG5cbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1haW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgICB9LCA0MDAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRXZWJEZXZUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XG4gICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKCk7XG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIGZ1bmN0aW9uIChhd2Vzb21lVGhpbmcpIHtcbiAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvd1RvYXN0cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dUb2FzdHIoKSB7XG4gICAgICAvL3RoaXMudG9hc3RyLmluZm8oJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+Jyk7XG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1haW5Db250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBNYWluQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcclxuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTQ2MDcyNTk5MjE2MztcclxuICAgIC8vdGhpcy50b2FzdHIgPSB0b2FzdHI7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XHJcbiAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XHJcbiAgICB9LCA0MDAwKTtcclxuICB9XHJcblxyXG4gIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcclxuXHJcbiAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCAoYXdlc29tZVRoaW5nKSA9PiB7XHJcbiAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RvYXN0cigpIHtcclxuICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcclxuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBMb2dpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICAvL3RvYXN0ZXIuaW5mbygnSGknKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2dpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYXV0aGVudGljYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgIGlmICghIXJlcykge1xuICAgICAgICAgIGlmIChfdGhpcy4kcm9vdFNjb3BlLnJldHVyblRvU3RhdGUgPT09ICcnKSB7fSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2Rhc2hib2FyZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzZXRNc2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldE1zZygpIHtcbiAgICAgIHRoaXMuYXV0aC5hdXRoRmFpbGVkTXNnID0gJyc7XG4gICAgfVxuXG4gICAgLy8gaXNMb2dpbigpIHtcbiAgICAvLyAgIHJldHVybiAnbG9naW5ib2R5JztcbiAgICAvLyB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9naW5Db250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5Mb2dpbkNvbnRyb2xsZXIgPSBMb2dpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgTG9naW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UsIHRvYXN0ZXIpIHtcclxuICBjb25zdHJ1Y3Rvcigkc3RhdGUsICRyb290U2NvcGUsIGF1dGhTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XHJcbiAgICAvL3RvYXN0ZXIuaW5mbygnSGknKTtcclxuICB9XHJcblxyXG4gIGF1dGhlbnRpY2F0ZSgpIHtcclxuXHJcbiAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbigocmVzKSA9PiB7XHJcblxyXG4gICAgICBpZiAoISFyZXMpIHtcclxuICAgICAgICBpZiAodGhpcy4kcm9vdFNjb3BlLnJldHVyblRvU3RhdGUgPT09ICcnKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0TXNnKCl7XHJcbiAgICAgIHRoaXMuYXV0aC5hdXRoRmFpbGVkTXNnID0gJyc7XHJcbiAgfVxyXG5cclxuICAvLyBpc0xvZ2luKCkge1xyXG4gIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xyXG4gIC8vIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBEYXNoYm9hcmRDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvL2NvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlLCBtYXN0ZXJTZXJ2aWNlLCB0b2FzdGVyKSB7XG4gICAgZnVuY3Rpb24gRGFzaGJvYXJkQ29udHJvbGxlcigkaHR0cCwgYXBpU2VydmljZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXNoYm9hcmRDb250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgICAgIC8vdGhpcy5fbWFzdGVyID0gbWFzdGVyU2VydmljZTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XG4gICAgICAgIHRoaXMuZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzVG9CZU5lZ28oKTtcbiAgICAgICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGFzaGJvYXJkQ29udHJvbGxlciwgW3tcbiAgICAgICAga2V5OiAnaW5pdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge31cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNFeHAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c0V4cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNleHAvMScpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyYWN0c0V4cGlyZWQgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldERhc2hDb250cmFjdHNDbG9zZVRvRXhwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNjbG9zZXRvZXhwLzEnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhc2hDb250cmFjdHNUb0JlTmVnbygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9hcGkuZ2V0KCdnZXRkYXNoY29udHJhY3RzdG9iZW5lZ28vMScpLnRoZW4oZnVuY3Rpb24gKG5lZ28pIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuY29udHJhY3RzVG9CZU5lZ28gPSBuZWdvLmRhdGE7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREYXNoQ29udHJhY3RzQW1tZW5kZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwaS5nZXQoJ2dldGRhc2hjb250cmFjdHNhbW1lbmRlZC8xJykudGhlbihmdW5jdGlvbiAobmVnbykge1xuICAgICAgICAgICAgICAgIF90aGlzNC5jb250cmFjdHNBbW1lbmRlZCA9IG5lZ28uZGF0YTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGFzaGJvYXJkQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuRGFzaGJvYXJkQ29udHJvbGxlciA9IERhc2hib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yKCRodHRwLCBhcGlTZXJ2aWNlLCBtYXN0ZXJTZXJ2aWNlLCB0b2FzdGVyKSB7XHJcbiAgY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgLy90aGlzLl9tYXN0ZXIgPSBtYXN0ZXJTZXJ2aWNlO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzRXhwKCk7XHJcbiAgICB0aGlzLmdldERhc2hDb250cmFjdHNDbG9zZVRvRXhwKCk7XHJcbiAgICB0aGlzLmdldERhc2hDb250cmFjdHNUb0JlTmVnbygpO1xyXG4gICAgdGhpcy5nZXREYXNoQ29udHJhY3RzQW1tZW5kZWQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG5nZXREYXNoQ29udHJhY3RzRXhwKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2V4cC8xYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzRXhwaXJlZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaENvbnRyYWN0c0Nsb3NlVG9FeHAoKXtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRkYXNoY29udHJhY3RzY2xvc2V0b2V4cC8xYClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzQ2xvc2VUb0V4cGlyeSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaENvbnRyYWN0c1RvQmVOZWdvKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c3RvYmVuZWdvLzFgKVxyXG4gICAgICAgIC50aGVuKChuZWdvKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzVG9CZU5lZ28gPSBuZWdvLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaENvbnRyYWN0c0FtbWVuZGVkKCl7XHJcblxyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0ZGFzaGNvbnRyYWN0c2FtbWVuZGVkLzFgKVxyXG4gICAgICAgIC50aGVuKChuZWdvKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJhY3RzQW1tZW5kZWQgPSBuZWdvLmRhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBSYXRlTWFzdGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBSYXRlTWFzdGVyQ29udHJvbGxlcigkdGltZW91dCwgYXBpU2VydmljZSwgJGZpbHRlciwgJHN0YXRlKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvL3RoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYXRlTWFzdGVyQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xuICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmF0ZU1hc3RlckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsRnVlbFJhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRnVlbFJhdGVzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0cmF0ZXMvYWxsJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuXG4gICAgICAgIHZhciBuZXdPdXRwdXREYXRhID0gXy5lYWNoKF90aGlzLmZ1ZWxSYXRlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgRlVFTERBVEUgPSBfdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFO1xuICAgICAgICAgIEZVRUxEQVRFID0gX3RoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKF90aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUpLCAnZGQtTU1NLXl5eXknKTtcbiAgICAgICAgICBfdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFID0gRlVFTERBVEU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmZ1ZWxSYXRlcyA9IG5ld091dHB1dERhdGE7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF90aGlzLnRvYXN0ZXIuZXJyb3IoZXJyLnN0YXR1cyArICcgOiAnICsgZXJyLnN0YXR1c1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkRnVlbFJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGdWVsUmF0ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnVlbFJhdGVTYXZlVVJMID0gJ2Z1ZWxyYXRlL0lOU0VSVCc7XG5cbiAgICAgIHZhciByZXZpc2VkUmF0ZXMgPSBfLmNoYWluKHRoaXMuZnVlbFJhdGVzKS5tYXAoZnVuY3Rpb24gKHJhdGUpIHtcblxuICAgICAgICByYXRlLkZVRUxSQVRFU19JRCA9IHJhdGUuQ1VSUkFURSA+IDAgPyAwIDogcmF0ZS5GVUVMUkFURVNfSUQ7XG4gICAgICAgIHJhdGUuRlVFTENJVFkgPSByYXRlLkxPQ0FUSU9OTkFNRTtcbiAgICAgICAgcmF0ZS5SQVRFID0gcmF0ZS5DVVJSQVRFO1xuICAgICAgICByYXRlLkZVRUxEQVRFID0gX3RoaXMyLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICByYXRlLkFDVElWRSA9IFwiQVwiO1xuICAgICAgICByYXRlLkNSRUFURURCWSA9IDE7XG4gICAgICAgIHJhdGUuQ1JFQVRFRE9OID0gX3RoaXMyLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xuICAgICAgICByYXRlLk1PREUgPSBcIklOU0VSVFwiO1xuXG4gICAgICAgIHJldHVybiByYXRlO1xuICAgICAgfSkudmFsdWUoKTtcblxuICAgICAgdmFyIG5ld1JhdGUgPSB7XG4gICAgICAgIGZ1ZWxyYXRlOiByZXZpc2VkUmF0ZXNcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgbmV3UmF0ZSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIF90aGlzMi5nZXRBbGxGdWVsUmF0ZXMoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmlld0hpc3REYXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmlld0hpc3REYXRhKHRhYmxlKSB7XG5cbiAgICAgIC8vY29uc29sZS5sb2codGFibGUuRlVFTENJVFkpO1xuICAgICAgdGhpcy4kc3RhdGUuZ28oJ3JhdGVxdWVyeScsIHsgY2l0eWlkOiB0YWJsZS5GVUVMQ0lUWSB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmF0ZU1hc3RlckNvbnRyb2xsZXI7XG59KSgpO1xuXG5leHBvcnRzLlJhdGVNYXN0ZXJDb250cm9sbGVyID0gUmF0ZU1hc3RlckNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL3JhdGVtYXN0ZXIvcmF0ZW1hc3Rlci5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFJhdGVNYXN0ZXJDb250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcclxuICBjb25zdHJ1Y3RvcigkdGltZW91dCwgYXBpU2VydmljZSwgJGZpbHRlciwgJHN0YXRlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgLy90aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xyXG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsRnVlbFJhdGVzKCkge1xyXG4gICAgdGhpcy5fYXBpLmdldChgZ2V0cmF0ZXMvYWxsYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuZnVlbFJhdGVzID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICB2YXIgbmV3T3V0cHV0RGF0YSA9XHJcbiAgICAgICAgXy5lYWNoKHRoaXMuZnVlbFJhdGVzLFxyXG4gICAgICAgICAgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdmFyIEZVRUxEQVRFID0gdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFO1xyXG4gICAgICAgICAgICBGVUVMREFURSA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSksICdkZC1NTU0teXl5eScpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUgPSBGVUVMREFURTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5mdWVsUmF0ZXMgPSBuZXdPdXRwdXREYXRhO1xyXG5cclxuICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkRnVlbFJhdGUoKSB7XHJcblxyXG4gICAgdmFyIGZ1ZWxSYXRlU2F2ZVVSTCA9ICdmdWVscmF0ZS9JTlNFUlQnO1xyXG5cclxuICAgIHZhciByZXZpc2VkUmF0ZXMgPSBfLmNoYWluKHRoaXMuZnVlbFJhdGVzKVxyXG4gICAgICAubWFwKChyYXRlKSA9PiB7XHJcblxyXG4gICAgICAgIHJhdGUuRlVFTFJBVEVTX0lEID0gKHJhdGUuQ1VSUkFURSA+IDAgPyAwIDogcmF0ZS5GVUVMUkFURVNfSUQpO1xyXG4gICAgICAgIHJhdGUuRlVFTENJVFkgPSByYXRlLkxPQ0FUSU9OTkFNRTtcclxuICAgICAgICByYXRlLlJBVEUgPSByYXRlLkNVUlJBVEU7XHJcbiAgICAgICAgcmF0ZS5GVUVMREFURSA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyk7XHJcbiAgICAgICAgcmF0ZS5BQ1RJVkUgPSBcIkFcIjtcclxuICAgICAgICByYXRlLkNSRUFURURCWSA9IDE7XHJcbiAgICAgICAgcmF0ZS5DUkVBVEVET04gPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xyXG4gICAgICAgIHJhdGUuTU9ERSA9IFwiSU5TRVJUXCI7XHJcblxyXG4gICAgICAgIHJldHVybiByYXRlO1xyXG5cclxuICAgICAgfSkudmFsdWUoKTtcclxuXHJcblxyXG5cclxuICAgIHZhciBuZXdSYXRlID0ge1xyXG4gICAgICBmdWVscmF0ZTogcmV2aXNlZFJhdGVzXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2FwaS5wb3N0KGZ1ZWxSYXRlU2F2ZVVSTCwgbmV3UmF0ZSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXMoKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmlld0hpc3REYXRhKHRhYmxlKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0YWJsZS5GVUVMQ0lUWSk7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbygncmF0ZXF1ZXJ5Jywge2NpdHlpZCA6dGFibGUuRlVFTENJVFl9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvcmF0ZW1hc3Rlci9yYXRlbWFzdGVyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFJhdGVRdWVyeUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIpIHtcbiAgZnVuY3Rpb24gUmF0ZVF1ZXJ5Q29udHJvbGxlcigkdGltZW91dCwgYXBpU2VydmljZSwgJHN0YXRlUGFyYW1zLCAkZmlsdGVyLCAkc3RhdGUpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGVRdWVyeUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuXG4gICAgdGhpcy5nZXRBbGxDaXR5KCk7XG5cbiAgICB0aGlzLkZVRUxUT0RBVEUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBmdWVsRnJvbURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGZ1ZWxGcm9tRGF0ZS5zZXREYXRlKGZ1ZWxGcm9tRGF0ZS5nZXREYXRlKCkgLSAxODApO1xuICAgIHRoaXMuRlVFTEZST01EQVRFID0gZnVlbEZyb21EYXRlO1xuXG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXModGhpcy4kc3RhdGVQYXJhbXMuY2l0eWlkKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlUXVlcnlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2luaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge31cbiAgfSwge1xuICAgIGtleTogJ2dldEFsbENpdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxDaXR5KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYXBpLmdldCgnbG9jYXRpb24vMCcpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBfdGhpcy5jaXR5ID0gcmVzLmRhdGE7XG5cbiAgICAgICAgdmFyIGdldGlkID0gX3RoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZDtcbiAgICAgICAgdmFyIGNpdHlpZCA9IHBhcnNlSW50KGdldGlkKTtcbiAgICAgICAgX3RoaXMuc2VsZWN0ZWRPcHRpb24gPSBfLmZpbmQoX3RoaXMuY2l0eSwgWydMT0NBVElPTklEJywgY2l0eWlkXSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF90aGlzLnRvYXN0ZXIuZXJyb3IoZXJyLnN0YXR1cyArICcgOiAnICsgZXJyLnN0YXR1c1RleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWxsRnVlbFJhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRnVlbFJhdGVzKGNpdHlpZCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmcm9tZHQgPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSh0aGlzLkZVRUxGUk9NREFURSksICd5eXl5LU1NLWRkJyk7XG4gICAgICB2YXIgdG9kdCA9IHRoaXMuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKHRoaXMuRlVFTFRPREFURSksICd5eXl5LU1NLWRkJyk7XG4gICAgICB2YXIgdXJsbmV3ID0gJ2dldHJhdGVxdWVyeS8nICsgY2l0eWlkICsgJy8nICsgZnJvbWR0ICsgJy8nICsgdG9kdDtcblxuICAgICAgdGhpcy5fYXBpLmdldCgnZ2V0cmF0ZXF1ZXJ5LycgKyBjaXR5aWQgKyAnLycgKyBmcm9tZHQgKyAnLycgKyB0b2R0KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgX3RoaXMyLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuXG4gICAgICAgIHZhciBuZXdPdXRwdXREYXRhID0gXy5lYWNoKF90aGlzMi5mdWVsUmF0ZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIEZVRUxEQVRFID0gX3RoaXMyLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEU7XG4gICAgICAgICAgRlVFTERBVEUgPSBfdGhpczIuJGZpbHRlcignZGF0ZScpKG5ldyBEYXRlKF90aGlzMi5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFKSwgJ2RkLU1NTS15eXl5Jyk7XG4gICAgICAgICAgX3RoaXMyLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUgPSBGVUVMREFURTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMyLmZ1ZWxSYXRlcyA9IG5ld091dHB1dERhdGE7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIF90aGlzMi50b2FzdGVyLmVycm9yKGVyci5zdGF0dXMgKyAnIDogJyArIGVyci5zdGF0dXNUZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlYXJjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICAgIHRoaXMuZ2V0QWxsRnVlbFJhdGVzKHRoaXMuc2VsZWN0ZWRPcHRpb24uTE9DQVRJT05OQU1FKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2aWV3UmF0ZU1hc3RlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZpZXdSYXRlTWFzdGVyKCkge1xuICAgICAgdGhpcy4kc3RhdGUuZ28oJ3JhdGVtYXN0ZXInKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmF0ZVF1ZXJ5Q29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuUmF0ZVF1ZXJ5Q29udHJvbGxlciA9IFJhdGVRdWVyeUNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL3JhdGVxdWVyeS9yYXRlcXVlcnkuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBSYXRlUXVlcnlDb250cm9sbGVyIHtcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCBhcGlTZXJ2aWNlLCAkc3RhdGVQYXJhbXMsICRmaWx0ZXIsICRzdGF0ZSkge1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuXG4gICAgdGhpcy5nZXRBbGxDaXR5KCk7XG5cbiAgICB0aGlzLkZVRUxUT0RBVEUgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBmdWVsRnJvbURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGZ1ZWxGcm9tRGF0ZS5zZXREYXRlKGZ1ZWxGcm9tRGF0ZS5nZXREYXRlKCkgLSAxODApO1xuICAgIHRoaXMuRlVFTEZST01EQVRFID0gZnVlbEZyb21EYXRlO1xuXG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXModGhpcy4kc3RhdGVQYXJhbXMuY2l0eWlkKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgfVxuXG4gIGdldEFsbENpdHkoKSB7XG4gICAgdGhpcy5fYXBpLmdldCgnbG9jYXRpb24vMCcpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jaXR5ID0gcmVzLmRhdGE7XG5cbiAgICAgIHZhciBnZXRpZCA9IHRoaXMuJHN0YXRlUGFyYW1zLmNpdHlpZDtcbiAgICAgIHZhciBjaXR5aWQgPSBwYXJzZUludChnZXRpZCk7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gXy5maW5kKHRoaXMuY2l0eSwgWydMT0NBVElPTklEJywgY2l0eWlkXSk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdGhpcy50b2FzdGVyLmVycm9yKGAke2Vyci5zdGF0dXN9IDogJHtlcnIuc3RhdHVzVGV4dH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbEZ1ZWxSYXRlcyhjaXR5aWQpIHtcblxuICAgIHZhciBmcm9tZHQgPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSh0aGlzLkZVRUxGUk9NREFURSksICd5eXl5LU1NLWRkJyk7XG4gICAgdmFyIHRvZHQgPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSh0aGlzLkZVRUxUT0RBVEUpLCAneXl5eS1NTS1kZCcpO1xuICAgIHZhciB1cmxuZXcgPSBgZ2V0cmF0ZXF1ZXJ5LyR7Y2l0eWlkfS8ke2Zyb21kdH0vJHt0b2R0fWA7XG5cbiAgICB0aGlzLl9hcGkuZ2V0KGBnZXRyYXRlcXVlcnkvJHtjaXR5aWR9LyR7ZnJvbWR0fS8ke3RvZHR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmZ1ZWxSYXRlcyA9IHJlcy5kYXRhO1xuXG4gICAgICB2YXIgbmV3T3V0cHV0RGF0YSA9XG4gICAgICAgIF8uZWFjaCh0aGlzLmZ1ZWxSYXRlcyxcbiAgICAgICAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIEZVRUxEQVRFID0gdGhpcy5mdWVsUmF0ZXNbdmFsdWVdLkZVRUxEQVRFO1xuICAgICAgICAgICAgRlVFTERBVEUgPSB0aGlzLiRmaWx0ZXIoJ2RhdGUnKShuZXcgRGF0ZSh0aGlzLmZ1ZWxSYXRlc1t2YWx1ZV0uRlVFTERBVEUpLCAnZGQtTU1NLXl5eXknKTtcbiAgICAgICAgICAgIHRoaXMuZnVlbFJhdGVzW3ZhbHVlXS5GVUVMREFURSA9IEZVRUxEQVRFO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnVlbFJhdGVzID0gbmV3T3V0cHV0RGF0YTtcblxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHRoaXMudG9hc3Rlci5lcnJvcihgJHtlcnIuc3RhdHVzfSA6ICR7ZXJyLnN0YXR1c1RleHR9YCk7XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgdGhpcy5nZXRBbGxGdWVsUmF0ZXModGhpcy5zZWxlY3RlZE9wdGlvbi5MT0NBVElPTk5BTUUpO1xuICB9XG5cbiAgdmlld1JhdGVNYXN0ZXIoKXtcbiAgICAgdGhpcy4kc3RhdGUuZ28oJ3JhdGVtYXN0ZXInKTtcbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvcmF0ZXF1ZXJ5L3JhdGVxdWVyeS5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBBcHBDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXBwQ29udHJvbGxlcihhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBcHBDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2lzTG9nZ2VkaW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0xvZ2dlZGluKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsb2dpbkJvZHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2dpbkJvZHkoKSB7XG4gICAgICBpZiAodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgcmV0dXJuICdpc2xvZ2dlZGluJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaWduT3V0VXNlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpZ25PdXRVc2VyKCkge1xuICAgICAgdGhpcy5hdXRoLnNpZ25vdXQoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXBwQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuQXBwQ29udHJvbGxlciA9IEFwcENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRpbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Cb2R5ICgpIHtcclxuICAgIGlmKHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKXtcclxuICAgICAgcmV0dXJuICdpc2xvZ2dlZGluJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpZ25PdXRVc2VyKCl7XHJcbiAgICB0aGlzLmF1dGguc2lnbm91dCgpO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHaXRodWJDb250cmlidXRvclNlcnZpY2UoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSk7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHaXRodWJDb250cmlidXRvclNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGxpbWl0KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIWxpbWl0KSB7XG4gICAgICAgIGxpbWl0ID0gMzA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy4kbG9nID0gJGxvZztcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0KSB7XHJcbiAgICBpZiAoIWxpbWl0KSB7XHJcbiAgICAgIGxpbWl0ID0gMzA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgYXV0aFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBhdXRoU2VydmljZSgkcSwgJHN0YXRlLCBhcGlTZXJ2aWNlLCAkd2luZG93KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRoU2VydmljZSk7XG5cbiAgICB0aGlzLiRxID0gJHE7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgIHRoaXMudXNlckluZm8gPSB7fTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhhdXRoU2VydmljZSwgW3tcbiAgICBrZXk6ICdsb2dpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xuXG4gICAgICB0aGlzLl9hcGkuZ2V0KCdsb2dpbi8nICsgdXNlcm5hbWUgKyAnLycgKyBwYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBfdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpcy51c2VySW5mbyA9IHJlc3VsdC5kYXRhWzBdO1xuICAgICAgICAgIC8vdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgX3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IGFuZ3VsYXIudG9Kc29uKF90aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF90aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5hdXRoRmFpbGVkTXNnID0gJ1VzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4nO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVc2VySW5mbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZXJJbmZvKCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckluZm87XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNBdXRoZW50aWNhdGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyk7XG4gICAgICBpZiAodGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9IHVuZGVmaW5lZCAmJiB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gJycpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpZ25vdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaWdub3V0KCkge1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSAnJztcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdsb2dpbicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBhdXRoU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkcSwgJHN0YXRlLCBhcGlTZXJ2aWNlLCAkd2luZG93KSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xyXG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgIHRoaXMudXNlckluZm8gPSB7fTtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJyc7XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICB0aGlzLl9hcGkuZ2V0KGBsb2dpbi8ke3VzZXJuYW1lfS8ke3Bhc3N3b3JkfWApLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlckluZm8gPSByZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAvL3RoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9IGFuZ3VsYXIudG9Kc29uKHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodGhpcy51c2VySW5mbyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdXRoRmFpbGVkTXNnID0gJ1VzZXJuYW1lIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlckluZm87XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8pO1xyXG4gICAgaWYgKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSB1bmRlZmluZWQgJiYgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9ICcnKSB7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xyXG4gIH1cclxuXHJcbiAgc2lnbm91dCgpIHtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gJyc7XHJcbiAgICB0aGlzLiRzdGF0ZS5nbygnbG9naW4nKTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgYXBpU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGFwaVNlcnZpY2UoJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGFwaVNlcnZpY2UpO1xuXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIC8vdGhpcy5faG9zdCA9ICdodHRwOi8vMTcyLjMyLjAuMjI2JztcbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xuXG4gICAgdGhpcy5fYmFzZVVSTCA9IHRoaXMuX2hvc3QgKyAnL0JBQ19XQ0YvQkFDT05UUkFDVFJlc3RTZXJ2aWNlLnN2Yyc7XG5cbiAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUgPSB7XG4gICAgICBtZXRob2Q6ICcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhhcGlTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldCh1cmwpIHtcblxuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IHRoaXMuX2Jhc2VVUkwgKyAnLycgKyB1cmw7XG4gICAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSwgaXNGdWxsVVJMKSB7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGlzRnVsbFVSTCA/IHVybCA6IHRoaXMuX2Jhc2VVUkwgKyAnLycgKyB1cmw7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUuZGF0YSA9IGRhdGE7XG4gICAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIb3N0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hvc3Q7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIGFwaVNlcnZpY2U7XG59KSgpO1xuXG5leHBvcnRzLmFwaVNlcnZpY2UgPSBhcGlTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBhcGlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkaHR0cCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAvL3RoaXMuX2hvc3QgPSAnaHR0cDovLzE3Mi4zMi4wLjIyNic7XHJcbiAgICB0aGlzLl9ob3N0ID0gJ2h0dHA6Ly8xMTUuMTEzLjEzNS4yMzknO1xyXG5cclxuICAgIHRoaXMuX2Jhc2VVUkwgPSBgJHt0aGlzLl9ob3N0fS9CQUNfV0NGL0JBQ09OVFJBQ1RSZXN0U2VydmljZS5zdmNgO1xyXG5cclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcclxuICAgICAgbWV0aG9kOiAnJyxcclxuICAgICAgdXJsOiAnJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQodXJsKSB7XHJcblxyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGAke3RoaXMuX2Jhc2VVUkx9LyR7dXJsfWA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEsIGlzRnVsbFVSTCkge1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdQT1NUJztcclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBpc0Z1bGxVUkwgPyB1cmwgOiBgJHt0aGlzLl9iYXNlVVJMfS8ke3VybH1gO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIGdldEhvc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYkRldlRlY1NlcnZpY2UpO1xuXG4gICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgfV07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2ViRGV2VGVjU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZWMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gV2ViRGV2VGVjU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxyXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcclxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxyXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldFRlYygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk5hdmJhckRpcmVjdGl2ZSA9IE5hdmJhckRpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbnZhciBOYXZiYXJDb250cm9sbGVyID0gZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcihtb21lbnQpIHtcbiAgJ25nSW5qZWN0JztcblxuICAvLyBcInRoaXMuY3JlYXRpb25cIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZiYXJDb250cm9sbGVyKTtcblxuICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuXHJcbiAgbGV0IGRpcmVjdGl2ZSA9IHtcclxuICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXHJcbiAgICBzY29wZToge1xyXG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGlyZWN0aXZlO1xyXG59XHJcblxyXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXHJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHMuTWFsYXJrZXlEaXJlY3RpdmUgPSBNYWxhcmtleURpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIHZhciB3YXRjaGVyID0gdW5kZWZpbmVkO1xuICAgIHZhciB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKClbJ2RlbGV0ZSddKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCBmdW5jdGlvbiAoY29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKClbJ2RlbGV0ZSddKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFsYXJrZXlDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbGFya2V5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBfdGhpczIuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRyaWJ1dG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xyXG4gICduZ0luamVjdCc7XHJcblxyXG4gIGxldCBkaXJlY3RpdmUgPSB7XHJcbiAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgICBleHRyYVZhbHVlczogJz0nXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxyXG4gICAgbGluazogbGlua0Z1bmMsXHJcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXHJcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGlyZWN0aXZlO1xyXG5cclxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XHJcbiAgICBsZXQgd2F0Y2hlcjtcclxuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xyXG4gICAgICB0eXBlU3BlZWQ6IDQwLFxyXG4gICAgICBkZWxldGVTcGVlZDogNDAsXHJcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgcG9zdGZpeDogJyAnXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xyXG5cclxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xyXG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcclxuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xyXG4gICAgICB3YXRjaGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xyXG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==