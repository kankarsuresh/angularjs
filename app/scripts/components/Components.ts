/// <reference path="Reference.ts" />

angular.module("DemoApp.components",[])
.component("rtDashboard", new myDemoApp.component.Dashboard())
.controller(myDemoApp.componentController);