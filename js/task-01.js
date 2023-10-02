const listCategory = document.querySelector("#categories");
const itemCategory = document.querySelectorAll(".item");

console.log("Number of categories: ", itemCategory.length);

itemCategory.forEach((itemCategory) => {
  console.log("Category: ", itemCategory.querySelector("h2").textContent);
  console.log("Elements: ", itemCategory.querySelectorAll("ul > li").length);
});
