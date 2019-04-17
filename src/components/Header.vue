<template>
  <header class="pb-5">
    <v-toolbar color="indigo" dark fixed app clipped-right>
      <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile v-on:click.stop="drawer = null">
          <v-list-tile-action>
            <v-icon>close</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>閉じる</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list v-for="(menu, i) in menus" v-bind:key="i">
        <v-list-tile v-on:click.stop="toRoute(menu.path); drawer = null">
          <v-list-tile-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menu.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import router from '../router'

export default {
  data: () => {
    return {
      drawer: null
    }
  },
  props: {
    menus: Array
  },
  methods: {
    toRoute: (path) => {
      router.push(path)
    }
  },
  computed: {
    title: function () {
      let currentPath = this.$route.path
      for (let menu of this.menus) {
        if (menu.path === currentPath) {
          return menu.title
        }
      }
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
