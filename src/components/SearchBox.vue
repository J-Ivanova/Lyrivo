<template>
    <div class="searchBox">
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
    margin-right: 10px; 
  }
  
  .searchBox input {
    padding: 0px 15px; 
    border: none;
    border-radius: 20px;
    font-size: 16px;
    width: 400px; 
    outline: none;
  }
  
  .searchBox input:focus {
    border-color: #4CAF50;
  }
  </style>
  