<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to Movie Explorer</h1>
      <p class="hero-subtitle">Discover and explore your favorite movies!</p>
      <button class="hero-cta" @click="$emit('explore')">Explore Now</button>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this simple hero section
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background: linear-gradient(120deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  text-align: center;
}
.hero-content {
  max-width: 600px;
}
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.hero-cta {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  background: #ffb347;
  color: #222;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.hero-cta:hover {
  background: #ffcc80;
}
</style>