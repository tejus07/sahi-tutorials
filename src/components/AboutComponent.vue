<template>
  <div class="about">
    <h2>About Us</h2>
    <p>
      Welcome to Sahi Tutorials, where education meets values and holistic development. Our center is led by Viney Sahi,
      a dedicated and experienced educator with over 20 years of teaching experience and a postgraduate degree. Based in
      Kapurthala, Viney Sahi is committed to nurturing young minds and instilling a love for learning.
    </p>
    <p>
      At Sahi Tutorials, we believe that education goes beyond textbooks. Viney Sahi's teaching philosophy emphasizes
      the importance of moral values and life skills, ensuring that students not only excel academically but also grow
      into responsible and well-rounded individuals.
    </p>
    <p>
      Our approach is unique; we prioritize the completion and thorough understanding of the curriculum over adhering to
      strict time limits. This ensures that each student receives the attention and support they need to succeed. Viney
      Sahi is known for her humility, dedication, and exceptional teaching methods.
    </p>
    <p>
      We offer comprehensive tuition for students from 1st to 10th grade, covering all subjects. Join Sahi Tutorials and
      experience a learning environment where education is a journey of growth, understanding, and character building.
    </p>
    <h3>Our History</h3>
    <p>
      Our tuition center was established with the aim of offering personalized and effective teaching methods to
      students of all levels. Over the years, we have grown into a well-respected institution known for our commitment
      to excellence and student success.
    </p>
    <h3>Our Values</h3>
    <ul>
      <li>Commitment to student success</li>
      <li>High-quality education</li>
      <li>Personalized teaching approach</li>
      <li>Supportive learning environment</li>
      <li>Continuous improvement</li>
    </ul>
    <!-- <h3>Meet Our Teacher</h3>
    <div class="teacher">
      <img src="@/assets/vue.svg" alt="Teacher Photo" class="teacher-photo" />
      <p>
        Our lead teacher, Mrs. Sahi, has over two decades of experience in teaching. She is passionate about education
        and is dedicated to helping each student reach their full potential. Her teaching methods are innovative and
        tailored to meet the needs of individual students.
      </p>
    </div> -->
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #f9f9f9; */
  /* border: 1px solid #ddd; */
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