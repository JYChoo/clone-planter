<template>
    <the-header v-if="!isLogin"></the-header>
    <the-sub-header v-if="!isLogin"></the-sub-header>
    <div :class="getClass">
      <router-view></router-view>
    </div>
    <the-nav-bar v-if="isMobile && !isLogin"></the-nav-bar>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheNavBar from './components/layout/TheNavBar.vue';
import TheSubHeader from './components/layout/TheSubHeader.vue';

export default {
  components: {
    TheHeader,
    TheSubHeader,
    TheNavBar
  },

  data() {
    return{
      isMobile: false,
    }
  },

  beforeUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  created() {
    this.$store.dispatch('tryLogin');
  },

  computed: {
    isLogin(){
      return this.$route.path == "/login"
    },
    getClass(){
      return this.isLogin ? "login" : "content";
    }
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    }
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #cccccc;
}

.content {
  margin: auto;
  width: 95%;
  padding-bottom: 50px;
}

.login {
  width: 100%;
}
</style>