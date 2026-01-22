// DESTINATIONS WITH MULTIPLE IMAGES
const destinations = [
  {
    name: "Paris",
    desc: "Romantic city with Eiffel Tower",
    images: ["images/paris1.jpg", "images/paris2.jpg"]
  },
  {
    name: "Bali",
    desc: "Tropical beaches & temples",
    images: ["images/bali1.jpg", "images/bali2.jpg"]
  },
  {
    name: "Switzerland",
    desc: "Snow mountains & lakes",
    images: ["images/swiss1.jpg", "images/swiss2.jpg"]
  }
];

const grid = document.getElementById("destGrid");

// CREATE CARDS WITH IMAGE SLIDER
destinations.forEach((d, index) => {
  const card = document.createElement("div");
  card.className = "dest-card reveal";

  card.innerHTML = `
    <img id="img-${index}" src="${d.images[0]}" alt="${d.name}">
    <div class="dest-info">
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
    </div>
  `;

  grid.appendChild(card);

  // AUTO IMAGE SLIDER
  let imgIndex = 0;
  setInterval(() => {
    imgIndex = (imgIndex + 1) % d.images.length;
    document.getElementById(`img-${index}`).src = d.images[imgIndex];
  }, 2000);
});

// DARK MODE ALWAYS ON
document.body.classList.add("dark");

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// SMOOTH SCROLL
function scrollToDest() {
  document.getElementById("destinations")
    .scrollIntoView({ behavior: "smooth" });
}
