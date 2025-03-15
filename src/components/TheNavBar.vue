<template>
  <header>
    <h3>Gmail</h3>
    <div class="grid">
      <div>Главная</div>
      <div>Почта</div>
      <div>Выйти</div>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style>
header {
  background-color: rgb(27, 26, 26);
  color: white;
  display: flex;
  justify-content: space-around;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  font-size: 20px;
  text-align: center;
  align-items: center;
}
</style>
