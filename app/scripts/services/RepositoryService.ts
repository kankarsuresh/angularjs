/// <reference path="Reference.ts" />
module myDemoApp.service {
    export class RepositoryService {
        getList: () => any;
        static $inject = ["Restangular", "$q"]
        constructor(Restangular, $q) {
            this.getList = getList();
            function getList(){
                var deffered =$q.defer();
                var getResource = Restangular.one("app/scripts/mocks/response.json");
                getResource.getList().then(
                (data:any)=>deffered.resolve(Restangular.stripRestangular(data)),
                (error:ErrorEvent)=>deffered.reject(error));
                return deffered.promise;
            }
        }
    }
}
