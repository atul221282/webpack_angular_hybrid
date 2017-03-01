import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';
import * as angular from "angular";
import { InitTestModule } from "./app/test";
import '@progress/kendo-ui';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-aria';
import 'angular-material';

//depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    enableProdMode();
}

let testmodule = angular.module("testmodule", []);

angular.module("app", ["kendo.directives", 'ngAria', 'ngAnimate', 'ngMaterial', 'ngSanitize', testmodule.name]);

InitTestModule(testmodule);

export function main() {
    //return platformBrowserDynamic().bootstrapModule(AppModule);
    return platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

        upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    });
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}