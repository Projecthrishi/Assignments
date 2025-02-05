document.getElementById("colorchange").addEventListener("click", function () {
    const colorInput = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = colorInput;
});

document.getElementById("fontsize").addEventListener("input", function () {
    const fontSize = this.value + "px";
    document.getElementById("text-container").style.fontSize = fontSize;
});

document.getElementById("italic").addEventListener("click", function () {
    const textContainer = document.getElementById("text-container");
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    const textContainer = document.getElementById("text-container");
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    const textContainer = document.getElementById("text-container");
    textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    document.getElementById("text-container").style.fontFamily = this.value;
});

document.getElementById("getstyle").addEventListener("click", function () {
    const textContainer = document.getElementById("text-container");
    const computedStyle = window.getComputedStyle(textContainer);

    const cssProperties = `
        color: ${computedStyle.color};
        font-size: ${computedStyle.fontSize};
        font-family: ${computedStyle.fontFamily};
        text-decoration: ${computedStyle.textDecoration};
        font-style: ${computedStyle.fontStyle};
        font-weight: ${computedStyle.fontWeight};
    `;

    document.getElementById("css-props").textContent = cssProperties.replace(/\s+/g, ' ').trim();
});
