<template>
  <div class="language-switcher">
    <a :href="otherLangUrl">{{ otherLangLabel }}</a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const currentPath = ref('');

onMounted(() => {
  currentPath.value = window.location.pathname;
});

const currentLang = computed(() => {
  if (currentPath.value.startsWith('/fr')) {
    return 'fr';
  }
  return 'en';
});

const otherLang = computed(() => {
  return currentLang.value === 'en' ? 'fr' : 'en';
});

const otherLangLabel = computed(() => {
    return otherLang.value.toUpperCase();
});

const otherLangUrl = computed(() => {
  if (currentLang.value === 'en') {
    return `/fr${currentPath.value}`;
  }
  return currentPath.value.replace(/^\/fr/, '') || '/';
});
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--border);
}
</style>
