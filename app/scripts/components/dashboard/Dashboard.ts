/// <reference path="Reference.ts" />
module myDemoApp.component{
    export class Dashboard{
        constructor(){
            return{
                templateUrl:"scripts/components/dashboard/template.html",
                controller:"DashboardController",
                controllerAs:"vm",
                bindings:{
                    data:"<"
                }
            }
        }
    }
}
