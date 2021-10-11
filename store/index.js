import axios from 'axios'

export const state = () => ({
    user: {},
})

export const getters = {
    getUser(state){
        return state.user;
    }
};

export const mutations = {
    saveUser (state, user){
        state.user =  user;
    },
};

export const actions = {
    async fetchUser({commit}, user_name){
       let response = await axios.get('https://api.github.com/users/' + user_name);
       commit('saveUser', response.data);
    }
};