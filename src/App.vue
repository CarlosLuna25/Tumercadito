<template>
  <div id="app" class="bg-gray-100">
      <navbar/>

      

    
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/navbar/navbar";
export default {
  components:{
    navbar
  }
}
</script>
<style src="./assets/css/tailwind.css"/>
