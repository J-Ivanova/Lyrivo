<template>
    <div class="lesson-video-container">
      <div class="video-wrapper">
        <iframe
          :src="videoUrl"
          frameborder="0"
          allowfullscreen>
        ></iframe>
      </div>
  
      <div class="video-details">
        <h1>{{ lessonTitle }}</h1>
        <p class="description">{{ lessonDescription }}</p>
        <p class="publisher">Published by: <strong>{{ publisher }}</strong></p>
      </div>
      
      <div class="ratings">
        <h2>Rate this Lesson:</h2>
        <div class="stars">
          <span v-for="n in 5" :key="n" @click="rateLesson(n)" :class="{'selected': n <= rating}">★</span>
        </div>
      </div>
      
      <div class="comments">
        <h2>Comments:</h2>
        <textarea v-model="newComment" placeholder="Write a comment..."></textarea>
        <button @click="addComment">Submit</button>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            <strong>{{ comment.username }}</strong>
            <p>{{ comment.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LessonVideo",
    props: ['instrument', 'level'],
    data() {
      return {
        lessonTitle: `Lesson for ${this.instrument.toUpperCase()} - ${this.level.charAt(0).toUpperCase() + this.level.slice(1)}`,
        lessonDescription: "An immersive lesson to take your skills to the next level! Learn from top instructors and improve your techniques.",
        publisher: "John Doe",
        videoUrl: `https://www.youtube.com/embed/${this.getVideoId()}`,
        rating: 0,
        newComment: "",
        comments: []
      };
    },
    methods: {
      getVideoId() {
        const videoMap = {
          guitar: { beginner: "abc123", intermediate: "def456", advanced: "ghi789" },
          piano: { beginner: "jkl123", intermediate: "mno456", advanced: "pqr789" },
          drums: { beginner: "stu123", intermediate: "vwx456", advanced: "yz789" }
        };
        return videoMap[this.instrument]?.[this.level] || "dQw4w9WgXcQ";
      },
      rateLesson(stars) {
        this.rating = stars;
      },
      addComment() {
        if (this.newComment.trim()) {
          this.comments.push({ username: "User123", text: this.newComment });
          this.newComment = "";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .lesson-video-container {
    text-align: center;
    max-width: 1200px;
    margin: auto;
    padding: 30px;
    font-family: "Poppins", sans-serif;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  .video-wrapper {
    margin-bottom: 20px;
  }
  .video-wrapper iframe {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  .video-details {
    margin-top: 20px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  .video-details h1 {
    font-size: 2em;
    color: #333;
  }
  .video-details .description {
    font-size: 1.2em;
    color: #666;
    margin-top: 10px;
  }
  .video-details .publisher {
    font-size: 1em;
    color: #444;
    margin-top: 5px;
  }
  .ratings {
    margin: 20px 0;
  }
  .ratings .stars span {
    font-size: 2.5em;
    cursor: pointer;
    color: gray;
    transition: color 0.3s;
  }
  .ratings .stars .selected {
    color: gold;
  }
  .comments {
    margin-top: 30px;
  }
  .comments textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1.1em;
  }
  .comments button {
    margin-top: 10px;
    padding: 10px 20px;
    background: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    transition: background 0.3s;
  }
  .comments button:hover {
    background: #388E3C;
  }
  .comments ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  .comments li {
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }
  .comments li strong {
    display: block;
    font-size: 1em;
    color: #333;
    margin-bottom: 5px;
  }
  </style>
  