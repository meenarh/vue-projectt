<template>
    <div class="container p-t-md">
      <h1 class="text-center">My Github Repositories</h1>
  
      <div class="row m-t-md">
        <div v-for="repo in repositories" :key="repo.id" class="col-md-4 col-sm-6 col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">{{ repo.name }}</h3>
            </div>
            <div class="panel-body">
              <p>{{ repo.description }}</p>
              <a :href="repo.html_url" class="btn btn-primary" target="_blank">View on Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
//   
  
  export default {
    name: 'Repositories',
    data() {
      return {
        repositories: [],
      };
    },
    mounted() {
      this.loadRepositories();
    },
    methods: {
      async loadRepositories() {
        const { data } = await axios.get('https://api.github.com/users/ernestdivine31/repos');
        this.repositories = data;
      },
    },
  };
  </script>
  