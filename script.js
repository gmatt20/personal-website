const htmlElements = {
  projectContainer: document.querySelector(".js-proj-container"),
};
const projects = [
  {
    image: "./images/odin-landing.png",
    url: "https://gmatt20.github.io/odin-landing-page/",
    alt: "Odin Landing Page",
    description: "Odin Landing Page.",
  },
  {
    image: "./images/blog-preview.png",
    url: "https://gmatt20.github.io/blog-preview-card-main/",
    alt: "Blog Preview Card.",
    description: "Blog Preview Card.",
  },
  {
    image: "./images/social-media.png",
    url: "https://gmatt20.github.io/my-social-links-profile/",
    alt: "Social Links Profile",
    description: "Social Links Profile.",
  },
  {
    image: "./images/cc-ui.png",
    url: "https://gmatt20.github.io/CC-UI/",
    alt: "Credit Card UI",
    description: "Credit Card UI.",
  },
  {
    image: "./images/mock-website.png",
    url: "https://gmatt20.github.io/mock-website1/",
    alt: "Mock Professional Website",
    description: "Mock Professional Website.",
  },
  {
    image: "./images/contact-form.png",
    url: "https://gmatt20.github.io/contact-form/",
    alt: "Contact Form",
    description: "Contact Form.",
  }
];


document.addEventListener("DOMContentLoaded", () => {
  projects.forEach((project) => {
    htmlElements.projectContainer.innerHTML += `
    <div class="proj">
      <div>
        <a href=${project.url} target="_blank">
          <img
            class="proj-pic"
            src=${project.image}
            alt=${project.alt}
            width="300"
          />
        </a>
      </div>
      <div class="proj-descript"><p>${project.description}</p></div>
    </div>
  `;
  });
});
