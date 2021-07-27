<template>
  <v-app id="inspire">
    <!-- APP BAR -->
    <v-app-bar color="primary" dense dark clipped-right app v-model="appBar">
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

    <!-- FOOTER 1 -->
    <v-footer dark padless app v-show="bottomBar">
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">{{ title }}</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>{{ title }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <!-- FOOTER 2 -->
    <v-footer color="primary lighten-1" padless v-show="bottomBar2" app>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>{{ title }}</strong>
        </v-col>
      </v-row>
    </v-footer>

    <!-- FOOTER 3 -->
    <v-footer dark padless v-show="bottom3" app>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>{{ title }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <!-- LEFT PANNEL -->

    <v-navigation-drawer v-model="drawer" app :color="menuColor">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon>mdi-cube-outline</v-icon>
            <strong>{{ title }}</strong>
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
            <v-slider max="330" min="256"> </v-slider>
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
                @change="appBar = !appBar"
              ></v-radio>
              <v-radio
                label="None"
                value="radioNone"
                @change="appBar = !appBar"
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
                  bottomBar = true;
                  bottomBar2 = false;
                "
              ></v-radio>
              <v-radio
                label="Variant 2"
                value="radio-2"
                @change="
                  bottomBar = false;
                  bottomBar2 = true;
                  bottomBar3 = false;
                "
              ></v-radio>
              <v-radio
                label="Variant 3"
                value="radio-3"
                @change="
                  bottomBar = false;
                  bottomBar2 = false;
                  bottomBar3 = true;
                "
              ></v-radio>
              <v-radio label="Variant 4" value="radio-4"></v-radio>
              <v-radio
                label="None"
                value="radio-5"
                @click="
                  bottomBar = false;
                  bottomBar2 = false;
                  bottomBar3 = false;
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
export default {
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
    drawer: true,
    cat: false,
    appBar: true,
    bottomBar: true,
    bottomBar2: false,
    bottomBar3: false,

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
