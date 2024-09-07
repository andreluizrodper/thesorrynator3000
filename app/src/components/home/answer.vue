<template>
  <div class="flex justify-center py-6">
    <Loading v-if="loading" />
    <div v-if="answer.length > 0" class="flex flex-col gap-1">
      <p class="text-sm">
        {{ content.line5 }}
      </p>
      <p class="text-center text-xl">
        {{ answer }}
      </p>
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
};
</script>
