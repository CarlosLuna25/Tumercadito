<template>
  <div id="app" class="bg-gray-100">
      <navbar/>

      

    
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/navbar/navbar";
import { mapState } from "vuex";

export default {
  components:{
    navbar
  },
  computed:{
    ...mapState(['isLogged','userInfo']),
  },
  methods:{
    VerifySession(){
      let token= JSON.parse(window.localStorage.getItem('currentUser'));
      if (token.access_token!=null) {
        this.isLogged=true;
        this.$store.dispatch('GetUserInfo', token.access_token);
        console.log('Usuario: '+ this.userInfo);
        
      }
    }
  },
  async beforeCreate(){
     let token= JSON.parse(window.localStorage.getItem('currentUser'));
    
      if (token!=null) {
        this.$store.state.islogged=true;
       await this.$store.dispatch('GetUserInfo', token.access_token);
        console.log('Usuario: '+ this.userInfo.name);}
  }
}
</script>
<style src="./assets/css/tailwind.css"/>
