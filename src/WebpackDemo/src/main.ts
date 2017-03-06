import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';
import * as moment from 'moment';
import * as _ from 'lodash';

import { InitTestModule } from './app/test';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    enableProdMode();
}

var data = [{ id: 1, name: "jquery" },
{ id: 2, name: "angular" },
{ id: 3, name: "moment" },
{ id: 4, name: "lodash" }];

let appModule = angular.module('app', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngSanitize']);

$("#name").val("Hello");
setTimeout(() => {
    $("#name").val("Hello Atul "
        + moment(Date.now()).format('MMM-DD-YYYY')
        + " " + _.find(data, ["id", 4]).name);
}, 5000);


InitTestModule(appModule);

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
