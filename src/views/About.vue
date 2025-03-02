<template>
  <div>
    <NavBar />
    <div class="aboutSection">
      <div class="aboutContent">
        <h1>Our Story</h1>
        <p>
          At Lyrivo, we believe in the transformative power of music. Our mission is to provide high-quality lessons and resources to help you unlock your musical potential. Whether you're a beginner or a seasoned pro, we're here to guide and inspire you every step of the way.
        </p>
        <div class="aboutCards">
          <div class="card">
            <h3>Our Mission</h3>
            <p>Empowering individuals to explore their musical creativity and reach their full potential through personalized lessons.</p>
          </div>
          <div class="card">
            <h3>Our Vision</h3>
            <p>Creating a community of passionate musicians, learning, growing, and supporting each other to create music that moves the world.</p>
          </div>
          <div class="card">
            <h3>Our Values</h3>
            <p>We value dedication, creativity, and the joy of learning. We are committed to providing a supportive environment for everyone.</p>
          </div>
        </div>
        <button class="learnMore">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AboutPage",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.aboutSection {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  padding: 20px;
}

.aboutContent {
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.aboutContent h1 {
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.aboutContent p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.8;
}

.aboutCards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: #e9f7f5;
  padding: 30px;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card h3 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 15px;
}

.card p {
  font-size: 1.1rem;
  color: #666;
}

button.learnMore {
  background: rgb(0, 206, 93);
  color: white;
  border: none;
  padding: 15px 35px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button.learnMore:hover {
  background: rgb(1, 168, 76);
  transform: scale(1.05);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
