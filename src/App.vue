<template>
	<v-app id="inspire">
		<!-- app bar -->

		<v-app-bar color="primary" dense dark app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-btn icon fab>
				<v-icon>mdi-star</v-icon>
			</v-btn>

			<v-btn icon fab class="ml-6">
				<v-icon>mdi-folder</v-icon>
				Issues
			</v-btn>

			<v-btn icon fab class="ml-12">
				<v-icon>mdi-file-plus-outline</v-icon>
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

		<!-- LEFT PANNEL -->

		<v-navigation-drawer v-model="drawer" app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-icon>mdi-cube-outline</v-icon>
						<strong>Prodeo Designer</strong>
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

		<!-- Right Pannel -->
		<v-navigation-drawer v-model="cat" right app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-icon>mdi-cube-outline</v-icon>
						<strong>Prodeo Designer</strong>
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

		<v-main>
			<router-view></router-view>
			<v-container>
				<v-speed-dial v-model="fab" top right absolute direction="bottom">
					<template #activator>
						<v-btn color="secondary" fab>
							<v-icon v-if="fab">
								mdi-close
							</v-icon>
							<v-icon v-else>
								mdi-plus
							</v-icon>
						</v-btn>
					</template>
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
						<span>Dark Mode On</span>
					</v-tooltip>

					<!-- Dark Mode Off button -->
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
						<span>Dark Mode Off</span>
					</v-tooltip>

					<!--Open Settings Button-->
					<div class="text-right">
						<v-btn color="#585858" fab small dark @click="cat = !cat">
							<v-icon>mdi-cog-outline</v-icon>
						</v-btn>
					</div>

					<!--Unused "Account" Button-->
					<div class="text-right">
						<v-btn color="warning" fab small dark>
							<v-icon>mdi-account-circle</v-icon>
						</v-btn>
					</div>

					<!--Unused Error Button-->
					<div class="text-right">
						<v-btn color="error" fab small dark right>
							<v-icon>mdi-alarm</v-icon>
						</v-btn>
					</div>
				</v-speed-dial>
			</v-container>

			<v-bottom-navigation app>
				<v-btn style="font-size:36px"> Prodeo Designer </v-btn>
			</v-bottom-navigation>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		return: {
			dialog: false,
		},
		drawer: true,
		cat: true,
		items: [
			{ title: "Home", icon: "mdi-home-city" },
			{ title: "My Account", icon: "mdi-account" },
			{ title: "Users", icon: "mdi-account-group-outline" },
		],
		mini: true,
	}),
	methods: {
		darkMode() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
	},
};
</script>

<style lang="sass">
.closed
  max-width: 45px
</style>
