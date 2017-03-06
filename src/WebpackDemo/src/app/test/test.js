"use strict";
var angular = require("angular");
var Test = (function () {
    function Test() {
        this.controller = TestController;
        this.template = require('./test.html');
        this.transclude = false;
        this.controllerAs = "vm";
    }
    return Test;
}());
exports.Test = Test;
var TestController = (function () {
    function TestController($timeout, $mdDialog) {
        this.$timeout = $timeout;
        this.$mdDialog = $mdDialog;
        this.title = "Hello ";
        $("#gg").val("12121");
    }
    TestController.prototype.$onInit = function () {
        var _this = this;
        this.$mdDialog.confirm();
        this.asas = { number: 1 };
        this.$timeout(function () {
            $("#gg").val("12121-Init");
            _this.showDialog();
        }, 3000);
    };
    TestController.prototype.showDialog = function () {
        this.$mdDialog.show(this.$mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('This is an alert title')
            .textContent('You can specify some description text in here.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!'));
    };
    return TestController;
}());
TestController.$inject = ["$timeout", "$mdDialog"];
//# sourceMappingURL=test.js.map