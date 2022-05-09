<template>
  <div class="app bg-[#f0f8ff] max-w-full">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/Header/Header-section.vue';
import Footer from '~/components/Footer/Footer-section.vue';
export default {
  components: {
    Header,
    Footer

  }
}
</script>
