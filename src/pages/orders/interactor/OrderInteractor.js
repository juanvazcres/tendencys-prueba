import ServicerManager from "../../../utils/service-manager/ServiceManager";

const DEFAULT_BASE_URL = 'https://eshop-deve.herokuapp.com/api/v2';
const DEFAULT_HEADERS = {
    'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAF fnPldd8QzWvgVQ'
};

class OrdersInteractor {

    serviceManager;
    constructor() {
        this.serviceManager = new ServicerManager({ baseHeaders: DEFAULT_HEADERS, baseUrl: DEFAULT_BASE_URL })
    }
    getAllOrders = async () => {
        return await this.serviceManager.sendHttpRequest({ method: 'GET', path: '/orders' })
    }
}

export default OrdersInteractor;