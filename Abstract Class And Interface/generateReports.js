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
var generateReports = /** @class */ (function () {
    function generateReports() {
    }
    generateReports.prototype.getData = function () {
        return "Get data for the reports";
    };
    generateReports.prototype.validateData = function () {
        return "validate the reports data";
    };
    return generateReports;
}());
var generatePDFreports = /** @class */ (function (_super) {
    __extends(generatePDFreports, _super);
    function generatePDFreports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    generatePDFreports.prototype.geneReport = function (type) {
        return type + " report generated";
    };
    return generatePDFreports;
}(generateReports));
var generateXLSReports = /** @class */ (function (_super) {
    __extends(generateXLSReports, _super);
    function generateXLSReports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    generateXLSReports.prototype.geneReport = function (type) {
        return type + " report generated";
    };
    return generateXLSReports;
}(generateReports));
var reports = new generatePDFreports();
console.log(reports.geneReport("pdf"));
