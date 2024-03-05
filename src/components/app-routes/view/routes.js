import React from 'react'
import Dashboard from '../../dashboard/view/Dashboard'

const Orders = () => <div>Ordenes de compra</div>
const OrderDetail = () => <div>Detalle de orden de compra</div>

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