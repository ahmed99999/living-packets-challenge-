import axios from 'axios';
import config from '../../config.json';

class HttpService {
    constructor() {
        axios.defaults.baseURL = config.apiEndPoint;
        axios.interceptors.response.use(undefined, err => {
            const expectedError = err.response && err.response.status >= 400 && err.response.status < 500;
            if (!expectedError) {
                console.log('SOMETHIMG UNXPECTED HAPPEND');
            }
            return Promise.reject(err);
        });
    }

    public get = axios.get;
    public post = axios.post;
    public put = axios.put;
    public delete = axios.delete;
}

export default HttpService;