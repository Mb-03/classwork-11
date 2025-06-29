const container = document.querySelector("#container");

fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      let catImg = document.createElement("img");
      catImg.src = product.url;
      catImg.alt = "cat";
      container.appendChild(catImg);
    });
  });
