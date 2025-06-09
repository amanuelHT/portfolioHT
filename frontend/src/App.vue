<script setup>
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <Intro />
    <Education />
    <Projects />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Georgia', serif;
  background-color: #f4f1ed;
}
</style>
