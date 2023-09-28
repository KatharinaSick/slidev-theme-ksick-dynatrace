<template>
  <div>
    <div class="slidev-layout about">
      <div class="my-auto w-full container">
        <div class="image-container">
          <span class="image-border"/>
          <img :alt="speaker" :src="image" class="image"/>
        </div>
        <div class="info-container">
          <h2 class="hello">Hello!</h2>
          <h1 class="name">{{ speaker }}</h1>
          <p class="job-title">🚀&nbsp;&nbsp;{{ jobTitle }} at Dynatrace </p>
          <p class="website">🔗&nbsp;&nbsp;<a :href=url>{{ website }}</a></p>
        </div>
      </div>
    </div>
    <Footer :event-name="eventName" :eventDate="eventDate"/>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import {defineProps, computed} from 'vue';

const props = defineProps({
  eventName: {type: String},
  eventDate: {type: String},
  image: {type: String},
  speaker: {type: String},
  jobTitle: {type: String},
  website: {type: String},
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
</style>
