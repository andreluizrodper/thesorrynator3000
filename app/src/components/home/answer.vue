<template>
  <div class="flex justify-center py-6">
    <Loading v-if="loading" />
    <div v-if="answer.length > 0" class="flex flex-col gap-1">
      <p class="text-sm">
        {{ content.line5 }}
      </p>
      <div class="rounded bg-gray-100 p-1" @click="copyText">
        <p class="text-center text-xl">
          {{ answer }}
        </p>
      </div>
      <div
        v-if="showMessage"
        class="fixed bottom-4 right-4 whitespace-pre rounded bg-green-500 px-3 py-2 text-white"
      >
        Text is copied!
      </div>
    </div>
  </div>
</template>

<script>
import { languages } from "@/i18n";
import Loading from "@/components/ui/loading.vue";
export default {
  components: { Loading },
  computed: {
    language() {
      return this.$store.state.language;
    },
    content() {
      return languages[this.language];
    },
    loading() {
      return this.$store.state.loading;
    },
    answer() {
      return this.$store.state.answer;
    },
  },
  data() {
    return {
      showMessage: false,
    };
  },
  methods: {
    copyText() {
      navigator.clipboard.write(this.answer);
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    },
  },
};
</script>
