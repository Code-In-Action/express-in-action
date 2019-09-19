"use strict";
exports.__esModule = true;
var path = require("path");
var NodeModuleTester = /** @class */ (function () {
    function NodeModuleTester(// 测试构造方法
    f1, f2) {
        this.f1 = f1;
        this.f2 = f2;
    }
    NodeModuleTester.testPath = function () {
        var curdir = './';
        console.log(path.resolve(curdir));
    };
    NodeModuleTester.STATIC_VAR = 'STATIC'; // 测试static变量
    return NodeModuleTester;
}());
exports.NodeModuleTester = NodeModuleTester;
