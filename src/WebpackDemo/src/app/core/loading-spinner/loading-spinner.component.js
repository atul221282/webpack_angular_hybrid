"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dialog_service_1 = require('../../core/dialog-service');
var static_1 = require('@angular/upgrade/static');
var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent(dialogService) {
        this.dialogService = dialogService;
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'loading-spinner',
            template: "<div class=\"k-loading-mask\" style=\"width:100%;height:100%;\" id=\"k_loading_home_index\" *ngIf=\"dialogService.spinner===true\">\n                   <span class=\"k-loading-text\">\n                        Loading...\n                   </span>\n                   <div class=\"k-loading-image\">\n                       <div class=\"k-loading-color\"></div>\n                   </div>\n               </div>"
        }), 
        __metadata('design:paramtypes', [dialog_service_1.DialogService])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());
exports.LoadingSpinnerComponent = LoadingSpinnerComponent;
angular.module("app.core").directive("loadingSpinner", static_1.downgradeComponent({
    component: LoadingSpinnerComponent,
}));
//# sourceMappingURL=loading-spinner.component.js.map