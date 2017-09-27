import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: 'Tali Kupling', price: 5000},
      {name: 'Bak Perseneling', price: 75000},
      {name: 'Busi', price: 20000},
      {name: 'CDI Vespa', price: 150000},
      {name: 'Lantai Vespa', price: 175000}
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '==' + product.name + '==',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => { // asynch task
        context.commit('reducePrice', payload)
      }, 2000) // setelah 2 detik akan memanggil reducePrice
    }
  }

})
