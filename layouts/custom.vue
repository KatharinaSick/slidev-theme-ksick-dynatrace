<template>
  <div>
    <div class="slidev-layout full container">
      <slot/>
    </div>
    <Footer :event-name="eventName" :eventDate="eventDate"/>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {defineProps} from 'vue';

defineProps({
  eventName: {
    type: String,
  },
  eventDate: {
    type: String
  }
})
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;

  position: relative;
}
</style>