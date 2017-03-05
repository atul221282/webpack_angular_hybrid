"use strict";
var User = (function () {
    function User() {
        this.controller = UserController;
        this.template = require('./User.html');
        this.transclude = false;
        this.controllerAs = "vm";
    }
    return User;
}());
exports.User = User;
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.$onInit = function () {
        this.CMaxMembers = {
            min: 0,
            max: 500,
            format: "#",
            decimals: 0
        };
    };
    return UserController;
}());
//# sourceMappingURL=user.js.map