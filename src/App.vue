<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">Go to Home</router-link> 
      <span class="mx-5">|</span>
      <router-link to="/Covid">Covid-19</router-link>
      <span class="mx-5">|</span>
      <router-link to="/Form">Form</router-link>
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
