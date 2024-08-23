import {createStore} from 'vuex';
import practice from './Practice'
import cart from './cart'

const store = createStore({
    modules:{
        practice,
        cart
    }
})

export default store;