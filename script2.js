// Initialisation
const section = document.querySelector("section");
const body = document.querySelector("body");
const randomColor = document.getElementById("rdm_color");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const infoInput = document.getElementById("info");
// const submitBtn = document.getElementById("submit");

const form = document.getElementById("basicForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);

    alert("Submitted Successfully!");

    nameInput.value = "";
    emailInput.value = "";
    infoInput.value = "";
})

// Randomise Color Feature
const rootStyles = getComputedStyle(document.documentElement);
const palette = ["--c1", "--c2", "--c3", "--c4", "--c5", "--c6", "--c7", "--c8", "--c9", "--c10"];

function pickRandomColor() {
    const variable = palette[Math.floor(Math.random() * palette.length)];
    return rootStyles.getPropertyValue(variable).trim();
}

randomColor.addEventListener("click", function() {
    let color1 = pickRandomColor();
    let color2 = pickRandomColor();

    while (color1 === color2) {
        color2 = pickRandomColor();
    }
    body.style.setProperty("--random1", color1);
    body.style.setProperty("--random2", color2);
    body.classList.add("randomise");
    // section.classList.add("randomise");
})

// DarkMode & Light Mode Script
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  section.classList.toggle('dark');
  author.classList.toggle('dark');
})
