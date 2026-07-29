"use client";

import { useEffect, useRef, useState } from "react";
import { person } from "@/content/cv";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
    <header
      className={`sticky top-0 z-40 bg-bg transition-colors duration-200 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#main"
          className="font-mono text-sm font-medium tracking-wide text-text transition-colors duration-150 hover:text-accent focus-visible:text-accent"
        >
          BD
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition-colors duration-150 hover:text-text focus-visible:text-text"
            >
              {item.label}
            </a>
          ))}
          <a
            href={person.cvFile}
            download
            className="mono-label rounded-md border border-line px-3 py-2 transition-colors duration-150 hover:border-line-strong hover:text-text focus-visible:border-line-strong focus-visible:text-text"
          >
            CV ↓
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-text transition-colors duration-150 hover:bg-surface-1 focus-visible:bg-surface-1 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-150 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
    </header>

    {menuOpen && (
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-0 top-16 z-30 bg-surface-2 md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 p-6">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstMenuLinkRef : undefined}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-4 py-3 text-lg text-text-secondary transition-colors duration-150 hover:bg-surface-1 hover:text-text focus-visible:bg-surface-1 focus-visible:text-text"
            >
              {item.label}
            </a>
          ))}
          <a
            href={person.cvFile}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-md border border-line px-4 py-3 text-center font-mono text-sm uppercase tracking-wide text-text transition-colors duration-150 hover:border-line-strong focus-visible:border-line-strong"
          >
            Download CV
          </a>
        </nav>
      </div>
    )}
    </>
  );
}
