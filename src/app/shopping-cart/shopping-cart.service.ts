import { CartItem } from "./cart-item.model";
import { MenuItem } from "app/menu-item/menu-item.model";

export class ShoppingCartService{
    
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    add(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if(!foundItem){
            this.items.push(new CartItem(item));
        }
        else{
            foundItem.quantity++
        }
    }

    remove(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total():number{
        return this.items
            .map(item => item.value())
            .reduce((prev, actual) => prev + actual, 0)
    }


}