"use strict";
var core_1 = require("@angular/core");
var shared_1 = require("./shared");
var image = require('../images/mario.jpg');
var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        this.url = 'https://github.com/preboot/angular2-webpack';
        console.log(image);
        debugger;
        this.imgSrc = image.indexOf('data:') > -1 ? image : "./dist/" + image;
        this.title = this.api.title;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [shared_1.ApiService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map