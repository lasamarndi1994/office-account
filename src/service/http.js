
import axios from "axios";
import { responseStore,useAuthStore } from '@/stores';


var setheaders = {
    "Accept": "application/json",
    "Content-type": "application/json",
};
const httpClient = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: setheaders,
});



const getAuthToken = () => JSON.parse(localStorage.getItem("user"));

const authInterceptor = (config) => {
    if(getAuthToken()){
        const token = getAuthToken().access_token;
            config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
};


httpClient.interceptors.request.use(authInterceptor);

httpClient.interceptors.response.use(
    function (response) {
        responseStore().setResponse(false);
        return response;
    },
    function (error) {
		responseStore().setResponse(false);
        if (error.response.status === 401) {
			if(error.response.data.message === 'Unauthenticated.'){
				useAuthStore().logout();
			}
        }
        return Promise.reject(error);
    }
);

export default httpClient;

