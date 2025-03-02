<template>
    <div class="contact-container" :style="mainStyle">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <input
          type="text"
          name="name"
          v-model="form.name"
          placeholder="Your Name"
          :style="inputStyle"
          required
        />
        <input
          type="email"
          name="email"
          v-model="form.email"
          placeholder="Your Email"
          :style="inputStyle"
          required
        />
        <textarea
          name="message"
          v-model="form.message"
          placeholder="Your Message"
          :style="textareaStyle"
          required
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          :style="buttonStyle"
          class="submit-button"
        />
      </form>
      <div class="social-links">
        <img src="../assets/google.svg" alt="Contact via Google" />
        <img src="../assets/facebook.svg" alt="Contact via Facebook" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit() {
       
        alert("Message Sent! Thank you for contacting us.");
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      },
    },
    props: {
      mainStyle: String,
      inputStyle: String,
      buttonStyle: String,
      textareaStyle: String,
    },
  };
  </script>
  
  <style scoped>
 
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  
  .contact-container {
    background: rgba(255, 255, 255, 0.4);
    position: absolute;
    top: 10%;
    left: 20%;
    width: 60%;
    text-align: center;
    padding: 5px;
    border-radius: 3rem;
    box-shadow: 0px 0px 8px -5px #000000;
    padding-top: 3%;
    padding-bottom: 5%;
    font-family: "Poppins", sans-serif;
  }
  
  h1 {
    cursor: default;
    user-select: none;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input,
  textarea {
    border-radius: 3rem;
    border: none;
    padding: 10px;
    text-align: center;
    outline: none;
    margin: 10px;
    width: 50%;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  
  textarea {
    height: 150px;
  }
  
  input[type="submit"] {
    background: lightblue;
    cursor: pointer;
  }
  
  input:hover,
  textarea:hover {
    box-shadow: 0px 0px 8px -5px #000000;
  }
  
  input:active,
  textarea:active {
    box-shadow: 0px 0px 8px -5px #000000;
  }
  
  .submit-button {
    width: 60%;
    padding: 15px;
  }
  
  .social-links img {
    height: 2.2rem;
    margin: 10px;
    user-select: none;
  }
  
  .social-links img:hover {
    box-shadow: 0px 0px 8px -5px #000000;
    cursor: pointer;
    border-radius: 200rem;
  }
  </style>
  