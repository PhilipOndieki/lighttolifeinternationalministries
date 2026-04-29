import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#home" aria-label="Go to homepage">
          LightToLife
        </a>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className={styles.navButton} href="#contact">
          Get Started
        </a>
      </header>

      <main className={styles.main} id="home">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.badge}>New • Simple Next.js starter</span>
            <h1>
              Build your first section with a clean hero and clear navigation.
            </h1>
            <p>
              Start with the essentials: a polished nav bar, a focused hero
              section, and a layout that is easy to extend step by step.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#features">
                Explore Features
              </a>
              <a className={styles.secondaryButton} href="#about">
                Learn More
              </a>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>01</strong>
                <span>Navigation</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Hero Section</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Ready to Expand</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroCard}>
              <Image
                src="/vercel.svg"
                alt="Decorative illustration"
                width={180}
                height={180}
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
