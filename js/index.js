var locations = {
  "vinaros-div":"vinaros-button"
  "benicarlo-div":"benicarlo-button"
  "peniscola-div":"peniscola-button"
  "morella-div":"morella-button"
  /*PAU ME TE QUE ACABAR DE PASSAR LA LLISTA DE POBLES*/
}

for (var i = 0; i < document.querySelectorAll(".locationName").length; i++) {
  document.querySelectorAll(".locationName")[i].addEventListener("mouseenter", hoverIn);
  document.querySelectorAll(".locationName")[i].addEventListener("mouseleave", hoverOut);
}

function hoverIn(ev) {
  var buttonSelector = "#" + locations[ev.target.id];
  document.querySelector(buttonSelector).addAttribute(".buttonActivatorDiv");
}

function hoverOut(ev) {
  var buttonSelector = "#" + locations[ev.target.id];
  document.querySelector(buttonSelector).removeAttribute(".buttonActivatorDiv");
}
