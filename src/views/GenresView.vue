<template>
  <div class="container mx-auto min-h-screen px-1 lg:px-11 py-4 bg-base-300">
    <!-- Movie List Section -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Genre</h2>

    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div
        class="card lg:card-side bg-base-100 shadow-xl"
        v-for="movie in movies"
      >
        <figure>
          <img
            :src="movie.poster"
            alt="Movie"
            class="w-64 h-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ movie.title }}</h2>
          <p>posted on</p>
          <p>categories :</p>
          <p>episode :</p>
          <p>rating :</p>
          <p>release date :</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import naruto from "@/assets/img/naruto.jpg";
import bleach from "@/assets/img/bleach.jpg";
import onepiece from "@/assets/img/onepiece.jpg";

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
