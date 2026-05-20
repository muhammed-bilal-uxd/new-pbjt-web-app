// lib/metadata.ts
import type { Metadata } from "next";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "PBJT";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pbjtindia.com";

export const pagesMetadata: Record<string, Metadata> = {
    layout: {
        metadataBase: new URL(siteUrl),

        title: {
            default: `${siteName} | Village Development NGO in India`,
            template: `%s | ${siteName}`,
        },

        description:
            "Driving village development through water, livelihoods, climate resilience, women empowerment, and community-led rural transformation.",

        keywords: [
            "village development NGO",
            "rural development India",
            "community development",
            "water conservation",
            "women empowerment",
            "livelihood development",
            "climate resilience",
            "sustainable villages",
            "rural transformation",
            "NGO India",
        ],

        applicationName: siteName,
        authors: [{ name: siteName }],
        creator: siteName,
        publisher: siteName,
        category: "Nonprofit Organization",

        robots: {
            index: true,
            follow: true,
        },

        alternates: {
            canonical: siteUrl,
        },

        openGraph: {
            title: `${siteName} | Village Development NGO in India`,
            description:
                "Driving village development through water, livelihoods, climate resilience, women empowerment, and community-led rural transformation.",
            url: siteUrl,
            siteName,
            type: "website",
            locale: "en_IN",
        },

        twitter: {
            card: "summary_large_image",
            title: `${siteName} | Village Development NGO in India`,
            description:
                "Driving village development through water, livelihoods, climate resilience, women empowerment, and community-led rural transformation.",
        },
    },
    home: {
        title: `${siteName} | Village Development NGO in India`,
        description:
            "Driving village development through water, livelihoods, climate resilience, women empowerment, and community-led rural transformation.",
        keywords: [
            "village development NGO",
            "rural development India",
            "community development",
            "water conservation",
            "women empowerment",
            "livelihood development",
            "climate resilience",
            "sustainable villages",
            "rural transformation",
            "NGO India",
        ],
        alternates: { canonical: siteUrl },
        openGraph: {
            title: `${siteName} | Village Development NGO in India`,
            description:
                "Driving village development through water, livelihoods, climate resilience, women empowerment, and community-led rural transformation.",
            type: "website",
            url: siteUrl,
        },
    },

    pbjtApproach: {
        title: `PBJT Approach | ${siteName}`,
        description:
            "Explore the PBJT approach for village development, linking local realities, shared accountability, sustainability, and community-led change.",
        keywords: [
            "PBJT approach",
            "place based just transition",
            "village development approach",
            "community-led development",
            "rural sustainability",
            "local accountability",
            "climate resilience",
            "rural transformation",
            "NGO framework",
            "sustainable development",
        ],
        alternates: { canonical: `${siteUrl}/pbjt-approach` },
        openGraph: {
            title: `PBJT Approach | ${siteName}`,
            description:
                "Explore the PBJT approach for village development, linking local realities, shared accountability, sustainability, and community-led change.",
            type: "website",
            url: `${siteUrl}/pbjt-approach`,
        },
    },

    inPractice: {
        title: `PBJT In Practice | ${siteName}`,
        description:
            "See how PBJT works in villages through local action, partnerships, livelihoods, water restoration, climate resilience, and community ownership.",
        keywords: [
            "PBJT in practice",
            "village development projects",
            "rural development programs",
            "community action",
            "water restoration",
            "livelihood programs",
            "climate resilience",
            "village case studies",
            "sustainable villages",
            "NGO impact",
        ],
        alternates: { canonical: `${siteUrl}/in-practice` },
        openGraph: {
            title: `PBJT In Practice | ${siteName}`,
            description:
                "See how PBJT works in villages through local action, partnerships, livelihoods, water restoration, climate resilience, and community ownership.",
            type: "website",
            url: `${siteUrl}/in-practice`,
        },
    },

    impactProposition: {
        title: `Impact Proposition | ${siteName}`,
        description:
            "Understand our impact proposition for rural transformation through measurable village development, local accountability, and sustainable outcomes.",
        keywords: [
            "impact proposition",
            "rural impact",
            "village development impact",
            "measurable outcomes",
            "community accountability",
            "sustainable impact",
            "NGO impact model",
            "rural transformation",
            "CSR rural development",
            "village progress",
        ],
        alternates: { canonical: `${siteUrl}/impact-proposition` },
        openGraph: {
            title: `Impact Proposition | ${siteName}`,
            description:
                "Understand our impact proposition for rural transformation through measurable village development, local accountability, and sustainable outcomes.",
            type: "website",
            url: `${siteUrl}/impact-proposition`,
        },
    },

    framework: {
        title: `PBJT Framework | ${siteName}`,
        description:
            "A place-based framework for rural transformation, sustainability, shared responsibility, local accountability, and community-led development.",
        keywords: [
            "PBJT framework",
            "place based just transition",
            "rural development framework",
            "community-led transformation",
            "local accountability",
            "sustainability framework",
            "village development",
            "climate resilience",
            "livelihood development",
            "NGO framework",
        ],
        alternates: { canonical: `${siteUrl}/framework` },
        openGraph: {
            title: `PBJT Framework | ${siteName}`,
            description:
                "A place-based framework for rural transformation, sustainability, shared responsibility, local accountability, and community-led development.",
            type: "website",
            url: `${siteUrl}/framework`,
        },
    },

    focusAreas: {
        title: `Focus Areas | ${siteName}`,
        description:
            "Explore our focus areas across village development, water security, livelihoods, women empowerment, climate resilience, and local governance.",
        keywords: [
            "village development focus areas",
            "water security",
            "women empowerment",
            "rural livelihoods",
            "climate resilience",
            "local governance",
            "sustainable agriculture",
            "community development",
            "rural programs",
            "NGO India",
        ],
        alternates: { canonical: `${siteUrl}/focus-areas` },
        openGraph: {
            title: `Focus Areas | ${siteName}`,
            description:
                "Explore our focus areas across village development, water security, livelihoods, women empowerment, climate resilience, and local governance.",
            type: "website",
            url: `${siteUrl}/focus-areas`,
        },
    },

    methodology: {
        title: `Methodology | ${siteName}`,
        description:
            "Learn our methodology for village development through field research, community participation, local partnerships, action planning, and impact tracking.",
        keywords: [
            "village development methodology",
            "rural research",
            "community participation",
            "impact tracking",
            "local partnerships",
            "development planning",
            "field research",
            "rural transformation",
            "NGO methodology",
            "sustainable development",
        ],
        alternates: { canonical: `${siteUrl}/methodology` },
        openGraph: {
            title: `Methodology | ${siteName}`,
            description:
                "Learn our methodology for village development through field research, community participation, local partnerships, action planning, and impact tracking.",
            type: "website",
            url: `${siteUrl}/methodology`,
        },
    },

    testimonials: {
        title: `Testimonials | ${siteName}`,
        description:
            "Read stories from communities, partners, and stakeholders involved in village development, rural transformation, and community-led change.",
        keywords: [
            "NGO testimonials",
            "village stories",
            "community stories",
            "rural development impact",
            "partner testimonials",
            "beneficiary stories",
            "village transformation",
            "community voices",
            "NGO impact",
            "rural change",
        ],
        alternates: { canonical: `${siteUrl}/testimonials` },
        openGraph: {
            title: `Testimonials | ${siteName}`,
            description:
                "Read stories from communities, partners, and stakeholders involved in village development, rural transformation, and community-led change.",
            type: "website",
            url: `${siteUrl}/testimonials`,
        },
    },

    glossary: {
        title: `Glossary | ${siteName}`,
        description:
            "Understand key terms related to PBJT, village development, sustainability, rural livelihoods, climate resilience, and community-led transformation.",
        keywords: [
            "PBJT glossary",
            "rural development terms",
            "village development glossary",
            "sustainability terms",
            "climate resilience",
            "livelihood development",
            "community development",
            "local accountability",
            "NGO terminology",
            "just transition",
        ],
        alternates: { canonical: `${siteUrl}/glossary` },
        openGraph: {
            title: `Glossary | ${siteName}`,
            description:
                "Understand key terms related to PBJT, village development, sustainability, rural livelihoods, climate resilience, and community-led transformation.",
            type: "website",
            url: `${siteUrl}/glossary`,
        },
    },

    contact: {
        title: `Contact ${siteName} | Village Development NGO`,
        description:
            "Contact us to partner, collaborate, support, or learn more about our village development, rural transformation, and community-led sustainability work.",
        keywords: [
            "contact NGO",
            "village development NGO contact",
            "rural development partnership",
            "CSR partnership",
            "NGO collaboration",
            "support village development",
            "community development NGO",
            "rural transformation",
            "NGO India",
            "sustainability partnership",
        ],
        alternates: { canonical: `${siteUrl}/contact` },
        openGraph: {
            title: `Contact ${siteName} | Village Development NGO`,
            description:
                "Contact us to partner, collaborate, support, or learn more about our village development, rural transformation, and community-led sustainability work.",
            type: "website",
            url: `${siteUrl}/contact`,
        },
    },
};