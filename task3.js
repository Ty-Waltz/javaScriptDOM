function changeColor() {
    const box = document.getElementById("box");
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    box.style.backgroundColor = randomColor;
}
document.addEventListener("DOMContentLoaded", function () {
    const hoverBox = document.getElementById("hoverBox");
    const box = document.getElementById("box");

    hoverBox.addEventListener("mouseover", function () {
        hoverBox.style.backgroundColor = "orange";
        hoverBox.style.borderColor = "black";
    });

    hoverBox.addEventListener("mouseout", function () {
        hoverBox.style.backgroundColor = "lightgreen";
        hoverBox.style.borderColor = "#ccc";
    });
    window.resizeBox = function () {
        box.style.width = "250px";
        box.style.height = "250px";
        box.style.lineHeight = "250px";
    };

    window.resetBox = function () {
        box.style.width = "150px";
        box.style.height = "150px";
        box.style.backgroundColor = "lightblue";
        box.style.lineHeight = "150px";

        hoverBox.style.backgroundColor = "lightgreen";
        hoverBox.style.borderColor = "#ccc";
    };
    
    window.changeTextColor = function () {
        const box = document.getElementById("box");
        const colors = ["red", "blue", "green", "purple", "orange", "black"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        box.style.color = randomColor;
    };

});