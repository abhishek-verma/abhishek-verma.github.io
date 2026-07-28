(() => {
  document.getElementById("y").textContent = String(new Date().getFullYear());

  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const jobs = Array.from(document.querySelectorAll(".job"));
  jobs.forEach((job) => {
    job.addEventListener("toggle", () => {
      if (!job.open) return;
      jobs.forEach((other) => {
        if (other !== job) other.open = false;
      });
    });
  });
})();
