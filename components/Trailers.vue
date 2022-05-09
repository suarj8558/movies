<template>
  <div v-if="video.results" class="trailer mt-10">
    <h2 class="font-bold text-3xl px-0 py-3"> Watch Trailers </h2>
    <iframe
      class="w-full"
      height="600"
      :src="`https://www.youtube.com/embed/${video.results.at(0).key}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <!-- </iframe> -->
  </div>
</template>

<script>
export default {
  props: ['video'],
  data () {
    return {
      id: this.$route.params.id
    }
  }
}

</script>

<style>

</style>
