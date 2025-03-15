<template>
  <TheNavBar></TheNavBar>
  <div class="mail">
    <h3>Здесь можете прочитать письма</h3>
  </div>
  <div class="mail item" v-for="email in emails">
    <span>{{ email.id }}</span>
    <span>{{ email.text }}</span>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar.vue";
import { inject } from "vue";
export default {
  components: { TheNavBar },
  inject: ["emails"],
};
</script>
<style scoped>
.mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(27, 26, 26);
  color: white;
  width: 75%;
  border-radius: 15px;
  margin-top: 6rem;
  box-shadow: 0 8px 24px rgba(15, 15, 15, 0.32);
}
.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  font-size: 20px;
}
</style>
