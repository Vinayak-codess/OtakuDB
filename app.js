async function getAnime() {
  const input = document.getElementById("animeName").value.trim();

  if (input === "") {
    const errorDisplay = document.createElement("h2");
    errorDisplay.textContent = "Please Enter an Anime Name";
    document.body.appendChild(errorDisplay);
    return; 
  }

  const animeName = encodeURIComponent(input);
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
  const data = await response.json();
  const anime = data.data;

  if (anime.length === 0) {
    const errorDisplay = document.createElement("h2");
    errorDisplay.textContent = "No results found";
    document.body.appendChild(errorDisplay);
    return;
  }

  console.log(anime[0]);
  episode.innerHTML = anime[0].episodes;
  synopsis.innerHTML = anime[0].synopsis;
}
