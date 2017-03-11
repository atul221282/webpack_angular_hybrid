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
    static $inject: string[] = ["$timeout", "$mdDialog", "$http"];
    constructor(private $timeout: ng.ITimeoutService,
        private $mdDialog: angular.material.IDialogService, private $http: angular.IHttpService) {
        $("#gg").val("12121");
        this.$http
            .get("http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1")
            .then((response) => {
                console.log(response);
            })
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