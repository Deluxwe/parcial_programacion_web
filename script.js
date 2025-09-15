const base_url = "https://api.chucknorris.io/";
const endpoint = "jokes/random";
const url = `${base_url}${endpoint}`;

const getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((datos) => {
      document.getElementById("show-info").textContent = datos.value;
    })
    .catch((error) => console.error("Error:", error));
};

