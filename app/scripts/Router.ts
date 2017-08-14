/// <reference path="Reference.ts" />
module MyDemoApp{
    export interface IRouter{
        initialize($stateProvider: any, $urlRouterProvider:any);
    }
    export class Router implements IRouter{
        initialize($stateProvider: any, $urlRouterProvider:any){
            $urlRouterProvider.otherwise("/home")
            $stateProvider
            .state('home',{
                url:"/home",
                templateUrl:"views/home.html",
                controller:"HomeController as homeVM"
            });
        }
    }
}
