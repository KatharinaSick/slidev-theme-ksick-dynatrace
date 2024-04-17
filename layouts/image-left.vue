<template>
  <div class="slidev-layout image-left">
    <div class="container">
      <img :alt="alt" :src="image" class="image"/>
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
  <Footer :event-name="eventName" :eventDate="eventDate" :show-dynatrace-logo="showDynatraceLogo"/>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {defineProps} from 'vue';

defineProps({
  image: {
    type: String,
  },
  alt: {
    type: String,
  },
  eventName: {
    type: String,
  },
  eventDate: {
    type: String
  },
  showDynatraceLogo: {
    type: Boolean,
  }
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}

.image {
  width: 50%;
}

.content {
  padding: 2.5rem 3.5rem;
  flex-grow: 1;
}
</style>