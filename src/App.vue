<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>FastFood</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Menu -->

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Home'}">
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Pizza' }">
            <v-list-item-icon>
              <v-icon>contact_page</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pizza</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Hamburguesa' }">
            <v-list-item-icon>
              <v-icon>store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Hamburguesas</v-list-item-title>
          </v-list-item>
        

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-main>

    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          class="primary py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>FastFood - Desarrollado por: Team Web Semantica</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>


<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
