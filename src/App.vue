<template>
	<v-app id="inspire">
		<!-- TOP BAR -->
		<top-bar app></top-bar>

		<!-- FOOTERS -->
		<bottom-bar-1 v-show="$store.state.bar1Toggle" app></bottom-bar-1>
		<bottom-bar-2 v-show="$store.state.bar2Toggle" app></bottom-bar-2>
		<bottom-bar-3 v-show="$store.state.bar3Toggle" app absolute></bottom-bar-3>

		<v-main>
			<router-view></router-view>

			<!-- SPEED DIAL BUTTONS -->

			<new-page-btn fab absolute app></new-page-btn>
			<dark-mode-btn fab absolute app></dark-mode-btn>
			<settings-toggle-btn fab absolute app></settings-toggle-btn>
		</v-main>
	</v-app>
</template>

<script>
import TopBar from "@/components/TopBar";

import BottomBar from "@/components/BottomBar.vue";
import BottomBar2 from "@/components/BottomBar2.vue";
import BottomBar3 from "@/components/BottomBar3.vue";


import newPageBtn from "@/components/SpeedDialButtons/newPageBtn.vue";
import darkModeToggleBtnVue from "@/components/SpeedDialButtons/darkModeToggleBtn.vue";
import settingsToggleBtnVue from "@/components/SpeedDialButtons/settingsToggleBtn.vue";

export default {
	name: "Prodeo Designer",
	components: {
		"top-bar": TopBar,
		"bottom-bar-1": BottomBar,
		"bottom-bar-2" :BottomBar2,
		"bottom-bar-3": BottomBar3,
		"new-page-btn": newPageBtn,
		"dark-mode-btn": darkModeToggleBtnVue,
		"settings-toggle-btn": settingsToggleBtnVue
	},
	data: () => ({
		return: {
			color: "black",
			dialog: true,
		},
	}),
	methods: {},
};
</script>

<style lang="sass">
.closed
  max-width: 45px
</style>
