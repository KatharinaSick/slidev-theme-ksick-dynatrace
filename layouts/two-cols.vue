<template>
  <div class="slidev-layout two-columns w-full h-full grid grid-cols-2">
    <div class="col-left">
      <slot/>
    </div>
    <div class="col-right">
      <slot name="right"/>
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
    type: Boolean,
  }
})
</script>
