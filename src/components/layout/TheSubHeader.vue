<template>
  <section>
    <nav>
      <div>
        <div @click="toggleSideBar" class="menu">
          <div class="menubar"></div>
          <div class="menubar2"></div>
          <div class="menubar"></div>
        </div>
        <the-side-bar :show="showSideBar" @close="closeSideMenu"></the-side-bar>
      </div>
      <div><router-link to="/feedbacklist"><i class="gg-bell"></i></router-link></div>
    </nav>
  </section>
</template>

<script>
import TheSideBar from "./TheSideBar.vue";

export default {
  components: {
    TheSideBar,
  },
  data() {
    return {
      showSideBar: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSideBar = true;
    },
    closeSideMenu() {
      this.showSideBar = false;
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

section nav {
  width: 95%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
    cursor: pointer;
}

.menubar {
  width: 35px;
  height: 2px;
  background-color: grey;
  margin: 6px 0;
}

.menubar2 {
  width: 25px;
  height: 2px;
  background-color: grey;
  margin: 6px 0;
}

.gg-bell,
.gg-bell::before {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
}
.gg-bell {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    border: 2px solid grey;
    border-bottom: 0;
    width: 14px;
    height: 14px
}
.gg-bell::after,
.gg-bell::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
}
.gg-bell::before {
    background: grey;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 3px
}
.gg-bell::after {
    border-radius: 3px;
    width: 16px;
    height: 10px;
    border: 6px solid transparent;
    border-top: 1px solid transparent;
    box-shadow:
        inset 0 0 0 4px grey,
        0 -2px 0 0 grey;
    top: 14px;
    left: -3px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
}
</style>