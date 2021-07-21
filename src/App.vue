<template>
	<v-app id="inspire">

	  <!-- app bar -->

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

      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->


      <v-spacer></v-spacer>
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

		<!-- RIGHT PANNEL -->
  
	

	
		

		<v-main>
			<router-view></router-view>

			<!-- Dark Mode Toggle -->
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
			

      <!--Open Page Button-->
          <div class="text-right">
            <v-btn color="secondary" fab small dark @click="openPage">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>

          <!--Unused Penil Button-->
          <div class="text-right">
            <v-btn color="primary" fab small dark>
              <v-icon>mdi-pencil</v-icon>
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
		items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
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
