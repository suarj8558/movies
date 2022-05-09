<template>
  <div class="single__movie container mx-auto p-4 relative">
    <div class="heading"> 
      <h2 class="heading text-center text-3xl p-9 font-bold">{{movie.title}}</h2>
    </div>
    <NuxtLink to="/" class="bg-red-900 hover:bg-black font-bold text-white px-3 p-2 rounded"> Back </NuxtLink>
    <!-- <div class="trailer mt-10">
      <h2 class="font-bold text-3xl px-0 py-3"> Watch Trailers </h2>
      <iframe class="w-full" height="600" :src="`https://www.youtube.com/embed/${video.results.at(0).key}`" title="YouTube video player" frameborder="0" allow="accelerometer;   autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div> -->
    
    
    <div class="sm:grid sm:grid-cols-header gap-8 my-4 rounded-lg bg-white shadow-lg relative"> 
      <div class="hero-img mx-auto">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"  :alt="movie.original_title">
      </div>
      <div class="details text-2xl leading-12 p-4 ">
        <p> <strong>Movie Name : </strong>{{movie.original_title}}</p>
        <p><strong> Release Date : </strong>  {{movie.release_date}}</p>
        <p> <strong>People Likes : </strong>{{movie.popularity}}</p>
        <p><strong>Movie budget : </strong> <strong>Rs.</strong> {{movie.budget}}</p>
        <p><strong> Movie Revenue : </strong> <strong>Rs.</strong> {{movie.revenue}}</p>
        <p><strong> Vote Average : </strong>  {{ movie.vote_average}}</p>
        <p> <strong>Overview : </strong>{{movie.overview}}</p>

        <!-- <button type="button" @click="togalmodel = !togalmodel" class="inline-block px-6 py-2.5 bg-red-900 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out">Watch Trailer</button> -->
      </div>
    </div>
    <pre>{{singlemovieD}}</pre>
  </div>

</template>

<script>
// import Modal from '~/components/Modal.vue';
import { mapActions, mapState , mapGetters} from "vuex";
export default {
  
  data() {
    return {
      movieid: this.$route.params.id,  
    }
  },

  // using store
     mounted(){
      this.singleId(this.movieid);
    },

    computed: {
      ...mapState({
        movie : 'movie' 
      }),
      ...mapGetters(['singlemovieD'])
    },

    methods:  {
      ...mapActions(['singleId'])
    },

  // async singleID( store , params){
  //   let mivieid = params.id;
  //   if (process.client){
  //     if (mivieid !== null ) {
  //       let data = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${mivieid}?api_key=e9b397668e65893b94474842234d2947&language=en-US`); 
  //       let IdData = JSON.stringify(data);
  //       localStorage.setItem(mivieid, IdData);
  //       let singledata = localStorage.getItem(mivieid);
  //       let movie = JSON.parse(singledata);
  //       store.commit('single_movie', movie)
  //     } 
  //   } 
  // },
  // async asyncData({ $axios,params}) {
  //   var mivieid = params.id;
  //   let videos = await $axios.$get(`https://api.themoviedb.org/3/movie/${mivieid}/videos?api_key=e9b397668e65893b94474842234d2947&language=en-US`);
  //   let data = await $axios.$get(`https://api.themoviedb.org/3/movie/${mivieid}?api_key=e9b397668e65893b94474842234d2947&language=en-US`);
  
  //   return {
  //     video : videos,
  //     movie : data
     
  //   }
  // },
  
  // methods:{
    // async getMovie(){
    //   let mivieid = this.$route.params.id;
    //   if (process.client) { 
    //     if(mivieid !== null ) {
    //       let videos = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${mivieid}/videos?api_key=e9b397668e65893b94474842234d2947&language=en-US`);
    //      let Idvideos= JSON.stringify(videos);
    //       localStorage.setItem(mivieid, Idvideos);
    //       let singlevideos = localStorage.getItem(Idvideos);
    //       this.video = JSON.parse(singlevideos);

    //     }
         
    //   }
    // }
  // },
  
  components: {
    // Modal
  }
}
</script>

<style>

</style>