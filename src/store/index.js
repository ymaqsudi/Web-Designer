import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		title: "Prodeo",
		companyDescription:
			"hasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.Mauris cursus commodo interdum. Praesent ut risus eget metus luctusaccumsan id ultrices nunc. Sed at orci sed massa consectetur dignissima sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehiculalacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursusiaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementumtempor vel ut orci. Orci varius natoque penatibus et magnis disparturient montes, nascetur ridiculus mus.",

		backColor: "red",

		bar1Toggle: true,
		bar2Toggle: false,
		bar3Toggle: false,

		buttonsArray: [
			{
				name: "mdi-chevron-double-right",
				id: 4,
				type: "category",
				formTest: "example3",
				entryPageTest: "",
				placeholder: "",
				buttonCheck: true,
				leftNavName: "Home",
			},
			{
				name: "mdi-chevron-double-right",
				id: 2,
				type: "button",
				formTest: "example1",
				entryPageTest: "Entry Page",
				placeholder: "Dashboard",
				buttonCheck: false,
				leftNavName: "Dashboard",
			},
			{
				name: "mdi-chevron-double-right",
				id: 3,
				type: "button",
				formTest: "example2",
				entryPageTest: "",
				placeholder: "",
				buttonCheck: true,
				leftNavName: "",
			},
		],

		iconSelectionItems: [
			{ title: "", icon: "mdi-house" },
			{ title: "", icon: "mdi-arrow-all" },
			{ title: "", icon: "mdi-question-mark" },
			{ title: "", icon: "mdi-airplane" },
		],
	},
	mutations: {
		changeTitle(state, title) {
			state.title = title;
		},

		changeDescription(state, description) {
			state.companyDescription = description;
		},

		bar1Off(state) {
			state.bar1Toggle = false;
		},

		bar2Off(state) {
			state.bar2Toggle = false;
		},

		bar3Off(state) {
			state.bar3Toggle = false;
		},

		bar1On(state) {
			state.bar1Toggle = true;
		},

		bar2On(state) {
			state.bar2Toggle = true;
		},

		bar3On(state) {
			state.bar3Toggle = true;
		},
	},
	actions: {},
	modules: {},
	theme: { dark: true },
});
