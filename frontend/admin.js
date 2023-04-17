const myForm = document.getElementById("myForm");
const title = document.getElementById("title");
const image = document.getElementById("image");
const image2 = document.getElementById("image2");
const price = document.getElementById("price");
const category = document.getElementById("category");
const description = document.getElementById("description");
// let submit = document.getElementById('submit');

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    title: title.value,
    image: image.value,
    image2: image.value,
    price: price.value,
    category: category.value,
    description: description.value,
  };

  fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  title.value = "" ;
  image.value = "" ;
  image2.value = "" ;
  price.value = "" ;
  category.value = "" ;
  description.value = "" ;
});
