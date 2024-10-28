// ........SIDEBAR, DO NOT TOUCH!!!.......

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}



// ===================== LANDING PAGE =========================== //

// Popup Modal Logic
const popupBtn = document.getElementById("popupBtn");
const popupModal = document.getElementById("popupModal");
const closePopup = document.getElementById("closePopup");
const submitName = document.getElementById("submitName");
const nameDisplay = document.getElementById("nameDisplay");
const userNameInput = document.getElementById("userName");
const firstSlide = document.getElementById("firstSlide");

// Slideshow Variables
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let slideInterval;

// Show Popup
popupBtn.addEventListener("click", () => {
    popupModal.style.display = "flex";
    clearInterval(slideInterval); // Stop the slideshow when popup is opened
    userNameInput.focus(); // Set focus on the input field
});

// Close Popup
closePopup.addEventListener("click", () => {
    popupModal.style.display = "none";
    startSlideshow(); // Restart slideshow when popup is closed
});

// Submit Name
submitName.addEventListener("click", () => {
    const userName = document.getElementById("userName").value;
    nameDisplay.innerHTML = `Hello, <span class="username">${userName}</span>!<br>Welcome to JG Career Website!`;
    popupModal.style.display = "none";
    startSlideshow(); // Restart slideshow when popup is closed
});

// Submit Name (Enter Keypress)
userNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        submitUserName();
    }
});

// Function to handle submitting the user's name
function submitUserName() {
    const userName = userNameInput.value;
    if (userName.trim() !== "") {
        nameDisplay.innerHTML = `Hello, <span class="username">${userName}</span>!<br>Welcome to JG Career Website!`;
        popupModal.style.display = "none";
        startSlideshow(); // Restart slideshow when popup is closed
    }
}

// Slideshow Logic
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Start the automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000);
}

// Event Listeners for Arrow Buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Initial Setup
showSlide(slideIndex);
startSlideshow();
