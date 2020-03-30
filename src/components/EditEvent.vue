<template>
  <div>
    <form class="flex flex-col pt-16 pb-4 px-4 md:w-1/3 min-h-screen text-white bg-blue-900 shadow-2xl">
      <h3 class="mb-4 text-3xl">Add event</h3>
      <label class="flex flex-col mb-6">
        <span class="flex items-center mb-2 ml-2">
          <svg class="mr-2 fill-current" height="20" viewBox="-0.891 -22.184 141.732 141.732" xmlns="http://www.w3.org/2000/svg"><path d="M32.909 24.472c0-5.621-4.535-10.181-10.129-10.181-5.594 0-10.127 4.56-10.127 10.181S17.186 34.65 22.78 34.65s10.129-4.556 10.129-10.178M9.717 87.969s-.098.134-.239.354h120.996c-.011-.013-.019-.021-.027-.037L89.151 32.069s-4.896-6.664-9.789 0L53.807 66.86l-9.4-12.805s-4.895-6.662-9.787 0L9.717 87.969zm124.85 3.987H5.382V5.409h129.186v86.547h-.001zm5.384 2.704V2.705A2.698 2.698 0 0 0 137.261 0H2.692A2.699 2.699 0 0 0 0 2.705V94.66a2.698 2.698 0 0 0 2.691 2.705h134.57a2.698 2.698 0 0 0 2.69-2.705"/></svg>
          Event banner
        </span>
        <input
          type="file"
          name="file"
          required
        >
      </label>
      <label class="flex flex-col mb-6">
          <span class="flex items-center mb-2 ml-2">
            <svg class="mr-2 fill-current" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20 20v-8h-8v2H8v-4h2V2H2v8h4v16h6v4h8v-8h-8v2.001L8 24v-8h4v4z"/></svg>
            <span>Event category</span>
          </span>
        <select
          class="py-1 px-2 rounded text-blue-900"
          name="category"
          required
        >
          <option  selected disabled>Select category</option>
          <option  value="Category 1">Category 1</option>
          <option  value="Category 2">Category 2</option>
          <option  value="Category 3">Category 3</option>
        </select>
      </label>
      <div class="flex justify-between mb-6">
        <label class="flex flex-col w-1/2 pr-4">
          <span class="flex items-center mb-2 ml-2">
            <svg class="mr-2 fill-current" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h32v32H0z"/><path d="M4 6v4h8v18h4V10h8V6zM30 4V2h-6v2h2v24h-2v2h6v-2h-2V4z"/></svg>
            <span>Event title</span>
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
        <label class="flex flex-col w-1/2 pl-4">
          <span class="flex items-center mb-2 ml-2">
            <svg class="mr-2 fill-current" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.9 1H18c0-.6-.4-1-1-1s-1 .4-1 1H8c0-.6-.4-1-1-1S6 .4 6 1H1.1C.5 1 0 1.5 0 2.1v20.8c0 .6.5 1.1 1.1 1.1h21.8c.6 0 1.1-.5 1.1-1.1V2.1c0-.6-.5-1.1-1.1-1.1zM22 22H2V8h20v14zm0-15H2V3h4v1c0 .6.4 1 1 1s1-.4 1-1V3h8v1c0 .6.4 1 1 1s1-.4 1-1V3h4v4z"/><path d="M10.3 17.7c.4.4 1 .4 1.4 0l4.1-4.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L11 15.7l-1.4-1.4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.1 2z"/></svg>
            <span>Event date</span>
          </span>
          <input
            class="py-1 px-2 rounded text-blue-900"
            type="date"
            name="date"
            placeholder="Date"
            value=""
            required
          >
        </label>
      </div>
      <label class="flex flex-col mb-8">
        <span class="flex items-center mb-2 ml-2">
          <svg class="mr-2 fill-current" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M449.441 393.818V178.852c0-31.555-27.967-57.236-62.365-57.236H369.99v-3.434c0-31.566-27.967-57.236-62.365-57.236h-182.7c-34.388 0-62.365 25.67-62.365 57.236v214.965c0 31.555 27.978 57.236 62.365 57.236h17.084v3.435c0 31.565 27.978 57.235 62.366 57.235h182.7c34.399 0 62.366-25.669 62.366-57.235zm-85.4 38.5H204.375c-23.177 0-41.956-17.237-41.956-38.5V178.852c0-21.263 18.779-38.5 41.956-38.5H387.075c23.177 0 41.956 17.237 41.956 38.5v214.966c0 21.263-18.779 38.5-41.956 38.5h-23.034z"/><path d="M197.397 214.935h162.334c4.484 0 8.115-3.632 8.115-8.116s-3.631-8.115-8.115-8.115H197.397c-4.484 0-8.116 3.631-8.116 8.115s3.632 8.116 8.116 8.116zM223.046 261.967c0 4.484 3.642 8.115 8.126 8.115h152.119c4.484 0 8.126-3.631 8.126-8.115s-3.642-8.127-8.126-8.127H231.172c-4.484 0-8.126 3.642-8.126 8.127zM348.083 317.102a8.114 8.114 0 0 0-8.116-8.116h-142.57c-4.484 0-8.116 3.632-8.116 8.116s3.631 8.126 8.116 8.126h142.57c4.484 0 8.116-3.641 8.116-8.126zM391.417 372.249c0-4.484-3.642-8.115-8.126-8.115H249.689c-4.484 0-8.116 3.631-8.116 8.115s3.631 8.116 8.116 8.116h133.602c4.485 0 8.126-3.632 8.126-8.116z"/></svg>
          <span>Event description</span>
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
          <span>Save event</span>
        </button>
      </label>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null,
        title: null,
        description: null,
        date: null,
      }
    }
  }
</script>
