import { nokiaProduct, onePlusProduct, ProductFactory, samsungProduct } from "../factory/productFactory"

function clientCode(p:ProductFactory) {
    console.log(p.doSomeStuff())
}
clientCode(new samsungProduct())
clientCode(new onePlusProduct())
clientCode(new nokiaProduct())
