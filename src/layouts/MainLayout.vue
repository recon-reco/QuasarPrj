<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> First Quasar Project </q-toolbar-title>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat label="Dropdown">
          <q-list>
            <q-item-label header>Folders</q-item-label>
            <q-item
              v-for="n in 3"
              :key="`x.${n}`"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item-label header>Files</q-item-label>
            <q-item
              v-for="n in 3"
              :key="`y.${n}`"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section avatar>
                <q-avatar
                  icon="assignment"
                  color="primary"
                  text-color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>Vacation</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          color="secondary"
          label=" funtion"
          @click="goToUrl"
          target="_blank"
        />
        <q-btn
          style="background-color: #8889cd; color: white"
          label="url"
          :href="'http://127.0.0.1:8000/blog/'"
          target="_blank"
        />
        <q-btn
          stretch
          class="custom-button"
          label="custom"
          :href="'http://127.0.0.1:8000/'"
          target="_blank"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Link List </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.custom-button {
  background-color: #39c5bb; /* 원하는 배경색 */
  color: white; /* 버튼 텍스트 색상 */
}
</style>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "HelloWorld",
    caption: "HelloQuasar",
    icon: "settings",
    link: "http://127.0.0.1:9000/#/hello",
  },
  {
    title: "MySimpleBlog",
    caption: "Python&Django",
    icon: "school",
    link: "http://127.0.0.1:8000/",
  },

  {
    title: "Github",
    caption: "github.com/recon-reco",
    icon: "code",
    link: "https://github.com/recon-reco",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function goToUrl() {
  window.location.href = "http://127.0.0.1:8000/"; // 원하는 URL로 이동
}
</script>
