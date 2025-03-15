<script>
import { RouterView } from "vue-router";

import TheNavBar from "./components/TheNavBar.vue";

export default {
  components: { TheNavBar },
  data() {
    return {
      emails: [
        {
          id: 1,
          text: "Сообщение которое появляется первым",
        },
        {
          id: 2,
          text: "Сообщение которое появляется вторым",
        },
        {
          id: 3,
          text: "Сообщение которое появляется третьим",
        },
        {
          id: 4,
          text: "Сообщение которое появляется червертым",
        },
        {
          id: 5,
          text: "Сообщение которое появляется пятым",
        },
        {
          id: 6,
          text: "Сообщение которое появляется шестым",
        },
      ],
      isAuth: false,
    };
  },
  methods: {
    login() {
      this.isAuth = true;
      this.$router.push("/dashboard");
    },
    logOut() {
      this.isAuth = false;
      this.$router.push("/");
    },
    goToMail() {
      this.$router.push("/mail");
    },
    goToDashboard() {
      this.$router.push("/dashboard");
    },
  },
  provide() {
    return {
      emails: this.emails,
      login: this.login,
      logOut: this.logOut,
      goToMail: this.goToMail,
      goToDashboard: this.goToDashboard,
    };
  },
};
</script>

<template>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
