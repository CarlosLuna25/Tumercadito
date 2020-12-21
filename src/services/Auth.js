import axios from "axios";
const baseUrl= process.env.VUE_APP_BASEURL+'Auth';

export default {
    register(user){
        const userData= user;
        return axios.post(baseUrl+'/signup',userData);
    }
}