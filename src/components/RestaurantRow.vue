<template>

    <h2>Nos Professionnels</h2>
<div class="wrapper">

  <router-link class="restaurant--wrapper"   v-for="(card,index) in trois_rangee " :key="index" :to="{name:'Restaurant',params:{name:card.name}}">

  <RestaurantCard  :card_info="card"/>


  </router-link>


 
</div>
   
 
</template>

<script>
import RestaurantCard from './RestaurantCard.vue'

export default {
    
  name: 'RestaurantRow',
  components: {

    RestaurantCard,
   
  },

  props:{
    trois_rangee:Array,
  }
}
</script>

<style lang="scss">
.wrapper{
    display: flex;

    .restaurant--wrapper{

      width: 33%;
      margin: 10px;
      text-decoration: none;
    }
}

</style>
