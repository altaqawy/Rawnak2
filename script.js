const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu a, .side-nav a");
const sections = [...document.querySelectorAll("section[id]")];
const revealItems = document.querySelectorAll(".reveal");

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const activePage = currentPage === "case-study.html" ? "work.html" : currentPage;
navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  link.classList.toggle("active", href === activePage);
});

menuButton?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.14 }
);
revealItems.forEach((item) => revealObserver.observe(item));

if ([...navLinks].some((link) => link.getAttribute("href")?.startsWith("#"))) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.08, 0.2, 0.5] }
  );
  sections.forEach((section) => navObserver.observe(section));
}

document.querySelectorAll(".filter-bar button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-bar button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".work-card").forEach((card) => {
      const show = filter === "all" || card.dataset.kind.includes(filter);
      card.style.display = show ? "grid" : "none";
    });
  });
});

const billing = document.querySelector(".billing-toggle");
billing?.querySelector("button")?.addEventListener("click", () => {
  const yearly = billing.classList.toggle("yearly");
  document.querySelectorAll(".price-card strong").forEach((price) => {
    price.textContent = yearly ? price.dataset.year : price.dataset.month;
  });
});

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("calm");
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const box = button.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const original = button.innerHTML;
  button.innerHTML = "Inquiry Ready <span>✓</span>";
  setTimeout(() => {
    button.innerHTML = original;
  }, 1800);
});
