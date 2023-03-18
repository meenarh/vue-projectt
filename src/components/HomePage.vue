<template>
  <div class="container">
    <h2>Hi my name is {{ name }}.</h2>

    <p>
      I am a {{ course }} student at {{ school }} School of Frontend Engineering
    </p>

    <router-link to="/repositories">Repositories</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      name: "Ernest Divine",
      school: "AltSchool Africa",
      course: "Frontend Engineering",
    };
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: auto;
  padding: auto;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
  color: white;
  margin: 0;
  padding: 0;
}

p {
  font-size: 1.2rem;
  font-weight: 300;
  color: white;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 12px;
}
</style>
