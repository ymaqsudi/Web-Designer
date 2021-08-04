<template>
	<div class="text-right">
		<v-btn
			color="#585858"
			fab
			small
			dark
			@click="SettingsDrawer = !SettingsDrawer"
		>
			<v-icon>mdi-cog-outline</v-icon>
		</v-btn>

		<v-navigation-drawer v-model="SettingsDrawer" clipped right app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						<v-icon>mdi-cog-outline</v-icon>
						<strong>Settings</strong>
					</v-list-item-title>
					<v-list-item-subtitle></v-list-item-subtitle>
				</v-list-item-content>
				<v-icon @click="SettingsDrawer = !SettingsDrawer" right color="blue"
					>mdi-check-bold</v-icon
				>
				<v-icon @click="SettingsDrawer = !SettingsDrawer" right color="red"
					>mdi-close</v-icon
				>
			</v-list-item>

			<v-divider></v-divider>

			<!-- EXPANSION PANNELS FOR SETTINGS -->

			<v-expansion-panels>
				<!-- App Settings Expansion Panel -->
				<v-expansion-panel>
					<v-expansion-panel-header> App Settings </v-expansion-panel-header>
					<v-expansion-panel-content>
						<!--Application Name Text Field -->
						<span><strong>Application Name</strong></span>
						<v-text-field
							placeholder="Prodeo Designer"
							outlined
							v-model="appTitle"
							append-icon="mdi-plus"
							@change="$store.commit('changeTitle', appTitle)"
						></v-text-field>

						<!--Select Field Router Animation -->
						<span><strong>Router Animation</strong></span>
						<v-select outlined></v-select>
						<!--Select Field Internationalization -->
						<span><strong>Internationalization</strong></span>
						<v-select outlined> </v-select>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<!-- Layout Settings Expansion Panel -->
				<v-expansion-panel>
					<v-expansion-panel-header> Layout Settings </v-expansion-panel-header>
					<v-expansion-panel-content>
						<!-- Visual Settings Radio Buttons -->
						<v-radio-group column>
							<v-radio
								label="Fluent (System Default Font)"
								value="radio-1"
							></v-radio>
							<v-radio label="Clean (Mukta Font)" value="radio-2"></v-radio>
							<v-radio label="Air (Source Sans Font)" value="radio-3"></v-radio>
						</v-radio-group>
						<!-- Various Switch Buttons-->
						<v-switch
							inset
							label="Dark Theme"
							@click="$store.commit('darkMode')"
						></v-switch>
						<v-switch inset label="Context Max-Width"></v-switch>
						<v-switch inset label="Layout Max-Width"></v-switch>
						<v-switch inset label="Layout Gray Bg"></v-switch>
						<v-switch inset label="Card Squared Borders"></v-switch>
						<v-switch inset label="Card Shadow"></v-switch>
						<v-switch inset label="Card Borderless"></v-switch>
						<v-switch inset label="Auth Layout Topbar"></v-switch>
						<v-switch inset label="Auth Layout Bg"></v-switch>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-header> Menu Settings </v-expansion-panel-header>
					<v-expansion-panel-content>
						<!-- Menu Variant -->
						<span><strong>Menu Variant</strong></span>
						<v-radio-group column>
							<v-radio label="Classic" value="variantRadio1"></v-radio>
							<v-radio label="None" value="variantRadio2"></v-radio>
							<v-radio label="Flyout" value="variantRadio3"></v-radio>
							<v-radio label="Simply" value="variantRadio4"></v-radio>
						</v-radio-group>
						<!-- Menu Layout Type -->
						<span><strong>Menu Layout Type</strong></span>
						<v-radio-group row>
							<v-radio label="Right" value="layoutRadio1"></v-radio>
							<v-radio label="Left" value="layoutRadio2"></v-radio>
						</v-radio-group>
						<!-- Assorted Remaining Buttons-->
						<span
							><strong>Menu Color<br /></strong
						></span>
						<v-btn x-small icon outlined
							><v-icon>mdi-circl-outline</v-icon></v-btn
						>
						<v-btn
							x-small
							icon
							outlined
							class="gray--text"
							
							><v-icon>mdi-circle</v-icon></v-btn
						>
						<v-btn
							x-small
							icon
							outlined
							class="black--text"
							
							><v-icon>mdi-circle</v-icon></v-btn
						>
						<v-btn
							x-small
							icon
							outlined
							class="blue--text"
							
							><v-icon>mdi-circle</v-icon></v-btn
						><br />
						<span
							><strong>Menu Collapsed<br /></strong>
						</span>
						<v-switch inset label=""></v-switch>
						<span><strong>Menu Unfixed</strong></span>
						<v-switch inset label=""></v-switch>
						<span><strong>Menu Shadow</strong></span>
						<v-switch inset label=""></v-switch>
						<span><strong>Menu Width</strong></span>
						<!--Slider Shit :P -->
						<v-slider
							:tick-labels="ticksLabels"
							max="330"
							min="0"
							@change="menuWidth = ticksLabels[value]"
						>
						</v-slider>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<!-- TOPBAR SETTINGS -->
				<v-expansion-panel>
					<v-expansion-panel-header> Topbar Settings </v-expansion-panel-header>

					<v-expansion-panel-content>
						<!-- CHOOSE TOPBAR VARIANT RADIO BUTTON -->
						<span><strong>Topbar Variant</strong></span>
						<v-radio-group row mandatory>
							<v-radio
								label="Variant 1"
								value="radio-1"
								@change="TopBar = true"
							></v-radio>
							<v-radio
								label="None"
								value="radioNone"
								@change="TopBar = false"
							></v-radio>
						</v-radio-group>

						<!-- TOPBAR SEPARATED SWITCH -->
						<v-switch
							label="Topbar Separated"
							color="red"
							value="red"
							hide-details
							inset
						></v-switch>

						<!-- TOPBAR FIXED SWITCH -->
						<v-switch
							label="Topbar Fixed"
							color="red"
							value="red"
							hide-details
							inset
						></v-switch>

						<!-- TOPBAR GRAY BG SWITCH -->
						<v-switch
							label="Topbar Gray BG"
							color="red"
							value="red"
							hide-details
							inset
						></v-switch>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<!-- BREADCRUMBS SETTINGS -->
				<v-expansion-panel>
					<v-expansion-panel-header>
						Breadcrumbs Settings
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<!-- CHOOSE BREADCRUMBS VARIANT RADIO BUTTON -->
						<span><strong>Breadcrumbs Variant</strong></span>
						<v-radio-group row>
							<v-radio label="Variant 1" value="radio-1"></v-radio>
							<v-radio label="Variant 2" value="radio-2"></v-radio>
							<v-radio label="None" value="radio-3"></v-radio>
						</v-radio-group>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<!-- FOOTER SETTINGS -->
				<v-expansion-panel>
					<v-expansion-panel-header> Footer Settings </v-expansion-panel-header>
					<v-expansion-panel-content>
						<!-- CHOOSE FOOTER VARIANT RADIO BUTTON -->
						<span><strong>Breadcrumbs Variant</strong></span>
						<v-radio-group row mandatory>
							<v-radio
								label="Variant 1"
								value="radio-1"
								@change="
									$store.commit('bar1On');
									$store.commit('bar2Off');
									$store.commit('bar3Off');
								"
							></v-radio>
							<v-radio
								label="Variant 2"
								value="radio-2"
								@change="
									$store.commit('bar1Off');
									$store.commit('bar2On');
									$store.commit('bar3Off');
								"
							></v-radio>
							<v-radio
								label="Variant 3"
								value="radio-3"
								@change="
									$store.commit('bar1Of');
									$store.commit('bar2Off');
									$store.commit('bar3On');
								"
							></v-radio>

							<v-radio
								label="None"
								value="radio-4"
								@click="
									$store.commit('bar1Off');
									$store.commit('bar2Off');
									$store.commit('bar3Off');
								"
							></v-radio>
						</v-radio-group>
						<v-textarea
							v-show="$store.state.bar3Toggle"
							solo
							placeholder="Company Statement: ~70 words gives best results"
							v-model="description"
							@change="$store.commit('changeDescription', description)"
						></v-textarea>

						

					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			SettingsDrawer: false,
			ticksLabels: 0,
			appTitle: "",
			description: ""
		};
	},
};
</script>

<style></style>
