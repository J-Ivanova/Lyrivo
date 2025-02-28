<template>
    <div class="reviews-container">
      <h1>Customer Reviews</h1>
      <div class="review-box">
        <div class="review-item" v-for="(review, index) in reviews" :key="index">
          <div class="review-header">
            <img :src="review.avatar" alt="User Avatar" class="avatar" />
            <div class="review-details">
              <h3 class="username">{{ review.username }}</h3>
              <div class="stars">
                <span v-for="n in 5" :key="n" :class="n <= review.rating ? 'filled' : 'empty'">
                  ★
                </span>
              </div>
            </div>
          </div>
          <p class="review-comment">{{ review.comment }}</p>
        </div>
      </div>
  
      <!-- Add a review section -->
      <div class="add-review">
        <h2>Leave a Review</h2>
        <form @submit.prevent="submitReview">
          <div class="form-group">
            <input v-model="newReview.username" type="text" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <textarea v-model="newReview.comment" placeholder="Write your review..." required></textarea>
          </div>
          <div class="form-group stars">
            <label>Rating: </label>
            <select v-model="newReview.rating">
              <option value="1">1 ★</option>
              <option value="2">2 ★</option>
              <option value="3">3 ★</option>
              <option value="4">4 ★</option>
              <option value="5">5 ★</option>
            </select>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Reviews",
    data() {
      return {
        reviews: [
          {
            username: "John Doe",
            comment: "I absolutely love the lessons! The instructors are amazing!",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            username: "Jane Smith",
            comment: "Great experience, learned a lot in a short time!",
            rating: 4,
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            username: "Emily Johnson",
            comment: "Fantastic platform for learning music! Highly recommend.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },
        ],
        newReview: {
          username: "",
          comment: "",
          rating: 5,
        },
      };
    },
    methods: {
      submitReview() {
        if (this.newReview.username && this.newReview.comment) {
          this.reviews.push({
            username: this.newReview.username,
            comment: this.newReview.comment,
            rating: this.newReview.rating,
            avatar: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with dynamic avatar if needed
          });
          this.newReview.username = "";
          this.newReview.comment = "";
          this.newReview.rating = 5;
          alert("Review submitted successfully!");
        } else {
          alert("Please fill in all fields.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .reviews-container {
    max-width: 1200px;
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
  
  .review-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .review-item {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .review-item:hover {
    transform: translateY(-5px);
  }
  
  .review-header {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .review-details {
    display: flex;
    flex-direction: column;
  }
  
  .username {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  
  .stars {
    font-size: 1.2em;
  }
  
  .stars .filled {
    color: #ff9800;
  }
  
  .stars .empty {
    color: #ddd;
  }
  
  .review-comment {
    margin-top: 15px;
    font-size: 1.1em;
    color: #555;
  }
  
  .add-review {
    background: #f9f9f9;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
  }
  
  .add-review h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  form input,
  form textarea,
  form select {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1em;
    outline: none;
  }
  
  form input:focus,
  form textarea:focus,
  form select:focus {
    border-color: #4caf50;
  }
  
  textarea {
    resize: vertical;
    height: 150px;
  }
  
  .submit-btn {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #45a049;
  }
  </style>
  