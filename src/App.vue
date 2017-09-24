<template>
  <div id="app">
    <product-list-one v-bind:products="products"/>
    <product-list-two v-bind:products="products"/>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {
      products: [
        {name: 'Kupling', price: 20},
        {name: 'Bak Perseneling', price: 40},
        {name: 'Busi', price: 60},
        {name: 'CDI Vespa', price: 80},
        {name: 'Lantai Vespa', price: 100}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
