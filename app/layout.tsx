import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { person } from "@/content/cv";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://bhagya-d36.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${person.name} — ${person.role}`,
  description:
    "Data Scientist and AI/ML Engineer building analytics and predictive intelligence systems — currently at Sysco LABS Sri Lanka.",
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description:
      "Data Scientist and AI/ML Engineer building analytics and predictive intelligence systems — currently at Sysco LABS Sri Lanka.",
    url: siteUrl,
    siteName: person.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: "Data Scientist and AI/ML Engineer building analytics and predictive intelligence systems.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  email: person.email,
  url: siteUrl,
  sameAs: [person.links.linkedin, person.links.github, person.links.medium, person.links.espncricinfo],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-50 -translate-y-20 rounded-md bg-accent px-4 py-2 font-medium text-bg transition-transform duration-200 focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
