interface IRemoteAction {
    turnOn():string;
    turnOff():string;
}

class Remote implements IRemoteAction {
    turnOff(): string {
        return "Turn Off";
    }
    turnOn(): string {
        return "Turn ON"
    }
}