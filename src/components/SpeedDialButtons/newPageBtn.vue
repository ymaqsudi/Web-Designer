<template>
	<div class="text-right">
		<v-btn color="green" fab small dark @click="dialog = !dialog">
			<v-icon>mdi-text-box-plus-outline</v-icon>
		</v-btn>

		<v-dialog width="980" height="1" v-model="dialog" persistent app>
			<v-card>
				<v-card-title class="text-h5 grey lighten-2" height="25">
					<v-icon>mdi-3-lines</v-icon>
					Menu Items and App Routes
					<v-card-subtitle col>
						Use the form below to configure routing and menu items
					</v-card-subtitle>
				</v-card-title>

				<v-card-text>
					<br />
					<draggable :list="this.$store.state.buttonsArray">
						<div
							v-for="element in this.$store.state.buttonsArray"
							v-bind:key="element.id"
						>
							<span v-if="element.type == 'button'" class="title mb-3">
								<v-container row>
									<v-btn class="blue"
										><v-icon>{{ element.name }}</v-icon></v-btn
									>

									<v-form class="mx-5">
										<v-text-field
											v-model="pageNameValue"
											item-value="id"
											outlined
											small
											dense
											class="shrink"
											:placeholder="element.placeholder"
											single-line
										></v-text-field>
									</v-form>

									<v-form class="mr-5">
										<v-text-field
											outlined
											small
											dense
											class="shrink"
											:placeholder="'/' + element.placeholder"
											single-line
										></v-text-field>
									</v-form>
									<div class="mr-5">
										<v-select
											dense
											outlined
											fixed
											class="shrink"
											:items="$store.state.iconSelectionItems"
										>
											<template slot="item" slot-scope="data">
												<v-icon>mdi-home</v-icon> {{ data.iconSelectionItems }}
											</template>
										</v-select>
									</div>

									<span v-if="element.buttonCheck == true">
										<v-btn
											fab
											small
											color="red"
											@click.stop="removePage(element.id)"
										>
											<v-icon>mdi-cancel</v-icon>
										</v-btn>
									</span>
									<strong> {{ element.entryPageTest }} </strong>
								</v-container>
							</span>
							<!-- Category Code -->
							<span v-else-if="element.type == 'category'">
								<v-container row>
									<v-btn class="black"
										><v-icon color="white">{{ element.name }}</v-icon></v-btn
									>

									<v-form class="mx-5">
										<v-text-field
											outlined
											small
											dense
											class="shrink"
											:placeholder="element.placeholder"
											single-line
										></v-text-field>
									</v-form>

									<span v-if="element.buttonCheck == true">
										<v-btn
											fab
											small
											color="red"
											@click.stop="removePage(element.id)"
										>
											<v-icon>mdi-cancel</v-icon>
										</v-btn>
									</span>
								</v-container>
							</span>
						</div>
					</draggable>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</v-card-text>
				<v-card-actions>
					<v-btn color="green" text outlined @click="dialog = false">
						Save Changes
					</v-btn>
					<v-btn color="red" text outlined @click="dialog = false">
						Cancel
					</v-btn>
					<v-spacer></v-spacer>

					<v-btn color="blue" text outlined @click="addPage">
						Add New Page
					</v-btn>
					<v-btn color="blue" text outlined @click="addCategory">
						Add New Category
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import Draggable from "vuedraggable";
export default {
	components: {
		Draggable,
	},
	created() {
		this.combinedArray = [
			...this.$store.state.buttonsArray,
			...this.formsArray,
		];
	},

	data() {
		return {
			dialog: false,
			pageNameValue: "",
		};
	},
	methods: {
		addPage() {
			let newPage = {
				name: "mdi-chevron-double-right",
				id: Date.now(),
				type: "button",
				formTest: "example3",
				entryPageTest: "",
				placeholder: "",
				buttonCheck: true,
				leftNavName: this.pageNameValue,
			};
			this.$store.state.buttonsArray.push(newPage);
		},

		addCategory() {
			let newCategory = {
				name: "mdi-chevron-double-right",
				id: Date.now(),
				type: "category",
				formTest: "example4",
				entryPageTest: "",
				placeholder: "",
				buttonCheck: true,
			};
			this.$store.state.buttonsArray.push(newCategory);
			console.log("going through ma'am");
		},
		removePage(id) {
			let remove = this.$store.state.buttonsArray.filter(
				(remove) => remove.id == id
			)[0];
			this.$store.state.buttonsArray = this.$store.state.buttonsArray.filter(
				(remove) => remove.id !== id
			);
		},
	},
};
</script>
