<template>
  <div class="forger">
    <h3>Не повезло раз забыли пароль!!</h3>
    <div class="but">
      <button @click="goToLogin">Обратно к логину</button>
    </div>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  components: { TheNavBar },
  methods: {
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.forger {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(27, 26, 26);
  color: white;
  width: 75%;
  border-radius: 15px;
  margin-top: 6rem;
  padding: 15px;
  box-shadow: 0 8px 24px rgba(15, 15, 15, 0.32);
}
.but button {
  padding: 15px;
  width: 200px;
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
</style>
