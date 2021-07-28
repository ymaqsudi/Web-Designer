<template>
  <v-app-bar color="primary" dense dark clipped-right app v-model="TopBar">
    <v-app-bar-nav-icon @click="LeftDrawer = !LeftDrawer"></v-app-bar-nav-icon>

    <v-btn icon fab>
      <v-icon>mdi-star</v-icon>
    </v-btn>

    <v-btn icon fab class="ml-9">
      <v-icon left>mdi-folder</v-icon>
      <span>Issues</span>
    </v-btn>

    <v-btn icon fab class="ml-15">
      <v-icon left>mdi-file-plus-outline</v-icon>
      Projects
    </v-btn>

    <v-text-field
      class="closed mt-7 ml-8"
      placeholder="Search"
      filled
      dense
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-btn icon fab>
      <v-icon>mdi-flag-variant</v-icon>
    </v-btn>

    <v-btn icon fab>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn icon fab>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon fab>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script>
import LeftDrawer from "./LeftDrawer.vue"

export default {
  components: { LeftDrawer },

  data() {
    return {
      TopBar: true,
      LeftDrawer: true,
    };
  },
};
</script>
