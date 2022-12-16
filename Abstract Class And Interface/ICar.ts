interface Car {
    createEngine():string;
    createBreaks():string;
    createSeats():string;
}

class Hyundai implements Car {
    createEngine(): string {
        return "Create Engine";
    }
    createBreaks(): string {
        return "Create Breaks";
    }
    createSeats(): string {
        return "Create Seats";
    }
}

var Car = new Hyundai()
console.log(Car.createBreaks())

