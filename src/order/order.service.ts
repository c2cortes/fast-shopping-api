import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    async storeOrder(currentCustomer, cartItems):Promise<Order> {
        const order = new Order();
        order.products = cartItems;
        order.customer = currentCustomer;
        return await order.save();
    }
}
