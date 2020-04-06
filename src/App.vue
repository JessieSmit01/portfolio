<template>
  <v-app>
    <v-sheet   width="100%">
    <home></home>
    </v-sheet>
  </v-app>
  
</template>

<script>

import Home from './components/Home';
document.title = "Jessie Smith - Portfolio"
export default {
  name: 'App',

  components: {
    Home,
  },

};
</script>
