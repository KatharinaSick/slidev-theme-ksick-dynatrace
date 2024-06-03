<template>
  <div class="slidev-layout two-speakers">
    <div class="my-auto w-full container">
      <div class="speaker-container">

        <div class="info-container">
          <h1 class="name">{{ speaker1 }}</h1>
          <p class="job-title">🚀&nbsp;&nbsp;{{ description1 }}</p>
          <p class="website">🔗&nbsp;&nbsp;<a :href=url>{{ website1 }}</a></p>
        </div>
        <div class="image-container">
          <span v-if="!transparentImages" class="image-border"/>
          <img :alt="speaker1" :src="image1" class="image"/>
        </div>
      </div>
      <div class="speaker-container">
        <div class="image-container">
          <span v-if="!transparentImages" class="image-border"/>
          <img :alt="speaker2" :src="image2" class="image"/>
        </div>
        <div class="info-container">
          <h1 class="name">{{ speaker2 }}</h1>
          <p class="job-title">🚀&nbsp;&nbsp;{{ description2 }}</p>
          <p class="website">🔗&nbsp;&nbsp;<a :href=url>{{ website2 }}</a></p>
        </div>
      </div>
    </div>
  </div>

  <Footer :event-name="eventName" :eventDate="eventDate" :show-dynatrace-logo="showDynatraceLogo" :showSlideNumber="showSlideNumber"/>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {computed, defineProps} from 'vue';

const props = defineProps({
  eventName: {type: String},
  eventDate: {type: String},
  image1: {type: String},
  speaker1: {type: String},
  description1: {type: String},
  website1: {type: String},
  image2: {type: String},
  speaker2: {type: String},
  description2: {type: String},
  website2: {type: String},
  transparentImages: {type: Boolean, default: false},
  showDynatraceLogo: {type: Boolean},
  showSlideNumber: {type: Boolean}
})

const url = computed(() => {
  return 'https://' + props.website
})
</script>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-flow: column;
  gap: 48px;
  margin-top: -12px;
}

.speaker-container {
  width: 100%;

  display: flex;
  flex-flow: row;
  gap: 64px;

  align-items: center;
  justify-content: space-evenly;
}

.image-container {
  display: inline-block;
  width: 200px;
  height: 200px;

  position: relative;
}

.image-border {
  display: inline-block;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 50%;

  background: var(--gradient);
}

.image {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 4px;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 50%;
  object-fit: cover;
}

.info-container {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
}

.name, .job-title, .website {
  margin: 0;
  padding: 0;
}

.job-title {
  margin-bottom: 12px;
}
</style>
