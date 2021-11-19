<template>
  <v-app>
    <!-- V-SYSTEM-BAR BELOW  -->

    <v-system-bar app>
      <v-row justify="center">
        <strong> v-system-bar </strong>
      </v-row>
    </v-system-bar>
  
    <!-- V-APP-BAR BELOW  -->

    <v-app-bar app>
      <v-row justify="center">
        <strong> v-app-bar </strong>
      </v-row>
    </v-app-bar>

    <!-- V-NAVIGATION-DRAWER BELOW  -->

    <v-card height="81vh">
      <v-navigation-drawer absolute permanent left>
        <v-container fill-height>
          <v-card-text>
            <center>
              <strong> v-navigation-drawer </strong>
            </center>
          </v-card-text>
        </v-container>
      </v-navigation-drawer>
    </v-card>

    
  </v-app>

</template>

<script>
  export default {
    data: () => ({
      links: [],
    }),
  }
</script>