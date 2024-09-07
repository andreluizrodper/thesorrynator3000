<template>
  <div class="mx-auto flex min-h-[100vh] max-w-4xl flex-col px-4">
    <NavBar />
    <div class="flex-1">
      <Ask />
      <Answer />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "@/components/home/nav-bar.vue";
import Ask from "@/components/home/ask.vue";
import Answer from "@/components/home/answer.vue";
import Footer from "@/components/home/footer.vue";
</script>
