// Toggle menu for mobile view
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Movies array
const movies = [
    {
        title: "Avatar: The Way of Water",
        image: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
        description: "Avatar: The Way of Water is a 2022 epic science fiction film. It follows a blue-skinned humanoid Na'vi named Jake Sully as he and his family, under renewed human threat, seek refuge with the aquatic Metkayina clan of Pandora.",
        video: "https://drive.google.com/file/d/1jU2_eqK0c5Wkx5qpmAJEdUX8kTdA_sWl/view?usp=sharing"
    },
    {
        title: "Marco",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Marco_Malayalam_film.jpg",
        description: "Marco is a 2024 Indian Malayalam-language action thriller film starring Unni Mukundan in the titular role.",
        video: "https://drive.google.com/file/d/1jxB5Ata4Qj2qd6p5m8WqYSYW_zRgaJkf/view?usp=drivesdk"
    },
    {
        title: "Shang-Chi and the Legend of Ten Rings",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
        description: "Shang-Chi confronts his past when his father Wenwu draws him and his sister into a search for a mythical village.",
        video: "https://drive.google.com/file/d/1kZsX5TIOo-w6QfJj4eBIzKGBh1B5_nyb/view?usp=sharing"
    }
];

// Dynamically add movies to the list
function addMovie(title, image, description, video = null) {
    movies.push({ title, image, description, video });
}

// Render movies on the page
function displayMovies(filteredMovies = movies) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; // Clear previous content

    if (filteredMovies.length === 0) {
        movieList.innerHTML = `<p class="no-results">No movies found. Please try a different search.</p>`;
        return;
    }

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.addEventListener("click", () => playMovie(movie.video));

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

// Search for movies by title
function searchMovie() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchValue)
    );
    displayMovies(filteredMovies);
}

// Open movie video link
function playMovie(videoUrl) {
    if (videoUrl) {
        window.open(videoUrl, "_blank");
    } else {
        alert("Video not available!");
    }
}

// Add additional movies dynamically
addMovie(
    "Dream Girl 2",
    "https://upload.wikimedia.org/wikipedia/en/5/57/Dream_Girl_2_film_poster.jpg",
    "Dream Girl 2 is a 2023 Indian Hindi-language comedy-drama film.",
    "https://drive.google.com/file/d/19t-tzYbW2Ehu90wvGPv85es51Y7Kalk3/view?usp=drive_link"
);

addMovie(
    "Oppenheimer",
    "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    "Oppenheimer is a 2023 epic biographical drama film of J. Robert Oppenheimer by Christopher Nolan.",
    "https://drive.google.com/file/d/14syFd7_mdFV3bzj29ABxo95ZhdK1adMI/view?usp=drive_link"
);

addMovie(
    "Game Changer",
    "https://upload.wikimedia.org/wikipedia/en/6/6a/Game_Changer_Telugu.jpg",
    "Game Changer is a 2025 Indian Telugu-language political action film.",
    "https://drive.google.com/file/d/1Ag6rYpZ991bCvkXIqDDAfmMO-MCPYimN/view?usp=drive_link"
);

// Display all movies on page load
displayMovies();
