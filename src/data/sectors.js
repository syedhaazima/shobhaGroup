// SHOBHA GROUP – Sector Data
// All content is editable placeholder content until official information is provided.

import textileHero from "../assets/textile2.webp";
import textileCard from "../assets/textile1.jfif";
import textileGallery from "../assets/textile3.webp";
import constructionHero from "../assets/constructor2.jfif";
import constructionCard from "../assets/constructor3.jfif";
import educationHero from "../assets/education3.jpg";
import educationCard from "../assets/education1.jpeg";
import educationGallery from "../assets/education2.jfif";
import madrasaHero from "../assets/madrasa3.jfif";
import madrasaCard from "../assets/madrasa1.jfif";
import madrasaGallery from "../assets/madrasa2.jfif";
import hospitalityImage from "../assets/hospitality2.jfif";
import healthcareCard from "../assets/hospitality1.jfif";

export const sectors = [
  {
    id: "textile",
    slug: "textile",
    name: "Textile",
    icon: "Shirt",
    shortDesc:
      "Premium fabric production, garment manufacturing, and quality textile solutions for domestic and international markets.",
    heroImage: textileHero,
    cardImage: textileCard,
    galleryImages: [textileCard, textileHero, textileGallery],
    color: "#D4AF6A",
    intro:
      "The Textile Division of SOBHA Group is built on a strong foundation of quality, innovation and reliability. We are engaged in the manufacturing and supply of a wide range of knitted fabrics and garment textiles to global markets with consistent quality and sustainable practices.",
    services: [
      "Premium Fabrics",
      "Innovation & Product Development",
      "Sustainability & Responsible Manufacturing",
      "Global Reach & Trusted Supply",
      "Custom Fabric Solutions",
      "Quality-Driven Production",
    ],
    details:
      "Our strength lies in modern manufacturing facilities, a skilled workforce and a commitment to excellence. We provide knitted fabrics, woven fabrics, value-added fabrics and customized solutions to diverse industries while maintaining standardized quality, ethical sourcing and long-term partnerships.",
  },
  {
    id: "construction",
    slug: "construction",
    name: "Construction",
    icon: "Building2",
    shortDesc:
      "Infrastructure development, architectural excellence, and end-to-end project management for landmark construction projects.",
    heroImage: constructionHero,
    cardImage: constructionCard,
    galleryImages: [constructionHero, constructionCard],
    color: "#D4AF6A",
    intro:
      "The Construction Division of SOBHA Group is known for delivering iconic and high-quality built environments. With a strong focus on engineering excellence, innovation and timely delivery, we create spaces that inspire and stand the test of time.",
    services: [
      "Residential Buildings",
      "Commercial Spaces",
      "Infrastructure Projects",
      "Project Planning & Execution",
      "Sustainable Construction",
      "Quality Assurance & Delivery",
    ],
    details:
      "Our strength is our expertise in large-scale and complex construction projects with a proven track record. We deliver end-to-end project execution, adopt modern construction technologies and maintain stringent quality standards while remaining committed to safe, sustainable and high-performance construction for a better tomorrow.",
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    shortDesc:
      "Empowering future generations through quality academic programs, professional development, and holistic learning environments.",
    heroImage: educationHero,
    cardImage: educationCard,
    galleryImages: [educationCard, educationHero, educationGallery],
    color: "#D4AF6A",
    intro:
      "The Education Division of SOBHA Group is committed to shaping future generations by providing high-quality, value-based education. We aim to create learning environments that nurture talent, encourage innovation and build responsible global citizens.",
    services: [
      "Academic Excellence",
      "Skill Development",
      "Holistic Growth",
      "Global Perspective",
      "Student-Centric Learning",
      "Value-Based Education",
    ],
    details:
      "Our approach is a balanced curriculum that combines academic excellence with practical skills and values. Our strength lies in experienced educators, modern learning facilities and a student-centric approach, while our commitment is to empower students with knowledge, creativity and confidence to face the future.",
  },
  {
    id: "madrasa",
    slug: "madrasa",
    name: "Madrasa",
    icon: "BookOpen",
    shortDesc:
      "Dedicated Quran education, Hifz programs, and Islamic learning to nurture spiritual growth and moral character.",
    heroImage: madrasaHero,
    cardImage: madrasaCard,
    galleryImages: [madrasaCard, madrasaHero, madrasaGallery],
    color: "#D4AF6A",
    intro:
      "The Madrasa Division of SOBHA Group is dedicated to imparting authentic Islamic education with a focus on Quran and Hifz, along with contemporary learning and life skills. Our goal is to help students become well-rounded, value-driven individuals who contribute positively to society.",
    services: [
      "Quran & Hifz",
      "Islamic Studies",
      "Character Building",
      "Community Impact",
      "Value-Based Learning",
      "Structured Islamic Education",
    ],
    details:
      "Our approach is a balanced education combining Quran, Islamic studies and modern life skills in a nurturing environment. Our strength lies in qualified and experienced teachers, a structured curriculum and a value-based learning system, and our commitment is to nurture pious, knowledgeable and responsible individuals who contribute positively to society.",
  },
  {
    id: "hospitality-healthcare",
    slug: "hospitality-healthcare",
    name: "Hospitality & Healthcare",
    icon: "Hotel",
    shortDesc:
      "Welcoming guest experiences and compassionate healthcare, delivered with quality, comfort, and care.",
    heroImage: hospitalityImage,
    cardImage: hospitalityImage,
    galleryImages: [hospitalityImage, healthcareCard],
    color: "#D4AF6A",
    intro:
      "The Hospitality & Healthcare division brings together exceptional guest service and compassionate patient care. It is committed to creating welcoming experiences and supporting the health and well-being of the communities it serves.",
    services: [
      "Hotel & Resort Management",
      "Guest Experience Design",
      "Food & Beverage Services",
      "Event & Banquet Management",
      "Concierge Services",
      "Hospitality Staff Training",
      "Primary & Specialist Medical Care",
      "Diagnostic Services",
      "Pharmacy & Medication Management",
      "Preventive Health Programs",
      "Community Health Outreach",
      "Patient Support & Counseling",
    ],
    details:
      "In hospitality, we focus on comfort, attentive service and memorable guest experiences. In healthcare, we are committed to accessible, compassionate care, ethical practice and community well-being. Both areas share a dedication to quality, dignity and putting people first.",
  },
];

export const getSectorBySlug = (slug) =>
  sectors.find((s) => s.slug === slug)
  || (["hospitality", "healthcare"].includes(slug)
    ? sectors.find((s) => s.slug === "hospitality-healthcare")
    : null);
