<template>
  <div>
    <MyHeader title="购物车" color="black" backgroundcolor="pink" ></MyHeader>
    <my-goods v-for="item in goodsList" :key="item.id" :goods="item"></my-goods>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  data(){
    return{
      goodsList:{}

    }
    },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
    created(){
    this.$axios({
        url:'/api/cart',
        
    }).then(res => {
        console.log(res.data.list);
        this.goodsList=res.data.list
    })
  }
};
</script>

<style></style>
