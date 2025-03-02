<template>
    <div class="levels-container">
      <h1>Choose Your Level</h1>
      <div class="level-boxes">
        <div class="level-box" @click="selectLevel('beginner')">
          <h3>Beginner</h3>
        </div>
        <div class="level-box" @click="selectLevel('intermediate')">
          <h3>Intermediate</h3>
        </div>
        <div class="level-box" @click="selectLevel('advanced')">
          <h3>Advanced</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Levels",
    methods: {
  selectLevel(level) {
    this.$router.push({ name: "LessonVideo", params: { instrument: this.instrument, level } });
  }
}

  };
  </script>
  
  <style scoped>
  .levels-container {
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin-top: 100px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #333;
    cursor: default;
  }
  
  .level-boxes {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  
  .level-box {
    background: rgba(255, 255, 255, 0.8);
    padding: 40px;
    border-radius: 20px;
    width: 200px;
    text-align: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .level-box h3 {
    font-size: 1.5em;
    color: #333;
    margin: 0;
  }
  
  .level-box:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  }
  
  .level-box:active {
    transform: scale(1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }
  </style>
  