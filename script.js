// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your EmailJS public key
    emailjs.init("w1UlfnF_A2RNvJuRh");
});

// Skills Data
const skillsData = [
    {
        name: "HTML",
        image: "images/html-logo.webp"
    },
    {
        name: "CSS",
        image: "images/css-logo.webp"
    },
    {
        name: "JavaScript",
        image: "images/javascript-logo.webp"
    },
    {
        name: "Node.js",
        image: "images/node-logo.webp"
    },
    {
        name: "React.js",
        image: "images/react-logo.webp"
    },
    {
      name:"php",
      image:"images/phpLOGO.PNG"
    },
    {
      name:"MySQL",
      image:"images/mysqlLOGO.webp"
    },
    {
      name:"Python",
      image:"images/python_logo.png"
    },
    {
      name:"Git",
      image:"images/git-logo.webp"
    }
];
// === Display Skills ===
const skillsContainer = document.getElementById("skills-container");

// Projects Data

if (skillsContainer) {
  skillsData.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    skillCard.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}">
      <p>${skill.name}</p>
    `;

    skillsContainer.appendChild(skillCard);
  });
}
const projectsData = [
    {
        title: "Hotel facilities System",
        image: "images/hotel-image.webp",
        description: "A full-featured hotel management system built with HTML, CSS, JavaScript, PHP, and MySQL using XAMPP.It allows hotel admins to manage rooms, customers, and bookings, while clients can view rooms and make reservations online.",
        tags: ["HTML", "CSS", "JavaScript","php"],
        links: {
            github: "https://github.com/anasn77/Hotel-Managment.git",
            demo: "https://demo-link.com"
        }
    }
    // Add more projects as needed
];
// === Display Projects ===
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  projectsData.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
      </div>
      <div class="links">
        <a href="${project.links.github}" target="_blank">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="${project.links.demo}" target="_blank">
      <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
      </div>
    `;

    projectsContainer.appendChild(projectCard);
  });
}
//TESTIMONIALS DATA 
const testimonialsData = [
  {
    name: "Jane Smith",
    role: "Client",
    photo: "images/testimony-headshot.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  // Add more testimonials as needed
];

// Display Testimonials 
const testimonialsContainer = document.getElementById("testimonials-container");

if (testimonialsContainer) {
  testimonialsData.forEach(testimonial => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");

    card.innerHTML = `
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-user">
        <img src="${testimonial.photo}" alt="${testimonial.name}">
        <div class="user-info">
          <h3>${testimonial.name}</h3>
          <p>${testimonial.role}</p>
        </div>
      </div>
    `;

    testimonialsContainer.appendChild(card);
  });
}
const messageInput = document.querySelector("#message");
function validateMessage() {
    const message = messageInput.value.trim();
}
// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
    window.intlTelInput(phoneInput, {
        preferredCountries: ["us", "gb"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });
}
document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      // Initialize flags
      if (!el.dataset.animatedDown) el.dataset.animatedDown = "false";
      if (!el.dataset.animatedUp) el.dataset.animatedUp = "false";

      const scrollingDown = window.scrollY > lastScrollY;
      const scrollingUp = window.scrollY < lastScrollY;

      if (entry.isIntersecting) {
        if (scrollingDown && el.dataset.animatedDown === "false") {
          el.classList.add("show");
          el.dataset.animatedDown = "true";

          // Stagger skill/project cards
          if (el.classList.contains("skills-section")) {
            el.querySelectorAll(".skill-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 150);
            });
          }
          if (el.classList.contains("projects-section")) {
            el.querySelectorAll(".project-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 150);
            });
          }
        }

        if (scrollingUp && el.dataset.animatedUp === "false") {
          el.classList.add("show");
          el.dataset.animatedUp = "true";

          // Stagger skill/project cards
          if (el.classList.contains("skills-section")) {
            el.querySelectorAll(".skill-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 150);
            });
          }
          if (el.classList.contains("projects-section")) {
            el.querySelectorAll(".project-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("show"), i * 150);
            });
          }
        }
      }
    });

    lastScrollY = window.scrollY;
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });

  // Observe elements
  const elementsToAnimate = document.querySelectorAll(
    "header, .hero-section, .skills-section, .projects-section, .testimonial-text, .contact-container, .title"
  );

  elementsToAnimate.forEach(el => {
    // Only hide elements that are below the fold
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add("hidden");
    } else {
      el.classList.add("show"); // visible if already in view
    }
    observer.observe(el);
  });

  // Hide skill/project cards initially
  document.querySelectorAll(".skill-card, .project-card").forEach(el => {
    el.classList.add("hidden");
  });
});

// Form validation and submission will be added later 