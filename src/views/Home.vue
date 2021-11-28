<template>
  <v-content style="background-color: #3; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
       <center><h1 style="color: black">Home</h1></center>
        <v-divider class="background-color: black mb-4"></v-divider>

        <v-row>
          <v-col v-for="(food, f) in foods" :key="f" cols="3">
            <Food :food="food" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Food from "@/components/Food.vue"
  export default {
  components: {
    Food
  },
  computed: {
    foods() {
      return this.$store.state.foods;
    },
  },
};
</script>
