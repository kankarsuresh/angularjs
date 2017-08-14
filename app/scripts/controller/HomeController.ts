///<reference path="Reference.ts"/>
module myDemoApp.controller {
    export class HomeController {
    
        static $inject = ["$scope","Restangular","$q","$http"];
        addTodo: () => void;
        constructor($scope,Restangular,$q,$http) {
            var vm = this;
            vm.addTodo = addTodo;
            $scope.showAdvancedSerach = true;
            $scope.clickAdvancedSearch = () => {
                $scope.showAdvancedSerach = !$scope.showAdvancedSerach;
            };
            function addTodo() {
                $http.get("scripts/mocks/response.json").then(
                    (data)=>onSuccess(data.data),
                    (error:ErrorEvent)=>onError());
                alert("home");
            }
            function onSuccess(data: any) {
                $scope.response = data;
            }
            function onError() {
                console.log("failed");
            }

        }
    }
}