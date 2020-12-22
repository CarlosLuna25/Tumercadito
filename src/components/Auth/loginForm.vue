<template>
    <div class="max-w-lg max-w-xs bg-blue-800  shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
        <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Iniciar Sesion</h1>
        <div class="container py-5 max-w-md mx-auto">
            <form @submit.prevent="login()">
                <div class="mb-4">
                    <input placeholder="Email"
                        class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="email" type="email">
                </div>
                <div class="mb-6">

                    <input placeholder="Password"
                        class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="password" type="password">

                </div>
                <div class="flex items-center justify-between">
                    <input type="submit" value="Iniciar sesion" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
                    <a class="inline-block align-baseline font-bold text-sm text-gray-400 " href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data:()=>({
        email:"",
        password:""
    }),
    methods:{
       async login(){
         let user= await  this.$store.dispatch("loginUser",{
                email:this.email,
                password:this.password,
            });
        if(user.error){
            alert(user.error);
        }else{
           alert('welcome '+ this.$store.state.userInfo.name);
        }
        }
    }
}
</script>