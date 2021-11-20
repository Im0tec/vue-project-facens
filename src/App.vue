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

    <!-- V-NAVIGATION-DRAWER AND V-CONTENT BELOW  -->

    <v-card height="88vh">
      <v-navigation-drawer absolute permanent left>
        <v-container fill-height>
          <v-card-text>
            <center>
              <strong> v-navigation-drawer </strong>
            </center>
          </v-card-text>
        </v-container>
      </v-navigation-drawer>

      <!-- V-CONTENT BELOW  -->

      <v-container fill-height>
        <v-card-text>
          <center>
            <strong> v-content </strong>
          </center>
        </v-card-text>
      </v-container>
    </v-card>

    <!-- V-FOOTER BELOW  -->

    <v-footer height="30px" padless>
      <v-row class="text-center" justify="center">
        <strong> v-footer </strong>
      </v-row>
    </v-footer>
    
    <!-- V-BOTTOM-NAVIGATION BELOW  -->

    <v-bottom-navigation horizontal align="center" justify="center">
      <v-card-text>
        <strong> v-bottom-navigation </strong>
      </v-card-text>
    </v-bottom-navigation>
  </v-app>

</template>

<script>
  export default {
    data: () => ({
      links: [],
    }),
  }
</script>