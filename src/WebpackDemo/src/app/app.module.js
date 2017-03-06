"use strict";
//import { NgModule, ApplicationRef } from '@angular/core';
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var static_1 = require("@angular/upgrade/static");
//import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
var shared_1 = require("./shared");
//import { routing } from './app.routing';
//import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
var AppModule = (function () {
    function AppModule() {
    }
    //constructor(public appRef: ApplicationRef) {}
    //hmrOnInit(store) {
    //  console.log('HMR store', store);
    //}
    //hmrOnDestroy(store) {
    //  let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    //  // recreate elements
    //  store.disposeOldHosts = createNewHosts(cmpLocation);
    //  // remove styles
    //  removeNgStyles();
    //}
    //hmrAfterDestroy(store) {
    //  // display new elements
    //  store.disposeOldHosts();
    //  delete store.disposeOldHosts;
    //}
    AppModule.prototype.ngDoBootstrap = function () {
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            static_1.UpgradeModule
        ],
        declarations: [],
        providers: [
            shared_1.ApiService
        ],
        //bootstrap: [AppComponent]
        bootstrap: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map