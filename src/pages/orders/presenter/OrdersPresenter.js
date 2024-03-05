import OrdersInteractor from "../interactor/OrderInteractor";
class OrdersPresenter {
    ordersInteractor;

    constructor() {
        this.ordersInteractor = new OrdersInteractor()
    }

    getAllOrders = async () => {
        let response;
        try {
            response = await this.ordersInteractor.getAllOrders();
        } catch (error) {
            //Alerta de error
        }
        return response;
    }
}

export default OrdersPresenter;