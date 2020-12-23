import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/services/Auth.js";
import User from "@/services/user.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    islogged:false,
    currentUser:{},
    userInfo:{},
    

  },
  mutations: {
    SET_CURRENT_USER(state, user) { //guarda el usuario identidficado en el localstorage.
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
     
    },
    LOGOUT_USER(state) { //elimina los archivos del locaStorage
      state.currentUser = {};
      state.userInfo={};
      state.islogged=false;
      window.localStorage.clear();
    },
    SET_USER_INFO(state, userInfo){
      state.userInfo= userInfo;
      state.currentUser=JSON.parse(window.localStorage.getItem('currentUser'));
     
    }

  },
  actions: {
    async GetUserInfo({commit},token,user=null){
      try {
        let response= await User.GetUserInfo(token);
        let userInfo=response.data.data;
        if (user!=null) {
          commit('SET_USER_INFO',userInfo,user);
        }else{
          commit('SET_USER_INFO',userInfo);
        }
        
      } catch (e) {
          console.log(e);
      }
    },

    async loginUser({commit,dispatch}, loginInfo) {
      try {
        let response = await Auth.login(loginInfo);
        let user = response.data.data;
        //obtener informacion del usuario
      
        commit('SET_CURRENT_USER', user); 
      
       await dispatch('GetUserInfo',this.state.currentUser.access_token);
        this.state.islogged=true;
        console.log(user)
        
        return user;
      } catch {
        return {error: "Email/password combination was incorrect.  Please try again."}
      }
      
    },
   async logout({commit}){
      let response= await User.logout(this.state.currentUser.access_token);
      console.log(response.data);
       commit('LOGOUT_USER');

  },
  },
  modules: {}
});
