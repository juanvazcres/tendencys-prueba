import Dashboard from '../../dashboard/view/Dashboard'
import Orders from '../../../pages/orders/view/Orders'
import OrderDetail from '../../../pages/order-detail/view/OrderDetail'

export const routes = [
    {
        to: '/',
        path: '/*',
        Component: Dashboard
    },
    {
        to: '/orders',
        path: '/orders/*',
        Component: Orders
    },
    {
        to: '/orders/:orderId',
        path: '/orders/:orderId/*',
        Component: OrderDetail
    }
]