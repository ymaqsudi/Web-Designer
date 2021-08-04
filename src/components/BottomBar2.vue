<template>
  <!-- FOOTER 2 -->
  <v-footer color="primary lighten-1" padless v-show="BottomBar2" app>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>{{ $store.state.title }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      BottomBar2: true,
    }
  }
}
</script>

