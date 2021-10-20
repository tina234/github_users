<template>
  <div class="main-box">
        <div class="container">
            <div class="title-box"> 
                <h2>devfinder</h2>
                <p>LIGHT<fa :icon="['fas','sun']"/></p>
            </div>
            <div class="search-box">
                <input type="text" placeholder="Search github user..." v-model="user_name" @keyup.enter="fetchUser(user_name)">
                <span @click="fetchUser(user_name)">Search</span>
            </div>
            <div class="user-data-box" v-if="Object.keys(user).length > 0">
                <div class="img-box">
                    <img :src="user.avatar_url" alt="">
                </div>
                <div class="main-info-box">
                    <div class="first-section">
                        <div>
                            <h2>{{ user.login }}</h2>
                            <a :href="user.html_url" target="_blank" class="hashtag">@{{user.login.toLowerCase() }}</a>
                            <p v-if="user.bio === null">This profile has no bio</p>
                        </div>
                        <div  class="joined"><p>Joined {{ user.created_at | formatDate }}</p></div>
                    </div> 

                    <div class="second-section">
                        <p>Repos <span>{{ user.public_repos }}</span></p>
                        <p>Followers <span>{{ user.followers }}</span></p>
                        <p>Following <span>{{ user.following }}</span></p>
                    </div>
                </div>
            </div>
            <!--<i class="fas fa-sun"></i> -->
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {

    data (){
        return {
            user_name: '',
            date: new Date(),
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
