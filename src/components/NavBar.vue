<template>
  <header class="fixed w-full z-50 bg-black text-bg-stone-950 ">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="  transition-transform transform hover:scale-110 rounded-full h-28 w-28 flex items-center justify-center " src="https://live.staticflickr.com/65535/53344613957_71170c7276_m.jpg" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-10 w-10 text-white" aria-hidden="true" />
        </button>
      </div>
      
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class=" w-45 text-center border  text-base transition-transform transform hover:scale-110 text-sm font-semibold leading-6 text-black hover:text-white  bg-green-500 ">Reférencez votre société <span aria-hidden="true"></span></a>
      </div>
      
    </nav>
    
  </header>
</template>

<script setup>


import { ref } from 'vue'
import {
  
 
 
 
} from '@headlessui/vue'
import {
  Bars3Icon,
 
} from '@heroicons/vue/24/outline'
const mobileMenuOpen = ref(false)




</script>