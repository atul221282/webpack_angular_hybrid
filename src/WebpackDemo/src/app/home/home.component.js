"use strict";
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        // Do stuff
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('Hello Home');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map