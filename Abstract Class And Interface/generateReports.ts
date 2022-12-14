abstract class generateReports {

    public getData() : string {
        return "Get data for the reports";
    }
    public validateData(): string {
        return "validate the reports data"
    }
    abstract geneReport(type:string):string;
}

class generatePDFreports extends generateReports {
    geneReport(type:string): string {
        return type + " report generated";
    }
}

class generateXLSReports extends generateReports {
    geneReport(type:string): string {
        return type + " report generated";
    }
}

let reports = new generatePDFreports()
console.log(reports.geneReport("pdf"));

