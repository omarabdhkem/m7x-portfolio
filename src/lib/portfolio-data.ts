import {
  Atom,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  Flame,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Twitter,
  UsersRound,
} from "lucide-react";

export const navItems = [
  { label: "01. Home", href: "#home" },
  { label: "02. About", href: "#about" },
  { label: "03. Projects", href: "#projects" },
  { label: "04. Skills", href: "#skills" },
  { label: "05. Experience", href: "#experience" },
  { label: "06. Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/omarabdhkem", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
  { label: "Email", href: "mailto:hello@m7x.dev", icon: Mail },
];

export const heroStats = [
  { label: "Years Experience", value: "3+", icon: Rocket },
  { label: "Projects Completed", value: "25+", icon: Code2 },
  { label: "Happy Clients", value: "15+", icon: UsersRound },
  { label: "Technologies", value: "10+", icon: Trophy },
];

export const impactStats = [
  { label: "Projects impacted", value: "12,842+" },
  { label: "Based in", value: "Egypt", icon: MapPin },
];

export const projects = [
  {
    category: "AI Platform",
    title: "Nagi AI",
    description: "AI-powered platform to analyze food and cosmetic ingredients.",
    stack: ["React", "Python", "TensorFlow", "Node"],
    accent: "cyan",
  },
  {
    category: "Web App",
    title: "CarVista Navigator",
    description: "Smart car marketplace with AI recommendations and tools.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    accent: "blue",
  },
  {
    category: "E-Commerce",
    title: "DzStore",
    description: "Modern commerce platform for local merchants and analytics.",
    stack: ["TypeScript", "Stripe", "Supabase"],
    accent: "purple",
  },
  {
    category: "Mobile App",
    title: "ZeroToHero",
    description: "English learning app with AI assistant and smart paths.",
    stack: ["Flutter", "Firebase", "AI"],
    accent: "violet",
  },
];

export const skills = [
  { name: "React", icon: Atom, level: "Interface systems" },
  { name: "TypeScript", icon: Code2, level: "Typed architecture" },
  { name: "Python", icon: Bot, level: "Automation and AI" },
  { name: "Next.js", icon: Sparkles, level: "Full-stack products" },
  { name: "Tailwind CSS", icon: Flame, level: "Design systems" },
  { name: "PostgreSQL", icon: Database, level: "Reliable data" },
  { name: "MongoDB", icon: Database, level: "Flexible stores" },
  { name: "Node.js", icon: ShieldCheck, level: "APIs and tooling" },
];

export const timeline = [
  {
    year: "2022",
    title: "Started Coding",
    description: "Began the journey with a passion for building digital products.",
    icon: Code2,
  },
  {
    year: "2023",
    title: "Freelance Work",
    description: "Worked on client projects across websites, dashboards and tools.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2024",
    title: "AI Exploration",
    description: "Deep dive into AI, LLM apps and intelligent automation.",
    icon: Bot,
  },
  {
    year: "2025",
    title: "Building M7X",
    description: "Creating products that make an impact with design and code.",
    icon: Rocket,
  },
];
