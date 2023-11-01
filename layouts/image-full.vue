<template>
  <div>
    <div class="slidev-layout image-full">
      <img class="image" :src="image"/>
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
  },
  image: {
    type: String
  }
})
</script>

<style scoped>
.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>