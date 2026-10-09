const linkedinUrl = "https://www.linkedin.com/in/ok-olga";
const githubUrl = "https://github.com/NimfaOlechka";

/* ================= PROFILE ================= */

fetch("pages/profile.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("profile-section").innerHTML = html;

    document.getElementById("linkedin-profile").href = linkedinUrl;
    document.getElementById("github-profile").href = githubUrl;
  });

/* ================= CORE SKILLS ================= */

fetch("pages/skills.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("skills-section").innerHTML = html;
  });

/* ================= LANGUAGES ================= */

fetch("pages/languages.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("languages-section").innerHTML = html;
  });

/* ================= EXPERIENCE ================= */

fetch("pages/experience.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("experience-section").innerHTML = html;
  });

/* ================= PROJECTS ================= */

fetch("pages/projects.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("projects-section").innerHTML = html;
  });

/* ================= EDUCATION ================= */

fetch("pages/education.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("education-section").innerHTML = html;
  });

/* ================= CERTIFICATES ================= */

fetch("pages/certificates.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("certificates-section").innerHTML = html;
  });

/* ================= PERSONAL SKILLS ================= */

fetch("pages/personal-skills.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("personal-skills-section").innerHTML = html;
  });
/* ================= ADDITIONAL INFO ================= */

fetch("pages/additional.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("additional-info-section").innerHTML = html;
  });

/* ================= FOOTER ================= */

fetch("pages/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-section").innerHTML = html;
    document.getElementById("linkedin-footer").href = linkedinUrl;
document.getElementById("github-footer").href = githubUrl;

  });

