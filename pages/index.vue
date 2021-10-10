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
            <div class="user-data" v-if="Object.keys(user).length > 0">
                <div class="img-box">
                    <img :src="user.avatar_url" alt="">
                </div>
                <div class="main-info-box">
                    <div class="first-section">  
                        <div>
                            <h2>{{ user.login }}</h2>
                            <p>@{{user.login.toLowerCase() }}</p>
                            <p>this profile has no bio</p>
                        </div>
                        <div><p>Joined: {{ user.url.created_at }}</p></div>
                    </div> 
                </div>
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
            user: 'getUser'
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
