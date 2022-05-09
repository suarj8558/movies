
export const state = () => ({
  data: {},
  movie: []
})
// getters
export const getters = {
  singlemovieD (state) {
    return state.movie.lenght
  }
}
// actions
export const actions = {
  async getmovies ({ commit }) {
    if (process.client) {
      if (localStorage.getItem('movies') === null) {
        const movies = await this.$axios.$get('https://api.themoviedb.org/3/trending/movie/day?api_key=e9b397668e65893b94474842234d2947')
        const movieData = JSON.stringify(movies)
        localStorage.setItem('movies', movieData)
        const getmovie = localStorage.getItem('movies')
        const movie = JSON.parse(getmovie)
        commit('addData', movie)
        return movie
      } else {
        const getmovie = localStorage.getItem('movies')
        const movie = JSON.parse(getmovie)
        commit('addData', movie)
        return movie
      }
    }
  },
  // search movie
  async searchMovie ({ commit }, searchInput) {
    if (searchInput === '') {
      return
    }

    const searckey = searchInput
    if (process.client) {
      if (localStorage.getItem(searckey) === null) {
        const search = await this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=e9b397668e65893b94474842234d2947&language=en-US&query=${searckey}&include_adult=false`)
        const SearchData = JSON.stringify(search)
        localStorage.setItem(searckey, SearchData)

        const dataSearch = localStorage.getItem(searckey)
        const searchData = JSON.parse(dataSearch)
        commit('addSearch', searchData)
        return searchData
      } else {
        const dataSearch = localStorage.getItem(searckey)
        const searchData = JSON.parse(dataSearch)
        commit('addSearch', searchData)
        return searchData
      }
    }
  },
  // single movie
  async singleId ({ commit }, movieid) {
    // const movieid = movie_id
    if (process.client) {
      if (movieid !== null) {
        const data = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=e9b397668e65893b94474842234d2947&language=en-US`)
        const IdData = JSON.stringify(data)
        localStorage.setItem(movieid, IdData)
        const singledata = localStorage.getItem(movieid)
        const movie = JSON.parse(singledata)
        commit('singleMovie', movie)
        return movie
      }
    }
  },
  //  upcoming Movies
  async upcoming ({ commit }) {
    if (process.client) {
      if (localStorage.getItem('upcoming') === null) {
        const movie = await this.$axios.$get('https://api.themoviedb.org/3/movie/upcoming?api_key=e9b397668e65893b94474842234d2947&language=en-USpage=1')
        const movieData = JSON.stringify(movie)
        localStorage.setItem('upcoming', movieData)
        const fetchlocal = localStorage.getItem('upcoming')
        const localData = JSON.parse(fetchlocal)
        commit('Upcoming_movie', localData)
        return localData
      } else {
        const fetchlocal = localStorage.getItem('upcoming')
        const localData = JSON.parse(fetchlocal)
        commit('Upcoming_movie', localData)
        return localData
      }
    }
  },

  async popular ({ commit }) {
    if (process.client) {
      if (localStorage.getItem('popular') === null) {
        const popularmovie = await this.$axios.$get('https://api.themoviedb.org/3/movie/popular?api_key=e9b397668e65893b94474842234d2947&language=en-US&page=1')
        const movie = JSON.stringify(popularmovie)
        localStorage.setItem('popular', movie)
        const fetchmovie = localStorage.getItem('popular')
        const movieData = JSON.parse(fetchmovie)
        commit('popular_movies', movieData)
        return movieData
      } else {
        const fetchmovie = localStorage.getItem('popular')
        const movieData = JSON.parse(fetchmovie)
        commit('popular_movies', movieData)
        return movieData
      }
    }
  }
}
// mutations
export const mutations = {
  addData (state, movie) {
    state.data = { ...movie }
  },

  addSearch (state, searchData) {
    state.data = searchData
  },

  // single movie add
  singleMovie (state, movie) {
    state.movie = movie
  },

  // upcoming movies
  Upcoming_movie (state, localData) {
    state.data = localData
  },
  // popular movies
  popular_movies (state, movieData) {
    state.data = movieData
  }
}
