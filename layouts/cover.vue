<template>
  <div>
    <div class="slidev-layout cover">
      <div class="my-auto w-full">
        <span v-if="speaker" class="spacer"/>
        <slot/>
        <span v-if="speaker" class="presenter">{{ speaker }}</span>
      </div>
    </div>
    <img v-if="backgroundImage" class="image" :src="backgroundImage"/>
    <Footer :event-name="eventName" :eventDate="eventDate" :show-dynatrace-logo="showDynatraceLogo"/>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {defineProps} from 'vue';

defineProps({
  eventName: {type: String},
  eventDate: {type: String},
  speaker: {type: String},
  showDynatraceLogo: {type: Boolean},
  backgroundImage: {type: String}
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
.image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
</style>
