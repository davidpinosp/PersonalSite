window.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementById("container");
  const image = document.getElementById("image");

  container.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX - 200;
    const mouseY = event.clientY - 200;

    // Update the image position to chase the cursor
    if (mouseY > 0) {
      image.style.left = mouseX + "px";
      image.style.top = mouseY + "px";
    }
  });
});
