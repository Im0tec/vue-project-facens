<template>
  <v-app>
  
   <Toolbar :items="food" />

    <!-- V-SYSTEM-BAR BELOW -->

    <v-system-bar app color="yellow darken-1">
      <v-card-text><center><strong>MC DONALDS, AMO MUITO TUDO ISSO!</strong></center></v-card-text>
    </v-system-bar>

    <!-- V-NAVIGATION-DRAWER, V-CONTENT BELOW AND AND V-APP-BAR BELOW  -->

      <v-navigation-drawer absolute permanent left>
        <v-container></v-container>
        <v-container>
          <v-list-item-content>
            <v-list-item-title style="font-weight: 500; font-size: 150%">
              <strong>MARCOS</strong>
            </v-list-item-title>
            <v-list-item-subtitle>Carteira: R$132,45</v-list-item-subtitle>
          </v-list-item-content>
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

      <v-main class="pa-0">
      <router-view></router-view>
    </v-main>

    <!-- V-FOOTER BELOW  -->

    <v-footer color="yellow darken-1" height="30px" padless>
      <v-row class="text-center" justify="center" >
        <strong> Mc Donalds © </strong>
      </v-row>
    </v-footer>
    
    <!-- V-BOTTOM-NAVIGATION BELOW  -->

    <v-bottom-navigation horizontal align="center" justify="center">
      <v-card-text >
        <strong>Privacidade | Termos e Condições | Trabalhe Conosco</strong>
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
        title: "Home",
        url: "/",
      },
      {
        title: "Lanches",
        url: "/lanches",
      },
      {
        title: "Bebidas",
        url: "/bebidas",
      },
      {
        title: "Mais Pedidos",
        url: "/maispedidos",
      },
    ],
    }),
  }
</script>