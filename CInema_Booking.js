setTimeout(function() {
    var lightImage = document.getElementById("spotlights-light");
    lightImage.style.display = "block";
}, 1000);

setTimeout(function() {
    var leftCurt = document.getElementById("mov-left-curt");
    leftCurt.style.display = "block";
}, 1000);

setTimeout(function() {
    var rightCurt = document.getElementById("mov-right-curt");
    rightCurt.style.display = "block";
}, 1000);

setTimeout(function() {
    var staticCurt = document.getElementById("static-curt");
    staticCurt.style.display = "block";
}, 1000);

setTimeout(function() {
    var curtShadow = document.getElementById("curt-shadow");
    curtShadow.style.display = "block";
}, 990);

setTimeout(function() {
    var leftCurt = document.getElementById("mov-left-curt");
    var rightCurt = document.getElementById("mov-right-curt");
    var buyTickBut = document.getElementById("book-seat-button")
    leftCurt.style.transform = "translateX(-50%) translateX(-13vw)";
    rightCurt.style.transform = "translateX(-50%) translateX(13vw)";
    leftCurt.style.transition = "transform 1s ease-in-out";
    rightCurt.style.transition = "transform 1s ease-in-out";
    buyTickBut.style.display = "inline-block";
}, 2000);

setTimeout(function() {
    var buyTickBut = document.getElementById("book-seat-button")
    buyTickBut.style.zIndex = "100";
}, 2700);
