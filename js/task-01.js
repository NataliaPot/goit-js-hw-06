const listCategory = document.querySelector("#categories");

const listChildren = listCategory.children;
console.log("Number of categories: ", listChildren.length);

const itemArr = Array.from(listChildren);

itemArr.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log(
    "Elements: ",
    item.lastElementChild.querySelectorAll("li").length
  );
});
