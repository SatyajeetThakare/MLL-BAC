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
	
	var _appComponentsAppAppController = __webpack_require__(7);
	
	var _appComponentsGithubContributorGithubContributorService = __webpack_require__(8);
	
	var _appLoginAuthService = __webpack_require__(9);
	
	var _appComponentsApiApiService = __webpack_require__(10);
	
	var _appComponentsWebDevTecWebDevTecService = __webpack_require__(11);
	
	var _appComponentsNavbarNavbarDirective = __webpack_require__(12);
	
	var _appComponentsMalarkeyMalarkeyDirective = __webpack_require__(13);
	
	angular.module('mllBac', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(_indexConfig.config).config(_indexRoute.routerConfig).run(_indexRun.runBlock).service('githubContributor', _appComponentsGithubContributorGithubContributorService.GithubContributorService).service('webDevTec', _appComponentsWebDevTecWebDevTecService.WebDevTecService).controller('MainController', _mainMainController.MainController).controller('LoginController', _loginLoginController.LoginController).controller('DashboardController', _dashboardDashboardController.DashboardController).service('authService', _appLoginAuthService.authService).service('apiService', _appComponentsApiApiService.apiService).directive('acmeNavbar', _appComponentsNavbarNavbarDirective.NavbarDirective).directive('acmeMalarkey', _appComponentsMalarkeyMalarkeyDirective.MalarkeyDirective).controller('AppController', _appComponentsAppAppController.AppController);

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
	  DashboardController.$inject = ["$http", "apiService", "masterService"];
	  function DashboardController($http, apiService, masterService) {
	    'ngInject';
	
	    _classCallCheck(this, DashboardController);
	
	    this.$http = $http;
	    this._api = apiService;
	    this._master = masterService;
	    //this.toaster = toaster;
	  }
	
	  _createClass(DashboardController, [{
	    key: 'init',
	    value: function init() {}
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
	    this._baseURL = this._host + '/RFPRest/RFPRestService.svc';
	
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjgzYmM2MzZiMWJmZTMzMzA0MDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YzNjMCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz8yNjkyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9lZTJmIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzPzFjZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzP2YyZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcz9iMDQ4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzPzMxNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanM/NTIxNyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2F1dGguc2VydmljZS5qcz9kYzZiIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2FwaS9hcGkuc2VydmljZS5qcz82NGJkIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcz85ZWViIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanM/MzE2OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanM/ZjVkNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQSxLQUFJLGVBQWUsb0JDRkk7O0FESXZCLEtBQUksY0FBYyxvQkNIVzs7QURLN0IsS0FBSSxZQUFZLG9CQ0pTOztBRE16QixLQUFJLHNCQUFzQixvQkNMSzs7QURPL0IsS0FBSSx3QkFBd0Isb0JDTkk7O0FEUWhDLEtBQUksZ0NBQWdDLG9CQ1BBOztBRFNwQyxLQUFJLGlDQUFpQyxvQkNSUDs7QURVOUIsS0FBSSwwREFBMEQsb0JDVHJCOztBRFd6QyxLQUFJLHVCQUF1QixvQkNWQzs7QURZNUIsS0FBSSw4QkFBOEIsb0JDWFA7O0FEYTNCLEtBQUksMENBQTBDLG9CQ1piOztBRGNqQyxLQUFJLHNDQUFzQyxvQkNiVjs7QURlaEMsS0FBSSwwQ0FBMEMsb0JDZFo7O0FBRWxDLFNBQVEsT0FBTyxVQUFVLENBQUMsYUFBYSxhQUFhLFdBQVcsY0FBYyxjQUFjLFVBQVUsY0FBYyxhQUFhLFdBQzdILFNBQVMsWUFBWSxVQUNyQixTQUFTLFVBQVUsUUFDbkIsT0FBTSxxQkFDTixPQUFNLDBCQUNOLElBQUcsb0JBQ0gsUUFBUSxxQkFBbUIsa0ZBQzNCLFFBQVEsYUFBVywwREFDbkIsV0FBVyxrQkFBZ0Isb0NBQzNCLFdBQVcsbUJBQWlCLHVDQUM1QixXQUFXLHVCQUFxQixtREFDaEMsUUFBUSxlQUFhLGtDQUNyQixRQUFRLGNBQVksd0NBQ3BCLFVBQVUsY0FBWSxxREFDdEIsVUFBVSxnQkFBYywyREFDeEIsV0FBVyxpQkFBZSw4Qzs7Ozs7O0FDL0I3Qjs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBQVEsU0FBUzs7QUNMVixVQUFTLE9BQVEsY0FBYyxjQUFjO0dBQ2xEOztHQUVBLGFBQWEsYUFBYTs7O0dBRzFCLGFBQWEsWUFBWTtHQUN6QixhQUFhLFVBQVU7R0FDdkIsYUFBYSxnQkFBZ0I7R0FDN0IsYUFBYSxvQkFBb0I7R0FDakMsYUFBYSxjQUFjOzs7Ozs7O0FDVjdCOzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87O0FBRVQsU0FBUSxlQUFlOztBQ0xoQixVQUFTLGFBQWMsZ0JBQWdCLG9CQUFvQjtHQUNoRTtHQUNBOzs7Ozs7Ozs7SUFTRyxNQUFNLFNBQVM7S0FDZCxLQUFLO0tBQ0wsYUFBYTtLQUNiLFlBQVk7S0FDWixjQUFjO0tBQ2QsY0FBYztNQUdmLE1BQU0sYUFBYTtLQUNsQixLQUFLO0tBQ0wsYUFBYTtLQUNiLFlBQVk7S0FDWixjQUFjO0tBQ2QsY0FBYzs7O0dBR2xCLG1CQUFtQixVQUFVOzs7Ozs7O0FDM0IvQjs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBQVEsV0FBVzs7QUNMWixVQUFTLFNBQVUsTUFBTTtHQUM5QjtHQUNBLEtBQUssTUFBTTs7Ozs7OztBQ0ZiOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7O0FBRWhILEtDVmEsaUJBQWM7OztHQUVYLFNBRkgsZUFFSSxVQUFVLFdBQVc7S0FDbEM7O0tEWUEsZ0JBQWdCLE1DZlA7O0tBS1QsS0FBSyxnQkFBZ0I7S0FDckIsS0FBSyxpQkFBaUI7S0FDdEIsS0FBSyxlQUFlOzs7S0FHcEIsS0FBSyxTQUFTLFVBQVU7OztHRGUxQixhQ3pCVyxnQkFBYztLRDBCdkIsS0FBSztLQUNMLE9DZE0sa0JBQUMsVUFBVSxXQUFXO09EZTFCLElBQUksUUFBUTs7T0NkZCxLQUFLLGFBQWE7T0FDbEIsU0FBUyxZQUFNO1NBQ2IsTUFBSyxpQkFBaUI7VUFDckI7O01Ea0JGO0tBQ0QsS0FBSztLQUNMLE9DakJVLHNCQUFDLFdBQVc7T0FDdEIsS0FBSyxnQkFBZ0IsVUFBVTs7T0FFL0IsUUFBUSxRQUFRLEtBQUssZUFBZSxVQUFDLGNBQWlCO1NBQ3BELGFBQWEsT0FBTyxLQUFLOzs7TURvQjFCO0tBQ0QsS0FBSztLQUNMLE9DbEJRLHNCQUFHOztPQUVYLEtBQUssaUJBQWlCOzs7O0dEc0J4QixPQ3BEVzs7O0FEdURiLFNBQVEsaUJBQWlCLGU7Ozs7OztBRXZEekI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxLQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUFFaEgsS0NWYSxrQkFBZTs7O0dBRWYsU0FGQSxnQkFFQyxRQUFRLFlBQVksYUFBYTtLQUMzQzs7S0RZQSxnQkFBZ0IsTUNmUDs7S0FJVCxLQUFLLFNBQVM7S0FDZCxLQUFLLGFBQWE7S0FDbEIsS0FBSyxPQUFPOzs7OztHRGtCZCxhQ3hCVyxpQkFBZTtLRHlCeEIsS0FBSztLQUNMLE9DZlUsd0JBQUc7T0RnQlgsSUFBSSxRQUFROztPQ2RkLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFDLEtBQVE7O1NBRTFELElBQUksQ0FBQyxDQUFDLEtBQUs7V0FDVCxJQUFJLE1BQUssV0FBVyxrQkFBa0IsSUFBSSxRQUdyQzthQUNILE1BQUssT0FBTyxhQUFhOzs7OztNRGtCOUI7S0FDRCxLQUFLO0tBQ0wsT0NkTSxvQkFBRTtPQUNOLEtBQUssS0FBSyxnQkFBZ0I7Ozs7Ozs7O0dEc0I5QixPQ2pEVzs7O0FEb0RiLFNBQVEsa0JBQWtCLGdCOzs7Ozs7QUVwRDFCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7O0FBRWhILEtDVmEsc0JBQW1COzs7R0FFbkIsU0FGQSxvQkFFQyxPQUFPLFlBQVksZUFBZTtLQUM1Qzs7S0RZQSxnQkFBZ0IsTUNmUDs7S0FJVCxLQUFLLFFBQVE7S0FDYixLQUFLLE9BQU87S0FDWixLQUFLLFVBQVU7Ozs7R0RpQmpCLGFDdkJXLHFCQUFtQjtLRHdCNUIsS0FBSztLQUNMLE9DZkUsZ0JBQUc7OztHRGtCUCxPQzVCVzs7O0FEK0JiLFNBQVEsc0JBQXNCLG9COzs7Ozs7QUUvQjlCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OzsyQ0NSdEY7R0FDYixTQURBLGNBQ0MsYUFBYTtLQUN2Qjs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FJVCxLQUFLLE9BQU87OztHRGVkLGFDbkJXLGVBQWE7S0RvQnRCLEtBQUs7S0FDTCxPQ2RTLHNCQUFHO09BQ1osT0FBTyxLQUFLLEtBQUs7O01EZ0JoQjtLQUNELEtBQUs7S0FDTCxPQ2ZRLHFCQUFHO09BQ1gsSUFBRyxLQUFLLEtBQUssZUFBYztTQUN6QixPQUFPOzs7TURrQlI7S0FDRCxLQUFLO0tBQ0wsT0NoQlMsdUJBQUU7T0FDWCxLQUFLLEtBQUs7Ozs7R0RvQlosT0N0Q1c7OztBRHlDYixTQUFRLGdCQUFnQixjOzs7Ozs7QUV6Q3hCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7Ozt3RENSM0U7R0FDdkIsU0FERCx5QkFDRSxNQUFNLE9BQU87S0FDeEI7O0tEWUEsZ0JBQWdCLE1DZFA7O0tBSVQsS0FBSyxPQUFPO0tBQ1osS0FBSyxRQUFRO0tBQ2IsS0FBSyxVQUFVOzs7R0RlakIsYUNyQlcsMEJBQXdCO0tEc0JqQyxLQUFLO0tBQ0wsT0NkYSx5QkFBQyxPQUFPO09EZW5CLElBQUksUUFBUTs7T0NkZCxJQUFJLENBQUMsT0FBTztTQUNWLFFBQVE7OztPQUdWLE9BQU8sS0FBSyxNQUFNLElBQUksS0FBSyxVQUFVLDRCQUE0QixPQUM5RCxLQUFLLFVBQUMsVUFBYTtTQUNsQixPQUFPLFNBQVM7VUFDaEIsU0FDSyxVQUFDLE9BQVU7U0FDaEIsTUFBSyxLQUFLLE1BQU0sc0NBQXNDLFFBQVEsT0FBTyxNQUFNLE1BQU07Ozs7O0dEbUJ2RixPQ3RDVzs7O0FEeUNiLFNBQVEsMkJBQTJCLHlCOzs7Ozs7QUV6Q25DOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OzttRUNSeEY7R0FDWCxTQURBLFlBQ0MsSUFBSSxRQUFRLFlBQVksU0FBUztLQUMzQzs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FHVCxLQUFLLEtBQUs7S0FDVixLQUFLLFNBQVM7S0FDZCxLQUFLLE9BQU87S0FDWixLQUFLLFVBQVU7S0FDZixLQUFLLFdBQVc7S0FDaEIsS0FBSyxnQkFBZ0I7S0FDckIsS0FBSyxnQkFBZ0I7OztHRGdCdkIsYUN6QlcsYUFBVztLRDBCcEIsS0FBSztLQUNMLE9DZkcsZUFBQyxVQUFVLFVBQVU7T0RnQnRCLElBQUksUUFBUTs7T0NmZCxJQUFJLFdBQVcsS0FBSyxHQUFHOztPQUV2QixLQUFLLEtBQUssSUFBRyxXQUFVLFdBQVEsTUFBSSxVQUFZLEtBQUssVUFBQyxRQUFXOztTQUU5RCxJQUFJLE9BQU8sS0FBSyxTQUFTLEdBQUc7V0FDMUIsTUFBSyxnQkFBZ0I7V0FDckIsTUFBSyxXQUFXLE9BQU8sS0FBSzs7V0FFNUIsTUFBSyxRQUFRLGVBQWUsV0FBVyxRQUFRLE9BQU8sTUFBSztXQUMzRCxTQUFTLFFBQVEsTUFBSztnQkFFbkI7V0FDSCxNQUFLLGdCQUFnQjs7VUFHdEIsVUFBQyxPQUFVO1NBQ1osU0FBUyxPQUFPOzs7T0FHbEIsT0FBTyxTQUFTOztNRGlCZjtLQUNELEtBQUs7S0FDTCxPQ2hCUyx1QkFBRztPQUNaLE9BQU8sS0FBSzs7TURrQlg7S0FDRCxLQUFLO0tBQ0wsT0NqQmEsMkJBQUc7OztPQUdoQixJQUFJLEtBQUssUUFBUSxlQUFlLFlBQVksYUFBYSxLQUFLLFFBQVEsZUFBZSxZQUFZLElBQUk7U0FDbkcsS0FBSyxnQkFBZ0I7Y0FDaEI7U0FDTCxLQUFLLGdCQUFnQjs7O09BR3ZCLE9BQU8sS0FBSzs7TURtQlg7S0FDRCxLQUFLO0tBQ0wsT0NsQkssbUJBQUc7T0FDUixLQUFLLGdCQUFnQjtPQUNyQixLQUFLLFFBQVEsZUFBZSxXQUFXO09BQ3ZDLEtBQUssT0FBTyxHQUFHOzs7O0dEc0JqQixPQzVFVzs7O0FEK0ViLFNBQVEsY0FBYyxZOzs7Ozs7QUUvRXRCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVqaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OztrQ0NSekY7R0FDVixTQURBLFdBQ0MsT0FBTztLQUNqQjs7S0RZQSxnQkFBZ0IsTUNkUDs7S0FJVCxLQUFLLFFBQVE7S0FDYixLQUFLLFFBQVE7O0tBRWIsS0FBSyxXQUFjLEtBQUssUUFBSzs7S0FFN0IsS0FBSyxtQkFBbUI7T0FDdEIsUUFBUTtPQUNSLEtBQUs7T0FDTCxTQUFTO1NBQ1AsZ0JBQWdCOztPQUVsQixNQUFNOzs7O0dEZ0JWLGFDL0JXLFlBQVU7S0RnQ25CLEtBQUs7S0FDTCxPQ2RDLGFBQUMsS0FBSzs7T0FFUCxLQUFLLGlCQUFpQixTQUFTO09BQy9CLEtBQUssaUJBQWlCLE1BQVMsS0FBSyxXQUFRLE1BQUk7T0FDaEQsT0FBTyxLQUFLLE1BQU0sS0FBSzs7TURnQnRCO0tBQ0QsS0FBSztLQUNMLE9DZkUsY0FBQyxLQUFLLE1BQU0sV0FBVztPQUN6QixLQUFLLGlCQUFpQixTQUFTO09BQy9CLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxNQUFTLEtBQUssV0FBUSxNQUFJO09BQ2xFLEtBQUssaUJBQWlCLE9BQU87T0FDN0IsT0FBTyxLQUFLLE1BQU0sS0FBSzs7TURpQnRCO0tBQ0QsS0FBSztLQUNMLE9DaEJLLG1CQUFHO09BQ1IsT0FBTyxLQUFLOzs7O0dEb0JkLE9DdERXOzs7QUR5RGIsU0FBUSxhQUFhLFc7Ozs7OztBRXpEckI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxLQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUFFaEgsS0NWYSxtQkFBZ0I7R0FDZixTQURELG1CQUNJO0tBQ2I7O0tEWUEsZ0JBQWdCLE1DZFA7O0tBSVQsS0FBSyxPQUFPLENBQ1Y7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFRO1FBRVY7T0FDRSxTQUFTO09BQ1QsT0FBTztPQUNQLGVBQWU7T0FDZixRQUFROzs7O0dET2QsYUNoRVcsa0JBQWdCO0tEaUV6QixLQUFLO0tBQ0wsT0NKSSxrQkFBRztPQUNQLE9BQU8sS0FBSzs7OztHRFFkLE9DdkVXOzs7QUQwRWIsU0FBUSxtQkFBbUIsaUI7Ozs7OztBRTFFM0I7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNBQVEsa0JBQWtCOztBQUUxQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUNQekcsVUFBUyxrQkFBa0I7R0FDaEM7O0dBRUEsSUFBSSxZQUFZO0tBQ2QsVUFBVTtLQUNWLGFBQWE7S0FDYixPQUFPO09BQ0gsY0FBYzs7S0FFbEIsWUFBWTtLQUNaLGNBQWM7S0FDZCxrQkFBa0I7OztHQUdwQixPQUFPOzs7QURZVCxLQ1RNLG1CQUNRLFNBRFIsaUJBQ1MsUUFBUTtHQUNuQjs7OztHRFlGLGdCQUFnQixNQ2RaOztHQUtGLEtBQUssZUFBZSxPQUFPLEtBQUssY0FBYzs7Ozs7Ozs7QUN0QmxEOzs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksZUFBZSxDQUFDLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFamlCLFNBQVEsb0JBQW9COztBQUU1QixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUNWekcsVUFBUyxrQkFBa0IsVUFBVTtHQUMxQzs7R0FFQSxJQUFJLFlBQVk7S0FDZCxVQUFVO0tBQ1YsT0FBTztPQUNILGFBQWE7O0tBRWpCLFVBQVU7S0FDVixNQUFNO0tBQ04sWUFBWTtLQUNaLGNBQWM7OztHQUdoQixPQUFPOztHQUVQLFNBQVMsU0FBUyxPQUFPLElBQUksTUFBTSxJQUFJO0tBQ3JDLElBQUksVUFBTztLQUNYLElBQUksU0FBUyxTQUFTLEdBQUcsSUFBSTtPQUMzQixXQUFXO09BQ1gsYUFBYTtPQUNiLFlBQVk7T0FDWixNQUFNO09BQ04sU0FBUzs7O0tBR1gsR0FBRyxTQUFTOztLQUVaLFFBQVEsUUFBUSxNQUFNLGFBQWEsVUFBQyxPQUFVO09BQzVDLE9BQU8sS0FBSyxPQUFPLFFBQU87OztLQUc1QixVQUFVLE1BQU0sT0FBTyxtQkFBbUIsWUFBTTtPQUM5QyxRQUFRLFFBQVEsR0FBRyxjQUFjLFVBQUMsYUFBZ0I7U0FDaEQsT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFPOzs7O0tBSTFDLE1BQU0sSUFBSSxZQUFZLFlBQU07T0FDMUI7Ozs7Ozs4REFNa0I7R0FDVixTQURSLG1CQUNTLE1BQU0sbUJBQW1CO0tBQ3BDOztLRGFBLGdCQUFnQixNQ2ZkOztLQUlGLEtBQUssT0FBTztLQUNaLEtBQUssZUFBZTs7S0FFcEIsS0FBSyxTQUFTOzs7R0RnQmhCLGFDdkJJLG9CQUFrQjtLRHdCcEIsS0FBSztLQUNMLE9DZk0sa0JBQUMsbUJBQW1CO09EZ0J4QixJQUFJLFFBQVE7O09DZmQsT0FBTyxLQUFLLGdCQUFnQixtQkFBbUIsS0FBSyxZQUFNO1NBQ3hELE1BQUssS0FBSyxLQUFLOzs7TURvQmhCO0tBQ0QsS0FBSztLQUNMLE9DbEJhLHlCQUFDLG1CQUFtQjtPRG1CL0IsSUFBSSxTQUFTOztPQ2xCZixPQUFPLGtCQUFrQixnQkFBZ0IsSUFBSSxLQUFLLFVBQUMsTUFBUztTQUMxRCxPQUFLLGVBQWU7O1NBRXBCLE9BQU8sT0FBSzs7Ozs7R0R5QmhCLE9DN0NJIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjgzYmM2MzZiMWJmZTMzMzA0MDRcbiAqKi8iLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfaW5kZXhDb25maWcgPSByZXF1aXJlKCcuL2luZGV4LmNvbmZpZycpO1xuXG52YXIgX2luZGV4Um91dGUgPSByZXF1aXJlKCcuL2luZGV4LnJvdXRlJyk7XG5cbnZhciBfaW5kZXhSdW4gPSByZXF1aXJlKCcuL2luZGV4LnJ1bicpO1xuXG52YXIgX21haW5NYWluQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcblxudmFyIF9sb2dpbkxvZ2luQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbG9naW4vbG9naW4uY29udHJvbGxlcicpO1xuXG52YXIgX2Rhc2hib2FyZERhc2hib2FyZENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlcicpO1xuXG52YXIgX2FwcENvbXBvbmVudHNBcHBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0dpdGh1YkNvbnRyaWJ1dG9yR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xuXG52YXIgX2FwcExvZ2luQXV0aFNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwQ29tcG9uZW50c0FwaUFwaVNlcnZpY2UgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9hcGkvYXBpLnNlcnZpY2UnKTtcblxudmFyIF9hcHBDb21wb25lbnRzV2ViRGV2VGVjV2ViRGV2VGVjU2VydmljZSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNOYXZiYXJOYXZiYXJEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xuXG52YXIgX2FwcENvbXBvbmVudHNNYWxhcmtleU1hbGFya2V5RGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdtbGxCYWMnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0ciddKS5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSkuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudCkuY29uZmlnKF9pbmRleENvbmZpZy5jb25maWcpLmNvbmZpZyhfaW5kZXhSb3V0ZS5yb3V0ZXJDb25maWcpLnJ1bihfaW5kZXhSdW4ucnVuQmxvY2spLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgX2FwcENvbXBvbmVudHNHaXRodWJDb250cmlidXRvckdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZS5HaXRodWJDb250cmlidXRvclNlcnZpY2UpLnNlcnZpY2UoJ3dlYkRldlRlYycsIF9hcHBDb21wb25lbnRzV2ViRGV2VGVjV2ViRGV2VGVjU2VydmljZS5XZWJEZXZUZWNTZXJ2aWNlKS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIF9tYWluTWFpbkNvbnRyb2xsZXIuTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIF9sb2dpbkxvZ2luQ29udHJvbGxlci5Mb2dpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBfZGFzaGJvYXJkRGFzaGJvYXJkQ29udHJvbGxlci5EYXNoYm9hcmRDb250cm9sbGVyKS5zZXJ2aWNlKCdhdXRoU2VydmljZScsIF9hcHBMb2dpbkF1dGhTZXJ2aWNlLmF1dGhTZXJ2aWNlKS5zZXJ2aWNlKCdhcGlTZXJ2aWNlJywgX2FwcENvbXBvbmVudHNBcGlBcGlTZXJ2aWNlLmFwaVNlcnZpY2UpLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIF9hcHBDb21wb25lbnRzTmF2YmFyTmF2YmFyRGlyZWN0aXZlLk5hdmJhckRpcmVjdGl2ZSkuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBfYXBwQ29tcG9uZW50c01hbGFya2V5TWFsYXJrZXlEaXJlY3RpdmUuTWFsYXJrZXlEaXJlY3RpdmUpLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBfYXBwQ29tcG9uZW50c0FwcEFwcENvbnRyb2xsZXIuQXBwQ29udHJvbGxlcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qc1xuICoqLyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXHJcblxyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XHJcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xyXG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcclxuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vbWFpbi5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgTG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udHJvbGxlciB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4uL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21sbEJhYycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXHJcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxyXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxyXG4gIC5jb25maWcoY29uZmlnKVxyXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxyXG4gIC5ydW4ocnVuQmxvY2spXHJcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxyXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXHJcbiAgLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZENvbnRyb2xsZXInLCBEYXNoYm9hcmRDb250cm9sbGVyKVxyXG4gIC5zZXJ2aWNlKCdhdXRoU2VydmljZScsIGF1dGhTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdhcGlTZXJ2aWNlJywgYXBpU2VydmljZSlcclxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxyXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKVxyXG4gIC5jb250cm9sbGVyKCdBcHBDb250cm9sbGVyJywgQXBwQ29udHJvbGxlcik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5cbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuICAvLyBFbmFibGUgbG9nXHJcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcclxuXHJcbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXHJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XHJcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xyXG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XHJcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcclxuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XG5cbmZ1bmN0aW9uIHJvdXRlckNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICRzdGF0ZVByb3ZpZGVyXG4gIC8qXHJcbiAgLnN0YXRlKCdob21lJywge1xyXG4gICAgdXJsOiAnLycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICB9KVxyXG4gICovXG4gIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgdXJsOiAnLycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxuICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcbiAgfSkuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJyxcbiAgICBjb250cm9sbGVyQXM6ICdkYXNoJyxcbiAgICBhdXRoZW50aWNhdGU6IHRydWVcbiAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAvKlxyXG4gICAgLnN0YXRlKCdob21lJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xyXG4gICAgfSlcclxuICAgICovXHJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICB1cmw6ICcvJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZTogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgLnN0YXRlKCdkYXNoYm9hcmQnLCB7XHJcbiAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ2Rhc2gnLFxyXG4gICAgICBhdXRoZW50aWNhdGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcblxuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICBmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkdGltZW91dCwgd2ViRGV2VGVjKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDYwNzI1OTkyMTYzO1xuICAgIC8vdGhpcy50b2FzdHIgPSB0b2FzdHI7XG5cbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1haW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5nZXRXZWJEZXZUZWMod2ViRGV2VGVjKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgICB9LCA0MDAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRXZWJEZXZUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XG4gICAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKCk7XG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh0aGlzLmF3ZXNvbWVUaGluZ3MsIGZ1bmN0aW9uIChhd2Vzb21lVGhpbmcpIHtcbiAgICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvd1RvYXN0cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dUb2FzdHIoKSB7XG4gICAgICAvL3RoaXMudG9hc3RyLmluZm8oJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+Jyk7XG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1haW5Db250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5NYWluQ29udHJvbGxlciA9IE1haW5Db250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBjbGFzcyBNYWluQ29udHJvbGxlciB7XHJcbiAgLy9jb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcclxuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICAgIHRoaXMuY3JlYXRpb25EYXRlID0gMTQ2MDcyNTk5MjE2MztcclxuICAgIC8vdGhpcy50b2FzdHIgPSB0b2FzdHI7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XHJcbiAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XHJcbiAgICB9LCA0MDAwKTtcclxuICB9XHJcblxyXG4gIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcclxuXHJcbiAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCAoYXdlc29tZVRoaW5nKSA9PiB7XHJcbiAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd1RvYXN0cigpIHtcclxuICAgIC8vdGhpcy50b2FzdHIuaW5mbygnRm9yayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5nZW5lcmF0b3ItZ3VscC1hbmd1bGFyPC9iPjwvYT4nKTtcclxuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBMb2dpbkNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAvL2NvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgICAvL3RvYXN0ZXIuaW5mbygnSGknKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2dpbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYXV0aGVudGljYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5hdXRoLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgIGlmICghIXJlcykge1xuICAgICAgICAgIGlmIChfdGhpcy4kcm9vdFNjb3BlLnJldHVyblRvU3RhdGUgPT09ICcnKSB7fSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2Rhc2hib2FyZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzZXRNc2cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldE1zZygpIHtcbiAgICAgIHRoaXMuYXV0aC5hdXRoRmFpbGVkTXNnID0gJyc7XG4gICAgfVxuXG4gICAgLy8gaXNMb2dpbigpIHtcbiAgICAvLyAgIHJldHVybiAnbG9naW5ib2R5JztcbiAgICAvLyB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9naW5Db250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5Mb2dpbkNvbnRyb2xsZXIgPSBMb2dpbkNvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgTG9naW5Db250cm9sbGVyIHtcclxuICAvL2NvbnN0cnVjdG9yKCRzdGF0ZSwgJHJvb3RTY29wZSwgYXV0aFNlcnZpY2UsIHRvYXN0ZXIpIHtcclxuICBjb25zdHJ1Y3Rvcigkc3RhdGUsICRyb290U2NvcGUsIGF1dGhTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgdGhpcy5hdXRoID0gYXV0aFNlcnZpY2U7XHJcbiAgICAvL3RoaXMudG9hc3RlciA9IHRvYXN0ZXI7XHJcbiAgICAvL3RvYXN0ZXIuaW5mbygnSGknKTtcclxuICB9XHJcblxyXG4gIGF1dGhlbnRpY2F0ZSgpIHtcclxuXHJcbiAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCkudGhlbigocmVzKSA9PiB7XHJcblxyXG4gICAgICBpZiAoISFyZXMpIHtcclxuICAgICAgICBpZiAodGhpcy4kcm9vdFNjb3BlLnJldHVyblRvU3RhdGUgPT09ICcnKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0TXNnKCl7XHJcbiAgICAgIHRoaXMuYXV0aC5hdXRoRmFpbGVkTXNnID0gJyc7XHJcbiAgfVxyXG5cclxuICAvLyBpc0xvZ2luKCkge1xyXG4gIC8vICAgcmV0dXJuICdsb2dpbmJvZHknO1xyXG4gIC8vIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRGFzaGJvYXJkQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8vY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UsIG1hc3RlclNlcnZpY2UsIHRvYXN0ZXIpIHtcbiAgZnVuY3Rpb24gRGFzaGJvYXJkQ29udHJvbGxlcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGFzaGJvYXJkQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5fYXBpID0gYXBpU2VydmljZTtcbiAgICB0aGlzLl9tYXN0ZXIgPSBtYXN0ZXJTZXJ2aWNlO1xuICAgIC8vdGhpcy50b2FzdGVyID0gdG9hc3RlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXNoYm9hcmRDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2luaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBEYXNoYm9hcmRDb250cm9sbGVyO1xufSkoKTtcblxuZXhwb3J0cy5EYXNoYm9hcmRDb250cm9sbGVyID0gRGFzaGJvYXJkQ29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIge1xyXG4gIC8vY29uc3RydWN0b3IoJGh0dHAsIGFwaVNlcnZpY2UsIG1hc3RlclNlcnZpY2UsIHRvYXN0ZXIpIHtcclxuICBjb25zdHJ1Y3RvcigkaHR0cCwgYXBpU2VydmljZSwgbWFzdGVyU2VydmljZSkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XHJcbiAgICB0aGlzLl9tYXN0ZXIgPSBtYXN0ZXJTZXJ2aWNlO1xyXG4gICAgLy90aGlzLnRvYXN0ZXIgPSB0b2FzdGVyO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBBcHBDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXBwQ29udHJvbGxlcihhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF1dGggPSBhdXRoU2VydmljZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBcHBDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2lzTG9nZ2VkaW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0xvZ2dlZGluKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsb2dpbkJvZHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2dpbkJvZHkoKSB7XG4gICAgICBpZiAodGhpcy5hdXRoLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgcmV0dXJuICdpc2xvZ2dlZGluJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaWduT3V0VXNlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpZ25PdXRVc2VyKCkge1xuICAgICAgdGhpcy5hdXRoLnNpZ25vdXQoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXBwQ29udHJvbGxlcjtcbn0pKCk7XG5cbmV4cG9ydHMuQXBwQ29udHJvbGxlciA9IEFwcENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuYXV0aCA9IGF1dGhTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRpbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoLmlzQXV0aGVudGljYXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Cb2R5ICgpIHtcclxuICAgIGlmKHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKXtcclxuICAgICAgcmV0dXJuICdpc2xvZ2dlZGluJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpZ25PdXRVc2VyKCl7XHJcbiAgICB0aGlzLmF1dGguc2lnbm91dCgpO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHaXRodWJDb250cmlidXRvclNlcnZpY2UoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSk7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHaXRodWJDb250cmlidXRvclNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGxpbWl0KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIWxpbWl0KSB7XG4gICAgICAgIGxpbWl0ID0gMzA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0KSB7XG4gICAgaWYgKCFsaW1pdCkge1xuICAgICAgbGltaXQgPSAzMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBhdXRoU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGF1dGhTZXJ2aWNlKCRxLCAkc3RhdGUsIGFwaVNlcnZpY2UsICR3aW5kb3cpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGF1dGhTZXJ2aWNlKTtcblxuICAgIHRoaXMuJHEgPSAkcTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLl9hcGkgPSBhcGlTZXJ2aWNlO1xuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgdGhpcy51c2VySW5mbyA9IHt9O1xuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYXV0aEZhaWxlZE1zZyA9ICcnO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKGF1dGhTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2xvZ2luJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XG5cbiAgICAgIHRoaXMuX2FwaS5nZXQoJ2xvZ2luLycgKyB1c2VybmFtZSArICcvJyArIHBhc3N3b3JkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblxuICAgICAgICBpZiAocmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIF90aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLnVzZXJJbmZvID0gcmVzdWx0LmRhdGFbMF07XG4gICAgICAgICAgLy90aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICBfdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gYW5ndWxhci50b0pzb24oX3RoaXMudXNlckluZm8pO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoX3RoaXMudXNlckluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmF1dGhGYWlsZWRNc2cgPSAnVXNlcm5hbWUgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0Lic7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFVzZXJJbmZvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlckluZm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySW5mbztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0F1dGhlbnRpY2F0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG5cbiAgICAgIC8vY29uc29sZS5sb2codGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvKTtcbiAgICAgIGlmICh0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gdW5kZWZpbmVkICYmIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyAhPSAnJykge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2lnbm91dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpZ25vdXQoKSB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyA9ICcnO1xuICAgICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIGF1dGhTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FwcC9sb2dpbi9hdXRoLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgYXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRxLCAkc3RhdGUsIGFwaVNlcnZpY2UsICR3aW5kb3cpIHtcclxuICAgICduZ0luamVjdCc7XHJcbiAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIHRoaXMuX2FwaSA9IGFwaVNlcnZpY2U7XHJcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgdGhpcy51c2VySW5mbyA9IHt9O1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnJztcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgdmFyIGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG5cclxuICAgIHRoaXMuX2FwaS5nZXQoYGxvZ2luLyR7dXNlcm5hbWV9LyR7cGFzc3dvcmR9YCkudGhlbigocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICBpZiAocmVzdWx0LmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlc3VsdC5kYXRhWzBdO1xyXG4gICAgICAgIC8vdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbyk7XHJcbiAgICAgICAgdGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvID0gYW5ndWxhci50b0pzb24odGhpcy51c2VySW5mbyk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmF1dGhGYWlsZWRNc2cgPSAnVXNlcm5hbWUgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0Lic7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VySW5mbztcclxuICB9XHJcblxyXG4gIGlzQXV0aGVudGljYXRlZCgpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VySW5mbyk7XHJcbiAgICBpZiAodGhpcy4kd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJJbmZvICE9IHVuZGVmaW5lZCAmJiB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gIT0gJycpIHtcclxuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XHJcbiAgfVxyXG5cclxuICBzaWdub3V0KCkge1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLiR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlckluZm8gPSAnJztcclxuICAgIHRoaXMuJHN0YXRlLmdvKCdsb2dpbicpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9hcHAvbG9naW4vYXV0aC5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBhcGlTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gYXBpU2VydmljZSgkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXBpU2VydmljZSk7XG5cbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5faG9zdCA9ICdodHRwOi8vMTE1LjExMy4xMzUuMjM5JztcbiAgICAvL3RoaXMuX2hvc3QgPSAnaHR0cDovLzE3Mi4zMi4wLjIyNic7XG4gICAgdGhpcy5fYmFzZVVSTCA9IHRoaXMuX2hvc3QgKyAnL1JGUFJlc3QvUkZQUmVzdFNlcnZpY2Uuc3ZjJztcblxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcbiAgICAgIG1ldGhvZDogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKGFwaVNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHVybCkge1xuXG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUubWV0aG9kID0gJ0dFVCc7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gdGhpcy5fYmFzZVVSTCArICcvJyArIHVybDtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBpc0Z1bGxVUkwpIHtcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5tZXRob2QgPSAnUE9TVCc7XG4gICAgICB0aGlzLl9yZXF1ZXN0VGVtcGxhdGUudXJsID0gaXNGdWxsVVJMID8gdXJsIDogdGhpcy5fYmFzZVVSTCArICcvJyArIHVybDtcbiAgICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS5kYXRhID0gZGF0YTtcbiAgICAgIHJldHVybiB0aGlzLiRodHRwKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhvc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gYXBpU2VydmljZTtcbn0pKCk7XG5cbmV4cG9ydHMuYXBpU2VydmljZSA9IGFwaVNlcnZpY2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGNsYXNzIGFwaVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRodHRwKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuX2hvc3QgPSAnaHR0cDovLzExNS4xMTMuMTM1LjIzOSc7XHJcbiAgICAvL3RoaXMuX2hvc3QgPSAnaHR0cDovLzE3Mi4zMi4wLjIyNic7XHJcbiAgICB0aGlzLl9iYXNlVVJMID0gYCR7dGhpcy5faG9zdH0vUkZQUmVzdC9SRlBSZXN0U2VydmljZS5zdmNgO1xyXG5cclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZSA9IHtcclxuICAgICAgbWV0aG9kOiAnJyxcclxuICAgICAgdXJsOiAnJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQodXJsKSB7XHJcblxyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLnVybCA9IGAke3RoaXMuX2Jhc2VVUkx9LyR7dXJsfWA7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cCh0aGlzLl9yZXF1ZXN0VGVtcGxhdGUpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEsIGlzRnVsbFVSTCkge1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLm1ldGhvZCA9ICdQT1NUJztcclxuICAgIHRoaXMuX3JlcXVlc3RUZW1wbGF0ZS51cmwgPSBpc0Z1bGxVUkwgPyB1cmwgOiBgJHt0aGlzLl9iYXNlVVJMfS8ke3VybH1gO1xyXG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAodGhpcy5fcmVxdWVzdFRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIGdldEhvc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2FwaS5zZXJ2aWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBXZWJEZXZUZWNTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYkRldlRlY1NlcnZpY2UpO1xuXG4gICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgfV07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2ViRGV2VGVjU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRUZWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZWMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJEZXZUZWNTZXJ2aWNlO1xufSkoKTtcblxuZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gV2ViRGV2VGVjU2VydmljZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcclxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxyXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcclxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxyXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXHJcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChOb2RlKScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxyXG4gICAgICAgICdsb2dvJzogJ25vZGUtc2Fzcy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxyXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldFRlYygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk5hdmJhckRpcmVjdGl2ZSA9IE5hdmJhckRpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbnZhciBOYXZiYXJDb250cm9sbGVyID0gZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcihtb21lbnQpIHtcbiAgJ25nSW5qZWN0JztcblxuICAvLyBcInRoaXMuY3JlYXRpb25cIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZiYXJDb250cm9sbGVyKTtcblxuICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvblwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzLk1hbGFya2V5RGlyZWN0aXZlID0gTWFsYXJrZXlEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpWydkZWxldGUnXSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgZnVuY3Rpb24gKCkge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24gKGNvbnRyaWJ1dG9yKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpWydkZWxldGUnXSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYWxhcmtleUNvbnRyb2xsZXIoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hbGFya2V5Q29udHJvbGxlcik7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWxhcmtleUNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnYWN0aXZhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnRyaWJ1dG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgX3RoaXMyLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMi5jb250cmlidXRvcnM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFsYXJrZXlDb250cm9sbGVyO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=