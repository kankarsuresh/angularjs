var MyDemoApp;
(function (MyDemoApp) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
            $stateProvider
                .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller: "HomeController as homeVM"
            });
        };
        return Router;
    })();
    MyDemoApp.Router = Router;
})(MyDemoApp || (MyDemoApp = {}));
var myDemoApp;
(function (myDemoApp) {
    var controller;
    (function (controller) {
        var HomeController = (function () {
            function HomeController($scope, Restangular, $q, $http) {
                var vm = this;
                vm.addTodo = addTodo;
                $scope.showAdvancedSerach = true;
                $scope.clickAdvancedSearch = function () {
                    $scope.showAdvancedSerach = !$scope.showAdvancedSerach;
                };
                function addTodo() {
                    $http.get("scripts/mocks/response.json").then(function (data) { return onSuccess(data.data); }, function (error) { return onError(); });
                    alert("home");
                }
                function onSuccess(data) {
                    $scope.response = data;
                }
                function onError() {
                    console.log("failed");
                }
            }
            HomeController.$inject = ["$scope", "Restangular", "$q", "$http"];
            return HomeController;
        })();
        controller.HomeController = HomeController;
    })(controller = myDemoApp.controller || (myDemoApp.controller = {}));
})(myDemoApp || (myDemoApp = {}));
var myDemoApp;
(function (myDemoApp) {
    var filters;
    (function (filters) {
        var Append = (function () {
            function Append() {
                return function (input) {
                    return input ? "=>" + input : "NA";
                };
            }
            return Append;
        })();
        filters.Append = Append;
    })(filters = myDemoApp.filters || (myDemoApp.filters = {}));
})(myDemoApp || (myDemoApp = {}));
angular.module("DemoApp.filter", []).filter(myDemoApp.filters);
var MyDemoApp;
(function (MyDemoApp) {
    var Bootstraper = (function () {
        function Bootstraper(module, router) {
            this.module = module;
            this.router = router;
        }
        Bootstraper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", function (RestangularProvider, $stateProvider, $urlRouterProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider);
                }]);
        };
        Bootstraper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider) {
            this.router.initialize($stateProvider, $urlRouterProvider);
            this.initRestangular(RestangularProvider);
        };
        Bootstraper.prototype.initRestangular = function (RestangularProvider) {
        };
        return Bootstraper;
    })();
    MyDemoApp.Bootstraper = Bootstraper;
})(MyDemoApp || (MyDemoApp = {}));
var MyDemoApp;
(function (MyDemoApp) {
    "use strict";
    var App = (function () {
        function App() {
            var dependencies = ["DemoApp.controllers", "DemoApp.services", "DemoApp.filter",
                "DemoApp.components", "restangular", "ui.router"];
            this.module = angular.module("DemoApp", dependencies);
            var router = new MyDemoApp.Router();
            var bootstraper = new MyDemoApp.Bootstraper(this.module, router);
            bootstraper.bootstrap();
        }
        return App;
    })();
    MyDemoApp.App = App;
    ;
    new App();
})(MyDemoApp || (MyDemoApp = {}));
var myDemoApp;
(function (myDemoApp) {
    var component;
    (function (component) {
        var Dashboard = (function () {
            function Dashboard() {
                return {
                    templateUrl: "scripts/components/dashboard/template.html",
                    controller: "DashboardController",
                    controllerAs: "vm",
                    bindings: {
                        data: "<"
                    }
                };
            }
            return Dashboard;
        })();
        component.Dashboard = Dashboard;
    })(component = myDemoApp.component || (myDemoApp.component = {}));
})(myDemoApp || (myDemoApp = {}));
var myDemoApp;
(function (myDemoApp) {
    var componentController;
    (function (componentController) {
        var DashboardController = (function () {
            function DashboardController($scope) {
                $scope.myName = this.data;
                $scope.name = "suresh reddy";
            }
            DashboardController.inject = ["$scope"];
            return DashboardController;
        })();
        componentController.DashboardController = DashboardController;
    })(componentController = myDemoApp.componentController || (myDemoApp.componentController = {}));
})(myDemoApp || (myDemoApp = {}));
angular.module("DemoApp.components", [])
    .component("rtDashboard", new myDemoApp.component.Dashboard())
    .controller(myDemoApp.componentController);
angular.module("DemoApp.controllers", []).controller(myDemoApp.controller);
var myDemoApp;
(function (myDemoApp) {
    var service;
    (function (service) {
        var RepositoryService = (function () {
            function RepositoryService(Restangular, $q) {
                this.getList = getList();
                function getList() {
                    var deffered = $q.defer();
                    var getResource = Restangular.one("app/scripts/mocks/response.json");
                    getResource.getList().then(function (data) { return deffered.resolve(Restangular.stripRestangular(data)); }, function (error) { return deffered.reject(error); });
                    return deffered.promise;
                }
            }
            RepositoryService.$inject = ["Restangular", "$q"];
            return RepositoryService;
        })();
        service.RepositoryService = RepositoryService;
    })(service = myDemoApp.service || (myDemoApp.service = {}));
})(myDemoApp || (myDemoApp = {}));
angular.module("DemoApp.services", []).service(myDemoApp.service);
//# sourceMappingURL=main.js.map