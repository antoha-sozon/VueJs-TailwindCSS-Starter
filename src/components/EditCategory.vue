<template>
  <div>
    <form class="flex flex-col pt-16 pb-4 px-4 md:w-1/3 min-h-screen text-white bg-blue-900 shadow-2xl">
      <h3 class="mb-4 text-3xl">Add category</h3>
      <label class="flex flex-col mb-6">
          <span class="flex items-center mb-2 ml-2">
            <svg class="mr-2 fill-current" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h32v32H0z"/><path d="M4 6v4h8v18h4V10h8V6zM30 4V2h-6v2h2v24h-2v2h6v-2h-2V4z"/></svg>
            <span>Category title</span>
          </span>
        <input
          class="py-1 px-2 rounded text-blue-900"
          type="text"
          name="title"
          placeholder="Title"
          value=""
          required
        >
      </label>
      <label class="flex flex-col mb-8">
        <span class="flex items-center mb-2 ml-2">
          <svg class="mr-2 fill-current" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M449.441 393.818V178.852c0-31.555-27.967-57.236-62.365-57.236H369.99v-3.434c0-31.566-27.967-57.236-62.365-57.236h-182.7c-34.388 0-62.365 25.67-62.365 57.236v214.965c0 31.555 27.978 57.236 62.365 57.236h17.084v3.435c0 31.565 27.978 57.235 62.366 57.235h182.7c34.399 0 62.366-25.669 62.366-57.235zm-85.4 38.5H204.375c-23.177 0-41.956-17.237-41.956-38.5V178.852c0-21.263 18.779-38.5 41.956-38.5H387.075c23.177 0 41.956 17.237 41.956 38.5v214.966c0 21.263-18.779 38.5-41.956 38.5h-23.034z"/><path d="M197.397 214.935h162.334c4.484 0 8.115-3.632 8.115-8.116s-3.631-8.115-8.115-8.115H197.397c-4.484 0-8.116 3.631-8.116 8.115s3.632 8.116 8.116 8.116zM223.046 261.967c0 4.484 3.642 8.115 8.126 8.115h152.119c4.484 0 8.126-3.631 8.126-8.115s-3.642-8.127-8.126-8.127H231.172c-4.484 0-8.126 3.642-8.126 8.127zM348.083 317.102a8.114 8.114 0 0 0-8.116-8.116h-142.57c-4.484 0-8.116 3.632-8.116 8.116s3.631 8.126 8.116 8.126h142.57c4.484 0 8.116-3.641 8.116-8.126zM391.417 372.249c0-4.484-3.642-8.115-8.126-8.115H249.689c-4.484 0-8.116 3.631-8.116 8.115s3.631 8.116 8.116 8.116h133.602c4.485 0 8.126-3.632 8.126-8.116z"/></svg>
          <span>Category description</span>
        </span>
        <textarea
          class="py-1 px-2 rounded text-blue-900 resize-none"
          name="description"
          cols="30"
          rows="8"
          placeholder="Description"
          required
        ></textarea>
      </label>
      <label class="flex flex-col">
        <button
          class="flex items-center justify-center px-4 py-2 rounded bg-blue-800 hover:bg-blue-700"
          type="button"
        >
          <svg class="mr-2 fill-current" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M512 1536h768v-384H512v384zm896 0h128V640q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28H480q-40 0-68-28t-28-68V256H256v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928V288q0-13-9.5-22.5T992 256H800q-13 0-22.5 9.5T768 288v320q0 13 9.5 22.5T800 640h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V224q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/></svg>
          <span>Save category</span>
        </button>
      </label>
    </form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                title: null,
                description: null,
            }
        }
    }
</script>
