<script setup>
import Footer from "../components/Footer.vue";
import { defineProps } from 'vue';

defineProps({
  eventName: {
    type: String,
  },
  eventDate: {
    type: String
  }
})
</script>

<template>
  <div class="slidev-layout two-cols-header w-full h-full">
    <div class="col-header">
      <slot />
    </div>
    <div class="col-left">
      <slot name="left" />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
    <Footer :event-name="eventName" :eventDate="eventDate"/>
  </div>
</template>

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 5fr;
  grid-column-gap: 24px;
}

.col-header { grid-area: 1 / 1 / 2 / 3; }
.col-left { grid-area: 2 / 1 / 3 / 2; }
.col-right { grid-area: 2 / 2 / 3 / 3; }
</style>
