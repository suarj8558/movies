<template>
  <div class="container mx-auto p-4">
    <!-- movie search bar -->
    <div class="mt-5 form_section">
      <form action="/Search-page" class="sm:w-5/12 w-full">
        <input
          v-model="searchInput"
          type="text"
          placeholder="Search your Movies"
          name="search"
          class="rounded w-full"
          autocomplete="off"
        >
        <ul v-if="searchInput" class="suggestion absolute z-50 bg-white shadow-md p-3 sm:w-4/12 w-11/12">
          <li v-for="search in data.results" :key="search.id" class="opacity-75 hover:opacity-100">
            <NuxtLink :to="`/_single/${search.id}`">
              { {search.title }}
            </NuxtLink>
          </li>
        </ul>
      </form>
    </div>
    <div>
      <Movies />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // using store
  mounted () {
    this.upcoming()
  },

  methods: {
    ...mapActions(['upcoming'])
  }
}
</script>
