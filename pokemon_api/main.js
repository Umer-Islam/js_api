let button = document.querySelector("#formSubmit");
let formText = document.querySelector(".nameOfCharacter");
let buttonPress = () => {
  return button.addEventListener("click", apiCall);
};

let apiCall = () => {
  document.querySelector('#wait').textContent= 'wait... while we fetch your pokemon'
  formTextValue = formText.value;
  console.log(formTextValue);
  let url = `https://pokeapi.co/api/v2/pokemon/${formTextValue}/`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.querySelector("h2").textContent = data.name;
      document.querySelector('img').src = data.sprites.front_default;
      
    })
    .catch((err) => console.log(err));
  // display data on DOM
};
