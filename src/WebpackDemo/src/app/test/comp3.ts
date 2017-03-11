export class Comp3 implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public templateUrl: string;
    public transclude: boolean;
    public controllerAs: string;
    public bindings: { [boundProperty: string]: string };

    constructor() {
        this.controller = Comp3Controller;
        this.template = require('./comp3.html');
        this.transclude = false;
        this.controllerAs = "vm";
    }
}

class Comp3Controller {
    $onInit() {
        console.log('Comp three');
    }
}