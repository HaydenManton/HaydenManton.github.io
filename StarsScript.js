const starsContainer = document.getElementById("stars-container");

function createStar() {
    const star = document.createElement("div");
    star.className = "stars";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starsContainer.appendChild(star);
}

// Initially create some stars
for (let i = 0; i < 100; i++) {
    createStar();
}

// Create stars as the user scrolls, but only when the user reaches the bottom of the page
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        createStar();
    }
});

function random($min, $max) {
    $range: $max - $min;
    $rand: random();
    return $min + $rand * $range;
}
