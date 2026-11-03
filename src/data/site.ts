import { Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import type { NavItem, SocialLink, Stat } from "../types";

export const site = {
    name: "Reyhan Haqiqi",
    firstName: "Reyhan",
    lastName: "Haqiqi",
    role: "Web & Mobile Developer",
    tagline:
        "Saya membangun aplikasi web dan mobile yang modern dan responsif dengan kode rapi serta ide kreatif.",
    location: "Sidoarjo, Indonesia",
    email: "reyhanfourniawan@gmail.com",
    whatsapp: "6281336713034",
    availability: "Open for freelance and full-time opportunities",
    resumeUrl: "/Reyhan-Haqiqi-CV.pdf",
    description:
        "Saya adalah web dan mobile developer yang bersemangat menciptakan pengalaman digital dengan perpaduan kreativitas, fungsi, dan kode yang rapi. Saya senang mempelajari teknologi baru dan mengubah ide menjadi aplikasi nyata.",
};

export const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
    {
        label: "Email",
        handle: "reyhanfourniawan@gmail.com",
        href: "mailto:reyhanfourniawan@gmail.com",
        icon: Mail,
    },
    {
        label: "WhatsApp",
        handle: "+62 813 3671 3034",
        href: "https://wa.me/6281336713034",
        icon: MessageCircle,
    },
    {
        label: "GitHub",
        handle: "@reyqie",
        href: "https://github.com/reyqie",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        handle: "in/reyhan-haqiqi-a-f",
        href: "https://www.linkedin.com/in/reyhan-haqiqi-a-f-a226b0248",
        icon: FaLinkedinIn,
    },
    {
        label: "Instagram",
        handle: "@reyqieee",
        href: "https://www.instagram.com/reyqieee/",
        icon: FaInstagram,
    },
];

export const stats: Stat[] = [
    {
        label: "Tahun Pengalaman",
        value: 3,
        suffix: "+",
        hint: "membangun produk nyata",
    },
    {
        label: "Proyek Selesai",
        value: 15,
        suffix: "+",
        hint: "web, mobile & ui/ux",
    },
    {
        label: "Teknologi Dipelajari",
        value: 10,
        suffix: "+",
        hint: "dan terus bertambah",
    },
];

export const quickFacts = [
    {
        label: "2024 – Sekarang",
        value: "Programmer & IT Support — PT. Selarasgriya Sarana Utama.",
    },
    {
        label: "2022 (3 Bulan)",
        value: "UI/UX Designer & Mobile Developer (Magang) — PT. Teknologi Inspirasi Nusantara.",
    },
    {
        label: "2019 (4 Bulan)",
        value: "IT Support (Magang) — BPSDMP KOMINFO Surabaya.",
    },
];

export const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Laravel",
    "Flutter",
];
