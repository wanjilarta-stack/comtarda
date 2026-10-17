
const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

imageInput.addEventListener("change", function () {
  const files = Array.from(this.files || []);

  files.forEach(function (file) {
    if (!file.type.startsWith("image/")) return;

    const imageURL = URL.createObjectURL(file);

    const card = document.createElement("article");
    card.className = "image-card";

    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = file.name;
    img.loading = "lazy";

    img.addEventListener("click", function () {
      window.open(imageURL, "_blank");
    });

    const caption = document.createElement("p");
    caption.textContent = file.name;

    card.appendChild(img);
    card.appendChild(caption);
    gallery.prepend(card);
  });

  // Mengizinkan pemilihan file yang sama lagi.
  this.value = "";
});
