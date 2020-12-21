<template>
    <div>
   
            <label for="name">Nombre</label>
            <input type="text" name="name" v-model="user.name">
            <br>
            <label for="surname">Apellido</label>
            <input type="text" name="surname" v-model="user.surname">
            <br>
            <label for="nickname">Nickname</label>
            <input type="text" name="nickname" v-model="user.nickname">
            <br>
            <label for="email">email</label>
            <input type="text" name="email" v-model="user.email">
            <br>
            <label for="password">password</label>
            <input type="password" name="password" v-model="user.password">
            <br>
             <label for="password_confirmation">Confirmacion de contraseña</label>
            <input type="password" name="password" v-model="user.password_confirmation">
            <button @click="registrarUsuario()"  value="Registrar" class="px-2 py-2 rounded bg-indigo-400 text-white cursor-pointer">Registrar</button>
       
        
    </div>
</template>
<script>
import Auth from "@/services/Auth.js";
export default {

    data(){
        return{
            user:{
            name:'asdasd',
            surname:'',
            nickname:'',
            email:'',
            password:"",
            password_confirmation:""

            }
           
        }
    }, 
    methods:{
        async registrarUsuario(){
            await Auth.register(this.user).then((response)=>{
                console.log(response);
            }).catch((e) => {
          console.log(e);
      
        });;
        }
    }
    
}
</script>