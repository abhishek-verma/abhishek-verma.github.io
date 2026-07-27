(() => {
  document.getElementById("y").textContent = String(new Date().getFullYear());

  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 12);
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

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const heroBits = gsap.utils.toArray(
    ".hero .eyebrow, .hero h1, .hero .lede, .hero-row, .hero .actions"
  );
  gsap.from(heroBits, {
    y: 24,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.07,
  });

  gsap.utils.toArray(".section").forEach((section) => {
    const head = section.querySelector(".section-head");
    const body = section.querySelectorAll(
      ".tile, .job, .build, .focus-grid > div, .stack > div, .article, .contact .lede, .contact .actions"
    );

    if (head) {
      gsap.from(head.children, {
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      });
    }

    if (body.length) {
      gsap.from(body, {
        scrollTrigger: { trigger: section, start: "top 76%", once: true },
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.045,
      });
    }
  });
})();
