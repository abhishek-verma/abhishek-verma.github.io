(() => {
  document.getElementById("y").textContent = String(new Date().getFullYear());

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const heroBits = gsap.utils.toArray(".hero .eyebrow, .hero h1, .hero .lede, .hero-row, .hero .actions");
  gsap.from(heroBits, {
    y: 28,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
  });

  gsap.utils.toArray(".section").forEach((section) => {
    const head = section.querySelector(".section-head");
    const body = section.querySelectorAll(
      ".tile, .job, .build, .focus-grid > div, .stack > div, .article, .contact .lede, .contact .actions"
    );

    if (head) {
      gsap.from(head.children, {
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.06,
      });
    }

    if (body.length) {
      gsap.from(body, {
        scrollTrigger: { trigger: section, start: "top 76%", once: true },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.05,
      });
    }
  });
})();
