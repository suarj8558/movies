<template>
  <header>
    <div class="sm:flex flex-none text-center justify-evenly content-center items-center bg-black text-white py-4">
      <div class="site-logo">
        <h1 class="text-3xl text-red-900 font-extrabold"><NuxtLink to="/"> The Movies </NuxtLink> </h1>
      </div>
      <ul class="inline-flex">
        <li class="px-4 text-xl hover:text-red-900 transition delay-150 duration-300 ease-in-out"> <NuxtLink to="/">Home</NuxtLink></li>
        <li class="px-4 text-xl hover:text-red-900 transition delay-150 duration-300 ease-in-out"> <NuxtLink to="/upcoming"> Upcoming </NuxtLink></li>
        <li class="px-4 text-xl hover:text-red-900 transition delay-150 duration-300 ease-in-out"> <NuxtLink to="/popular">Popular</NuxtLink></li>
      </ul>
    </div>
  </header>
  <!-- <div class="bg-header-img bg-cover bg-center w-full bg-no-repeat h-96">
    <div class="content p-20">
      <h1 class="text-3xl  font-bold text-red-900"> Latest movies </h1>
      <h1 class="text-9xl p-5 text-white"> <strong>Now</strong> Streaming</h1>
      <div class="btn btn-blue inline-block"> Views Movies</div>
    </div>
  </div> -->
</template>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }

  .btn-blue {
    @apply bg-red-900 text-white;
  }

  .btn-blue:hover {
    @apply bg-white text-black;
  }
</style>
