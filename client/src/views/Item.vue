<template>
    <div>
      <Navbar/>
      <div class="container">
        <Card/>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Card,
    Navbar
  }
}
</script>
 