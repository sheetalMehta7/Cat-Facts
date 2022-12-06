const url = "https://catfact.ninja/fact";
let catData = document.querySelector("p");

const facts = async (url) => {
  const response = await fetch(url);
  console.log(response.status);
  console.log(response.ok);

  const data = await response.json();
  if (response.ok) {
    catData.innerText = data.fact;
    if (data.length >= "300") {
      catData.style.fontSize = "1rem";
    }
  } else {
    catData.innerText = "Oops there's some problem fetching data!";
  }
};

facts(url);
