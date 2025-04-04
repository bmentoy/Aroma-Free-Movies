// movies.js

// Movies array
const movies = [
  {
    title: "Avatar: The Way of Water",
    image: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    description: "Avatar: The Way of Water is a 2022 epic science fiction film directed by James Cameron. It follows the story of the Sully family as they explore the oceans of Pandora.",
    video: "https://drive.google.com/file/d/1jU2_eqK0c5Wkx5qpmAJEdUX8kTdA_sWl/preview", // Updated URL
    audioLanguages: ["English", "Hindi"],
    captions: ["English", "Hindi"]
  },
  {
    title: "Marco",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Marco_Malayalam_film.jpg",
    description: "Marco is a 2024 Indian Malayalam-language action thriller film starring Unni Mukundan in the titular role.",
    video: "https://drive.google.com/file/d/1jxB5Ata4Qj2qd6p5m8WqYSYW_zRgaJkf/preview", // Updated URL
    audioLanguages: ["English", "Hindi"],
    captions: ["English", "Hindi"]
  },
  {
    title: "Shang-Chi and the Legend of Ten Rings",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description: "Shang-Chi confronts his past when his father Wenwu draws him and his sister into a search for a mythical village.",
    video: "https://drive.google.com/file/d/1kZsX5TIOo-w6QfJj4eBIzKGBh1B5_nyb/preview", // Updated URL
    audioLanguages: ["English", "Hindi"],
    captions: ["English", "Hindi"]
  }
];

// Function to add a new movie
function addMovie(title, image, description, video = null, audioLanguages = ["English", "Hindi"], captions = ["English", "Hindi"]) {
  movies.push({ title, image, description, video, audioLanguages, captions });
}

// Export the movies array and addMovie function
export { movies, addMovie };

// Add more movies
addMovie(
  "Oppenheimer",
  "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
  "Oppenheimer is a 2023 epic biographical drama film of J. Robert Oppenheimer by Christopher Nolan.",
  "https://drive.google.com/file/d/14syFd7_mdFV3bzj29ABxo95ZhdK1adMI/preview", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);

addMovie(
  "Dream Girl 2",
  "https://upload.wikimedia.org/wikipedia/en/5/57/Dream_Girl_2_film_poster.jpg",
  "Dream Girl 2 is a 2023 Indian Hindi-language comedy-drama film...",
  "https://drive.google.com/file/d/19t-tzYbW2Ehu90wvGPv85es51Y7Kalk3/preview", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);

addMovie(
  "Game Changer",
  "https://upload.wikimedia.org/wikipedia/en/6/6a/Game_Changer_Telugu.jpg",
  "Game Changer is a 2025 Indian Telugu-language political action film.",
  "https://drive.google.com/file/d/1Ag6rYpZ991bCvkXIqDDAfmMO-MCPYimN/preview", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);

addMovie(
  "Azaad",
  "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Azaa_film_poster.jpg/250px-Azaa_film_poster.jpg",
  "Azaad is a 2025 Indian Hindi-language period action drama film directed by Abhishek Kapoor and produced by Ronnie Screwvala and Pragya Kapoor. The film stars Ajay Devgn and Diana Penty alongside debutants Aaman Devgan and Rasha Thadani.",
  "https://drive.google.com/file/d/182KXFzkKJGptK92azdVvnU95HoQtZQfI/view?usp=sharing", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);

addMovie(
  "Friends with Benefits",
  "https://upload.wikimedia.org/wikipedia/en/4/4e/Friends_with_benefits_poster.jpg",
  "Friends with Benefits is a 2011 American romantic comedy film directed by Will Gluck and starring Justin Timberlake and Mila Kunis. The film features Patricia Clarkson, Jenna Elfman, Bryan Greenberg, Nolan Gould, Richard Jenkins, and Woody Harrelson in supporting roles. The plot revolves around Dylan Harper (Timberlake) and Jamie Rellis (Kunis), who meet in New York City, and naively believe adding sex to their friendship will not lead to complications. Over time, they begin to develop deep feelings for each other, only to deny it each time they are together.",
  "https://drive.google.com/file/d/1QaMaNnKmwpoFjY_1wC1h02hH5l6aZFDv/view?usp=sharing", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);

addMovie(
  "Headless 2015",
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Headlessposter.jpg/220px-Headlessposter.jpg",
  "Headless is a 2015 American horror film directed by Arthur Cullipher. It is based on the film within a film from the 2012 horror film Found. The film was funded by donors from Kickstarter, and the first festival screening was in February 2015 in Indianapolis.",
  "https://drive.google.com/file/d/17RU4XDvXaOx6H65hjPyBS529dbFOBhJi/view?usp=sharing", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);

addMovie(
  "The Babysitters",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Babysitters07poster.jpg/250px-Babysitters07poster.jpg",
  "The Babysitters is a 2007 independent drama film written and directed by David Ross. It stars John Leguizamo, Katherine Waterston and Cynthia Nixon, with Andy Comeau and Denis O'Hare. The story follows a teenager who turns her babysitting service into a call girl service for married men after fooling around with one of her customers.",
  "https://drive.google.com/file/d/1EGIvk0oMdviMbSWKWyGQbzt3Z831ew0q/view?usp=sharing", // Updated URL
  ["English", "Hindi"], // Custom audio languages
  ["English", "Hindi"]  // Custom captions
);
