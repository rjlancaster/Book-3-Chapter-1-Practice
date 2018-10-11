

// Practice #1
document.querySelector(".article__header").textContent = "Welcome to the Richard blog!";

// Practice #2
const headerImp = document.querySelectorAll(".article__header");

for (var i = 0; i < headerImp.length; i++) {
  headerImp[i].classList.add("important");
}

// Practice #3
const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

// Practice #4
const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");

