<script>
import TheNavBar from "./components/TheNavBar.vue";
import Login from "./views/Login.vue";

export default {
  components: { Login, TheNavBar },
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
    };
  },
  provide() {
    return {
      emails: this.emails,
    };
  },
};
</script>

<template>
  <TheNavBar></TheNavBar>
  <div class="container">
    <Login></Login>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
