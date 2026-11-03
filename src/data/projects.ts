import type { Project } from "../types";
import {
    SiCloudflare,
    SiDart,
    SiFlutter,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiPhp,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

export const projects: Project[] = [
    {
        id: "timbangan-piss",
        title: "Timbangan PISS",
        category: "Aplikasi Web",
        description:
            "Dashboard aplikasi timbangan berbasis web untuk mengelola data timbangan, laporan, dan pengguna dengan antarmuka yang bersih dan responsif di PT. Selarasgriya Sarana Utama.",
        tech: [
            { name: "PHP v5", icon: SiPhp, color: "#777BB4" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
        ],
        year: "2024",
        repoUrl: "https://github.com/reyqie/timbangan-piss",
        accent: "lime",
        image: project1,
    },
    {
        id: "qieos-piss",
        title: "Qieos PISS",
        category: "Aplikasi Web",
        description:
            "Dashboard aplikasi web (POS System) untuk mengelola transaksi penjualan kantin, tenant, dan laporan keuangan dengan antarmuka yang bersih dan responsif di PT. Selarasgriya Sarana Utama.",
        tech: [
            { name: "PHP v8", icon: SiPhp, color: "#777BB4" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
        ],
        year: "2026",
        repoUrl: "https://github.com/reyqie/qieos-piss",
        accent: "blue",
        image: project2,
    },
    {
        id: "information-system",
        title: "Sistem Informasi UMKM",
        category: "Website Sistem Informasi",
        description:
            "Platform informasi desa Bulusari, kec. Gempol, Kab. Pasuruan - Jawa Timur dengan katalog UMKM, layanan desa, dan pelaku umkm pada program KKN UMSIDA 2023.",
        tech: [
            { name: "PHP v7", icon: SiPhp, color: "#777BB4" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        ],
        year: "2023",
        repoUrl: "https://github.com/reyqie/umkm-bulusari",
        accent: "cyan",
        image: project3,
    },
    {
        id: "mobile-bot-app",
        title: "AI Asstistant App",
        category: "Mobile App",
        description:
            "Aplikasi mobile berbasis AI Assistant yang memanfaatkan model bahasa besar untuk memberikan jawaban, saran, dan bantuan kepada pengguna melalui antarmuka percakapan yang intuitif. Project ini dikembangkan sebagai project akhir kuliah di UMSIDA pada tahun 2024.",
        tech: [
            { name: "Dart", icon: SiDart, color: "#0175C2" },
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "ChatGPT API", icon: TbBrandOpenai, color: "#10A37F" },
        ],
        year: "2024",
        repoUrl: "https://github.com/reyqie/reai",
        accent: "pink",
        image: project4,
    },
];
