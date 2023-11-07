<template>
    <div class="home">
        
        <div class="header">

            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
            
            <div class="wrapper--input">

              <input v-model="user_search_restaurant"  type="text" placeholder="De quoi avez-vous besoin ?">

              <div class="input--search">

                <router-link v-for="(restaurant,i) in search_restaurant" :key="i" :to="{name:'Restaurant',params:{name:restaurant.name}}" >

                <div class="container-restaurant-search">
                     <div class="input--search--image">
                       <img :src="restaurant.image" alt="">
                     </div>

                     <p>{{ restaurant.name }}</p>

                </div>


                </router-link>

              
              </div>

            </div>
            
        </div>

        <div class="banner">

        </div>

     <RestaurantRow v-for="(data,index) in data_restaurant " :key="index" :trois_rangee="data"/>
    
    </div>
       
     <div class="footer">&copy;Pro BJ All Rigth Reserve </div>

    </template>
    
    <script>
    import { onMounted, ref,watch } from 'vue'
    import BDD from '../BDD'
    import RestaurantRow from './RestaurantRow.vue'
  
    
    export default {
        
      name: 'HomePage',
      components: {

      RestaurantRow,
       
      },
    

      setup(){

      class Restaurant {

        constructor(name,note,image,drive_time){

            this.name=name
            this.note=note
            this.image=image
            this.drive_time=drive_time
            
        }
      }

       let data_restaurant=ref([]);
       let all_restaurant=[];
       

       const  makeDataRestaurant=()=> {

        let three_restaurant=[];

        for (const restaurant of BDD) {

          let new_restaurant= new Restaurant(restaurant.name,restaurant.note,restaurant.image,restaurant.drive_time);

          all_restaurant.push(new_restaurant);

          if (three_restaurant.length===2) {
            three_restaurant.push(new_restaurant);
            data_restaurant.value.push(three_restaurant);
            three_restaurant=[];
            
          } else {

            three_restaurant.push(new_restaurant);
            
          }
            
        }
    
       }

       //user search 

       let user_search_restaurant=ref('');
       let search_restaurant=ref([]);

       watch(user_search_restaurant,(new_value)=>{
          
       let regex=RegExp(new_value.toLowerCase());

       let new_search_restaurant=all_restaurant.filter(restaurant=>regex.test(restaurant.name.toLowerCase()));

       search_restaurant.value=new_search_restaurant;

       if (new_value==0) {
        search_restaurant.value=[];
        
       } else {

        search_restaurant.value=new_search_restaurant;
        
       }


       })

       onMounted(makeDataRestaurant);
       return{
        data_restaurant,
        user_search_restaurant,
        search_restaurant,
        

       }






      }
    }
    </script>
    
    <style lang="scss">
    .home{
        .header{

            margin: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
              

            .wrapper--input{
            position: relative;

            input{
            height: 40px;
            width: 400px;
            padding-left: 20px;
            border-radius: 50px;
            border:  green 5px;
            background-color: whitesmoke;
            text-align: center;
            font-family: 'Comic Neue', cursive;
            font-size: 1.9rem;
            color: gold;
              
                 }


            .input--search{
            position: absolute;
            top: 100%;
            width: 100%;
            background-color: whitesmoke;
            overflow:hidden;
       


        .container-restaurant-search{

          display: flex;
          align-items: center;
          padding: 10px;


          &:hover{
            background: bisque;
          }

          .input--search--image{
          
            width: 60px;
            height: 60px;
            margin-right: 25px;
            border-radius: 50%;
            overflow: hidden;

            img{
              height: 100%;
              width: auto;

            }
          }
        }
             
                      
                
                }


            }


            img{

                height: 50px;
            }

            }

  .banner{

    background-image: url("https://restauration.org/media/9830/ubereats_833.jpg");

    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    margin: 0px 0px 10px;
  }

    }
 
    
    .footer{
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: gold;
        background-color: black;
    }
    </style>
    