<template>
  <div>
    <div class="slidev-layout">
      <div class="my-auto">
        <slot/>
      </div>
    </div>
    <Footer :event-name="eventName" :eventDate="eventDate"/>
  </div>
</template>

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