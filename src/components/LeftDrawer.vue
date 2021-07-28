<template>
  <v-navigation-drawer
    v-model="LeftDrawer"
    app
    :color="menuColor"
    :width="menuWidth"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-icon>mdi-cube-outline</v-icon>
          <strong>{{ title }}</strong>
        </v-list-item-title>
        <v-list-item-subtitle> </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item>
        <v-list-item-content>
          <v-btn>
            Dashboard
            <v-icon> mdi-home </v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import TopBar from "./TopBar.vue";

export default {
  components: { TopBar },
  data() {
    return {
      LeftDrawer: true,
      TopBar: true,
    };
  },
};
</script>