"use strict";
exports.__esModule = true;
var utils_1 = require("./core/utils");
function main() {
    var tester = new utils_1.NodeModuleTester("s1", 1);
    console.log(utils_1.NodeModuleTester.STATIC_VAR);
    console.log(utils_1.NodeModuleTester.testPath());
}
main();
