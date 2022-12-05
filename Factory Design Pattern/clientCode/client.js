"use strict";
exports.__esModule = true;
var productFactory_1 = require("../factory/productFactory");
function clientCode(p) {
    console.log(p.doSomeStuff());
}
clientCode(new productFactory_1.SamsungProduct());
clientCode(new productFactory_1.onePlusProduct());
clientCode(new productFactory_1.nokiaProduct());
