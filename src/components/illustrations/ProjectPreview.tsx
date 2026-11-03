import { useId } from 'react'
import type { Accent, PreviewVariant } from '../../types'

interface ProjectPreviewProps {
  variant: PreviewVariant
  accent: Accent
  className?: string
}

const palettes: Record<Accent, { primary: string; secondary: string }> = {
  blue: { primary: '#60A5FA', secondary: '#2563EB' },
  cyan: { primary: '#22D3EE', secondary: '#3B82F6' },
  lime: { primary: '#CDF94E', secondary: '#34D399' },
  pink: { primary: '#F472B6', secondary: '#38BDF8' },
}

export function ProjectPreview({ variant, accent, className = '' }: ProjectPreviewProps) {
  const rawId = useId()
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '')
  const gid = (name: string) => `${uid}-${name}`
  const { primary, secondary } = palettes[accent]

  const urlLabel: Record<PreviewVariant, string> = {
    ecommerce: 'lumen.store',
    dashboard: 'insight.app',
    academic: 'nusa.edu',
    finance: 'pocket.finance',
  }

  return (
    <svg
      viewBox="0 0 640 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gid('accent')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={primary} />
          <stop offset="1" stopColor={secondary} />
        </linearGradient>
        <linearGradient id={gid('accent-soft')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={primary} stopOpacity="0.5" />
          <stop offset="1" stopColor={secondary} stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id={gid('area')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={primary} stopOpacity="0.45" />
          <stop offset="1" stopColor={primary} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={gid('panel')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1A1E2B" />
          <stop offset="1" stopColor="#0E1017" />
        </linearGradient>
        <radialGradient id={gid('glow')} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={primary} stopOpacity="0.3" />
          <stop offset="1" stopColor={primary} stopOpacity="0" />
        </radialGradient>
        <clipPath id={gid('clip')}>
          <rect width="640" height="400" rx="22" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${gid('clip')})`}>
        <rect width="640" height="400" fill="#0A0C12" />
        <ellipse cx="560" cy="20" rx="300" ry="200" fill={`url(#${gid('glow')})`} />
        <ellipse cx="40" cy="400" rx="260" ry="190" fill={`url(#${gid('glow')})`} />
        <g opacity="0.35" stroke="#FFFFFF" strokeOpacity="0.05">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line key={`v-${i}`} x1={i * 80} y1="0" x2={i * 80} y2="400" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`h-${i}`} x1="0" y1={i * 100} x2="640" y2={i * 100} />
          ))}
        </g>

        <rect x="0" y="0" width="640" height="38" fill="#12151F" />
        <circle cx="20" cy="19" r="4" fill="#F472B6" />
        <circle cx="34" cy="19" r="4" fill="#CDF94E" />
        <circle cx="48" cy="19" r="4" fill="#22D3EE" />
        <rect x="222" y="10" width="196" height="18" rx="9" fill="#0A0C12" stroke="#FFFFFF" strokeOpacity="0.07" />
        <text
          x="320"
          y="23"
          textAnchor="middle"
          fill="#FFFFFF"
          fillOpacity="0.42"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8.5"
        >
          {urlLabel[variant]}
        </text>

        {variant === 'ecommerce' ? (
          <g>
            <rect x="20" y="56" width="58" height="324" rx="16" fill="#12151F" stroke="#FFFFFF" strokeOpacity="0.07" />
            <circle cx="49" cy="82" r="9" fill={`url(#${gid('accent')})`} />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x="35"
                y={114 + i * 34}
                width="28"
                height="20"
                rx="7"
                fill={i === 0 ? primary : '#FFFFFF'}
                fillOpacity={i === 0 ? 0.22 : 0.07}
              />
            ))}
            <rect x="49" y="352" width="14" height="14" rx="4" fill="#FFFFFF" fillOpacity="0.08" />

            <text x="96" y="82" fill="#FFFFFF" fontSize="13" fontWeight="700" letterSpacing="3" fontFamily="Space Grotesk, sans-serif">
              LUMEN
            </text>
            {[0, 1, 2].map((i) => (
              <rect key={i} x={236 + i * 46} y="76" width="32" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.2" />
            ))}
            <circle cx="602" cy="79" r="14" fill="#FFFFFF" fillOpacity="0.06" stroke="#FFFFFF" strokeOpacity="0.1" />
            <path d="M596 76h11l-1.5 8h-8L596 76Z" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.4" strokeLinejoin="round" />
            <circle cx="598" cy="88" r="1.4" fill={primary} />
            <circle cx="604" cy="88" r="1.4" fill={primary} />

            <rect x="96" y="98" width="524" height="122" rx="16" fill={`url(#${gid('accent-soft')})`} />
            <rect x="96" y="98" width="524" height="122" rx="16" stroke={primary} strokeOpacity="0.25" />
            <circle cx="540" cy="166" r="76" fill={primary} fillOpacity="0.12" />
            <circle cx="566" cy="130" r="43" fill="none" stroke={primary} strokeOpacity="0.45" strokeDasharray="3 7" />
            <circle cx="587" cy="191" r="28" fill={primary} fillOpacity="0.16" />
            <rect x="521" y="119" width="65" height="76" rx="18" fill="#0E1017" stroke="#FFFFFF" strokeOpacity="0.16" transform="rotate(-8 521 119)" />
            <path d="M539 139c11 5 21 13 25 24" stroke={primary} strokeWidth="2" strokeLinecap="round" opacity="0.9" />

            <text x="120" y="131" fill={primary} fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="2.5">
              KOLEKSI BARU / 2026
            </text>
            <text x="120" y="160" fill="#FFFFFF" fontSize="23" fontWeight="700" fontFamily="Space Grotesk, sans-serif" letterSpacing="-0.5">
              Perlengkapan untuk
            </text>
            <text x="120" y="184" fill="#FFFFFF" fontSize="23" fontWeight="700" fontFamily="Space Grotesk, sans-serif" letterSpacing="-0.5">
              ruang kerja nyaman.
            </text>
            <rect x="120" y="196" width="81" height="22" rx="11" fill={primary} />
            <text x="160" y="211" textAnchor="middle" fill="#08090D" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              Belanja →
            </text>

            {[
              { x: 96, name: 'Kursi Aero', price: '$289', shape: 'chair' },
              { x: 276, name: 'Lampu Drift', price: '$129', shape: 'lamp' },
              { x: 456, name: 'Speaker Orb', price: '$199', shape: 'orb' },
            ].map((product) => (
              <g key={product.name}>
                <rect x={product.x} y="236" width="164" height="144" rx="15" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
                <rect x={product.x + 10} y="246" width="144" height="70" rx="10" fill={`url(#${gid('accent-soft')})`} />
                {product.shape === 'chair' ? (
                  <>
                    <rect x={product.x + 55} y="263" width="52" height="36" rx="10" fill="#0E1017" stroke={primary} strokeOpacity="0.35" />
                    <path d={`M${product.x + 70} 299v8M${product.x + 92} 299v8`} stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : product.shape === 'lamp' ? (
                  <>
                    <path d={`M${product.x + 80} 301v-22`} stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
                    <path d={`M${product.x + 60} 280c0-18 40-18 40 0`} stroke={primary} strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx={product.x + 80} cy="279" r="5" fill={primary} />
                  </>
                ) : (
                  <>
                    <circle cx={product.x + 80} cy="281" r="22" fill="#0E1017" stroke={primary} strokeOpacity="0.4" />
                    <circle cx={product.x + 80} cy="281" r="8" fill={primary} fillOpacity="0.35" />
                  </>
                )}
                <text x={product.x + 12} y="334" fill="#FFFFFF" fillOpacity="0.88" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
                  {product.name}
                </text>
                <text x={product.x + 12} y="352" fill={primary} fontSize="9" fontFamily="JetBrains Mono, monospace">
                  {product.price}
                </text>
                <circle cx={product.x + 142} cy="345" r="11" fill="#FFFFFF" fillOpacity="0.06" stroke="#FFFFFF" strokeOpacity="0.12" />
                <path d={`M${product.x + 138} 345h8M${product.x + 142} 341v8`} stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.3" strokeLinecap="round" />
              </g>
            ))}
          </g>
        ) : null}

        {variant === 'dashboard' ? (
          <g>
            <rect x="20" y="56" width="52" height="324" rx="16" fill="#12151F" stroke="#FFFFFF" strokeOpacity="0.07" />
            <circle cx="46" cy="82" r="9" fill={`url(#${gid('accent')})`} />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x="33" y={114 + i * 34} width="26" height="20" rx="7" fill={i === 0 ? primary : '#FFFFFF'} fillOpacity={i === 0 ? 0.22 : 0.07} />
            ))}
            <circle cx="46" cy="356" r="10" fill="#FFFFFF" fillOpacity="0.1" />

            <text x="90" y="80" fill="#FFFFFF" fontSize="17" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              Ringkasan
            </text>
            <text x="90" y="94" fill="#FFFFFF" fillOpacity="0.42" fontSize="8" fontFamily="JetBrains Mono, monospace">
              Selamat datang kembali, Reyhan.
            </text>
            <rect x="504" y="67" width="116" height="24" rx="12" fill="#12151F" stroke="#FFFFFF" strokeOpacity="0.08" />
            <text x="562" y="82" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.55" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
              01 Okt — 31 Okt
            </text>

            {[
              { x: 90, label: 'PENDAPATAN', value: '$48.2k', delta: '+12.4%' },
              { x: 264, label: 'PESANAN', value: '1,284', delta: '+8.1%' },
              { x: 438, label: 'KONVERSI', value: '4.86%', delta: '+2.3%' },
            ].map((kpi) => (
              <g key={kpi.label}>
                <rect x={kpi.x} y="112" width="162" height="58" rx="12" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
                <text x={kpi.x + 12} y="130" fill="#FFFFFF" fillOpacity="0.4" fontSize="7" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">
                  {kpi.label}
                </text>
                <text x={kpi.x + 12} y="152" fill="#FFFFFF" fontSize="17" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
                  {kpi.value}
                </text>
                <text x={kpi.x + 126} y="152" fill={primary} fontSize="7.5" fontFamily="JetBrains Mono, monospace">
                  {kpi.delta}
                </text>
              </g>
            ))}

            <rect x="90" y="184" width="336" height="186" rx="14" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
            <text x="106" y="207" fill="#FFFFFF" fillOpacity="0.8" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
              Arus pendapatan
            </text>
            <rect x="332" y="197" width="76" height="16" rx="8" fill="#FFFFFF" fillOpacity="0.05" />
            <text x="370" y="208" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.5" fontSize="6.5" fontFamily="JetBrains Mono, monospace">
              6 BULAN
            </text>
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="106" y1={236 + i * 28} x2="410" y2={236 + i * 28} stroke="#FFFFFF" strokeOpacity="0.06" />
            ))}
            <path d="M106 330 150 312 194 320 238 286 282 296 326 258 370 268 410 238V354H106Z" fill={`url(#${gid('area')})`} />
            <path d="M106 330 150 312 194 320 238 286 282 296 326 258 370 268 410 238" stroke={primary} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="326" cy="258" r="4.5" fill="#0A0C12" stroke={primary} strokeWidth="2" />
            {['JAN', 'FEB', 'MAR', 'APR', 'MEI'].map((m, i) => (
              <text key={m} x={110 + i * 72} y="364" fill="#FFFFFF" fillOpacity="0.3" fontSize="6.5" fontFamily="JetBrains Mono, monospace">
                {m}
              </text>
            ))}

            <rect x="442" y="184" width="178" height="186" rx="14" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
            <text x="458" y="207" fill="#FFFFFF" fillOpacity="0.8" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
              Trafik
            </text>
            <circle cx="531" cy="264" r="35" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="11" />
            <circle cx="531" cy="264" r="35" stroke={primary} strokeWidth="11" strokeDasharray="132 220" strokeLinecap="round" transform="rotate(-90 531 264)" />
            <circle cx="531" cy="264" r="35" stroke={secondary} strokeWidth="11" strokeDasharray="44 220" strokeDashoffset="-142" strokeLinecap="round" transform="rotate(-90 531 264)" opacity="0.75" />
            <text x="531" y="262" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              68%
            </text>
            <text x="531" y="274" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.35" fontSize="6" fontFamily="JetBrains Mono, monospace">
              ORGANIK
            </text>
            {[
              { color: primary, label: 'Langsung', value: '42%' },
              { color: secondary, label: 'Sosial', value: '26%' },
            ].map((row, i) => (
              <g key={row.label}>
                <circle cx="462" cy={320 + i * 18} r="3" fill={row.color} />
                <text x="472" y={323 + i * 18} fill="#FFFFFF" fillOpacity="0.5" fontSize="7" fontFamily="Space Grotesk, sans-serif">
                  {row.label}
                </text>
                <text x="600" y={323 + i * 18} textAnchor="end" fill="#FFFFFF" fillOpacity="0.7" fontSize="7" fontFamily="JetBrains Mono, monospace">
                  {row.value}
                </text>
              </g>
            ))}
          </g>
        ) : null}

        {variant === 'academic' ? (
          <g>
            <text x="30" y="78" fill="#FFFFFF" fontSize="12" fontWeight="700" letterSpacing="2" fontFamily="Space Grotesk, sans-serif">
              NUSA
            </text>
            <circle cx="83" cy="73" r="3" fill={primary} />
            {['Program', 'Kampus', 'Riset'].map((label, i) => (
              <text key={label} x={262 + i * 68} y="77" fill="#FFFFFF" fillOpacity="0.45" fontSize="7.5" fontFamily="Space Grotesk, sans-serif">
                {label}
              </text>
            ))}
            <rect x="524" y="62" width="86" height="24" rx="12" fill={primary} />
            <text x="567" y="77" textAnchor="middle" fill="#08090D" fontSize="7.5" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              Daftar
            </text>

            <rect x="30" y="96" width="580" height="128" rx="16" fill={`url(#${gid('accent-soft')})`} stroke={primary} strokeOpacity="0.22" />
            <text x="54" y="124" fill={primary} fontSize="7.5" fontFamily="JetBrains Mono, monospace" letterSpacing="2.4">
              PENDAFTARAN DIBUKA / 2026
            </text>
            <text x="54" y="153" fill="#FFFFFF" fontSize="22" fontWeight="700" fontFamily="Space Grotesk, sans-serif" letterSpacing="-0.5">
              Tentukan masa depanmu.
            </text>
            <text x="54" y="172" fill="#FFFFFF" fillOpacity="0.5" fontSize="8" fontFamily="Space Grotesk, sans-serif">
              Kampus bagi pemikir ingin tahu dan ide berani.
            </text>
            <rect x="54" y="186" width="240" height="24" rx="12" fill="#0A0C12" fillOpacity="0.55" stroke="#FFFFFF" strokeOpacity="0.12" />
            <circle cx="69" cy="198" r="4" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.4" />
            <path d="m72 201 3 3" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" />
            <text x="82" y="201" fill="#FFFFFF" fillOpacity="0.35" fontSize="7" fontFamily="Space Grotesk, sans-serif">
              Cari program, kelas, orang…
            </text>
            <rect x="306" y="186" width="62" height="24" rx="12" fill={primary} />
            <text x="337" y="201" textAnchor="middle" fill="#08090D" fontSize="7" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              Jelajahi
            </text>

            <g opacity="0.85">
              <path d="M454 168 536 122l82 46H454Z" fill={primary} fillOpacity="0.16" stroke={primary} strokeOpacity="0.4" />
              <rect x="468" y="168" width="104" height="44" fill="#0D0F16" fillOpacity="0.65" stroke={primary} strokeOpacity="0.25" />
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={477 + i * 23} y="176" width="9" height="36" fill={primary} fillOpacity={0.22 + i * 0.05} />
              ))}
              <rect x="468" y="212" width="104" height="5" rx="2.5" fill={primary} fillOpacity="0.3" />
              <circle cx="527" cy="108" r="12" fill={primary} fillOpacity="0.18" />
              <circle cx="527" cy="108" r="20" stroke={primary} strokeOpacity="0.3" strokeDasharray="2 5" />
            </g>

            <text x="30" y="252" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
              Program populer
            </text>
            <text x="610" y="252" textAnchor="end" fill={primary} fontSize="7.5" fontFamily="JetBrains Mono, monospace">
              LIHAT SEMUA →
            </text>

            {[
              { x: 30, tag: 'DESAIN', title: 'Produk Digital', meta: '4 tahun · 128 SKS', progress: 78 },
              { x: 225, tag: 'TEKNOLOGI', title: 'Ilmu Komputer', meta: '4 tahun · 144 SKS', progress: 64 },
              { x: 420, tag: 'BISNIS', title: 'Ekonomi Kreatif', meta: '4 tahun · 120 SKS', progress: 52 },
            ].map((course) => (
              <g key={course.title}>
                <rect x={course.x} y="264" width="180" height="108" rx="13" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
                <rect x={course.x + 12} y="276" width="48" height="17" rx="8.5" fill={primary} fillOpacity="0.15" />
                <text x={course.x + 36} y="287" textAnchor="middle" fill={primary} fontSize="6" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
                  {course.tag}
                </text>
                <text x={course.x + 12} y="314" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
                  {course.title}
                </text>
                <text x={course.x + 12} y="328" fill="#FFFFFF" fillOpacity="0.4" fontSize="6.5" fontFamily="JetBrains Mono, monospace">
                  {course.meta}
                </text>
                <rect x={course.x + 12} y="342" width="156" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.07" />
                <rect x={course.x + 12} y="342" width={(156 * course.progress) / 100} height="5" rx="2.5" fill={primary} />
                <text x={course.x + 168} y="362" textAnchor="end" fill="#FFFFFF" fillOpacity="0.35" fontSize="6" fontFamily="JetBrains Mono, monospace">
                  {course.progress}%
                </text>
              </g>
            ))}
          </g>
        ) : null}

        {variant === 'finance' ? (
          <g>
            <text x="30" y="78" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              Halo, Reyhan
            </text>
            <text x="30" y="93" fill="#FFFFFF" fillOpacity="0.4" fontSize="7" fontFamily="JetBrains Mono, monospace">
              Berikut ringkasan keuangan bulan Oktober.
            </text>
            <rect x="532" y="60" width="78" height="26" rx="13" fill="#12151F" stroke="#FFFFFF" strokeOpacity="0.08" />
            <circle cx="550" cy="73" r="7" fill={primary} fillOpacity="0.3" />
            <text x="564" y="76" fill="#FFFFFF" fillOpacity="0.6" fontSize="7" fontFamily="Space Grotesk, sans-serif">
              Reyhan
            </text>

            <rect x="30" y="108" width="272" height="118" rx="16" fill={`url(#${gid('accent-soft')})`} stroke={primary} strokeOpacity="0.3" />
            <circle cx="260" cy="122" r="54" fill={primary} fillOpacity="0.1" />
            <text x="50" y="132" fill="#FFFFFF" fillOpacity="0.55" fontSize="7.5" fontFamily="JetBrains Mono, monospace" letterSpacing="1.6">
              TOTAL SALDO
            </text>
            <text x="50" y="164" fill="#FFFFFF" fontSize="26" fontWeight="700" fontFamily="Space Grotesk, sans-serif" letterSpacing="-1">
              $12,480<tspan fillOpacity="0.45">.00</tspan>
            </text>
            <rect x="50" y="182" width="94" height="22" rx="11" fill="#CDF94E" fillOpacity="0.14" />
            <text x="97" y="197" textAnchor="middle" fill="#CDF94E" fontSize="7" fontFamily="JetBrains Mono, monospace">
              ↗ 12.4% bulan ini
            </text>
            <text x="50" y="217" fill="#FFFFFF" fillOpacity="0.32" fontSize="6.5" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">
              •••• 4821
            </text>
            <text x="282" y="145" textAnchor="end" fill="#FFFFFF" fillOpacity="0.8" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
              VISA
            </text>

            <rect x="318" y="108" width="292" height="118" rx="16" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
            <text x="334" y="130" fill="#FFFFFF" fillOpacity="0.8" fontSize="9" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
              Pengeluaran bulan ini
            </text>
            <circle cx="381" cy="180" r="25" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="9" />
            <circle cx="381" cy="180" r="25" stroke={primary} strokeWidth="9" strokeDasharray="86 160" strokeLinecap="round" transform="rotate(-90 381 180)" />
            <circle cx="381" cy="180" r="25" stroke={secondary} strokeWidth="9" strokeDasharray="38 160" strokeDashoffset="-94" strokeLinecap="round" transform="rotate(-90 381 180)" opacity="0.7" />
            <text x="381" y="179" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              54%
            </text>
            <text x="381" y="189" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.35" fontSize="5.5" fontFamily="JetBrains Mono, monospace">
              DARI ANGGARAN
            </text>
            {[
              { label: 'Makan & minum', value: '$420', color: primary },
              { label: 'Langganan', value: '$86', color: secondary },
              { label: 'Belanja', value: '$240', color: '#FFFFFF' },
            ].map((row, i) => (
              <g key={row.label}>
                <circle cx="440" cy={148 + i * 22} r="3" fill={row.color} fillOpacity={row.color === '#FFFFFF' ? 0.4 : 1} />
                <text x="450" y={151 + i * 22} fill="#FFFFFF" fillOpacity="0.45" fontSize="6.5" fontFamily="Space Grotesk, sans-serif">
                  {row.label}
                </text>
                <text x="596" y={151 + i * 22} textAnchor="end" fill="#FFFFFF" fillOpacity="0.7" fontSize="6.5" fontFamily="JetBrains Mono, monospace">
                  {row.value}
                </text>
              </g>
            ))}

            <rect x="30" y="242" width="580" height="138" rx="16" fill={`url(#${gid('panel')})`} stroke="#FFFFFF" strokeOpacity="0.08" />
            <text x="48" y="266" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Space Grotesk, sans-serif">
              Aktivitas terbaru
            </text>
            <text x="592" y="266" textAnchor="end" fill={primary} fontSize="7" fontFamily="JetBrains Mono, monospace">
              LIHAT SEMUA
            </text>
            {[
              { name: 'Figma Professional', meta: 'Alat desain · Hari ini', amount: '-$15.00', icon: 'F' },
              { name: 'Gaji — Oktober', meta: 'Pemasukan · 25 Okt', amount: '+$4,200.00', icon: 'S' },
              { name: 'Kopi Senja', meta: 'Makan & minum · 24 Okt', amount: '-$6.40', icon: 'K' },
            ].map((row, i) => (
              <g key={row.name}>
                <rect x="48" y={284 + i * 30} width="544" height="24" rx="8" fill="#FFFFFF" fillOpacity={i === 1 ? 0.035 : 0} />
                <rect x="48" y={280 + i * 30} width="24" height="24" rx="8" fill={primary} fillOpacity="0.12" stroke={primary} strokeOpacity="0.2" />
                <text x="60" y={296 + i * 30} textAnchor="middle" fill={primary} fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
                  {row.icon}
                </text>
                <text x="82" y={292 + i * 30} fill="#FFFFFF" fillOpacity="0.8" fontSize="7.5" fontFamily="Space Grotesk, sans-serif">
                  {row.name}
                </text>
                <text x="82" y={302 + i * 30} fill="#FFFFFF" fillOpacity="0.32" fontSize="6" fontFamily="JetBrains Mono, monospace">
                  {row.meta}
                </text>
                <text
                  x="592"
                  y={296 + i * 30}
                  textAnchor="end"
                  fill={row.amount.startsWith('+') ? '#CDF94E' : '#FFFFFF'}
                  fillOpacity={row.amount.startsWith('+') ? 1 : 0.7}
                  fontSize="7.5"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {row.amount}
                </text>
                {i < 2 ? <line x1="48" y1={308 + i * 30} x2="592" y2={308 + i * 30} stroke="#FFFFFF" strokeOpacity="0.05" /> : null}
              </g>
            ))}
          </g>
        ) : null}

        <rect x="0.5" y="0.5" width="639" height="399" rx="21.5" stroke="#FFFFFF" strokeOpacity="0.08" />
      </g>
    </svg>
  )
}
