var Hyndai = /** @class */ (function () {
    function Hyndai() {
    }
    Hyndai.prototype.createEngine = function () {
        return "Create Engine";
    };
    Hyndai.prototype.createBreaks = function () {
        return "Create Breaks";
    };
    Hyndai.prototype.createSeats = function () {
        return "Create Seats";
    };
    return Hyndai;
}());
var Car = new Hyndai();
console.log(Car.createBreaks());
