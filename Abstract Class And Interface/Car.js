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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.doSomeActions = function () {
        return "Allow subclass to use abstract method";
    };
    return Car;
}());
var Centro = /** @class */ (function (_super) {
    __extends(Centro, _super);
    function Centro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Centro.prototype.changeGear = function () {
        return "Change Gear of Centro";
    };
    return Centro;
}(Car));
var Creta = /** @class */ (function (_super) {
    __extends(Creta, _super);
    function Creta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Creta.prototype.changeGear = function () {
        return "Change Gear of Creta";
    };
    return Creta;
}(Car));
var centro = new Centro();
console.log(centro.changeGear());
