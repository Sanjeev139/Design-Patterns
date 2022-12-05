"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.nokiaProduct = exports.onePlusProduct = exports.SamsungProduct = exports.ProductFactory = void 0;
var createProduct_1 = require("../createProduct");
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.doSomeStuff = function () {
        var product = this.createProduct();
        return "test " + product.createProdcut();
    };
    ;
    return ProductFactory;
}());
exports.ProductFactory = ProductFactory;
var SamsungProduct = /** @class */ (function (_super) {
    __extends(SamsungProduct, _super);
    function SamsungProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SamsungProduct.prototype.createProduct = function () {
        return new createProduct_1.createSamsungProduct();
    };
    return SamsungProduct;
}(ProductFactory));
exports.SamsungProduct = SamsungProduct;
var onePlusProduct = /** @class */ (function (_super) {
    __extends(onePlusProduct, _super);
    function onePlusProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    onePlusProduct.prototype.createProduct = function () {
        return new createProduct_1.createOnePlusProduct();
    };
    return onePlusProduct;
}(ProductFactory));
exports.onePlusProduct = onePlusProduct;
var nokiaProduct = /** @class */ (function (_super) {
    __extends(nokiaProduct, _super);
    function nokiaProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    nokiaProduct.prototype.createProduct = function () {
        return new createProduct_1.createNokiaProduct();
    };
    return nokiaProduct;
}(ProductFactory));
exports.nokiaProduct = nokiaProduct;
