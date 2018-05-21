<template>
    <div>
      <Navbar/>
      <!-- <Header/> -->
      <div class="container">
        <Card/>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Header,
    Card,
    Navbar
  }
}
</script>
