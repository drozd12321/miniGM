<template>
  <div class="dash">
    <h2>Привет на главной</h2>
    <p>Тут можно перейти на любую страницу</p>
    <router-link :to="{ name: 'mail' }">В почту</router-link>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  components: { TheNavBar },
  beforeRouteLeave(to, from, next) {
    const answer = confirm("Уверены что хотите перейти на другую страницу?");
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
<style scoped>
.dash {
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
p {
  font-size: 20px;
}
a {
  padding: 7px;
  font-size: 20px;
  transition: all 0.3s ease;
}
a:hover {
  color: gray;
}
</style>
