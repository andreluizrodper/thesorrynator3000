<template>
  <div class="flex justify-between py-2 text-xs text-gray-600">
    <span>{{ year }} &copy;NearFutureLab</span>
    <span> Use with caution </span>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
