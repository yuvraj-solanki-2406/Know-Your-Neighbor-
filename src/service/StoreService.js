import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/online"

class StoreService{
    
    addStores(stores){
        return axios.post(API_BASE_URL+"/addstore", stores)
    }

    getAllStores(){
        return axios.get(API_BASE_URL+"/viewallstores")
    }

    searchStore(keyword){
        return axios.get(API_BASE_URL+"/search/"+keyword)
    }
    
}

export default new StoreService();