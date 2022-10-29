import { createNokiaProduct, createOnePlusProduct, createSamsungProduct } from "../createProduct";
import { IProduct } from "../IProduct";

export abstract class ProductFactory {

    public abstract createProduct():IProduct;
    public doSomeStuff() : string {
        const product = this.createProduct();
        return "test " + product.createProdcut();
    };
}

export class SamsungProduct extends ProductFactory {
    public createProduct(): IProduct {
        return new createSamsungProduct();
    }
}

export class onePlusProduct extends ProductFactory {
    public createProduct(): IProduct {
        return new createOnePlusProduct();
    }
}

export class nokiaProduct extends ProductFactory {
    public createProduct(): IProduct {
        return new createNokiaProduct();
    }
}