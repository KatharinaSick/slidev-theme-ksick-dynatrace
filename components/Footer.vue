<template>
  <footer class="footer-container">
    <p class="footer-text">{{ eventName }}</p>
    <span class="footer-divider"/>
    <p class="footer-text">{{eventDate}}</p>
    <span class="flex-spacer"/>
    <simple-icons-dynatrace v-if="showDynatraceLogo" class="footer-logo"/>
    <span v-if="showDynatraceLogo && showSlideNumber" class="footer-divider"/>
    <p v-if="showSlideNumber" class="footer-text">
      <SlideCurrentNo class="footer-line-number"/>
    </p>
  </footer>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

defineProps({
  eventName: {
    type: String,
  },
  eventDate: {
    type: String
  },
  showDynatraceLogo: {
    type: Boolean,
    default: true
  },
  showSlideNumber: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  background: var(--background-gradient);

  display: flex;
  gap: 8px;
  padding: 6px 12px;
  align-items: center;
}

.footer-text {
  font-size: 12px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  line-height: 12px;
  min-width: 12px;
  text-align: end;
}

.footer-logo {
  height: 16px;
  width: 16px;
  margin: 0 4px;
}

.footer-divider {
  height: 16px;
  width: 2px;
  background: var(--green);
}
</style>