let h1 = document.querySelector("h1");
let h2Title = document.querySelector("h2");
let descrption = document.querySelector("#description");
let now = new Date("2024-01-02T00:00:00Z");
let image = document.querySelector("img");
let video = document.querySelector("iframe");

h1.textContent = `Nasa api daily post: ${now}`;

url =
  "https://api.nasa.gov/planetary/apod?api_key=SWollBpigW0V9Ax1SHhgMsydLHSCV8AfftI3px3m";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    descrption.textContent = `${data.explanation}`;

    h2Title.textContent = `${data.title}`;
    console.log(`${data.url}`)
    image.src = `${data.url}`;
  })
  .catch((err) => console.log(`error: ${err}`));
