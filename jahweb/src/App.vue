<script setup>
import { RouterLink } from 'vue-router'

import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Media from './views/MediaView.vue'
import Shop from './views/ShopView.vue'
import Contact from './views/ContactView.vue'
</script>

<template>
  <header>
    <img 
      alt="logo" class="logo" 
      src="@/assets/images/face.svg"
      width="125" height="125" 
    />

    <div class="wrapper">
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/media">Media</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/dm">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <Home />
  <About />
  <Media />
  <Shop />
  <Contact />  

  <footer>
    <p>footer</p>
  </footer>

</template>

<style scoped>

</style>
