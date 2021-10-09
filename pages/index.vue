<template>
  <div class="main-box">
        <div class="container">
            <div class="title-box"> 
                <h2>devfinder</h2>
                <p>LIGHT</p>
            </div>
            <div class="search-box">
                <input type="text" placeholder="Search github user..." v-model="user_name">
                <span @click="fetchUser(user_name)">Search</span>
            </div>
            <div>

                
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {

    data (){
        return {
            user_name: '',
        }
    },

    computed: {
        ...mapGetters ({
            user: 'getUser',
        }),
    },

    methods: {
        ...mapActions (['fetchUser']),
    },
}
</script>

<style lang="sass">
    @import "../assets/scss/home.scss";
</style>
