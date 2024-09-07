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
            :value="index"
          />
          {{ option }}
        </label>
      </div>
    </div>
    <div class="mb-4 flex justify-center">
      <Button @click="generate">What should I do</Button>
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
  },
  data() {
    return {
      lines: [
        {
          type: "radio",
          options: [
            "Invite you to something",
            "Ask you for a favor",
            "Beg you for something",
            "Ask to borrow something",
            "Ask you to go with him/her somewhere",
            "Ask for an advice",
          ],
        },
        {
          type: "radio",
          options: [
            "Not feeling like it",
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
      this.$store.commit("setAnswer", "");
      const prompt = `Give me just the a short text apology to ${this.selectedOptions[0]} the reason I don't want to ${this.selectedOptions[1]} and cover it in some slick reasoning add a flair to it ${this.selectedOptions[2].join(", ")} my relationship with the person ${this.selectedOptions[3]}`;
      getAnswer(prompt);
    },
  },
};
</script>
