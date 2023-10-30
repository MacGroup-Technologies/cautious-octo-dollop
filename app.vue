<script lang="ts" setup>
const appStore = useAppStore();
const theme = computed(() => {
  return appStore.theme;
})

watch(theme, () => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
