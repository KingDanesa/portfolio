document.addEventListener("DOMContentLoaded", () => {
    // Анимация печатающегося текста
    const typewriterElements = document.querySelectorAll(".typewriter");
    typewriterElements.forEach((element) => {
        element.style.animation = "typing 3s steps(40, end)";
    });

    // Анимация появления карточек проектов
    const projectCards = document.querySelectorAll(".fade-in");
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${3 + index * 0.2}s`;
    });

    // Переключение темы
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("light-theme");
        const isLightTheme = document.body.classList.contains("light-theme");
        localStorage.setItem("theme", isLightTheme ? "light" : "dark");
    });

    // Проверка сохранённой темы
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeToggle.checked = true;
    }

    // Инициализация частиц
    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 2 },
            color: { value: "#ffffff" },
            line_linked: { enable: true, color: "#ffffff" }
        }
    });
});