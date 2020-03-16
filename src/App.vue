<template>
  <div
    class="min-h-screen bg-gray-200"
    id="app"
  >
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style src="./assets/css/style.css"></style>
