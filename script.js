const gallery = document.querySelector("#gallery");
const panels = [...gallery.querySelectorAll(".column")];

function activate(panel) {
  panels.forEach(item => {
    const selected = item === panel;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
}

panels.forEach(panel => {
  panel.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) activate(panel);
  });
  panel.addEventListener("click", () => activate(panel));
  panel.addEventListener("focus", () => activate(panel));
  panel.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate(panel);
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = panels[(panels.indexOf(panel) + 1) % panels.length];
      next.focus();
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const prev = panels[(panels.indexOf(panel) - 1 + panels.length) % panels.length];
      prev.focus();
    }
  });
});
