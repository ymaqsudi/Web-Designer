<template>
  <!-- Dark Mode On Button -->
  <v-tooltip v-if="!$vuetify.theme.dark" bottom>
    <template v-slot:activator="{ on }">
      <v-row>
        <v-col class="text-right">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon>mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-tooltip>

  <!-- Dark Mode Off Button -->
  <v-tooltip v-else bottom>
    <template v-slot:activator="{ on }">
      <v-row>
        <v-col class="text-right">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </v-tooltip>
</template>

<script>
export default {
	methods: {
		darkMode() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
	}
};
</script>

<style>
</style>