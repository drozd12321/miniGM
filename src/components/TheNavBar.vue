<template>
  <header>
    <h3>Gmail</h3>
    <div class="grid">
      <RouterLink to="/dashboard">Главная</RouterLink>
      <RouterLink to="/mail">Почта</RouterLink>
      <div @click.prevent="logOut">Выйти</div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["visible"],
  inject: ["logOut", "goToMail", "goToDashboard"],
};
</script>

<style>
header {
  background-color: rgb(27, 26, 26);
  color: white;
  display: flex;
  justify-content: space-around;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: 0;
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  font-size: 20px;
  text-align: center;
  align-items: center;
}
div:hover {
  cursor: pointer;
}
.active {
  border-bottom: 2px solid white;
}
a {
  text-decoration: none;
  color: white;
}
</style>
