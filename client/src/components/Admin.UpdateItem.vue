<template>
  <div class="modal fade" id="UpdateItem" role="dialog" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Item</h4>
        </div>
        <div class="modal-body form-group text-left">
          <input type="text" placeholder="input item name" class="form-control" v-model="name">
          <input type="text" placeholder="input item price" class="form-control" v-model="price">
          <input type="text" placeholder="input item desc" class="form-control" v-model="description">
          <select class="form-control" v-model="category">
            <option disabled value="">Please select one</option>
            <option>pepakuro</option>
            <option>paper avatar</option>
            <option>paper b</option>
            <option>paper c</option>
          </select>
          <input type="text" placeholder="input item stock" class="form-control" v-model="stock">
          <input type="file" placeholder="image" id="image">
          <!-- <input type="text" class="form-control" v-model="weight"> -->
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-default" data-dismiss="modal" @click="updateitem">Update</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "UpdateItem",
  data () {
    return {
      name: '',
      price: '',
      description: '',
      category: '',
      stock: '',
      // weight: ''
    }
  },
  methods: {
    updateitem () {
      let fileInput = document.querySelector('#image');
      // console.log(fileInput)

      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('description', this.description)
      formData.append('category', this.category)
      formData.append('stock', this.stock)
      formData.append('image', fileInput.files[0])

      let url = `http://localhost:3000/items/updateitem`

      axios
        .put(url, formData)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
