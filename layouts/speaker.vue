<template>
  <div class="slidev-layout speaker">
    <div class="my-auto w-full container">
      <div class="image-container">
        <span v-if="!transparentImage" class="image-border"/>
        <img :alt="speaker" :src="image" class="image"/>
      </div>
      <div class="info-container">
        <h2 class="hello">Hello!</h2>
        <h1 class="name">{{ speaker }}</h1>
        <p class="job-title">🚀&nbsp;&nbsp;{{ description }}</p>
        <p class="website">🔗&nbsp;&nbsp;<a :href=url>{{ website }}</a></p>
        <div class="logos">
          <a v-for="logo in logos" :href="logo.link" target="_blank" style="border: 0">
            <img :alt="logo.alt" :src="logo.src" class="logo"/>
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer :event-name="eventName" :eventDate="eventDate" :show-dynatrace-logo="showDynatraceLogo"
          :showSlideNumber="showSlideNumber"/>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {computed, defineProps} from 'vue';

const props = defineProps({
  eventName: {type: String},
  eventDate: {type: String},
  image: {type: String},
  speaker: {type: String},
  description: {type: String},
  website: {type: String},
  logos: {type: Array},
  transparentImage: {type: Boolean, default: false},
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
  flex-flow: row;
  gap: 64px;

  align-items: center;
  justify-content: space-evenly;
}

.image-container {
  display: inline-block;
  width: 300px;
  height: 300px;

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
  padding: 6px;

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

.name, .hello, .job-title, .website {
  margin: 0;
  padding: 0;
}

.name {
  margin: 48px 0;
}

.job-title {
  margin-bottom: 12px;
}

.logos {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 36px;
}

.logo {
  display: inline-block;
  height: 56px;
}
</style>
