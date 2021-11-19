<template>
  <v-app>
    <!-- V-SYSTEM-BAR BELOW  -->

    <v-system-bar app>
      <v-row justify="center">
        <strong>v-system-bar</strong>
      </v-row>
    </v-system-bar>
  
    <!-- V-APP-BAR BELOW  -->

    <v-app-bar app>
      <v-row justify="center">
        <strong>v-app-bar</strong>
      </v-row>
    </v-app-bar>
    
  </v-app>

</template>

<script>
  export default {
    data: () => ({
      links: [],
    }),
  }
</script>