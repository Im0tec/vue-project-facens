<template>
  <v-card dark>
    <v-img
      height="300px"
      contain
      :src="require(`@/assets/${food.image}`)"
    ></v-img>
    <v-card-title> {{ food.name }} </v-card-title>
    <v-card-text> {{ food.description.substring(0, 100) }}... </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ["food"]
}
</script>