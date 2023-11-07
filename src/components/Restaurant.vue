<template>

    <RouterLink to="/">
  <div class="retour">Retour à la home</div>

    </RouterLink>

    <div class="bloc">

        
     <div class="image">
        
        <img :src="restaurant.image" alt="">
    </div>
    <div class="text">
    <p id="deo"> {{ restaurant.name}}</p>
    <p> Note du pro : {{ restaurant.note}}</p>
    <p> Durée moyenne d'intervention :{{ restaurant.drive_time}}</p>


    </div>

    </div>
    
    
</template>

<script>
import BDD from '../BDD';
import { useRoute } from 'vue-router';



export default {
    name: 'RestaurantUber',

    setup(){

        const route=useRoute()
        const restaurant=BDD.find((restaurant)=> restaurant.name===route.params.name)
       
       return {
        
        restaurant
              }
       
              
    }
}



</script>

<style lang="scss" scoped>

.bloc{
    
    display: flex;
    justify-content: center;

    .text{
        margin: 50px;

        #deo{
            background-color: black;
            color: gold;
            text-align: center;
            font-size: 1.9rem;
        }
    }
    
}


</style>