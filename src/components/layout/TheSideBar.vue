<template>
  <teleport to="body">
    <div class="backdrop" @click="closeSideBar" v-if="show"></div>
    <transition name="sideMenu">
    <ul v-if="show">
      <li @click="closeSideBar">&larr;</li>
      <li @click="closeSideBar"><router-link to="/main">Home</router-link></li>
      <li @click="closeSideBar"><router-link to="/aboutus">About Us</router-link></li>
      <li @click="closeSideBar"><router-link to="/privacy">Privacy Policis</router-link></li>
      <li @click="logOut">Log Out</li>
    </ul>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ['show'],
  emits: ['close'],
  methods: {
    closeSideBar(){
      this.$emit('close');
    },
    logOut() {
      this.$store.dispatch('logout');
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped>


a {
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
  position: fixed;
  z-index: 100;
  background-color: white;
  padding: 20px;
  margin: 0;
  top: 0;
  left: 0;
  height: 100vh;
}

li {
  padding: 30px;
  cursor: pointer;  
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.sideMenu-enter-from,
.sideMenu-leave-to {
  transform: translateX(-250px);
}

.sideMenu-enter-to,
.sideMenu-leave-from {
  transform: translateX(0);
}

.sideMenu-enter-active{
  transition: all 0.5s ease-in;
}

.sideMenu-leave-active{
  transition: all 0.5s ease-out;
}
</style>
