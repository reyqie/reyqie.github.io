import {
    SiBootstrap,
    SiClaudecode,
    SiCss,
    SiDart,
    SiDocker,
    SiFigma,
    SiFirebase,
    SiFlutter,
    SiGit,
    SiGithub,
    SiGithubcopilot,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiNodedotjs,
    SiPhp,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
    {
        id: "frontend",
        title: "Web Development",
        blurb: "Tekonologi untuk membangun antarmuka web yang modern dan responsif.",
        accent: "lime",
        skills: [
            {
                name: "HTML5",
                icon: SiHtml5,
                color: "#E34F26",
                note: "Markup semantik dan aksesibel",
            },
            {
                name: "CSS3",
                icon: SiCss,
                color: "#1572B6",
                note: "Tata letak, animasi, dan detail",
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
                color: "#F7DF1E",
                note: "Menggunakan standar ES2023",
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
                color: "#3178C6",
                note: "Tipe yang mudah dikembangkan bersama tim",
            },
            {
                name: "React",
                icon: SiReact,
                color: "#61DAFB",
                note: "Antarmuka berbasis komponen",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "#06B6D4",
                note: "Sistem desain cepat dan konsisten",
            },
            {
                name: "Bootstrap",
                icon: SiBootstrap,
                color: "#7952B3",
                note: "Tata letak praktis dan andal",
            },
        ],
    },
    {
        id: "mobile",
        title: "Mobile Development",
        blurb: "Pengembangan aplikasi untuk perangkat mobile.",
        accent: "pink",
        skills: [
            {
                name: "Dart",
                icon: SiDart,
                color: "#0175C2",
                note: "Bahasa utama untuk Flutter",
            },
            {
                name: "Flutter",
                icon: SiFlutter,
                color: "#02569B",
                note: "Antarmuka seluler yang presisi",
            },
        ],
    },
    {
        id: "backend",
        title: "Server Side Development",
        blurb: "Mesin di balik tampilan aplikasi.",
        accent: "blue",
        skills: [
            {
                name: "PHP",
                icon: SiPhp,
                color: "#777BB4",
                note: "Aplikasi lama dan ekosistem Laravel",
            },
            {
                name: "Node.js",
                icon: SiNodedotjs,
                color: "#5FA04E",
                note: "API dan alat pengembangan yang cepat",
            },
            {
                name: "Laravel",
                icon: SiLaravel,
                color: "#FF2D20",
                note: "Framework PHP untuk aplikasi web modern",
            },
        ],
    },
    {
        id: "database",
        title: "Database & Storage",
        blurb: "Tempat menyimpan dan mengelola data.",
        accent: "cyan",
        skills: [
            {
                name: "MySQL",
                icon: SiMysql,
                color: "#4479A1",
                note: "Pemodelan relasional dan kueri",
            },
            {
                name: "Firebase",
                icon: SiFirebase,
                color: "#FFCA28",
                note: "Penyimpanan dan layanan real-time",
            },
        ],
    },
    {
        id: "tools",
        title: "Tools & Utilities",
        blurb: "Perangkat untuk menghasilkan karya berkualitas.",
        accent: "lime",
        skills: [
            {
                name: "Git",
                icon: SiGit,
                color: "#F05032",
                note: "Mengelola cabang kode dengan aman",
            },
            {
                name: "GitHub",
                icon: SiGithub,
                color: "#F3F4F6",
                note: "Tinjauan kode, otomatisasi, dan rilis",
            },
            {
                name: "VS Code",
                icon: VscVscode,
                color: "#007ACC",
                note: "Ruang kerja yang disesuaikan",
            },
            {
                name: "Figma",
                icon: SiFigma,
                color: "#F24E1E",
                note: "Mewujudkan desain ke dalam kode",
            },
            {
                name: "Docker",
                icon: SiDocker,
                color: "#2496ED",
                note: "Lingkungan lokal yang konsisten",
            },
            {
                name: "Codex",
                icon: TbBrandOpenai,
                color: "#10A37F",
                note: "Asisten koding berbasis AI",
            },
            {
                name: "Claude Code",
                icon: SiClaudecode,
                color: "#D97757",
                note: "Pasangan pair-programming di terminal",
            },
            {
                name: "GitHub Copilot",
                icon: SiGithubcopilot,
                color: "#F3F4F6",
                note: "Saran kode kontekstual saat menulis",
            },
        ],
    },
];
