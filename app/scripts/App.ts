/// <reference path="Reference.ts" />

module MyDemoApp{
    "use strict";
    export class App{
        module:any;
        constructor(){
            var dependencies = ["DemoApp.controllers","DemoApp.services","DemoApp.filter",
            "DemoApp.components","restangular","ui.router"];
            this.module = angular.module("DemoApp",dependencies);
            var router = new MyDemoApp.Router();
            var bootstraper = new MyDemoApp.Bootstraper(this.module,router);
            bootstraper.bootstrap();

        }
    };
    new App();


}
declare var angular;