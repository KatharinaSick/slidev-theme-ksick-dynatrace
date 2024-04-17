<template>
  <div class="slidev-layout center">
    <div class="container">
      <slot/>
    </div>
  </div>
  <Footer :event-name="eventName" :eventDate="eventDate" :show-dynatrace-logo="showDynatraceLogo"/>
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
  },
  showDynatraceLogo: {
    type: Boolean
  }
})
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  text-align: center;
}
</style>