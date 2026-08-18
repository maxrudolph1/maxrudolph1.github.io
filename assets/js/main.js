(function () {
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var lightbox = document.querySelector(".lightbox");

  function setScrolled() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (lightbox) {
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
  }
})();
