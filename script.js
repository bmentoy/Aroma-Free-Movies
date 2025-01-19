// Define the movies array
const movies = [
    {
        title: "Avatar: The Way of Water",
        image: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
        description: "Avatar: The Way of Water is a 2022 epic science fiction film...",
        video: "https://drive.google.com/file/d/1jU2_eqK0c5Wkx5qpmAJEdUX8kTdA_sWl/view?usp=sharing",
    },
    {
        title: "Marco",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Marco_Malayalam_film.jpg",
        description: "Marco is a 2024 Indian Malayalam-language action thriller film...",
        video: "https://drive.google.com/file/d/1SQPvtLFxCG8Or7gwOkYttHdBGfRoAEjT/view?usp=sharing",
    },
    {
        title: "Shang-Chi and the Legend of Ten Rings",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
        description: "Shang-Chi and the Legend of the Ten Rings is a 2021 American superhero film...",
        video: "https://drive.google.com/file/d/1kZsX5TIOo-w6QfJj4eBIzKGBh1B5_nyb/view?usp=sharing",
    },
];

// Add movie dynamically
function addMovie(title, image, description, video = null) {
    movies.push({ title, image, description, video });
    displayMovies(); // Refresh the movie list display
}

// Display movies in the DOM
function displayMovies(filteredMovies = movies) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    filteredMovies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        // Add a click event only if a video URL is available
        movieCard.addEventListener("click", () => {
            if (movie.video) {
                playMovie(movie.video);
            } else {
                alert("Video not available!");
            }
        });

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-details">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
}

// Play movie function
function playMovie(videoUrl) {
    window.open(videoUrl, "_blank");
}

// Search function
function searchMovie() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue)
    );
    displayMovies(filteredMovies); // Display filtered movies
}

// Add additional movies
addMovie(
    "Dream Girl 2",
    "https://upload.wikimedia.org/wikipedia/en/5/57/Dream_Girl_2_film_poster.jpg",
    "Dream Girl 2 is a 2023 Indian Hindi-language comedy-drama film...",
    "https://drive.google.com/file/d/1XYZDreamGirlLink/view?usp=sharing"
);
addMovie(
    "Oppenheimer",
    "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    "Oppenheimer is a 2023 epic biographical drama film by Christopher Nolan...",
    "https://drive.google.com/file/d/1XYZOppenheimerLink/view?usp=sharing"
);
addMovie(
    "Game Changer",
    "https://upload.wikimedia.org/wikipedia/en/6/6a/Game_Changer_Telugu.jpg",
    "Game Changer is a 2025 Indian Telugu-language political action film...",
    "https://drive.google.com/file/d/1Ag6rYpZ991bCvkXIqDDAfmMO-MCPYimN/view?usp=drive_link"
);

// Display movies on load
displayMovies();
