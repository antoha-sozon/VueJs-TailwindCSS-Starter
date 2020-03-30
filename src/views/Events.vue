<template>
  <div>
    <div
      class="fixed inset-0"
      style="background-color: rgba(42, 67, 101, 0.7);"
      v-if="showEditPanel"
    >
      <botton
        class="absolute top-0 left-0 p-4 bg-blue-800 cursor-pointer"
        type="button"
        @click="showEditPanel = !showEditPanel"
      >
        <svg class="w-6 text-white stroke-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 14L14 2M2 2l12 12"/></svg>
      </botton>
      <EditEvent />
    </div>
    <div
      class="fixed inset-0"
      style="background-color: rgba(42, 67, 101, 0.7);"
      v-if="showEditCategory"
    >
      <button
        class="absolute top-0 left-0 p-4 bg-blue-800 cursor-pointer"
        type="button"
        @click="showEditCategory = !showEditCategory"
      >
        <svg class="w-6 text-white stroke-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 14L14 2M2 2l12 12"/></svg>
      </button>
      <EditCategory />
    </div>
    <h1 class="mb-2 pb-2 border-b">Events</h1>
    <div class="mb-4 pt-2 pb-4 border-b">
      <button
        class="px-8 py-2 mr-4 text-white bg-blue-800 rounded shadow"
        @click="showEditPanel = !showEditPanel"
        type="button"
      >Add event</button>
      <button
        class="px-8 py-2 text-white bg-blue-800 rounded shadow"
        @click="showEditCategory = !showEditCategory"
        type="button"
      >Add category</button>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center text-white text-sm bg-blue-700">
        <div class="flex items-center w-3/12 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 mr-2 fill-current" viewBox="0 0 24 24">
            <path d="M23.244 17.009H.75c-.413 0-.75.36-.75.801v3.421c0 .423.337.769.75.769h22.494c.414 0 .75-.346.75-.77v-3.42c0-.441-.336-.801-.75-.801zm0-8H.75c-.413 0-.75.36-.75.801v3.421A.76.76 0 00.75 14h22.494a.76.76 0 00.75-.769V9.81c0-.441-.336-.801-.75-.801zm0-8H.75c-.413 0-.75.36-.75.801v3.42c0 .423.337.769.75.769h22.494a.76.76 0 00.75-.769V1.81c0-.441-.336-.801-.75-.801z"/>
          </svg>
          <span>Title</span>
        </div>
        <div class="flex items-center w-6/12 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 mr-2 fill-current" viewBox="0 0 24 24">
            <path d="M19 14h-1.909H17v-4h2c2.762 0 5-2.238 5-5s-2.238-5-5-5-5 2.238-5 5v2h-4V5c0-2.762-2.238-5-5-5S0 2.238 0 5s2.238 5 5 5h1.91H7v4H5c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5v-1.91V17h4v2c0 2.762 2.238 5 5 5s5-2.238 5-5-2.238-5-5-5zm-2-9a2 2 0 112 2h-2V5zM7 19a2 2 0 11-2-2h2v2zM7 7H5a2 2 0 112-2v2zm7 7h-4v-4h4v4zm5 7a2 2 0 01-2-2v-2h2a2 2 0 010 4z" clip-rule="evenodd"/>
          </svg>
          <span>Description</span>
        </div>
        <div class="flex items-center w-2/12 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 mr-2 fill-current" viewBox="0 0 24 24">
            <path d="M0 6.001A2 2 0 012 4h2V2c0-.552.447-2 1-2h2c.553 0 1 1.448 1 2v2h8V2c0-.552.447-2 1-2h2c.553 0 1 1.448 1 2v2h2a2 2 0 012 2.001V8H0V6.001zm24 4V23s-.521 1.001-2 1.001H2C.427 24.001 0 23 0 23V10.001h24z" clip-rule="evenodd"/>
          </svg>
          <span>Date</span>
        </div>
        <div class="flex justify-center w-1/12 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 fill-current" viewBox="0 0 24 24">
            <path d="M21.521 10.146c-.41-.059-.846-.428-.973-.82l-.609-1.481c-.191-.365-.146-.935.1-1.264l.99-1.318c.246-.33.227-.854-.047-1.162l-1.084-1.086a.967.967 0 00-1.164-.045l-1.316.988c-.33.248-.898.293-1.264.101l-1.48-.609c-.395-.126-.764-.562-.82-.971L13.62.85c-.057-.409-.441-.778-.85-.822 0 0-.255-.026-.77-.026-.514 0-.769.026-.769.026-.41.044-.794.413-.852.822l-.233 1.629c-.058.409-.427.845-.82.971l-1.48.609c-.366.191-.934.147-1.264-.101l-1.318-.989a.964.964 0 00-1.163.045L3.017 4.1a.964.964 0 00-.046 1.162l.988 1.318c.249.33.293.899.102 1.264L3.45 9.326c-.125.393-.562.762-.971.82l-1.629.231a1.015 1.015 0 00-.82.853s-.027.255-.027.77.027.77.027.77c.043.411.412.793.82.852l1.629.232c.408.059.846.428.971.82l.611 1.48c.191.365.146.936-.102 1.264l-.988 1.318c-.248.33-.308.779-.132.994.175.217.677.752.678.754l.375.344c.204.188 1.042.449 1.372.203l1.317-.99c.33-.246.898-.293 1.264-.1l1.48.609c.394.125.763.562.82.971l.233 1.629c.058.408.441.779.852.822 0 0 .255.027.769.027.515 0 .77-.027.77-.027.409-.043.793-.414.85-.822l.234-1.629c.057-.408.426-.846.82-.971l1.48-.611c.365-.191.934-.146 1.264.102l1.318.99c.332.246.854.227 1.164-.047l1.082-1.084a.968.968 0 00.047-1.164l-.99-1.318c-.246-.328-.291-.898-.1-1.264l.609-1.48c.127-.393.562-.762.973-.82l1.627-.232c.41-.059.779-.441.822-.852 0 0 .027-.255.027-.77s-.027-.77-.027-.77c-.043-.41-.412-.794-.822-.853l-1.626-.231zM12 15a3 3 0 110-6 3 3 0 010 6z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
      <div v-for="item in date" class="flex text-blue-900 text-xs border-l border-r border-b border-blue-700">
        <div class="w-3/12 p-2 text-sm border-r border-blue-700">
          {{ item.title }}
        </div>
        <div class="w-6/12 p-2 border-r border-blue-700">
          {{ item.description }}
        </div>
        <div class="w-2/12 p-2 border-r border-blue-700">
          {{ item.date }}
        </div>
        <div class="w-1/12 p-2 text-center">
          <router-link class="flex items-center justify-center text-blue-500" to="/event/1">
            <svg class="h-4 mr-1 fill-current" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.561 5.318l-2.879-2.879A1.495 1.495 0 0 0 17.621 2c-.385 0-.768.146-1.061.439L13 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zM11.5 14.672L9.328 12.5l6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728L9 15l-.061-1.667zM16 19H5V8h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47V17h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64L16 13v6zm2.5-11.328L16.328 5.5l1.293-1.293 2.171 2.172L18.5 7.672z"/></svg>
            Edit
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EditEvent from "../components/EditEvent";
  import EditCategory from "../components/EditCategory";
  export default {
    data() {
      return {
        date: {
          0: {
            title: 'Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sit.',
            date: '20.20.2020',
            file: 'https://via.placeholder.com/100x60.png'
          },
          2: {
            title: 'Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sit.',
            date: '20.20.2020',
            file: 'https://via.placeholder.com/100x60.png'
          },
          3: {
            title: 'Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sit.',
            date: '20.20.2020',
            file: 'https://via.placeholder.com/100x60.png'
          },
          4: {
            title: 'Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sit.',
            date: '20.20.2020',
            file: 'https://via.placeholder.com/100x60.png'
          },
          5: {
            title: 'Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sit.',
            date: '20.20.2020',
            file: 'https://via.placeholder.com/100x60.png'
          },
          1: {
            title: 'Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sit.',
            date: '20.20.2020',
            file: 'https://via.placeholder.com/100x60.png'
          }
        },
        showEditPanel: false,
        showEditCategory: false,
      }
    },
    components: {
      EditEvent,
      EditCategory,
    }
  }
</script>
