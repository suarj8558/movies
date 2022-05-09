<template>
  <div class="container mx-auto px-4">
    <!-- movie search bar -->
    <div class="mt-5 form_section">
      <form action="/Search-page" class="sm:w-5/12 w-full">
        <input
          v-model="searchInput"
          class="rounded w-full"
          type="text"
          placeholder="Search your Movies"
          name="search"
          autocomplete="off"
          @v-on:keyup="searchMovie(searchInput)"
        >
        <ul v-if="searchInput" class="suggestion absolute z-50 bg-white shadow-md p-3 sm:w-4/12 w-11/12">
          <li v-for="search in data.results" :key="search.id" class="opacity-75 hover:opacity-100">
            <NuxtLink :to="`/_single/${search.id}`">
              {{ search.title }}
            </NuxtLink>
          </li>
        </ul>
      </form>
    </div>
    <div class="movie-section">
      <Movies />
    </div>
  </div>
</template>

<script>
// import Modal from '~/components/Modal.vue';
import { mapState, mapActions } from 'vuex'
import Movies from '~/components/Movies.vue'

export default {
  components: {
    Movies
  },

  data () {
    return {
      searchInput: this.searchInput
    }
  },
  // using store
  computed: {
    ...mapState(['data'])
  },

  methods: {
    ...mapActions(['searchMovie'])
  }
}
</script>
