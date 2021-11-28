<template>
  <div>

    <!-- V-APP-BAR-BELOW  -->

    <v-app-bar dark app color="red darken-4" absolute clipped-left>
     <v-spacer></v-spacer>
      <div v-for="(item, i) in items" :key="i">
        <v-btn text class="mx-1" @click="$router.push(item.url)">
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>