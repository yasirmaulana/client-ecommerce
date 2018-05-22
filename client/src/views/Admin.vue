<template>
  <div class="admin">
    <Item/>
    <AddItem/>
  </div>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Admin.ListItem.vue'
import AddItem from '@/components/Admin.AddItem.vue'

export default {
  name: 'Admin',
  components: {
    Navbar,
    Item,
    AddItem
  }
}
</script>