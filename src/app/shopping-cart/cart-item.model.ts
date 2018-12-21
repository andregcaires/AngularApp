import { MenuItem } from "app/menu-item/menu-item.model";

export class CartItem{

    value(): number{
        return this.menuItem.price * this.quantity
    }

    constructor(public menuItem: MenuItem, public quantity: number = 1){
    }

}