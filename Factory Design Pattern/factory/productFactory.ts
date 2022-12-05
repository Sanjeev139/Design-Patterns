import { SamsungProduct, OnePlusProduct, NokiaProduct } from "../createProduct";
import { IProduct } from "../IProduct";

export abstract class ProductFactory {

    public abstract createProduct():IProduct;
    public doSomeStuff() : string {
        const product = this.createProduct();
        return "test " + product.createProdcut();
    };
}

export class samsungProduct extends ProductFactory {
    public createProduct(): IProduct {
        return new SamsungProduct();
    }
}

export class onePlusProduct extends ProductFactory {
    public createProduct(): IProduct {
        return new OnePlusProduct();
    }
}

export class nokiaProduct extends ProductFactory {
    public createProduct(): IProduct {
        return new NokiaProduct();
    }
}