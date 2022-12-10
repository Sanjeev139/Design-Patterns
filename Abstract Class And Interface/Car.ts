abstract class Car {

    public doSomeActions() : string {
        return "Allow subclass to use abstract method";
    }
    abstract changeGear():string;
}

class Centro extends Car {
    changeGear(): string {
        return "Change Gear of Centro";
    }
}

class Creta extends Car {
    changeGear(): string {
        return "Change Gear of Creta";
    }
}

let centro = new Centro()
console.log(centro.changeGear());