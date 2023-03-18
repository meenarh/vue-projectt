<template>
    <div class="container p-t-md">
      <h1 class="text-center">My Github Repositories</h1>
  
      <div class="row m-t-md">
        <div v-for="repo in repositories" :key="repo.id" class="check">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="repos-title">{{ repo.name }}</h3>
            </div>
            <div class="link-body">
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
//   np
  
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
  <style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
    margin: 0;
    box-sizing: border-box;
   
    }
    /* .row {
        display: flex;
    flex-direction: column;
    width: 210px;
    height: 250px;
    text-align: center;
    background: rgba(60, 164, 96, 0.7);
    color: #fff;
    padding: 20px;
    } */
    .row {
        display: flex;
        flex-wrap: wrap;
    max-height: 75vh;
    justify-content: center;
    margin: 7 20px;
    }

 .check {
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 250px;

    text-align: center;
    background: rgba(34, 37, 35, 0.7);
    color: #d6b3b3;
    padding: 20px;
}

    .p-t-md {
        padding-top: 20px;
    }

    .m-t-md {
        margin-top: 0px;
    }

    .text-center {
        text-align: center;
    }


    .panel-default > .panel-heading {
        color: #fafafa;
        background-color: #bdb0b0;
        border-color: #ddd;
        font-weight: bolder;
    }

    .panel {
        margin-bottom: 20px;
    }

    .panel-heading {
        padding: 10px 15px;
    }

    .repos-title {
        font-size: 16px;
        font-weight: 600;
        display: flex;
    align-items: center;
    justify-content: center;


    }

    .link-body {
        padding: 15px;
        font-size: 16px;
        font-weight: 600;
        display: flex;
    align-items: center;
    justify-content: center;
    }

    .link-body p {
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 600;
        display: flex;
    align-items: center;
    justify-content: center;
    }

    .btn {
        padding: 5px 15px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 0;
}

    .btn-primary {
        background: #deb887;
    color: #000;
    text-decoration: none;
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;

    }

    .btn-primary:hover {
        background-color: #eaf2fb;
        border-color: #192a3c;
    }

</style>