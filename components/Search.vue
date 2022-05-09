<template>
  <!-- movie search bar -->
  <div class="mt-5 flex justify-around">
    <form action="" class="w-full">
      <input
        v-model="searchInput"
        class="rounded w-4/5"
        type="text"
        placeholder="Search your Movies"
        name="search"
        @v-on:keyup="searchMovie()"
      >
    </form>
  </div>
</template>

<script>
export default {
  props: []
}
</script>

<style>

</style>
