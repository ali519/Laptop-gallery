let sliderImages = document.querySelectorAll("#first"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "flex";
}

// Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "flex";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "flex";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();

//read more

var toggleButton = document.getElementById("expand-0")
var hiddenText = document.getElementById("collapsible-0");

toggleButton.onclick = toggleText;

function toggleText() {
    if (hiddenText.getAttribute("hidden")) {
        hiddenText.removeAttribute("hidden");
        toggleButton.innerHTML = "read less";
    } else {
        hiddenText.setAttribute("hidden", "hidden");
        toggleButton.innerHTML = "read more";
    }
}

function hide(content) {
    document.getElementById(content).style.visibility = "hidden";
}

function show(content) {
    document.getElementById(content).style.visibility = "visible"
}

function hide(conten) {
    document.getElementById(conten).style.visibility = "hidden";
}

function show(conten) {
    document.getElementById(conten).style.visibility = "visible"
}

function hide(conte) {
    document.getElementById(conte).style.visibility = "hidden";
}

function show(conte) {
    document.getElementById(conte).style.visibility = "visible"
}

function hide(cont) {
    document.getElementById(cont).style.visibility = "hidden";
}

function show(cont) {
    document.getElementById(cont).style.visibility = "visible"
}

function hide(con) {
    document.getElementById(con).style.visibility = "hidden";
}

function show(con) {
    document.getElementById(con).style.visibility = "visible"
}

function hide(co) {
    document.getElementById(co).style.visibility = "hidden";
}

function show(co) {
    document.getElementById(co).style.visibility = "visible"
}