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
    static $inject: string[] = ["$window", "$timeout"];
    constructor(private $window: ng.IWindowService, private $timeout: ng.ITimeoutService) {
        $("#gg").val("12121");
    }

    $onInit() {
        this.asas = <ITest>{ number: 1 };
        console.log(this.$window);
        this.$timeout(() => {
            $("#gg").val("12121-Init");
        }, 3000);
    }
}

interface ITest {
    number: number;
}