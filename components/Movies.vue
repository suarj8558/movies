<template>
  <div v-if="data" class="movies__container grid grid-cols-1 sm:grid-cols-4 mt-5 gap-4">
    <div v-for="movieData in data.results" :key="movieData.id" class="movies">
      <div class="movies-list border-black shadow-md rounded overflow-hidden relative">
        <img :src="`https:image.tmdb.org/t/p/w500${movieData.backdrop_path}`" :alt="movieData.title" class="w-full min-h-[230px] text-center bg-white">
        <h2 class="absolute top-0 text-white bg-red-900 w-8 h-8 flex justify-center content-center p-1">
          {{ movieData.vote_average }}
        </h2>
        <div class="leading-8 p-2 bg-white">
          <p class="">
            <strong>Movie Name : </strong>
            {{ movieData.original_title.slice(0 , 25) }}
            <span v-if="movieData.original_title.length > 25">...</span>
          </p>
          <p class="">
            <strong>popularity : </strong>
            {{ movieData.popularity }}
          </p>
          <p class="">
            <strong>Release Date : </strong>
            {{ movieData.release_date }}
          </p>
          <p class="">
            <strong>Overview : </strong>
            {{ movieData.overview.slice(0, 25) }}
            <span v-if="movieData.overview.length > 25">...</span>
          </p>
          <NuxtLink class="btn flex justify-center text-black hover:text-red-900" :to="`/_single/${movieData.id}`">
            Read more
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState(['data']),
  created () {
    this.getmovies()
  },
  methods: {
    ...mapActions(['getmovies'])
  }
}
</script>
