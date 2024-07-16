document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.querySelector(".loading-bar");
    const content = document.getElementById("content");
    const loadingScreen = document.getElementById("loading-screen");

    // Simulate loading process
    setTimeout(() => {
        loadingBar.style.width = "100%";
    }, 100);

    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.pointerEvents = "none";
        content.classList.remove("hidden");
    }, 2100);
});
