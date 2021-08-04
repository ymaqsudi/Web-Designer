<template>
	<v-footer dark padless v-show="BottomBar3" app absolute fixed>
      <v-card flat tile class="indigo lighten-1 white--text text-center" fixed>

        <v-card-text class="white--text pt-0">
          {{this.$store.state.companyDescription}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>{{ $store.state.title }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  data() {
    return {
      BottomBar3: true,
    }
  }
}
</script>