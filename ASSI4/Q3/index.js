function toggleVisibility() {
   
    const paragraph = document.getElementById("useless-paragraph");

    
    if (paragraph.style.display === "none") {
        // If hidden, show it
        paragraph.style.display = "block";
    } else {
        // If visible, hide it
        paragraph.style.display = "none";
    }
}
