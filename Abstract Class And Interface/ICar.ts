interface Car {
    createEngine():string;
    createBreaks():string;
    createSeats():string;
}

var Hyunday : Car = {
    createEngine(): string {
        return "Create Engine";
    },
    createBreaks(): string {
        return "Create Breaks"
    },
    createSeats(): string {
        return "Create Seats"
    },
}

console.log(Hyunday.createBreaks)

