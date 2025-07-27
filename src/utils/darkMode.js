// Verifica si NO existe `theme` en localStorage
if (!("theme" in localStorage)) {
  // Si el usuario prefiere modo oscuro, guarda "dark"
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
document.documentElement.classList.toggle(
  "dark",
  localStorage.getItem("theme") === "dark",
);
