<template>
  <transition name="fade">
    <div class="heroSection">
      <div class="heroText">
        <h1>Lyrivo</h1>
        <p>Perfecting Your Sound, One Lesson at a Time.</p>
        <router-link to="/login" class="joinNow">Join Now</router-link>
        <router-link to="/about" class="knowMore">Know More</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
/* Fade-in animation */
.fade-enter-active {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Main Section Styling */
.heroSection {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffw800%2Fbackground%2F20230611%2Fpngtree-an-elaborately-detailed-harp-in-a-dark-room-image_2945114.jpg&f=1&nofb=1') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.heroText {
  color: #fff;
  margin-top: 10%;
  font-family: "Poppins", sans-serif;
  animation: fadeIn 1.5s ease-in-out;
}

.heroText p {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.heroText h1 {
  font-size: 6em;
  margin: 0;
  font-weight: 600;
}

.heroText a {
  color: #fff;
  background: transparent;
  border: solid 2px #fff;
  padding: 15px 40px;
  border-radius: 30px;
  margin: 10px;
  font-weight: bold;
  display: inline-block;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.heroText a:hover {
  cursor: pointer;
  background: #fff;
  border: solid 2px #fff;
  color: #333;
  transform: scale(1.1);
}

.joinNow {
  background: rgb(0, 206, 93);
  border: solid 2px rgb(0, 206, 93);
}

.joinNow:hover {
  color: #fff;
  background: rgb(1, 168, 76);
  border: solid 2px rgb(1, 168, 76);
}

.knowMore {
  background: rgba(255, 255, 255, 0.3);
  border: solid 2px rgba(255, 255, 255, 0.5);
}

.knowMore:hover {
  background: rgba(255, 255, 255, 0.7);
  border: solid 2px rgba(255, 255, 255, 0.7);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .heroText h1 {
    font-size: 4em;
  }
  .heroText p {
    font-size: 1.8em;
  }
  .heroText a {
    font-size: 16px;
    padding: 10px 25px;
  }
}
</style>
