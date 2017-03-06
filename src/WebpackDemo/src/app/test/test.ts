import * as angular from 'angular';

export class Test implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public templateUrl: string;
    public transclude: boolean;
    public controllerAs: string;
    public bindings: { [boundProperty: string]: string };

    constructor() {
        this.controller = TestController;
        this.template = require('./test.html');
        this.transclude = false;
        this.controllerAs = "vm";
    }
}

class TestController {
    public title: string = "Hello "
    public asas: ITest;
    static $inject: string[] = ["$timeout", "$mdDialog"];
    constructor(private $timeout: ng.ITimeoutService,
        private $mdDialog: angular.material.IDialogService) {
        $("#gg").val("12121");

    }

    $onInit() {
        this.$mdDialog.confirm();
        this.asas = <ITest>{ number: 1 };
        this.$timeout(() => {
            $("#gg").val("12121-Init");
            this.showDialog();
        }, 3000);
    }

    showDialog() {
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!'));
    }
}

interface ITest {
    number: number;
}