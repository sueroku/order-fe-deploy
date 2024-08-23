import OrderList from '@/views/order/OrderList.vue'
import OrderCart from '@/views/order/OrderCart.vue'

export const orderRouter = [
    {
        path: '/order/list',
        name: 'OrderList',
        component: OrderList
    },
    {
        path: '/order/cart',
        name: 'OrderCart',
        component: OrderCart
    },
]