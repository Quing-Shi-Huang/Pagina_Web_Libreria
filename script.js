/* =========================================
   MENÚ RESPONSIVE
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }

});


/* Cerrar menú al seleccionar una opción */

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });


/* =========================================
   FORMULARIO
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nombre =
            document
                .getElementById("nombre")
                .value
                .trim();

        const telefono =
            document
                .getElementById("telefono")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const tema =
            document
                .getElementById("tema")
                .value;


        if (
            !nombre ||
            !telefono ||
            !email ||
            !tema
        ) {

            formMessage.textContent =
                "Completa todos los campos obligatorios.";

            formMessage.style.color =
                "#c0392b";

            return;

        }


        formMessage.textContent =
            `¡Gracias, ${nombre}! Recibimos tu consulta.`;

        formMessage.style.color =
            "#9a7a3d";


        contactForm.reset();

    }
);


/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".book-card, .value-card, .about-feature, .contact-item"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================================
   NAVBAR AL HACER SCROLL
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 70) {

            header.style.background =
                "rgba(9, 17, 28, 0.95)";

            header.style.backdropFilter =
                "blur(15px)";

        } else {

            header.style.background =
                "transparent";

            header.style.backdropFilter =
                "none";

        }

    }
);
