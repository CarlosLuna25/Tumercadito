<template>
  <div class="home">
    
    HELLOOO
    
  </div>
</template>

<script>
// @ is an alias to /src

import products from '../services/products.js';
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
      await products.get().then((response) => {
          const data = response.data;
          this.productos = data.data; //=> response.data.data
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
