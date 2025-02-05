function toggleVisibility() {
    // Get the paragraph element
    const paragraph = document.getElementById("useless-paragraph");

    // Check if the paragraph is currently visible
    if (paragraph.style.display === "none") {
        // If hidden, show it
        paragraph.style.display = "block";
    } else {
        // If visible, hide it
        paragraph.style.display = "none";
    }
}
