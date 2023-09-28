<template>
  <div>
    <div class="slidev-layout cover">
      <div class="my-auto w-full">
        <span v-if="speaker && jobTitle" class="spacer"/>
        <slot/>
        <span v-if="speaker && jobTitle" class="presenter">{{ speaker }}, {{ jobTitle }} at Dynatrace</span>
      </div>
    </div>
    <Footer :event-name="eventName" :eventDate="eventDate"/>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {defineProps} from 'vue';

defineProps({
  eventName: {type: String},
  eventDate: {type: String},
  speaker: {type: String},
  jobTitle: {type: String},
})
</script>

<style scoped>
.spacer {
  display: inline-block;
  height: 128px;
}
.presenter {
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  color: #7a7a7a;
  margin-top: 48px;
}
</style>
