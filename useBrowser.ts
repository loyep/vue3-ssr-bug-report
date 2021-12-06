import { ref, onMounted } from "vue";
export function useBrowser() {
  const isBrowser = ref(false);

  onMounted(() => {
    isBrowser.value = true;
  });
  return isBrowser;
}
