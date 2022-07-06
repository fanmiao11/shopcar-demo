<template>
  <div>
    <MyHeader title="购物车" color="black" backgroundcolor="pink"></MyHeader>
    <my-goods></my-goods>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
};
</script>

<style></style>
