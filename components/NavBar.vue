<template>
    <transition name="slide">
      <header>
        <div class="navBar">
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/lessons">Lessons</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/reviews">Reviews</router-link>
            <router-link to="/faq">FAQ</router-link>
          </nav>
          <SearchBox />
        </div>
      </header>
    </transition>
  </template>
  
  <script>
  import SearchBox from "./SearchBox.vue";
  
  export default {
    name: "NavBar",
    components: {
      SearchBox,
    },
  };
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
  
  .slide-enter-active {
    animation: slideDown 0.8s ease-in-out;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    z-index: 1000;
  }
  
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  nav {
    display: flex;
    gap: 20px;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  nav a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  </style>
  