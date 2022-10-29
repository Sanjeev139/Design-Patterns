import { IProduct } from "./IProduct"

export class createSamsungProduct implements IProduct {
    createProdcut(): string {
        return "Create Samsung Phones";
    }
}

export class createOnePlusProduct implements IProduct {
    createProdcut(): string {
        return "Create OnePlus Phones"
    }
}

export class createNokiaProduct implements IProduct {
    createProdcut(): string {
        return "Create Nokia Phones"
    }
}