<template>
    <div class="faqs-container">
      <h1>Frequently Asked Questions</h1>
      
      <div class="faq-box">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{'active': faq.open}"
        >
          <div class="faq-question" @click="toggleFAQ(index)">
            <h3>{{ faq.question }}</h3>
            <span v-if="faq.open">▼</span>
            <span v-else>▲</span>
          </div>
          <div v-if="faq.open" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQs",
    data() {
      return {
        faqs: [
          {
            question: "What instruments do you offer lessons for?",
            answer: "We offer lessons for guitar, piano, drums, and more. Please check the lessons section for more information.",
            open: false,
          },
          {
            question: "How can I sign up for a lesson?",
            answer: "You can sign up for a lesson through our 'Sign Up' section. It's quick and easy!",
            open: false,
          },
          {
            question: "What is the duration of each lesson?",
            answer: "Each lesson is typically 1 hour long. However, the duration can be customized based on your needs.",
            open: false,
          },
          {
            question: "Can I schedule lessons at my convenience?",
            answer: "Yes, we offer flexible scheduling to accommodate your availability. You can book a lesson at any time via our platform.",
            open: false,
          },
          {
            question: "Do I need any special equipment for my lessons?",
            answer: "For most lessons, you will need the instrument you're learning to play. For online lessons, a computer or mobile device with a stable internet connection is required.",
            open: false,
          },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
  .faqs-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    font-family: "Poppins", sans-serif;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5em;
    color: #333;
    margin-bottom: 40px;
  }
  
  .faq-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .faq-item {
    background: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }
  
  .faq-item.active {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
  }
  
  .faq-question span {
    font-size: 1.5em;
  }
  
  .faq-answer {
    margin-top: 15px;
    font-size: 1.1em;
    color: #555;
    padding-left: 20px;
  }
  
  .faq-answer p {
    margin: 0;
  }
  </style>
  