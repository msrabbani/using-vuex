<template lang="html">
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for ="productz in products">
        <span class="name">{{productz.name}}</span>
        <span class="price">Rp.{{productz.price}}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(500)">Reduce Price</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    saleProducts () {
    },
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    ...mapActions([
      'reducePrice'
    ])

    // reducePrice (amount) {
      // return this.$store.state.products.forEach(product => {
      //   product.price -= 1000
      // })

      // this.$store.commit('reducePrice')

      // this.$store.dispatch('reducePrice', amount) // dispatch untuk memanggil method actions di store
    // }
  }
}
</script>

<style lang="css">
body{
  font-family: Ubuntu;
  color: #555;
}

#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
