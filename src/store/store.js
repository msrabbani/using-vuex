import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Kupling', price: 20},
      {name: 'Bak Perseneling', price: 40},
      {name: 'Busi', price: 60},
      {name: 'CDI Vespa', price: 80},
      {name: 'Lantai Vespa', price: 100}
    ]
  }
})
