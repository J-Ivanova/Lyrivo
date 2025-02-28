<template>
    <div class="searchBox">
      <!-- Search Icon in front of the input field -->
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Search..." />
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBox",
  };
  </script>
  
  <style scoped>
  .searchBox {
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: #fff;
    padding: 5px;
  }
  
  .searchBox i {
    color: #888;
    font-size: 18px;
    margin-right: 10px; /* Adds space between the icon and the input */
  }
  
  .searchBox input {
    padding: 0px 15px; /* Adjusted padding to keep the input not too thick */
    border: none;
    border-radius: 20px;
    font-size: 16px;
    width: 400px; /* Increased the width for a longer search box */
    outline: none;
  }
  
  .searchBox input:focus {
    border-color: #4CAF50; /* Optional: Add a green border when the input is focused */
  }
  </style>
  