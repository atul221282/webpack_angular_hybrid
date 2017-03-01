import { Test, User } from "./components";
import { LoadingSpinnerComponent } from "../core/loading-spinner/loading-spinner.component";
import { downgradeComponent } from '@angular/upgrade/static';

export function InitTestModule(app: ng.IModule) {
    app.component("test", new Test());
    app.component("user", new User());
    app.directive("loadingSpinner", downgradeComponent({
        component: LoadingSpinnerComponent,
    }) as angular.IDirectiveFactory);
}