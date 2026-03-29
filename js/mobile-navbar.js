(function () {
    const header = document.getElementById("header");
    const toggle = document.querySelector(".header-menu-toggle");
    const nav = document.getElementById("header-nav-wrap");
    const navLinks = document.querySelectorAll("#header-nav-wrap .header-main-nav a");

    if (!header || !toggle || !nav) {
        return;
    }

    function closeMenu() {
        header.classList.remove("nav-open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
    }

    function toggleMenu(event) {
        event.preventDefault();
        const isOpen = header.classList.toggle("nav-open");
        toggle.classList.toggle("active", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
    }

    toggle.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
})();