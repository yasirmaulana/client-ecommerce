<template>
  <div class="container">
    
    <!-- {{ items }} -->
    <h2>List Item</h2>

    <p>control dan monitoring item penjualan:</p>            

    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#AddItem">Add Item</button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Categori</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" v-bind:key="index">
          <td> {{item.name}} </td>
          <td> {{item.price}} </td>
          <td> {{item.category}} </td>
          <td> {{item.stock}} </td>
          <button class="btn btn-default" data-toggle="modal" data-target="#UpdateItem">Update</button>
          <button class="btn btn-default">Delete</button>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
import axios from 'axios'
import AddItem from '@/components/Admin.AddItem.vue'

export default {
  name: "Item",
  data () {
    return {
      name: '',
      price: '',
      category: '',
      stock: '',
      items: null
    }
  },
  components: {
    AddItem
  },
  methods: {
    getList() {
      let url = `http://localhost:3000/items/list`

      axios
        .get(url)
        .then(response => {
          console.log(response)
          this.items = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
