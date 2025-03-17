<template>
  <div class="vuex">
    <h2>{{ toUpperTitle }}</h2>
    <button @click="add(3)">Count {{ counter }}</button>
    <button @click="add(2)">Count*2 {{ doubleCounter }}</button>
    <button @click="AsyncIncr({ value: 7, delay: 1500 })">
      AsyncCount {{ counter }}
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations({ add: "count/increment" }),
    ...mapActions("count", { AsyncIncr: "AsyncIncrement" }),
  },
  computed: {
    ...mapGetters("count", ["counter", "doubleCounter", "toUpperTitle"]),
    ...mapGetters(["toUpperTitle"]),
  },
};
</script>
<style scoped>
.vuex {
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
</style>
