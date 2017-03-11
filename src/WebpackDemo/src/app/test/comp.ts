class Comp implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public templateUrl: string;
    public transclude: boolean;
    public controllerAs: string;
    public bindings: { [boundProperty: string]: string };

    constructor() {
        this.controller = CompController;
        this.template = require('./comp.html');
        this.transclude = true;
        this.controllerAs = "vm";
    }
}
interface ICompController {
    id: number;
}

class CompController implements ICompController {
    public id: number;
    $onInit() {
        this.id = 2;
        console.log('Comp one');
    }
}

export { Comp, ICompController };