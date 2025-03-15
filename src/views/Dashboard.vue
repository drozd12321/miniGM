<template>
  <TheNavBar></TheNavBar>
  <div class="dash">
    <h2>Привет на главной</h2>
    <p>Тут можно перейти на любую страницу</p>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  components: { TheNavBar },
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
</style>
