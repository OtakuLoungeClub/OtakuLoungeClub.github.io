document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.querySelector(".loading-bar");
    const mainContent = document.getElementById("main-content");
    const loadingScreen = document.getElementById("loading-screen");

    // Simulate loading process
    setTimeout(() => {
        loadingBar.style.width = "100%";
    }, 100);

    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.pointerEvents = "none";
        mainContent.classList.remove("hidden");
        document.body.style.overflow = 'auto'; // Allow scrolling after loading
    }, 2100);
});
