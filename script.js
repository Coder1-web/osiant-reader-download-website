// script.js
document.addEventListener("DOMContentLoaded", function () {
    function updateButtonStyles() {
      const screenWidth = window.innerWidth;
      const button = document.querySelector("button");
  
      if (screenWidth <= 480) {
        button.style.padding = "10px 25px";
        button.style.fontSize = "14px";
      } else if (screenWidth <= 768) {
        button.style.padding = "12px 30px";
        button.style.fontSize = "16px";
      } else {
        button.style.padding = "15px 40px";
        button.style.fontSize = "18px";
      }
    }
  
    updateButtonStyles();
    window.addEventListener("resize", updateButtonStyles);
  });
  