<template>
  <div>
    <div class="slidev-layout">
      <div class="container">
        <img class="image" :src="image" />
      </div>
    </div>
    <Footer :event-name="eventName" :eventDate="eventDate" />
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
  },
  image: {
    type: String
  }
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 24px;
}
.image {
  display: inline-block;

  border-radius: 12px;
  box-shadow: var(--box-shadow);
}
</style>