<template>
  <div
    class="flex min-h-screen bg-gray-200"
    id="app"
  >
    <Nav />
    <TopPanel />
    <section class="overflow-x-hidden w-full md:ml-64 mt-16">
      <router-view class="p-4 md:p-6"/>
    </section>
  </div>
</template>

<script>
import Nav from './components/Nav'
import TopPanel from './components/TopPanel'
export default {
  name: 'app',
  components: {
    Nav,
    TopPanel
  }
}
</script>

<style src="./assets/css/style.css"></style>
