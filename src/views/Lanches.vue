<template>
  <v-content style="background-color: #3; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
        <center><h1 style="color: black">Lanches</h1></center>
        <v-divider class="background-color: black mb-4"></v-divider>

        <v-row>
          <v-col v-for="(food, l) in lanches" :key="l" cols="3">
            <Food :food="food" />
          <v-card-actions>
            <v-btn outlined rounded text v-if="food.quantidade >= 1" @click="comprar(food.id)"> Comprar </v-btn>
            <v-btn outlined rounded text v-else > Indisponivel</v-btn>
          </v-card-actions>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Food from "@/components/Food.vue";
export default {
  components: {
    Food,
  },
  computed: {
    foods() {
      return this.$store.state.foods;
    },
    lanches() {
      return this.foods.filter((food) => food.lanche);
    },
  },
  methods: {
    comprar (id) {
      this.$store.commit('reduzirQuantidade', id)
    },
  },
};
</script>