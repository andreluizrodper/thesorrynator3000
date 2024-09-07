<template>
  <div class="flex flex-col gap-8">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="flex flex-col gap-1"
    >
      <p class="text-center text-xl">
        {{ content[`line${index + 1}`] }}
      </p>
      <div class="flex grid grid-cols-1 items-start gap-4 md:grid-cols-3">
        <label
          v-for="(option, optionIndex) in line.options"
          :key="index"
          class="flex gap-2"
          :for="`option${index}${optionIndex}`"
        >
          <input
            :id="`option${index}${optionIndex}`"
            :type="line.type"
            v-model="selectedOptions[index]"
            :value="option"
          />
          {{ option }}
        </label>
      </div>
    </div>
    <div class="mb-4 flex justify-center">
      <Button :disabled="!isValid" @click="generate">What should I do</Button>
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
import { languages } from "@/i18n";
import { Button } from "@/components/ui/button";
import { getAnswer } from "@/utils/answer";

export default {
  components: {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Button,
  },
  computed: {
    language() {
      return this.$store.state.language;
    },
    content() {
      return languages[this.language];
    },
    isValid() {
      return (
        this.selectedOptions[0].length >= 0 &&
        this.selectedOptions[1].length >= 0 &&
        this.selectedOptions[2].length >= 0 &&
        this.selectedOptions[3].length >= 0
      );
    },
  },
  data() {
    return {
      lines: [
        {
          type: "radio",
          options: [
            "Invite me to something",
            "Beg me for something",
            "Ask me to borrow something",
            "Ask me to go with him/her somewhere",
            "Ask me an advice",
          ],
        },
        {
          type: "radio",
          options: [
            "I'm not feeling like it",
            "Doesn't make any sense",
            "Just pure lazyness",
            "Why that",
            "This should not be me",
          ],
        },
        {
          type: "checkbox",
          options: [
            "Drama",
            "Formal",
            "Vague",
            "Violent",
            "Defensive",
            "Aliens",
          ],
        },
        {
          type: "radio",
          options: [
            "Old Friend",
            "New Friend",
            "Work buddy",
            "Boss",
            "I don't know this person",
          ],
        },
      ],
      selectedOptions: [{}, {}, [], {}],
    };
  },
  methods: {
    updateSelectedOption(value, index) {
      selectedOptions[index] = value;
    },
    generate() {
      if (!this.isValid) return;
      this.$store.commit("setAnswer", "");
      const prompt = `Write a short text; 
        What they are trying to: ${this.selectedOptions[0]}; 
        My reason to not comply: ${this.selectedOptions[1]}; 
        Mood ${this.selectedOptions[2].join(", ")}; 
        Add slick evasion; 
        Relationship ${this.selectedOptions[3]}; 
        Text length 40 to 100 words
        `;
      getAnswer(prompt);
    },
  },
};
</script>
