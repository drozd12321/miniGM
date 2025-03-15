<template>
  <form class="login" @submit.prevent="submit">
    <h2>Клон Gmail</h2>
    <div class="inp">
      <label for="email">Email: </label>
      <input type="email" v-model="email" />
    </div>
    <div class="inp">
      <label for="email">Пароль: </label>
      <input type="password" v-model="password" />
    </div>
    <div class="but">
      <button type="submit">Войти</button>
      <RouterLink to="/forger" v-slot="{ navigate }"
        ><button @click="navigate">Забыли пароль</button></RouterLink
      >
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  inject: ["login"],
  computed: {
    isValid() {
      return this.email != "" && this.password != "";
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.login();
      }
    },
  },
};
</script>
<style scoped>
.but {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}
.but button {
  padding: 15px;
  width: 150px;
  font-size: 15px;
  background-color: transparent;
  border: 3px solid white;
  color: white;
  border-radius: 7px;
  font-weight: 400;
  line-height: 13px;
  transition: all 0.3s ease;
}
button:hover {
  background-color: gray;
}
.login {
  background-color: rgb(27, 26, 26);
  color: white;
  width: 65%;
  text-align: center;
  height: 25rem;
  border-radius: 15px;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  box-shadow: 0 8px 24px rgba(15, 15, 15, 0.32);
}
input {
  padding: 10px;
  width: 90%;
  border-radius: 7px;
  border: 3px solid white;
  outline: none;
  background-color: transparent;
  color: white;
}
.inp {
  display: flex;
  align-items: center;
  width: 60%;
  gap: 10px;
}
label {
  font-weight: 600;
}
</style>
