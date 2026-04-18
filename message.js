const countDisplay = document.getElementById("count");
const message = document.getElementById("message");

function updateMessage() {
    if (countDisplay.textContent === "0") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}

// Run once at start
updateMessage();

// Watch for changes
const observer = new MutationObserver(updateMessage);
observer.observe(countDisplay, { childList: true });