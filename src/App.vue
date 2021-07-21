<template>
	<v-app id="inspire">

    <v-app-bar
      app
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
		<!-- LEFT PANNEL -->

		<v-navigation-drawer v-model="leftMenu" app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-icon>mdi-cube-outline</v-icon>
						<strong>Left Pannel</strong>
					</v-list-item-title>
					<v-list-item-subtitle> </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
					<v-list-item-content>
						<v-btn>
							{{ item.title }}
							<v-icon> mdi-home </v-icon>
						</v-btn>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- RIGHT PANNEL -->

		<v-navigation-drawer v-model="rightMenu" app right>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-icon>mdi-cube-outline</v-icon>
						<strong>Right Pannel</strong>
					</v-list-item-title>
					<v-list-item-subtitle> </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
					<v-list-item-content>
						<v-btn>
							{{ item.title }}
							<v-icon> mdi-home </v-icon>
						</v-btn>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- app bar -->
		

		<v-main>
			<router-view></router-view>

			<!-- Dark Mode Toggle -->

			<div>
				<!-- Dark Mode On button -->
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
			</div>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		return: {
			dialog: false,
		},
		drawer: null,
		items: [{ title: "Dashboard", icon: "mdi-home", to: "/" }],
	}),
	methods: {
		darkMode() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
	},
};
</script>
