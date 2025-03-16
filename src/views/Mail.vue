<template>
  <div class="mail">
    <h3>Здесь можете прочитать письма</h3>
  </div>
  <div class="cont">
    <div class="mail item">
      <div class="span" v-for="email in emails" :key="email.id">
        <RouterLink :to="`/mail/${email.id}`">{{ email.text }}</RouterLink>
      </div>
    </div>
    <RouterView></RouterView>
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
h3 {
  font-size: 25px;
}
.cont {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgb(27, 26, 26);
  box-shadow: 0 8px 24px rgba(15, 15, 15, 0.32);
  border-radius: 10px;
}
.mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 75%;
  border-radius: 15px;
}
.item {
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 25px;
  width: auto;
  height: auto;
}
.span {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
}
.span:hover {
  background-color: rgb(45, 44, 44);
}
</style>
