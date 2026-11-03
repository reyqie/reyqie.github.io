import type { Certificate } from "../types";
import aws from "../assets/files/Dasar AWS_Dicoding.pdf?url";
import frontEnd from "../assets/files/Dasar Front End_Dicoding.pdf?url";
import javascript from "../assets/files/Dasar JavaScript_Dicoding.pdf?url";
import ecommerce from "../assets/files/Fullstack Laravel Flutter E-Commerce_Buildwithangga.pdf?url";
import futureJobs from "../assets/files/Future Jobs App_Buildwithangga.pdf?url";
import network from "../assets/files/Kompetensi Jaringan_Radnet.pdf?url";
import flutterUi from "../assets/files/Mastering Flutter UI_Buildwithangga.pdf?url";

export const certificates: Certificate[] = [
    {
        id: "aws-cloud",
        title: "Dasar AWS Cloud",
        issuer: "Dicoding Indonesia",
        category: "Cloud Computing",
        description:
            "Memahami dasar cloud computing, layanan inti AWS, serta praktik dasar penerapan dan pengelolaan infrastruktur cloud.",
        accent: "lime",
        fileUrl: aws,
    },
    {
        id: "front-end",
        title: "Dasar Front End",
        issuer: "Dicoding Indonesia",
        category: "Web Development",
        description:
            "Membangun antarmuka web dengan HTML, CSS, dan praktik tata letak responsif yang rapi serta mudah diakses.",
        accent: "cyan",
        fileUrl: frontEnd,
    },
    {
        id: "javascript",
        title: "Dasar JavaScript",
        issuer: "Dicoding Indonesia",
        category: "Programming",
        description:
            "Menguasai dasar JavaScript modern, mulai dari sintaks, struktur data, hingga logika pemrograman untuk aplikasi web.",
        accent: "blue",
        fileUrl: javascript,
    },
    {
        id: "fullstack-ecommerce",
        title: "Fullstack Laravel & Flutter E-Commerce",
        issuer: "BuildWithAngga",
        category: "Fullstack Development",
        description:
            "Membangun aplikasi e-commerce end-to-end dengan Laravel sebagai backend dan Flutter untuk aplikasi mobile.",
        accent: "pink",
        fileUrl: ecommerce,
    },
    {
        id: "future-jobs-app",
        title: "Future Jobs App",
        issuer: "BuildWithAngga",
        category: "Mobile Development",
        description:
            "Merancang dan membangun aplikasi pencarian kerja dengan Flutter dan antarmuka yang modern serta interaktif.",
        accent: "lime",
        fileUrl: futureJobs,
    },
    {
        id: "network-competency",
        title: "Kompetensi Jaringan",
        issuer: "Radnet",
        category: "Networking",
        description:
            "Menguasai dasar-dasar jaringan komputer, konfigurasi perangkat, serta troubleshooting konektivitas jaringan.",
        accent: "cyan",
        fileUrl: network,
    },
    {
        id: "flutter-ui",
        title: "Mastering Flutter UI",
        issuer: "BuildWithAngga",
        category: "UI Development",
        description:
            "Mendalami pembuatan antarmuka Flutter yang presisi, animatif, dan konsisten di berbagai ukuran layar.",
        accent: "blue",
        fileUrl: flutterUi,
    },
];
