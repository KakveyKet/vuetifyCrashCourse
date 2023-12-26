<template>
  <v-app>
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title>Title</v-toolbar-title></router-link
      >

      <v-spacer></v-spacer>
      <v-btn icon   @click="changeThem">
        <v-icon
          :icon="darkThem ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        ></v-icon>      </v-btn>
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-badge content="6" color="red-darken-2" size="x-small">
              <v-icon icon="mdi-bell" color="blue-darken-4"></v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in notifications"
            :key="index"
            :value="index"
          >
            <v-list-item-title>
              <v-icon :color="item.color" :icon="item.icon"></v-icon>
              {{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <router-link to="/login">
        <v-btn variant="flat" class="mr-2" color="white" size="small">
          Log In
        </v-btn>
      </router-link>
    </v-toolbar>

    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";
const notifications = [
  {
    title: "Message from A",
    icon: "mdi-email",
    color: "blue",
  },
  {
    title: "Message from B",
    icon: "mdi-email",
    color: "green",
  },
  {
    title: "Message from C",
    icon: "mdi-email",
    color: "red",
  },
  {
    title: "Message from D",
    icon: "mdi-email",
    color: "yellow",
  },
  {
    title: "Message from E",
    icon: "mdi-email",
    color: "purple",
  },
  {
    title: "Message from F",
    icon: "mdi-email",
    color: "orange",
  },
];
const theme = useTheme();
const darkThem = ref(false);
function changeThem(){
  darkThem.value = !darkThem.value;
  theme.global.name.value = darkThem.value ? "dark" : "light";
}
</script>
