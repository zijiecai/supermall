<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" /> 
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem';

export default {
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
  .goods{
    display: flex;
    /* 根据宽度包裹 */
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>