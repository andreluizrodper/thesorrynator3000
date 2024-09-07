<template>
  <div class="flex justify-between py-4">
    <h1 class="text-2xl font-bold">Sorry-nator 3000</h1>
    <div>
      <Select v-model="language" @change="updateLanguage">
        <SelectTrigger>
          <SelectValue placeholder="Select the language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              :value="option"
            >
              {{ option }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<script>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default {
  components: {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  },
  computed: {
    selectedLanguage() {
      return this.$store.state.language;
    },
  },
  data() {
    return {
      language: null,
      options: ["EN"],
    };
  },
  mounted() {
    this.language = this.selectedLanguage;
  },
  methods: {
    updateLanguage() {
      this.$store.commit("setLanguage", this.language);
    },
  },
};
</script>
