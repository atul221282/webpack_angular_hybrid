"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AboutComponent = (function () {
    function AboutComponent() {
        // Do stuff
    }
    AboutComponent.prototype.ngOnInit = function () {
        console.log('Hello About');
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'my-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map