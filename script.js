// script.js

// Import movies data from movies.js
import { movies, addMovie } from './movies.js';

// Initialize variables
let currentPage = 1;
const moviesPerPage = 6;

// Render movies dynamically on the page
function displayMovies(filteredMovies = movies, page = 1) {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // Clear previous content

  const start = (page - 1) * moviesPerPage;
  const end = start + moviesPerPage;
  const paginatedMovies = filteredMovies.slice(start, end);

  if (paginatedMovies.length === 0) {
    movieList.innerHTML = `<p class="no-results">No movies found. Please try a different search.</p>`;
    return;
  }

  paginatedMovies.forEach(movie => {
    if (!movie.title || !movie.image || !movie.description) {
      console.error("Invalid movie data:", movie);
      return;
    }

    const movieCard = document.createElement("article");
    movieCard.classList.add("movie-card");
    movieCard.dataset.title = movie.title; // Add dataset for easy identification
    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" loading="lazy">
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
      </div>
    `;
    movieList.appendChild(movieCard);
  });

  console.log("Movie cards rendered:", paginatedMovies.length); // Debugging log
}

// Handle movie card clicks using event delegation
function handleMovieCardClick(event) {
  const movieCard = event.target.closest(".movie-card");
  if (movieCard) {
    const movieTitle = movieCard.dataset.title; // Get title from dataset
    console.log("Movie card clicked:", movieTitle); // Debugging log
    const movie = movies.find(m => m.title === movieTitle);
    if (movie) {
      openModal(movie);
    }
  }
}

// Search for movies by title
function searchMovie() {
  showLoadingSpinner();
  setTimeout(() => {
    const searchValue = document.getElementById("search").value.toLowerCase().trim();
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchValue)
    );
    currentPage = 1; // Reset to the first page
    displayMovies(filteredMovies, currentPage);
    hideLoadingSpinner();
  }, 500); // Simulate a delay for demonstration
}

// Debounce function for search
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}

// Apply saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.querySelector(".menu");
  const menuToggle = document.getElementById("menu-toggle");

  menu.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", menu.classList.contains("active"));
}

// Close mobile menu when clicking outside
function closeMobileMenuOnClickOutside(event) {
  const menu = document.querySelector(".menu");
  const menuToggle = document.getElementById("menu-toggle");

  if (!event.target.closest(".navbar") && menu.classList.contains("active")) {
    menu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
}

// Load More Movies
function loadMoreMovies() {
  currentPage++;
  displayMovies(movies, currentPage);
}

// Show Loading Spinner
function showLoadingSpinner() {
  document.getElementById("loading-spinner").style.display = "block";
}

// Hide Loading Spinner
function hideLoadingSpinner() {
  document.getElementById("loading-spinner").style.display = "none";
}

// Back to Top Button
function handleBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Movie Modal
let modal, modalTitle, modalTrailer, modalDescription, closeModalButton;

function initializeModal() {
  modal = document.getElementById("movie-modal");
  modalTitle = document.getElementById("modal-title");
  modalTrailer = document.getElementById("modal-trailer");
  modalDescription = document.getElementById("modal-description");
  closeModalButton = document.querySelector(".close-modal");

  console.log("Modal initialized"); // Debugging log

  // Close modal when clicking outside the content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal when clicking the close button
  closeModalButton.addEventListener("click", closeModal);
}

function openModal(movie) {
  console.log("Opening modal for movie:", movie.title); // Debugging log
  modalTitle.textContent = movie.title;
  modalTrailer.src = movie.video; // Use the updated video URL
  modalDescription.textContent = movie.description;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  modalTrailer.src = ""; // Stop the video when modal is closed
}

// Initialize Event Listeners
function initializeEventListeners() {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when clicking outside
  window.addEventListener("click", closeMobileMenuOnClickOutside);

  // Search Input Event Listener
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", debounce(searchMovie, 300));

  // Load More Button
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.addEventListener("click", loadMoreMovies);

  // Back to Top Button
  handleBackToTop();

  // Initialize Modal
  initializeModal();

  // Attach event listener to movie list for delegation
  const movieList = document.getElementById("movie-list");
  movieList.addEventListener("click", handleMovieCardClick);
}

// Initialize the app
function initializeApp() {
  applySavedTheme();
  displayMovies(movies, currentPage);
  initializeEventListeners();
}

// Run the app
document.addEventListener("DOMContentLoaded", initializeApp);
