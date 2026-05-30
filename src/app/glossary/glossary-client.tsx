"use client";

import { useState } from "react";
import {
  Search,
  Building2,
  Users,
  Leaf,
  FileText,
  Store,
  Heart,
  UsersRound,
  Link2,
  BookOpen,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import styles from "./Glossary.module.css";
import Link from "next/link";

const cn = (names: string) =>
  names
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(" ");

const terms = [
  {
    id: "pbjt",
    name: "PBJT",
    category: "Framework",
    icon: Building2,
    description:
      "Place-Based Just Transition focuses on how sustainability is experienced at the last tiers of value chains",
  },
  {
    id: "jt",
    name: "JT",
    category: "Framework",
    icon: Users,
    description:
      "A process of shifting to environmentally sustainable economies in a way that is fair and inclusive",
  },
  {
    id: "esg",
    name: "ESG",
    category: "Business",
    icon: Leaf,
    description:
      "A framework used by companies and investors to assess non-financial performance",
  },
  {
    id: "brsr",
    name: "BRSR",
    category: "Business",
    icon: FileText,
    description:
      "A disclosure framework through which companies report on their social and environmental responsibilities",
  },
  {
    id: "msmes",
    name: "MSMEs",
    category: "Business",
    icon: Store,
    description:
      "Small-scale businesses that form the backbone of local economies and supply chains",
  },
  {
    id: "csr",
    name: "CSR",
    category: "Business",
    icon: Heart,
    description:
      "Activities undertaken by companies to contribute to social and environmental wellbeing",
  },
  {
    id: "shgs",
    name: "SHGs",
    category: "Community",
    icon: UsersRound,
    description:
      "Community-based groups, often of women, formed around savings, credit, livelihoods, or shared issues",
  },
  {
    id: "value-chain",
    name: "Value Chain",
    category: "Framework",
    icon: Link2,
    description:
      "The full range of activities and actors involved in producing, distributing, using, and disposing of",
  },
  {
    id: "value-chain-1",
    name: "Value Chain",
    category: "Framework",
    icon: Link2,
    description:
      "The full range of activities and actors involved in producing, distributing, using, and disposing of",
  },
];

const alphabet = [
  "All",
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
];
const categories = [
  "All",
  "Framework",
  "Community",
  "Business",
  "Governance",
  "Research",
];

const allTermsAZ = {
  A: ["Accountability", "Action Study", "Acronyms"],
  B: ["BRSR", "Business Responsibility", "Business Ecosystem"],
  C: ["CSR", "Collective Agency", "Collectivisation"],
  G: ["Grievance Mechanism", "Green Jobs", "Governance"],
  I: ["Informal Economy", "Inclusive Transition", "Impact"],
  L: ["Last-Tier / Last-Mile", "Local Resilience", "Livelihood Security"],
};

const featuredTerms = [
  {
    id: "pbjt",
    name: "PBJT",
    subtitle: "Place-Based Just Transition",
    description:
      "An approach that begins with places and people, centering workers, MSMEs, and communities.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&h=400&fit=crop",
  },
  {
    id: "jt",
    name: "Just Transition",
    description:
      "A fair and inclusive shift to sustainable economies where no worker or community is left behind.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
  },
  {
    id: "value-chain",
    name: "Value Chain",
    description:
      "Inclusive of informal and last-tier actors whose work drives real economies.",
    icon: Link2,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
];

export default function Glossary() {
  const [activeLetter, setActiveLetter] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = terms.filter((term) => {
    const matchesCategory =
      activeCategory === "All" || term.category === activeCategory;
    const matchesLetter =
      activeLetter === "All" ||
      term.name.charAt(0).toUpperCase() === activeLetter;
    const matchesSearch =
      !searchQuery ||
      term.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLetter && matchesSearch;
  });

  const DEFAULT_VISIBLE_COUNT = 8;
  const [showAll, setShowAll] = useState(false);

  const visibleTerms = showAll
    ? filteredTerms
    : filteredTerms.slice(0, DEFAULT_VISIBLE_COUNT);

  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  const selectedTerm = filteredTerms.find((term) => term.id === selectedTermId);

  return (
    <div className={cn("glossary-page")}>
      {/* HERO */}
      <header className={cn("hero")}>
        <div className={cn("hero-overlay")} />
        <div className={cn("hero-inner center-content")}>
          <h1 className={cn("hero-title")}>Glossary & Acronyms</h1>
          <p className={cn("hero-subtitle")}>
            Key terms and abbreviations used across the PBJT website
          </p>
          <div className={cn("hero-tag")}>
            <p>
              This glossary explains how key terms and acronyms are used within
              the Place-Based Just Transition (PBJT) framework. Definitions are
              practical and grounded in how these ideas appear in real work,
              communities, and value chains.
            </p>
          </div>
        </div>
      </header>

      <main className={cn("container center-content")}>
        {/* SEARCH */}
        <div className={cn("search-bar")}>
          <Search size={20} className={cn("search-icon")} />
          <input
            type="text"
            placeholder="Search for a term, acronym or concept"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* ALPHABET FILTER */}
        {/* <div className={cn("filter-section")}>
          <p className={cn("filter-label")}>Browse by alphabet</p>
          <div className={cn("alphabet-filter")}>
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={cn(
                  `alphabet-btn ${activeLetter === letter ? "active" : ""}`,
                )}
                onClick={() => setActiveLetter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div> */}

        {/* CATEGORY FILTER */}
        <div className={cn("filter-section")}>
          <p className={cn("filter-label")}>Filter by category</p>
          <div className={cn("category-filter")}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={cn(
                  `category-btn ${activeCategory === cat ? "active" : ""}`,
                )}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* TERMS GRID */}
        <div className={cn("terms-grid")}>
          {visibleTerms.map((term) => {
            const Icon = term.icon;
            return (
              <article key={term.id} className={cn("term-card")}>
                <div className={cn("term-icon")}>
                  <Icon size={22} />
                </div>
                <div className={cn("term-header")}>
                  <h3 className={cn("term-name")}>{term.name}</h3>
                  <span
                    className={cn(
                      `term-category cat-${term.category.toLowerCase()}`,
                    )}
                  >
                    {term.category.toUpperCase()}
                  </span>
                </div>
                <p className={cn("term-description line-clamp-3")}>
                  {term.description}
                </p>
                <div
                  className={cn("read-more cursor-pointer")}
                  onClick={() => setSelectedTermId(term.id)}
                >
                  Read more <ArrowRight size={14} />
                </div>
              </article>
            );
          })}
        </div>

        {visibleTerms.length === 0 && (
          <div className={cn("no-results")}>No terms match your filters.</div>
        )}

        {!showAll && (
          <div className={cn("view-all-wrapper")}>
            <button
              className={cn("view-all-btn")}
              onClick={() => {
                setShowAll(true);
              }}
            >
              View all terms <ChevronDown size={16} />
            </button>
          </div>
        )}

        <div className="w-full h-15"></div>

        {/* FEATURED TERMS */}
        {/* <section className={cn("featured-section")}>
          <div className={cn("section-header")}>
            <h2>Featured terms</h2>
            <a href="#" className={cn("view-all-link")}>
              View all featured <ArrowRight size={14} />
            </a>
          </div>
          <div className={cn("featured-grid")}>
            {featuredTerms.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className={cn("featured-card")}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className={cn("featured-overlay")} />
                  <div className={cn("featured-icon-circle")}>
                    <Icon size={20} />
                  </div>
                  <div className={cn("featured-content")}>
                    <h3>{item.name}</h3>
                    {item.subtitle && (
                      <p className={cn("featured-subtitle")}>{item.subtitle}</p>
                    )}
                    <p className={cn("featured-desc")}>{item.description}</p>
                    <a href="#" className={cn("explore-link")}>
                      Explore <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section> */}

        {/* CONNECTIONS DIAGRAM */}
        {/* <section className={cn("connections-section")}>
          <div className={cn("connections-intro")}>
            <h2>How key terms connect in PBJT</h2>
            <p>
              PBJT is an interconnected approach. These terms work together to
              build fair, inclusive, and sustainable economies.
            </p>
            <button className={cn("explore-framework-btn")}>
              Explore the framework <ArrowRight size={14} />
            </button>
          </div>
          <div className={cn("connections-diagram")}>
            <div className={cn("diagram-node node-tl")}>
              <div className={cn("node-icon")}>
                <Users size={16} />
              </div>
              <div className={cn("node-text")}>
                <strong>Workers</strong>
                <span>Dignified work and collective voice</span>
              </div>
            </div>
            <div className={cn("diagram-node node-tr")}>
              <div className={cn("node-icon")}>
                <Link2 size={16} />
              </div>
              <div className={cn("node-text")}>
                <strong>Value Chain</strong>
                <span>Inclusive of last-tier and informal actors</span>
              </div>
            </div>
            <div className={cn("diagram-node node-ml")}>
              <div className={cn("node-icon")}>
                <Store size={16} />
              </div>
              <div className={cn("node-text")}>
                <strong>MSMEs</strong>
                <span>Local enterprises as transition partners</span>
              </div>
            </div>
            <div className={cn("diagram-node node-mr")}>
              <div className={cn("node-icon")}>
                <FileText size={16} />
              </div>
              <div className={cn("node-text")}>
                <strong>ESG &amp; BRSR</strong>
                <span>Accountability through real impact</span>
              </div>
            </div>
            <div className={cn("diagram-node node-bm")}>
              <div className={cn("node-icon")}>
                <UsersRound size={16} />
              </div>
              <div className={cn("node-text")}>
                <strong>Communities</strong>
                <span>Collective agency and local resilience</span>
              </div>
            </div>
            <div className={cn("diagram-center")}>
              <span className={cn("center-title")}>PBJT</span>
              <span className={cn("center-sub")}>
                Place-Based Just Transition
              </span>
            </div>
          </div>
        </section> */}

        {/* ALL TERMS A-Z */}
        {/* <section className={cn("all-terms-section")}>
          <div className={cn("section-header")}>
            <h2>All terms A–Z</h2>
            <a href="#" className={cn("view-all-link")}>
              View all terms <ArrowRight size={14} />
            </a>
          </div>
          <div className={cn("all-terms-grid")}>
            {Object.entries(allTermsAZ).map(([letter, list]) => (
              <div key={letter} className={cn("letter-group")}>
                <h3 className={cn("letter-heading")}>{letter}</h3>
                <ul>
                  {list.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section> */}
      </main>

      {/* CTA BANNER */}
      {/* <section className={cn("cta-banner")}>
        <div className={cn("cta-inner center-content")}>
          <div className={cn("cta-left")}>
            <div className={cn("cta-icon")}>
              <BookOpen size={26} />
            </div>
            <div className={cn("cta-text")}>
              <h3>Understanding the terms is just the beginning.</h3>
              <p>Explore how these ideas translate into action.</p>
            </div>
          </div>
          <div className={cn("cta-buttons")}>
            <Link href="/methodology">
              <button className={cn("cta-btn")}>Explore Methodology</button>
            </Link>
            <Link href="/framework">
              <button className={cn("cta-btn")}>View Framework</button>
            </Link>
          </div>
        </div>
      </section> */}

      {selectedTerm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedTermId(null)}
              className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-sm font-bold text-gray-700 hover:bg-gray-200"
            >
              ✕
            </button>

            <article className="pr-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700">
                <selectedTerm.icon size={22} />
              </div>

              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedTerm.name}
                </h3>

                <span
                  className={cn(
                    `term-category cat-${selectedTerm.category.toLowerCase()}`,
                  )}
                >
                  {selectedTerm.category.toUpperCase()}
                </span>
              </div>

              <p className="text-base leading-7 text-gray-700">
                {selectedTerm.description}
              </p>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
