<template>
  <v-app>
    <v-main>
      <Covid />
    </v-main>
  </v-app>
</template>

<script>
import Covid from './components/covid/Covid.vue'

export default {
  name: 'App',
  components: {
    Covid,
  },
  data() {
    return {};
  },
};
</script>
