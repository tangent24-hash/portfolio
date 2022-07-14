const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://tangent24-hash.github.io/portfolio",
  title: "Sohan.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sohanur Rahman",
  role: "SOFTWARE DEVELOPER",
  description:
    "I’m a professional Software developer with full stack development skills. Currently focused on building web applications for better digital experiences.",
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
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
