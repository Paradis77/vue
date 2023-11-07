<template>
    <div class="restaurant--card">

        <div :style="changeImage" class="restaurant--image">

        </div>

        <div class="restaurant--information">
            <div class="top">
                <div class="name">{{ card_info.name }}</div>

                <div class="note">{{ card_info.note }}</div>
            </div>
            <div class="time">{{ card_info.drive_time}}</div>
          
        </div>
    </div>
 
</template>

<script>
import { computed } from 'vue'


export default {
  name: 'RestaurantCard',

  props:{

    card_info:Object,
  },

  setup(props){
   const changeImage=computed(()=>{
    return{
        backgroundImage:`url(${props.card_info.image})`

    } 
  });
  return{

changeImage,
      };
    
 }
}
</script>

<style lang="scss">

.restaurant--card{
    margin: 10px;
    width: 100%;
    height: 30vh;

    p{

        margin:0px;
    }


    .restaurant--image{
    background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
    height: 70%;
    background-position: center;
    background-size: cover;

    }

    .restaurant--information{
      
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
        
        .note{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            color: gold;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }    
    }
        
    }
}

</style>
