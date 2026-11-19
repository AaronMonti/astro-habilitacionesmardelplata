export const site = {
    url: "https://www.habilitacionesmardelplata.com",
    name: "Toledo, Moreno & Asoc.",
    title: "Toledo, Moreno & Asoc. | Habilitaciones en Mar del Plata",
    description:
        "Especialistas en la gestión de habilitaciones comerciales, industriales y cartelería en Mar del Plata. Más de 20 años acompañando trámites con rapidez y seguridad.",
    locale: "es_AR",
    image: "/og-image.png",
    navigation: [
        { href: "#inicio", label: "Inicio" },
        { href: "#proceso", label: "Método" },
        { href: "#nosotros", label: "Nosotros" },
        { href: "#clientes", label: "Clientes" },
        { href: "#contacto", label: "Contacto" },
    ],
    contact: {
        name: "Jorge Toledo",
        phone: "+5492235322443",
        displayPhone: "(0223) 15-532-2443",
        email: "toledomorenoyasoc@habilitacionesmardelplata.com",
        address: {
            street: "Córdoba 1882, Piso 4, Oficina 42",
            city: "Mar del Plata",
            region: "Buenos Aires",
            postalCode: "7600",
            country: "AR",
        },
        instagram: "https://www.instagram.com/habilitacionesmardelplata/",
        linkedin:
            "https://www.linkedin.com/company/habilitaciones-mar-del-plata/",
    },
} as const;

export const canonicalUrl = `${site.url}/`;
export const ogImageUrl = `${site.url}${site.image}`;
