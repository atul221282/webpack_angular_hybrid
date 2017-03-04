"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var corePage_1 = require("./corePage");
var http_1 = require("@angular/http");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule
        ],
        entryComponents: [corePage_1.LoadingSpinnerComponent],
        exports: [
            corePage_1.LoadingSpinnerComponent
        ],
        declarations: [
            corePage_1.LoadingSpinnerComponent
        ],
        providers: []
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map