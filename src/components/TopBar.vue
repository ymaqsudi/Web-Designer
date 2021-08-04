<template>
	<div>
		<v-app-bar color="primary" dense dark clipped-right app v-model="TopBar">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

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

		<v-navigation-drawer v-model="drawer" app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-icon color="#00008b">mdi-cube-outline</v-icon>
						<strong>{{ this.$store.state.title }}</strong>
					</v-list-item-title>
					<v-list-item-subtitle> </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item>
					<v-list-item-content>
						<!-- Creating Left Page Buttons Based on Array Values -->
						<div v-for="element in $store.state.buttonsArray" v-bind:key="element.id">
							<span v-if="element.type == 'button'" class="title mb-3">
								<v-btn width="225"
									>{{ element.leftNavName }}<v-icon> mdi-home </v-icon></v-btn
								>
							</span>
							<span v-else-if="element.type == 'category'">
								<v-card dense small flat color="blue" height="55">
									<v-card-title
										class="justify-center white--text text-decoration-underline"
									>
										{{ element.leftNavName }}
									</v-card-title>
									<v-divider color="white"></v-divider>
								</v-card>
							</span>
						</div>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
	components: {
		Draggable,
	},
	created() {
		this.combinedArray = [...this.buttonsArray, ...this.formsArray];
	},
	data: () => ({
		return: {
			topbar: true,
			drawer: true,
			newTitle: ""
		},


	}),
};
</script>
