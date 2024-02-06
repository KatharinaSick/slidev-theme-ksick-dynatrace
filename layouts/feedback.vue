<template>
    <div>
      <div class="slidev-layout end">
        <div class="container">
            <h1>{{header}}</h1>
            <div style="display: flex; flex-direction: row; gap: 100px; margin: 32px">
            <div>
            <img style="width: 200px; height: 200px" :src=linkedinQR />
            <strong>LinkedIn</strong>
            </div>
            <div>
            <img style="width: 200px; height: 200px" :src=feedbackQR />
            <strong>Feedback</strong>
            </div>
            </div>
          <slot/>
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
    feedbackQR: {type: String},
    linkedinQR: {type: String},
    header: {type: String}
  })
  </script>
  
  <style scoped>
  .container {
    height: 100%;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  
    text-align: center;
  }
  </style>