module myDemoApp.componentController{
   export  class DashboardController{
       data:string;
        static inject=["$scope"]
        constructor($scope){
            $scope.myName=this.data;
            $scope.name="suresh reddy";
        }
    }
}