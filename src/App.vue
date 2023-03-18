<template>
  <div id="app">
    <Repositories />
  </div>
</template>

<script>
import Repositories from './components/Repositories.vue';
import '@/assets/tailwind.css';
export default {
  name: 'App',
  components: {
    Repositories,
  },
};
</script>
