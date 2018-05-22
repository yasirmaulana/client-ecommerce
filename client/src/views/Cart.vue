<template>
  <div class="cart">
    <Navbar/>
    <div class="container">
      <h1>Shopping Cart</h1><hr>
      <table class="table table-striped table-hover table-bordered">
        <tbody>
            <tr>
              <th>Item</th>
              <th>QTY</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
            <tr>
              <td>Awesome Product</td>
              <td>1 <a href="#">X</a></td>
              <td>£250.00</td>
              <td>£250.00</td>
            </tr>
            <tr>
              <th colspan="3"><span class="pull-right">Sub Total</span></th>
              <th>£250.00</th>
            </tr>
            <tr>
              <th colspan="3"><span class="pull-right">VAT 20%</span></th>
              <th>£50.00</th>
            </tr>
            <tr>
              <th colspan="3"><span class="pull-right">Total</span></th>
              <th>£300.00</th>
            </tr>
            <tr>
              <td>
                <router-link class="btn btn-primary" to="/">Continue Shopping</router-link>
              </td>
              <td colspan="3"><a href="#" class="pull-right btn btn-success">Checkout</a></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'cart',
  components: {
    Navbar
  },
  // computed: {
  //   items () {
  //     return this.$store.state.items
  //   },
  //   cart () {
  //     return this.$store.state.cart
  //   }
  // }
}
</script>
