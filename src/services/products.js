import axios from "axios";
const baseUrl= process.env.VUE_APP_BASEURL;

export default axios.create({
    baseURL: baseUrl+'product'
});