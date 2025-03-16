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
          text: "Сообщение первое",
        },
        {
          id: 2,
          text: "Сообщение второе",
        },
        {
          id: 3,
          text: "Сообщение третье",
        },
        {
          id: 4,
          text: "Сообщение червертое",
        },
        {
          id: 5,
          text: "Сообщение пятое",
        },
        {
          id: 6,
          text: "Сообщение шестое",
        },
      ],
      isAuth: false,
    };
  },
  methods: {
    login() {
      this.isAuth = true;
      if (this.$route.query.page) {
        this.$router.push(this.$route.query.page);
      } else {
        this.$router.push("/dashboard");
      }
    },
    logOut() {
      this.isAuth = false;
      this.$router.push({
        path: "/login",
        query: {
          page: this.$route.path,
        },
      });
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
  <TheNavBar></TheNavBar>
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
