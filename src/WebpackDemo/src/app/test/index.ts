import { Test, User, MyConfig, APIInterceptor,Comp, Comp2, Comp3 } from "./components";
import { LoadingSpinnerComponent } from "../core/loading-spinner/loading-spinner.component";
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

export function InitTestModule(app: ng.IModule, test?: ng.IModule) {
    //if (Config) { }
    app.component("test", new Test());
    app.component("user", new User());
    app.component("comp", new Comp());
    app.component("comp2", new Comp2());
    app.component("comp3", new Comp3());
    app.directive("loadingSpinner", downgradeComponent({
        component: LoadingSpinnerComponent,
    }) as angular.IDirectiveFactory);

    app.factory('apiFactory', ["$q", ($q: angular.IQService) => new APIInterceptor($q)])
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

    test.config([
        '$httpProvider',
        ($httpProvider: angular.IHttpProvider) => {
            $httpProvider.interceptors.push('apiFactory');
        }]);
}