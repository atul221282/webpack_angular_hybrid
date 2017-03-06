import { Test, User, MyConfig } from "./components";
import { LoadingSpinnerComponent } from "../core/loading-spinner/loading-spinner.component";
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

export function InitTestModule(app: ng.IModule) {
    //if (Config) { }
    app.component("test", new Test());
    app.component("user", new User());
    app.directive("loadingSpinner", downgradeComponent({
        component: LoadingSpinnerComponent,
    }) as angular.IDirectiveFactory);

    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        "$animateProvider",
        (
            $stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider,
            $animateProvider: angular.animate.IAnimateProvider) => {

            return new MyConfig($stateProvider, $urlRouterProvider, $animateProvider);
        }]);
}