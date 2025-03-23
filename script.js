// Fonction pour faire défiler jusqu'à une section spécifique
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
        });
    }
}

// Gestion du formulaire de contact
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message envoyé avec succès !");
    form.reset();
});

// Ajout d'une animation sur les projets
const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.transform = "scale(1.05)";
        project.style.transition = "0.3s";
    });
    project.addEventListener("mouseleave", () => {
        project.style.transform = "scale(1)";
    });
});
