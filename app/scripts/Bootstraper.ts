/// <reference path="Reference.ts" />
module MyDemoApp {
    export interface IBootstraper {
        bootstrap: () => void;
        //initRestangular:(RestangularProvider:restangular.IProvider) => void;
        //setModuleUrlConstants:(module:ng.IModule)=> void;
    }
    export class Bootstraper implements IBootstraper {
        constructor(public module: any, public router: any) {
        }
        bootstrap() {
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", (RestangularProvider, $stateProvider, $urlRouterProvider) =>
               this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider)]);      
        }
        initializeConfig(RestangularProvider: any, $stateProvider: any, $urlRouterProvider: any) {
            this.router.initialize($stateProvider, $urlRouterProvider);
           this.initRestangular(RestangularProvider);
        }
        initRestangular(RestangularProvider) {
              // RestangularProvider.setBaseUrl('http://localhost:8080/');

        }
    }
}
