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
    userToken:"Bearer "

  },
  mutations: {
    SET_CURRENT_USER(state, user) { //guarda el usuario identidficado en el localstorage.
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
      window.localStorage.userInfo = JSON.stringify(user);
    },
    LOGOUT_USER(state) { //elimina los archivos del locaStorage
      state.currentUser = {};
      state.userInfo={};
      state.islogged=false;
      window.localStorage.currentUser = JSON.stringify({});
    },

  },
  actions: {

    async loginUser({commit}, loginInfo) {
      try {
        let response = await Auth.login(loginInfo);
        let user = response.data.data;
        //obtener informacion del usuario
      
        commit('SET_CURRENT_USER', user); 
        let userInfo= await User.GetUserInfo(this.state.currentUser.access_token);
        this.state.userInfo= userInfo.data.data;
        this.state.islogged=true;
        
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
