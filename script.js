import quoteData from "./quote.js";

// Initialisation
const section = document.querySelector("section");
const body = document.querySelector("body");
const randomColor = document.getElementById("rdm_color");
const author = document.querySelector("address");
const authorImage = document.querySelector(".authorDP");
const getQuoteBtn = document.getElementById("generate_quote_btn");
const quoteElmnt = document.querySelector(".quote");

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
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  section.classList.toggle('dark');
  author.classList.toggle('dark');
})

// Get Quote Feature

getQuoteBtn.addEventListener("click", ()=>{
    quoteData.forEach((quote)=>{
        console.log(quote);
        quoteElmnt.innerHTML = quote.quote;
        author.textContent = quote.author;
        authorImage.src = quote.picture;
    })
})