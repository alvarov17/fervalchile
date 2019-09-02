$(document).ready(function() {
  $(".slider").slider();
});

$(document).ready(function() {
  $(".parallax").parallax();
});

window.sr = ScrollReveal({ reset: true });

sr.reveal("header", { origin: top, duration: 500 });
sr.reveal(".row", { origin: "bottom", duration: 1000 });
