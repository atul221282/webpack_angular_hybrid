"use strict";
var components_1 = require("./components");
var loading_spinner_component_1 = require("../core/loading-spinner/loading-spinner.component");
var static_1 = require("@angular/upgrade/static");
function InitTestModule(app) {
    //if (Config) { }
    app.component("test", new components_1.Test());
    app.component("user", new components_1.User());
    app.directive("loadingSpinner", static_1.downgradeComponent({
        component: loading_spinner_component_1.LoadingSpinnerComponent,
    }));
    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        "$animateProvider",
        function ($stateProvider, $urlRouterProvider, $animateProvider) {
            return new components_1.MyConfig($stateProvider, $urlRouterProvider, $animateProvider);
        }
    ]);
}
exports.InitTestModule = InitTestModule;
//# sourceMappingURL=index.js.map