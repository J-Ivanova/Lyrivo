<template>
    <div class="lessons-container">
      <h1>Choose Your Instrument</h1>
      <div class="lesson-boxes">
        <div class="lesson-box" @click="selectInstrument('guitar')">
          <i class="fas fa-guitar"></i>
          <h3>Guitar</h3>
        </div>
        <div class="lesson-box" @click="selectInstrument('piano')">
          <i class="fas fa-piano"></i>
          <h3>Piano</h3>
        </div>
        <div class="lesson-box" @click="selectInstrument('drums')">
          <i class="fas fa-drum"></i>
          <h3>Drums</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lessons",
    methods: {
      selectInstrument(instrument) {
        alert(`You selected the ${instrument} lessons!`);
        
      },
    },
  };
  </script>
  
  <style scoped>
  
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  
  .lessons-container {
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #333;
    cursor: default;
  }
  
  .lesson-boxes {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  
  .lesson-box {
    background: rgba(255, 255, 255, 0.8);
    padding: 40px;
    border-radius: 20px;
    width: 200px;
    text-align: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .lesson-box i {
    font-size: 3em;
    color: #4CAF50;
    margin-bottom: 20px;
  }
  
  .lesson-box h3 {
    font-size: 1.5em;
    color: #333;
    margin: 0;
  }
  
  .lesson-box:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  }
  
  .lesson-box:active {
    transform: scale(1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }
  </style>
  