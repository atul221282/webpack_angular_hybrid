"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var static_1 = require("@angular/upgrade/static");
var angular = require("angular");
var test_1 = require("./app/test");
require("@progress/kendo-ui");
//depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    core_1.enableProdMode();
}
var testmodule = angular.module("testmodule", []);
angular.module("app", ["kendo.directives", testmodule.name]);
test_1.InitTestModule(testmodule);
function main() {
    //return platformBrowserDynamic().bootstrapModule(AppModule);
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
        var upgrade = platformRef.injector.get(static_1.UpgradeModule);
        upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    });
}
exports.main = main;
if (document.readyState === 'complete') {
    main();
}
else {
    document.addEventListener('DOMContentLoaded', main);
}
//# sourceMappingURL=main.js.map