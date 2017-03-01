"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    function TestController($window, $timeout) {
        this.$window = $window;
        this.$timeout = $timeout;
        this.title = "Hello I am ";
        $("#gg").val("12121");
    }
    TestController.prototype.$onInit = function () {
        this.asas = { number: 1 };
        console.log(this.$window);
        this.$timeout(function () {
            $("#gg").val("12121-Init");
        }, 3000);
    };
    return TestController;
}());
TestController.$inject = ["$window", "$timeout"];
//# sourceMappingURL=test.js.map