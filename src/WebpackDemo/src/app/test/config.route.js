"use strict";
var MyConfig = (function () {
    function MyConfig($stateProvider, $urlProvider, $animateProvider, $mdDialog) {
        this.$stateProvider = $stateProvider;
        this.$urlProvider = $urlProvider;
        this.$animateProvider = $animateProvider;
        this.$mdDialog = $mdDialog;
        //let result = this.$mdDialog.confirm();
        console.log(this.$mdDialog);
        this.$animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);
        this.init();
    }
    MyConfig.prototype.init = function () {
        this.$urlProvider.otherwise("/test");
        this.$stateProvider
            .state("test", {
            url: "/test",
            template: "<test></test>"
        })
            .state("user", {
            url: "/user",
            template: "<user></user>"
        });
    };
    return MyConfig;
}());
exports.MyConfig = MyConfig;
//# sourceMappingURL=config.route.js.map