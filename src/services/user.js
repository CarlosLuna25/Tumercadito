import axios from "axios";
const baseUrl= process.env.VUE_APP_BASEURL;

export default {
    GetUserInfo(Token){
        
        return axios.get(baseUrl+'user',{
            headers: {
                Authorization:'Bearer '+Token ,
              },
        });
    },
    logout(Token){
        return axios.get(baseUrl+'logout',{
            headers: {
                Authorization:'Bearer '+Token ,
              },
        });
    }
    
}