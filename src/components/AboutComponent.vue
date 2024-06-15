<template>
    <div class="about">
      <h2>About Us</h2>
      <p>
        Welcome to our tuition center! With over 20 years of experience in teaching, we are dedicated to providing high-quality education to students from class 1 to 12. Our mission is to help students achieve their academic goals and build a strong foundation for their future.
      </p>
      <h3>Our History</h3>
      <p>
        Our tuition center was established with the aim of offering personalized and effective teaching methods to students of all levels. Over the years, we have grown into a well-respected institution known for our commitment to excellence and student success.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Commitment to student success</li>
        <li>High-quality education</li>
        <li>Personalized teaching approach</li>
        <li>Supportive learning environment</li>
        <li>Continuous improvement</li>
      </ul>
      <h3>Meet Our Teacher</h3>
      <div class="teacher">
        <img src="@/assets/vue.svg" alt="Teacher Photo" class="teacher-photo"/>
        <p>
          Our lead teacher, Mrs. Sahi, has over two decades of experience in teaching. She is passionate about education and is dedicated to helping each student reach their full potential. Her teaching methods are innovative and tailored to meet the needs of individual students.
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .about h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .about h3 {
    margin-top: 20px;
  }
  
  .about p {
    margin-bottom: 15px;
  }
  
  .about ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .teacher {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  .teacher-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
  }
  </style>
  