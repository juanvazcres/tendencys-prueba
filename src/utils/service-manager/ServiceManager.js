class ServicerManager {
    baseUrl;
    baseHeaders;
    constructor({ baseUrl, baseHeaders }) {
        this.baseHeaders = baseHeaders;
        this.baseUrl = baseUrl
    }

    sendHttpRequest = async ({ method, url, path, data, headers }) => {
        let fullURL = url;
        if (!url) {
            fullURL = this.baseUrl + path;
        }

        const response = await fetch(fullURL, {
            method: method,
            body: data ? JSON.stringify(data) : null,
            headers: { ...this.baseHeaders, ...headers }
        });

        if (response.status >= 400) {
            const errResData = await response.json();
            const error = new Error('Something went wrong!');
            error.data = errResData;
            throw error;
        }
        const responseData = await response.json();
        return responseData;
    };
}

export default ServicerManager;