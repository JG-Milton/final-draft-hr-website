let currentIndex = 0;
let slides = document.getElementsByClassName("mySlides");

showSlide(currentIndex);

function showSlide(index) {
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";
}

function changeSlide(n) {
    currentIndex += n;


if (currentIndex >= slides.length) {
    currentIndex = 0;
} else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
}
    showSlide(currentIndex);
}

function autoPlay() {
    changeSlide(1);
    setTimeout(autoPlay, 3000);
}

autoPlay();