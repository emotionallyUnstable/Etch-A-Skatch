const colorBtn = document.querySelector("#btn__color");
const eraserBtn = document.querySelector("#btn__eraser");
const clearBtn = document.querySelector("#btn__clear");
const colorChoise = document.querySelector("#colorPicker");

let gridList = document.querySelector(".grid");
const gridDisplay = document.querySelectorAll(".grid-element");



//colorChoise.oninput = (e) => setCurrentColor(e.targer.value);



//gridList.addEventListener("click", () => {
    //console.log("Клик!");
    //gridDisplay.textContent = colorChoise;
//});



gridList.addEventListener("mouseenter", (event) => {
    console.log(event);
    gridList.classList.add("highlight");
});

gridList.addEventListener("mouseleave", (event) => {
    console.log(event);
    gridList.classList.remove("highlight");
});

let randomColor = () => {
    let hexColor = Math.floor(Math.randome() * 16777213).toString(16);
    return `${hexColor}`;
};
console.log(randomColor);

for (const oneCell of gridDisplay) {
    oneCell.addEventListener("click", (event) => {
      console.log(event);
      oneCell.style.backgroundColor = "white";
    });
  }
  const fullPage = document.querySelector("body");
  fullPage.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key === "b" || event.key === "B") {
      fullPage.style.backgroundColor = "black";
    } else {
      fullPage.style.backgroundColor = "white";
    }
  });









