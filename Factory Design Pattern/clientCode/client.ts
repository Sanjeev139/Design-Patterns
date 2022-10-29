import { nokiaProduct, onePlusProduct, ProductFactory, SamsungProduct } from "../factory/productFactory"

function clientCode(p:ProductFactory) {
    console.log(p.doSomeStuff())
}
clientCode(new SamsungProduct())
clientCode(new onePlusProduct())
clientCode(new nokiaProduct())