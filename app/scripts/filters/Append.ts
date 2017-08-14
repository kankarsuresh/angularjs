/// <reference path="Reference.ts" />
module myDemoApp.filters{
    export class Append{
        constructor(){
            return (input)=>{
                return input ?"=>"+input:"NA";
            }
        }
    }
}