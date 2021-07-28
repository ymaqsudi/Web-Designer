<template>
  <v-app id="inspire">
    <!-- TOP BAR -->
    <TopBar v-show="TopBar"></TopBar>

    <!-- FOOTER 1 -->
    <BottomBar v-show="BottomBar"></BottomBar>

    <!-- FOOTER 2 -->
    <BottomBar2 v-show="BottomBar2"></BottomBar2>

    <!-- FOOTER 3 -->
    <BottomBar3 v-show="BottomBar3"></BottomBar3>
    
    <!-- Left Drawer -->
    <LeftDrawer v-model="LeftDrawer"> </LeftDrawer>

    <!-- RIGHT PANNEL -->
    <v-navigation-drawer v-model="cat" clipped right disable-route-watcher app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon>mdi-cog-outline</v-icon>
            <strong>Settings</strong>
          </v-list-item-title>
          <v-list-item-subtitle> </v-list-item-subtitle>
        </v-list-item-content>
        <v-icon @click="cat = !cat" right color="blue">mdi-check-bold</v-icon>
        <v-icon @click="cat = !cat" right color="red">mdi-close</v-icon>
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
              v-model="title"
            ></v-text-field>
            <!--Select Field Router Animation -->
            <span><strong>Router Animation</strong></span>
            <v-select :items="routerAnimationItems" outlined></v-select>
            <!--Select Field Internationalization -->
            <span><strong>Internationalization</strong></span>
            <v-select :items="Internationalization" outlined> </v-select>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- Layout Settings Expansion Panel -->
        <v-expansion-panel>
          <v-expansion-panel-header> Layout Settings </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- Visual Settings Radio Buttons -->
            <v-radio-group v-model="column" column>
              <v-radio
                label="Fluent (System Default Font)"
                value="radio-1"
              ></v-radio>
              <v-radio label="Clean (Mukta Font)" value="radio-2"></v-radio>
              <v-radio label="Air (Source Sans Font)" value="radio-3"></v-radio>
            </v-radio-group>
            <!-- Various Switch Buttons-->
            <v-switch
              v-model="switch1"
              inset
              label="Dark Theme"
              @click="darkMode"
            ></v-switch>
            <v-switch
              v-model="switch2"
              inset
              label="Context Max-Width"
            ></v-switch>
            <v-switch
              v-model="switch3"
              inset
              label="Layout Max-Width"
            ></v-switch>
            <v-switch v-model="switch4" inset label="Layout Gray Bg"></v-switch>
            <v-switch
              v-model="switch5"
              inset
              label="Card Squared Borders"
            ></v-switch>
            <v-switch v-model="switch6" inset label="Card Shadow"></v-switch>
            <v-switch
              v-model="switch7"
              inset
              label="Card Borderless"
            ></v-switch>
            <v-switch
              v-model="switch8"
              inset
              label="Auth Layout Topbar"
            ></v-switch>
            <v-switch v-model="switch9" inset label="Auth Layout Bg"></v-switch>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header> Menu Settings </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- Menu Variant -->
            <span><strong>Menu Variant</strong></span>
            <v-radio-group v-model="column" column>
              <v-radio label="Classic" value="variantRadio1"></v-radio>
              <v-radio label="None" value="variantRadio2"></v-radio>
              <v-radio label="Flyout" value="variantRadio3"></v-radio>
              <v-radio label="Simply" value="variantRadio4"></v-radio>
            </v-radio-group>
            <!-- Menu Layout Type -->
            <span><strong>Menu Layout Type</strong></span>
            <v-radio-group v-model="row" row>
              <v-radio label="Right" value="layoutRadio1"></v-radio>
              <v-radio label="Left" value="layoutRadio2"></v-radio>
            </v-radio-group>
            <!-- Assorted Remaining Buttons-->
            <span
              ><strong>Menu Color<br /></strong
            ></span>
            <v-btn x-small icon outlined @click="menuColor = 'white'"
              ><v-icon>mdi-circl-outline</v-icon></v-btn
            >
            <v-btn
              x-small
              icon
              outlined
              class="gray--text"
              @click="menuColor = 'grey'"
              ><v-icon>mdi-circle</v-icon></v-btn
            >
            <v-btn
              x-small
              icon
              outlined
              class="black--text"
              @click="menuColor = 'black'"
              ><v-icon>mdi-circle</v-icon></v-btn
            >
            <v-btn
              x-small
              icon
              outlined
              class="blue--text"
              @click="menuColor = 'blue'"
              ><v-icon>mdi-circle</v-icon></v-btn
            ><br />
            <span
              ><strong>Menu Collapsed<br /></strong>
            </span>
            <v-switch v-model="switch10" inset label=""></v-switch>
            <span><strong>Menu Unfixed</strong></span>
            <v-switch v-model="switch11" inset label=""></v-switch>
            <span><strong>Menu Shadow</strong></span>
            <v-switch v-model="switch12" inset label=""></v-switch>
            <span><strong>Menu Width</strong></span>
            <!--Slider Shit :P -->
            <v-slider
              v-model="menuWidth"
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
            <v-radio-group v-model="row" row mandatory>
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
              v-model="ex11"
              label="Topbar Separated"
              color="red"
              value="red"
              hide-details
              inset
            ></v-switch>

            <!-- TOPBAR FIXED SWITCH -->
            <v-switch
              v-model="ex11"
              label="Topbar Fixed"
              color="red"
              value="red"
              hide-details
              inset
            ></v-switch>

            <!-- TOPBAR GRAY BG SWITCH -->
            <v-switch
              v-model="ex11"
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
            <v-radio-group v-model="row" row>
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
            <v-radio-group v-model="row" row mandatory>
              <v-radio
                label="Variant 1"
                value="radio-1"
                @change="
                  BottomBar = true;
                  BottomBar2 = false;
                  BottomBar3 = false;
                "
              ></v-radio>
              <v-radio
                label="Variant 2"
                value="radio-2"
                @change="
                  BottomBar = false;
                  BottomBar2 = true;
                  BottomBar3 = false;
                "
              ></v-radio>
              <v-radio
                label="Variant 3"
                value="radio-3"
                @change="
                  BottomBar = false;
                  BottomBar2 = false;
                  BottomBar3 = true;
                "
              ></v-radio>
              <v-radio label="Variant 4" value="radio-4"></v-radio>
              <v-radio
                label="None"
                value="radio-5"
                @click="
                  BottomBar = false;
                  BottomBar2 = false;
                  BottomBar3 = false;
                "
              ></v-radio>
            </v-radio-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      <v-container>
        <v-speed-dial v-model="fab" top right absolute direction="bottom">
          <template #activator>
            <v-btn color="secondary" fab>
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-plus </v-icon>
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
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar";

import BottomBar from "./components/BottomBar.vue";
import BottomBar2 from "./components/BottomBar2.vue";
import BottomBar3 from "./components/BottomBar3.vue";

import LeftDrawer from "./components/LeftDrawer.vue";

export default {
  components: { TopBar, BottomBar, BottomBar2, BottomBar3, LeftDrawer },
  data: () => ({
    return: {
      title: "",
      dialog: false,
      color: "black",
    },

    routerAnimationItems: [
      "None",
      "Slide Up",
      "Slide Right",
      "Fade In",
      "Zoom",
    ],
    Internationalization: [
      "English (en-US)",
      "French (fr-FR)",
      "Русский (ru-RU)",
      "简体中文 (zh-CN)",
    ],

    menuColor: "blue",
    menuWidth: 256,
    cat: false,
    BottomBar: true,
    BottomBar2: false,
    BottomBar3: false,
    TopBar: true,
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
