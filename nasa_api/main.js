require('dotenv').config()

let h1 = document.querySelector("h1");
let descrption = document.querySelector('#description')
let now = new Date("2024-01-02T00:00:00Z");

h1.textContent = `Nasa api daily post: ${now}`;

 const apiKey=process.env.NASA_API_KEY;
url = "https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    descrption.textContent = `${data.explanation}`
  })
  .catch((err) => console.log(`error: ${err}`));
