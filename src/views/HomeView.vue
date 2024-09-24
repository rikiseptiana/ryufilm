<template>
  <div class="container mx-auto px-2 lg:px-11 py-4">
    <!-- Carousel Section -->
    <div class="relative overflow-hidden max-w-full">
      <!-- Wrapper for carousel items -->
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(banner, index) in banners"
          :key="index"
          class="min-w-full h-64 overflow-hidden"
        >
          <img
            :src="banner"
            class="w-full h-full object-cover"
            alt="Banner Image"
          />
        </div>
      </div>

      <!-- Carousel controls -->
      <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        @click="prevSlide"
      >
        ‹
      </button>
      <button
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        @click="nextSlide"
      >
        ›
      </button>
    </div>

    <!-- Movie List Section -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Update Terbaru</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
    >
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      >
        <img
          :src="movie.poster"
          alt="Movie Poster"
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
          <p class="text-gray-500 text-sm">{{ movie.genre }}</p>
          <span class="text-gray-800 text-sm badge badge-primary"> anime </span>
          <span class="text-gray-800 text-sm badge badge-primary">
            on going
          </span>
        </div>
      </div>
    </div>
    <!-- Movie List Section -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Latest Movies</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      >
        <img
          :src="movie.poster"
          alt="Movie Poster"
          class="w-full h-64 object-cover"
        />
        <div class="p-4 gap-2">
          <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
          <p class="text-gray-500 text-sm">{{ movie.genre }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import banner1 from "@/assets/img/naruto.jpg";
import banner2 from "@/assets/img/bleach.jpg";
import banner3 from "@/assets/img/onepiece.jpg";

// Sample banners for the carousel
const banners = ref([banner1, banner2, banner3]);

// Sample movies for the card list
const movies = ref([
  {
    title: "Naruto Shippuden",
    genre: "Action",
    poster: banner1,
  },
  {
    title: "Bleach",
    genre: "Drama",
    poster: banner2,
  },
  {
    title: "One Piece",
    genre: "Comedy",
    poster: banner3,
  },
  {
    title: "Movie 4",
    genre: "Horror",
    poster: "https://via.placeholder.com/300x400?text=Movie+4",
  },
  {
    title: "Movie 5",
    genre: "Romance",
    poster: "https://via.placeholder.com/300x400?text=Movie+5",
  },
  {
    title: "Movie 6",
    genre: "Sci-Fi",
    poster: "https://via.placeholder.com/300x400?text=Movie+6",
  },
]);

// Carousel logic
const currentSlide = ref(0);
const totalSlides = banners.value.length;

// Move to next slide, looping back to the first slide if necessary
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
};

// Move to previous slide, looping back to the last slide if necessary
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
};

// Autoplay feature (optional)
onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
});
</script>

<style scoped>
/* Optional CSS styling */
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
}
</style>
