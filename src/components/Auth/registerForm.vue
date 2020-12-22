<template>
  <div class="ml-14 p-10 container w-full flex bg-blue-400 bg-opacity-30">
    <form @submit.prevent="registrarUsuario()" class="text-center w-full">
      <label for="name">Nombre</label>
      <input type="text" class="rounded ml-2 mb-4" v-model="user.name" />

      <label for="surname">Apellido</label>
      <input type="text" class="rounded ml-2 mb-4" v-model="user.surname" />
      <br />
      <label for="nickname">Nickname</label>
      <input type="text" class="rounded ml-2 mb-4" v-model="user.nickname" />

      <label for="email">email</label>
      <input type="text" class="rounded ml-2 mb-4" v-model="user.email" />
      <br />
      <label for="password">password</label>
      <input
        type="password"
        class="rounded ml-2 mb-4"
        v-model="user.password"
      />

      <label for="password_confirmation">Confirmacion de contraseña</label>
      <input
        type="password"
        class="rounded ml-2 mb-4"
        @keyup="isPass = true"
        v-model="user.password_confirmation"
      />
      <div v-if="isPass">
        <label v-if="!coincidencia" for="" class="mt-0 text-red bg-yellow-600"
          >Las contraseñas no coinciden</label
        >
      </div>

      <br />
      <input
        type="submit"
        value="Registrar"
        class="px-2 py-2 rounded bg-indigo-400 text-white cursor-pointer"
      />
    </form>
  </div>
</template>
<script>
import Auth from "@/services/Auth.js";
export default {
  data() {
    return {
      isPass: false,
      user: {
        name: "",
        surname: "",
        nickname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async registrarUsuario() {
      if (this.coincidencia) {
       const response= await Auth.register(this.user)
       console.log(response);
        
      }
    },
  },
  computed: {
    coincidencia() {
      if (this.isPass) {
        if (this.user.password_confirmation == this.user.password) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
input:text {
  padding: 2%;
  border-radius: 20%;
}
</style>
