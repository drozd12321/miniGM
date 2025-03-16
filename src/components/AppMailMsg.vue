<template>
  <div v-if="email">
    <h2>Тема письма {{ email.id }}</h2>
    <div class="msg">
      <span
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        facilis est non sed mollitia? Harum ratione est, odio molestiae officia,
        totam voluptate voluptas minima pariatur ex ducimus, modi nam ea.</span
      >
    </div>
    <button @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else class="msg">
    <h2>Выберите письмо</h2>
  </div>
</template>
<script>
export default {
  props: ["mailid"],
  inject: ["emails"],
  computed: {
    email() {
      const mailid = Number(this.mailid);
      return this.emails.find((e) => e.id === mailid);
    },
  },
};
</script>
<style scoped>
.msg {
  width: 500px;
  font-size: 20px;
  color: white;
  padding: 5px;
}
h2 {
  color: white;
  text-align: center;
}
button {
  padding: 15px;
  width: 150px;
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
