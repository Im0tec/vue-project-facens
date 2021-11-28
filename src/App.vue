<template>
  <v-app>
  
   <Toolbar :items="food" />

    <!-- V-SYSTEM-BAR BELOW -->

    <!-- System Bar -->
    <v-system-bar app color="yellow darken-1">
      <v-card-text><center><strong>MC DONALDS, AMO MUITO TUDO ISSO!</strong></center></v-card-text>
    </v-system-bar>

    <!-- V-NAVIGATION-DRAWER, V-CONTENT BELOW AND AND V-APP-BAR BELOW  -->

    <v-card height="90vh">
      <v-navigation-drawer absolute permanent left>
        <v-container>
        </v-container>
         <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="foodselected">
          <v-list-item
            v-for="item in food"
            :key="item.title"
            link
            @click="$router.push(item.url)"
          >

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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

    <v-footer color="yellow darken-1" height="30px" padless>
      <v-row class="text-center" justify="center" >
        <strong> Mc Donalds ™ </strong>
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
import Toolbar from "@/components/Toolbar.vue";
  export default {
    name: "App",
    components:{
      Toolbar,
    },
    data: () => ({
     food: [
      {
        favorite: true,
        title: "Home",
        url: "/",
      },
      {
        favorite: true,
        title: "Lanches",
        url: "/lanches",
      },
      {
        favorite: false,
        title: "Bebidas",
        url: "/bebidas",
      },
      {
        favorite: true,
        title: "Mais Pedidos",
        url: "/maispedidos",
      },
    ],
    foodselected: 0,
    selectedBottombarItem: 0,
    }),
  }
</script>