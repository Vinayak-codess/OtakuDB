async function getAnime() {
  const input = document.getElementById("animeName").value;
  const animeName = encodeURIComponent(input);
  var response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
  var data = await response.json();
  var anime = data.data;
  console.log(anime[0]);
  // console.log(anime.episodes)
  episode.innerHTML = anime[0].episodes;
  synopsis.innerHTML = anime[0].synopsis;
  // console.log(genre.name);
  // console.log(anime.genres[0])
  // genere.innerHTML = anime.genres;
  // genreLength = anime.genres;
  // console.log(genre.length);
}

async function animeGet() {
  var animeID = 21;
  var response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}`);
  var data = await response.json();
  var anime = await data.data;
  console.log(anime);
}

animeGet();
/*
README.md

# Anime Info Fetcher

This project is a simple JavaScript application that fetches anime information from the [Jikan API](https://jikan.moe/) and displays details such as episodes and synopsis.

## Features

- Search for anime by name and display episode count and synopsis.
- Fetch anime details by ID.


*/

