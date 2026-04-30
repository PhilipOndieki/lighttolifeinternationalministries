"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme =
      root.dataset.theme === "dark" || root.dataset.theme === "light"
        ? (root.dataset.theme as "light" | "dark")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(initialTheme);
    root.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <Link className={styles.brand} href="/">
        <Image src="/logo.jpeg" alt="LightToLife" width={180} height={86} priority />
      </Link>

      <button
        className={styles.hamburger}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <nav className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`} aria-label="Primary navigation">
        <div className={styles.navItem}>
          <Link className={styles.navLink} href="/#about" onClick={() => setIsOpen(false)}>About Us</Link>
          <ul className={styles.navSub} aria-label="About sub-menu">
            <li><Link href="/#features" onClick={() => setIsOpen(false)}>Mission</Link></li>
            <li><Link href="/#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/#leadership" onClick={() => setIsOpen(false)}>Team</Link></li>
          </ul>
        </div>

        <div className={styles.navItem}>
          <Link className={styles.navLink} href="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <ul className={styles.navSub} aria-label="Events sub-menu">
            <li><Link href="/events#calendar" onClick={() => setIsOpen(false)}>Calendar</Link></li>
            <li><Link href="/events#upcoming" onClick={() => setIsOpen(false)}>Upcoming</Link></li>
          </ul>
        </div>

        <div className={styles.navItem}>
          <Link className={styles.navLink} href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <ul className={styles.navSub} aria-label="Projects sub-menu">
            <li><Link href="/projects#ongoing" onClick={() => setIsOpen(false)}>Ongoing</Link></li>
            <li><Link href="/projects#partners" onClick={() => setIsOpen(false)}>Partners</Link></li>
          </ul>
        </div>

        <div className={styles.navItem}>
          <Link className={styles.navLink} href="/news" onClick={() => setIsOpen(false)}>News</Link>
          <ul className={styles.navSub} aria-label="News sub-menu">
            <li><Link href="/news#blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/news#highlights" onClick={() => setIsOpen(false)}>Highlights</Link></li>
            <li><Link href="/news#gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          </ul>
        </div>

        <div className={styles.navMobileActions}>
          <Link className={styles.authLink} href="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link className={styles.authLink} href="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <Link className={styles.navButton} href="/#contact" onClick={() => setIsOpen(false)}>Support Us</Link>
        </div>
      </nav>

      <div className={styles.navActions}>
        <Link className={styles.authLink} href="/login">Login</Link>
        <Link className={styles.authLink} href="/register">Register</Link>
        <Link className={styles.navButton} href="/#contact">Support Us</Link>

        <label className={styles.switch}>
          <input
            type="checkbox"
            className={styles.switchInput}
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={theme === "light" ? "Enable dark theme" : "Enable light theme"}
          />
          <span className={styles.switchSlider}>
            <span className={`${styles.switchIcon} ${styles.sunIcon}`} aria-hidden="true">☀</span>
            <span className={`${styles.switchIcon} ${styles.moonIcon}`} aria-hidden="true">☾</span>
          </span>
        </label>
      </div>
    </header>
  );
}
