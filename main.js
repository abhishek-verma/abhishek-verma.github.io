(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("y").textContent = String(new Date().getFullYear());

  if (reduce || typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector(".hero");
  const title = document.querySelector(".hero h1");

  if (title && typeof SplitType !== "undefined") {
    const split = new SplitType(title, { types: "chars" });
    gsap.set(split.chars, { yPercent: 110, opacity: 0 });
    gsap.to(split.chars, {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.028,
      delay: 0.12,
    });
  }

  if (hero) {
    gsap.from(".tagline, .lede, .hero-meta, .hero-actions", {
      y: 18,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.35,
    });
  }

  gsap.to(".shape-orb", {
    y: -18,
    x: 10,
    duration: 4.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
  gsap.to(".shape-ring", {
    y: 14,
    x: -8,
    rotation: 24,
    duration: 6,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
  gsap.to(".shape-line", {
    scaleX: 1.15,
    opacity: 0.55,
    duration: 3.2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  gsap.utils.toArray(".section").forEach((section) => {
    const id = section.querySelector(".section-id");
    const body = section.querySelectorAll(
      ".metrics > div, .job, .project, .focus li, .stack > div, .posts a, .contact h2, .contact > p, .contact .hero-actions, .writing-note"
    );

    if (id) {
      gsap.from(id, {
        scrollTrigger: { trigger: section, start: "top 82%", once: true },
        x: -16,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
      });
    }

    if (body.length) {
      gsap.from(body, {
        scrollTrigger: { trigger: section, start: "top 78%", once: true },
        y: 22,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.06,
      });
    }
  });

  gsap.utils.toArray(".metrics > div").forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      gsap.to(cell, { y: -3, duration: 0.25, ease: "power2.out" });
    });
    cell.addEventListener("mouseleave", () => {
      gsap.to(cell, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });
})();
