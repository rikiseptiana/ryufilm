<template>
  <div
    class="container mx-auto flex flex-col md:flex-row min-h-screen px-1 lg:px-11 py-4 gap-10"
  >
    <main class="flex-1">
      <!-- Movie List Section -->
      <h2 class="text-2xl font-bold mt-8 mb-4">Top Movies</h2>

      <!-- Movie Grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="(movie, index) in paginatedMovies"
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
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-center items-center mt-8 space-x-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span class="text-lg">{{ currentPage }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </main>
    <aside class="w-full md:w-1/4 mt-8 md:mt-0">
      <h2 class="text-2xl font-bold">Ikuti Kami</h2>
      <div class="grid grid-cols-2 sm:grid-cols-1 gap-4">
        <div
          v-for="(movie, index) in paginatedMovies"
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
          </div>
        </div>
      </div>
      <MovieCardComponent />
    </aside>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import naruto from "@/assets/img/naruto.jpg";
import bleach from "@/assets/img/bleach.jpg";
import onepiece from "@/assets/img/onepiece.jpg";

import MovieCardComponent from "@/components/MovieCardComponent.vue";

// Sample movies for the card list
const movies = ref([
  {
    title: "Naruto Shippuden",
    genre: "Action",
    poster: naruto,
  },
  {
    title: "Bleach",
    genre: "Action",
    poster: bleach,
  },
  {
    title: "One Piece",
    genre: "Adventure",
    poster: onepiece,
  },
  {
    title: "Movie 2",
    genre: "Drama",
    poster: "https://via.placeholder.com/300x400?text=Movie+2",
  },
  {
    title: "Movie 3",
    genre: "Comedy",
    poster: "https://via.placeholder.com/300x400?text=Movie+3",
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
  {
    title: "Movie 7",
    genre: "Thriller",
    poster: "https://via.placeholder.com/300x400?text=Movie+7",
  },
  {
    title: "Movie 8",
    genre: "Fantasy",
    poster: "https://via.placeholder.com/300x400?text=Movie+8",
  },
]);

// Pagination variables
const currentPage = ref(1);
const itemsPerPage = 5;

// Compute the total number of pages
const totalPages = computed(() =>
  Math.ceil(movies.value.length / itemsPerPage)
);

// Get the paginated movies for the current page
const paginatedMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return movies.value.slice(start, end);
});

// Methods to navigate between pages
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>
