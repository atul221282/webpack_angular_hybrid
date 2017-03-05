"use strict";
var core_1 = require("@angular/core");
var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    return LoadingSpinnerComponent;
}());
LoadingSpinnerComponent = __decorate([
    core_1.Component({
        selector: 'loading-spinner',
        template: "<div class=\"k-loading-mask\" style=\"width:100%;height:100%;\" id=\"k_loading_home_index\">\n                   <span class=\"k-loading-text\">\n                        Loading...\n                   </span>\n                   <div class=\"k-loading-image\">\n                       <div class=\"k-loading-color\"></div>\n                   </div>\n               </div>"
    })
], LoadingSpinnerComponent);
exports.LoadingSpinnerComponent = LoadingSpinnerComponent;
//# sourceMappingURL=loading-spinner.component.js.map