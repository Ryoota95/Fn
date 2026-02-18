document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkToggle");

  if (!btn) return; 

  
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    btn.textContent = isDark ? "☀️" : "🌙";
  });
});
