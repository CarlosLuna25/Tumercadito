import axios from "axios";
const baseUrl= process.env.VUE_APP_BASEURL;
var myApi= axios.create({
    baseURL: baseUrl
});
console.log(myApi.defaults);
export default {myApi}