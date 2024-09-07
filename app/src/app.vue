<template>
  <div class="mx-auto flex min-h-[100vh] max-w-4xl flex-col px-4">
    <NavBar />
    <div class="flex-1">
      <p class="mb-6 pt-2 text-center text-xl">
        Need to came up with an excuse on the spot, like right now? There is an
        app for that! <strong>This one!</strong>
      </p>
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
