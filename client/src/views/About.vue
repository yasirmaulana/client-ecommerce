<template>
  <div class="about">
    <Navbar/>
    <Header/>
    <h1>ini about</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar
  }
}
</script>