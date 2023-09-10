<template>
  <div>
    <div class="slidev-layout outro-speaker">
      <div class="my-auto w-full container">
        <div class="image-container">
          <span class="image-border"/>
          <img class="image" :src="image" :alt="speaker"/>
        </div>
        <div class="info-container">
          <h1>Thank you!</h1>

          <h2 class="hello">Get in Touch</h2>

          <div class="contact-container">
            <p class="name">{{speaker}}</p>
            <p class="website">🔗&nbsp;&nbsp;{{website}}</p>
          </div>
        </div>
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
  image: {type: String},
  speaker: {type: String},
  jobTitle: {type: String},
  website: {type: String},
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
  width: 300px;
  height: 300px;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 50%;

  background: var(--gradient);
}

.image {
  display: inline-block;
  width: 300px;
  height: 300px;
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

  gap: 48px;
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
}

.name, .hello, .website, .name {
  margin: 0;
  padding: 0;
}

</style>
