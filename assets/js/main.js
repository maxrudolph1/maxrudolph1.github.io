(function () {
  var lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  var lightboxImg = lightbox.querySelector("img");
  var lightboxCaption = lightbox.querySelector(".lightbox-caption");
  var closeBtn = lightbox.querySelector(".lightbox-close");

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery-open").forEach(function (btn) {
    btn.addEventListener("click", function () {
      lightboxImg.src = btn.getAttribute("data-full");
      lightboxImg.alt = btn.querySelector("img").alt || "";
      lightboxCaption.textContent = btn.getAttribute("data-caption") || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();
