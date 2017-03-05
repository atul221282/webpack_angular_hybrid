"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var shared_1 = require("./shared");
var app_routing_1 = require("./app.routing");
var hmr_1 = require("@angularclass/hmr");
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        console.log('HMR store', store);
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent
        ],
        providers: [
            shared_1.ApiService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ApplicationRef !== "undefined" && core_1.ApplicationRef) === "function" && _a || Object])
], AppModule);
exports.AppModule = AppModule;
var _a;
//# sourceMappingURL=app.module.js.map