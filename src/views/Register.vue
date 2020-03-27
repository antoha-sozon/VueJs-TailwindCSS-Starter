<template>
  <div class="text-gray-800">
    <h1
      class="mb-4 text-center text-3xl uppercase"
    >
      Register new user
    </h1>
    <div class="flex sm:justify-end w-full -mb-4">
      <img class="hidden sm:block w-full object-cover" :src="bgimg" alt="">
      <div class="flex flex-col w-full sm:w-1/3 sm:px-8 text-sm uppercase">
        <form>
          <label class="flex flex-col mb-4">
            <span class="mb-2 ml-2">Name</span>
            <input class="px-4 py-2 rounded" type="text" placeholder="User name" required>
          </label>
          <label class="flex flex-col mb-4">
            <span class="mb-2 ml-2">Username</span>
            <input class="px-4 py-2 rounded" type="text" placeholder="User nickname" required>
          </label>
          <label class="flex flex-col mb-4">
            <span class="mb-2 ml-2">Email</span>
            <input class="px-4 py-2 rounded" type="email" placeholder="User email" required>
          </label>
          <label class="flex flex-col mb-4">
            <span class="mb-2 ml-2">Password</span>
            <input class="px-4 py-2 rounded" type="password" placeholder="User password" required>
          </label>
          <label class="flex flex-col mb-8">
            <span class="mb-2 ml-2">Repeat password</span>
            <input class="px-4 py-2 rounded" type="password" placeholder="Repeat user password" required>
          </label>
          <label class="flex items-center mb-8">
            <input class="ml-2 px-4 py-2 leading-tight rounded" type="checkbox" required>
            <span class="ml-2 text-sm normal-case">I agree to the processing of personal data</span>
          </label>
          <div class="flex justify-center">
            <button class="px-16 py-2 bg-blue-700 text-white text-xl rounded" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import bgimg from '../assets/auth_bg.png';
  export default {
    data() {
      return {
        bgimg,
      }
    }
  }
</script>