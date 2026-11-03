<div align="center">

# Reyhan Haqiqi — Portfolio

**Web & Mobile Developer · Sidoarjo, Indonesia**

Portofolio pribadi yang dibangun dengan fokus pada performa, aksesibilitas, dan detail visual.
Didesain gelap, premium, dan responsif di semua ukuran layar.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=0B0E14)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=fff)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0055FF?style=for-the-badge&logo=framer&logoColor=fff)](https://motion.dev)

</div>

---

## ✦ Tentang Proyek

Website portofolio satu halaman yang menampilkan profil, keahlian, proyek, sertifikat,
dan kontak dalam satu pengalaman yang mulus. Dibangun dari nol dengan React dan
TypeScript, lalu dipoles dengan animasi yang bermakna — bukan sekadar hiasan.

> Dibuat dengan React, TypeScript & secangkir kopi ☕

## ✦ Fitur

- **Desain responsif** — rapi dari layar 320px sampai desktop lebar.
- **Dark neon aesthetic** — aksen lime, cyan, blue, dan pink yang konsisten.
- **Animasi halus** — reveal on scroll, parallax, marquee, dan micro-interaction.
- **Section lengkap** — Hero, About, Skills, Projects, Certificates, Contact.
- **Project preview** — gambar proyek dapat diklik untuk dibuka layar penuh.
- **Sertifikat** — tombol *Lihat Sertifikat* membuka PDF asli di tab baru.
- **SEO ready** — meta tags, Open Graph, JSON-LD (Person & WebSite), `robots.txt`, dan `sitemap.xml`.
- **Aksesibel** — skip link, focus state, label ARIA, dan dukungan `prefers-reduced-motion`.
- **Preloader** — transisi masuk yang singkat dan tidak mengganggu.
- **Navigation cerdas** — scroll spy, progress bar, dan bottom nav khusus mobile.

## ✦ Tech Stack

| Kategori | Teknologi |
| --- | --- |
| Framework | React 19 |
| Bahasa | TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animasi | Framer Motion |
| Ikon | Lucide React, React Icons |
| Font | Bricolage Grotesque, Space Grotesk, JetBrains Mono, Caveat |

## ✦ Menjalankan Proyek

```bash
# clone repository
git clone <url-repository-kamu>
cd my-porto

# install dependensi
npm install

# jalankan development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Scripts

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Type-check lalu build ke folder `dist/` |
| `npm run preview` | Melihat hasil build secara lokal |
| `npm run typecheck` | Memeriksa tipe TypeScript saja |

## ✦ Struktur Proyek

```text
my-porto/
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ assets/
│  │  ├─ files/          # sertifikat PDF
│  │  └─ images/         # gambar proyek & potret
│  ├─ components/
│  │  ├─ decor/          # doodle & ornamen
│  │  ├─ illustrations/  # ilustrasi pendukung
│  │  └─ ui/             # komponen UI reusable
│  ├─ data/              # konten: site, skills, projects, certificates
│  ├─ hooks/             # custom hooks
│  ├─ layouts/           # layout utama
│  ├─ styles/            # Tailwind & CSS global
│  ├─ types/             # tipe TypeScript
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ vite.config.ts
└─ package.json
```

## ✦ Kustomisasi

Semua konten utama dipisahkan dari komponen agar mudah diubah:

- `src/data/site.ts` — nama, peran, lokasi, kontak, sosial media, navigasi, statistik.
- `src/data/skills.ts` — kategori keahlian beserta ikon dan warna brand.
- `src/data/projects.ts` — judul, deskripsi, tech stack, gambar, dan link repo.
- `src/data/certificates.ts` — data sertifikat dan file PDF-nya.
- `src/styles/index.css` — token warna, animasi, dan utility kustom.

Ganti gambar di `src/assets/images/` dan sertifikat di `src/assets/files/`, lalu sesuaikan
path-nya pada file data terkait.

## ✦ SEO

Proyek ini sudah menyertakan:

- Judul dan deskripsi yang menyebut nama serta alias **Reyqie**.
- Structured data `Person` dan `WebSite` di `index.html`.
- `robots.txt` dan `sitemap.xml` di folder `public/`.

Sebelum deploy, ganti URL `https://reyhan.dev/` pada `index.html`, `robots.txt`, dan
`sitemap.xml` dengan domain final kamu.

## ✦ Deploy

Build menghasilkan aset statis di `dist/`. Deploy ke platform favoritmu:

- **Vercel** — import repo, framework terdeteksi otomatis sebagai Vite.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages** — build command `npm run build`, output directory `dist`.
- **GitHub Pages** — unggah isi folder `dist/`.

## ✦ Kontak

- Email: [reyhanfourniawan@gmail.com](mailto:reyhanfourniawan@gmail.com)
- WhatsApp: [+62 813 3671 3034](https://wa.me/6281336713034)
- GitHub: [@reyqie](https://github.com/reyqie)
- LinkedIn: [Reyhan Haqiqi](https://www.linkedin.com/in/reyhan-haqiqi-a-f-a226b0248)
- Instagram: [@reyqieee](https://www.instagram.com/reyqieee/)

---

<div align="center">

**Dibuat dengan rasa ingin tahu, detail, dan kopi.**

© Reyhan Haqiqi

</div>
