import * as angular from 'angular';

export class MyConfig {
    constructor(
        private $stateProvider: angular.ui.IStateProvider,
        private $urlProvider: angular.ui.IUrlRouterProvider,
        private $animateProvider: angular.animate.IAnimateProvider
        
    ) {

        //let result = this.$mdDialog.confirm();
        //console.log(this.$mdDialog);

        this.$animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);
        this.init();
    }
    private init(): void {
        this.$urlProvider.otherwise("/test");

        this.$stateProvider
            .state("test", {
                url: "/test",
                template: `<test></test>`
            })
            .state("user", {
                url: "/user",
                template: `<user></user>`
            });
    }
}