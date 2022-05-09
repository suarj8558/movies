<template>
  <div class="container mx-auto p-4">
    <!-- movie search bar -->
    <div class="mt-5 flex justify-center">
      <form action="/search-page" class="w-full">
        <input v-model="searchInput" type="text" placeholder="Search your Movies" name="search" class="rounded w-4/5">
      </form>
    </div>
    <!-- suggestion Box  -->
    <!-- <div class="text-blue m-4 flex" v-if="searchInput">
    <p class="p-2.5 bg-slate-300 rounded-3xl">{{searchInput}}</p>
    </div> -->
    <!-- show movies list  -->
    <div>
      <Movies />
    </div>
    <!-- pagination buttons  -->
    <!-- <div class="pagination flex justify-between my-4">
      <NuxtLink  v-if="current_page > 1" class="px-8 rounded-full bg-black text-white" :to="`?search=${searchInput}&page=${current_page == 1 ? current_page : (current_page - 1)}`">Preview</NuxtLink>
        <div class="pagenumber  inline-block">
          <pre v-html="$router.params" />
        </div>
      <NuxtLink class="px-8 rounded-full bg-black text-white" :to="`?search=${searchInput}&page=${Number( current_page) + 1}`"> Next </NuxtLink>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      // data:[],
      searchInput: this.$route.query.search
      // current_page: this.$route.query.page ? this.$route.query.page : 1,
    }
  },
  computed: {
    ...mapState(['data'])
  },
  mounted () {
    this.searchMovie(this.searchInput)
  },
  methods: {
    ...mapActions(['searchMovie'])
  }
}
</script>
