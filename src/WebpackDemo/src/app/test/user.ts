export class User implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public templateUrl: string;
    public transclude: boolean;
    public controllerAs: string;
    public bindings: { [boundProperty: string]: string };

    constructor() {
        this.controller = UserController;
        this.template = require('./User.html');
        this.transclude = false;
        this.controllerAs = "vm";
    }
}

class UserController {
    public CMaxMembers: kendo.ui.NumericTextBoxOptions;

    $onInit() {
        this.CMaxMembers = {
            min: 0,
            max: 500,
            format: "#",
            decimals: 0
        };
    }
}