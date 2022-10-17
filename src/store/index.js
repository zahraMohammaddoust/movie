import { createStore } from 'vuex';

export default createStore({
    state: {
        id: '',
    },
    mutations: {
        setId(state, id) {
            state.id = id;
        }
    },
    actions: {},
    modules: {},
    getters: {
        id(state) {
            return state.id;
        }
    }

})





