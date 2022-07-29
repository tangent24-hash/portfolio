const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://srsohan.com",
  title: "Sohan.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sohanur Rahman",
  role: "SOFTWARE DEVELOPER",
  description:
    "I’m a professional Software developer with full stack development skills. Currently focused on building web applications for better digital experiences.",
  resume: "https://drive.google.com/file/d/1cRYVlu0igRIPnc_D6dDeIfzf3W1t0Uk3/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/sohanur1/",
    github: "https://github.com/tangent24-hash",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Curious Bangladesh News Portal",
    description: "Simple material designed News/Magazine website.",
    stack: ["Django", "JavaScript", "React", "Material UI"],
    sourceCode: "https://github.com/tangent24-hash",
    livePreview: "https://curiousbd.com",
  },
  {
    name: "Tutor Sohan",
    description:
      "Demo e-commerce website with add-to-cart and random selection facilities.",
    stack: ["Firebase", "JavaScript", "React", "Bootstrap"],
    sourceCode: "https://github.com/tangent24-hash/tutor-sohan",
    livePreview: "https://tutor-sohan.web.app/",
  },
  {
    name: "Fresh Grocery Store",
    description:
      "Demo ecommerce website with add to cart and random selection facilities.",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com/tangent24-hash/fresh-grocery-store",
    livePreview: "https://grocery-store-01.netlify.app/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Python",
  "Django",
  "JavaScript",
  "React",
  "Material UI",
  "Git",
  "CI/CD",
  "HTML",
  "CSS",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "sohanur471@mail.com",
};

export { header, about, projects, skills, contact };
