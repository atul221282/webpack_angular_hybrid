import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';
//import * as moment from 'moment';
//import * as _ from 'lodash';

import { InitTestModule } from './app/test';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'production') {
    enableProdMode();
}

console.info(process.env.ENV);

let testModule = angular.module("app.test", []);

let mainMod = angular.module('app', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngSanitize', testModule.name]);

InitTestModule(mainMod, testModule);

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
