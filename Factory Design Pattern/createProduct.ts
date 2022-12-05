import { IProduct } from "./IProduct"

export class SamsungProduct implements IProduct {
    createProdcut(): string {
        return "Create Samsung Phones";
    }
}

export class OnePlusProduct implements IProduct {
    createProdcut(): string {
        return "Create OnePlus Phones"
    }
}

export class NokiaProduct implements IProduct {
    createProdcut(): string {
        return "Create Nokia Phones"
    }
}