// store/index.js
import { createStore } from 'vuex';

const store = createStore({

    state() {

        return {

            token: null
        };
    },
    mutations: {

        setToken(state, token) {

            state.token = token;
        },
        clearToken(state) {

            state.token = null;
        }
    }
});

export default store;
