<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">Go to Home</router-link> 
      |
      <router-link to="/Covid">Covid-19</router-link>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {};
  },
};
</script>
