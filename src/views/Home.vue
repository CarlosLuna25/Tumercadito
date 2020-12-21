<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */
import service from '../services/service.js';
export default {
  name: "Home",
  components: {
/*     HelloWorld */
  },
  data(){ return{
    productos:[]
  }},
  methods:{
    async getProducts(){
      await service.myApi.get('product').then((response) => {
          const data = response.data;
          this.productos = data.data;
          console.log(this.productos);
          
        })
        .catch((e) => {
          console.log(e);
       
          
        });
    }
  },
  created(){
    
    this.getProducts();
  }
};
</script>
