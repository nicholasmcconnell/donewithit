import { create } from 'apisauce';

const apiClient = create({
    baseURL: "http://10.0.0.252:9000/api"
});

export default apiClient;