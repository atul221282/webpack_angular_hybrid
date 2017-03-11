import { ICompController } from './comp';

export class Comp2 implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public templateUrl: string;
    public transclude: boolean;
    public controllerAs: string;
    public bindings: { [boundProperty: string]: string };
    public require: { [boundProperty: string]: string };
    constructor() {
        this.controller = Comp2Controller;
        this.template = require('./comp2.html');
        this.transclude = false;
        this.controllerAs = "vm";
        this.require = {
            "parent": "^comp"
        }
    }
}

class Comp2Controller {
    public parent: ICompController;

    $onInit() {
        console.log('Comp two got Id', this.parent.id);
    }
}