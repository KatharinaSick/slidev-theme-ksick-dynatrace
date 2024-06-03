<template>
    <div class="slidev-layout">
      <div class="my-auto">
        <slot/>
      </div>
    </div>
    <img v-if="backgroundImage" class="image" :src="backgroundImage"/>
    <Footer :event-name="eventName" :eventDate="eventDate" :show-dynatrace-logo="showDynatraceLogo" :showSlideNumber="showSlideNumber"/>
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
  },
  showDynatraceLogo: {
    type: Boolean,
  },
  showSlideNumber: {
    type: Boolean
  },
  backgroundImage: {
    type: String
  }
})
</script>

<style scoped>
.image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
</style>