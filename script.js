const htmlElements = {
  projectContainer: document.querySelector(".js-proj-container"),
  skillsContainer: document.querySelector(".skills-container")
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

const skills = [
  {
    imageSkill: "./images/icons8-html-logo-480.png",
    altSkill: "HTML",
    theSkill: "Hypertext Markup Language",
  },
  {
    imageSkill: "./images/icons8-css-logo-480.png",
    alt: "CSS",
    theSkill: "Cascading Style Sheets",
  },
  {
    imageSkill: "./images/icons8-javascript-480.png",
    altSkill: "JavaScript",
    theSkill: "JavaScript",
  },
  {
    imageSkill: "./images/react.webp",
    altSkill: "React",
    theSkill: "React",
  },
  {
    imageSkill: "./images/tailwind-css.png",
    altSkill: "Tailwind CSS",
    theSkill: "Tailwind CSS",
  },
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

  skills.forEach((skill) => {
    htmlElements.skillsContainer.innerHTML += `
    <div class="proj">
      <div>
          <img
            class="proj-pic"
            src=${skill.imageSkill}
            alt=${skill.altSkill}
            width="300"
          />
      </div>
      <div class="proj-descript"><p>${skill.theSkill}</p></div>
    </div>
    `;
  })
});
