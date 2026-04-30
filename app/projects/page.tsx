"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={styles.page} data-theme={theme}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="/" aria-label="Go to homepage">
          <Image
            src="/logo.jpeg"
            alt="LightToLife logo"
            width={200}
            height={150}
            priority
          />
        </a>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          <div className={styles.navItem}>
            <a className={styles.navLink} href="/#about">About Us</a>
            <ul className={styles.navSub} aria-label="About sub-menu">
              <li><a href="/#features">Mission</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#leadership">Team</a></li>
            </ul>
          </div>

          <div className={styles.navItem}>
            <a className={styles.navLink} href="/events">Events</a>
            <ul className={styles.navSub} aria-label="Events sub-menu">
              <li><a href="/events#calendar">Calendar</a></li>
              <li><a href="/events#upcoming">Upcoming</a></li>
            </ul>
          </div>

          <div className={styles.navItem}>
            <a className={styles.navLink} href="/projects">Projects</a>
            <ul className={styles.navSub} aria-label="Projects sub-menu">
              <li><a href="/projects#ongoing">Ongoing</a></li>
              <li><a href="/projects#partners">Partners</a></li>
            </ul>
          </div>

          <div className={styles.navItem}>
            <a className={styles.navLink} href="/news">News</a>
            <ul className={styles.navSub} aria-label="News sub-menu">
              <li><a href="/news#blog">Blog</a></li>
              <li><a href="/news#highlights">Highlights</a></li>
              <li><a href="/news#gallery">Gallery</a></li>
            </ul>
          </div>
        </nav>

        <div className={styles.navActions}>
          <a className={styles.authLink} href="/login">Login</a>
          <a className={styles.authLink} href="/register">Register</a>
          <a className={styles.navButton} href="#contact">Support Us</a>
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

      <main className={styles.main}>
        <section className={styles.pageHero}>
          <div className={styles.sectionContainer}>
            <h1 className={styles.pageTitle}>Our Projects</h1>
            <p className={styles.pageDescription}>
              Discover the transformative initiatives and partnerships that are making a difference in communities around the world.
            </p>
          </div>
        </section>

        <section className={styles.ongoingSection} id="ongoing">
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>CURRENT INITIATIVES</span>
              <h2 className={styles.sectionHeading}>Ongoing Projects</h2>
              <p className={styles.sectionDescription}>
                Transforming communities through education, healthcare, and spiritual development.
              </p>
            </div>

            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <div className={styles.projectIcon}>📚</div>
                <h3 className={styles.projectTitle}>Scholarship Program</h3>
                <p className={styles.projectDescription}>
                  Providing educational opportunities for underprivileged children through full scholarships and mentorship, impacting over 500 students annually.
                </p>
                <div className={styles.projectProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '75%'}}></div>
                  </div>
                  <span className={styles.progressText}>75% Funded</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectIcon}>⚕️</div>
                <h3 className={styles.projectTitle}>Healthcare Initiative</h3>
                <p className={styles.projectDescription}>
                  Free medical clinics and health awareness campaigns serving remote communities with preventive care and treatment.
                </p>
                <div className={styles.projectProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '60%'}}></div>
                  </div>
                  <span className={styles.progressText}>60% Funded</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectIcon}>🏘️</div>
                <h3 className={styles.projectTitle}>Community Center</h3>
                <p className={styles.projectDescription}>
                  Building multi-purpose centers in villages for education, skill training, and community gatherings.
                </p>
                <div className={styles.projectProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '45%'}}></div>
                  </div>
                  <span className={styles.progressText}>45% Funded</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectIcon}>💼</div>
                <h3 className={styles.projectTitle}>Skills Training</h3>
                <p className={styles.projectDescription}>
                  Vocational training programs in agriculture, tailoring, and small business to empower youth for self-sufficiency.
                </p>
                <div className={styles.projectProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '82%'}}></div>
                  </div>
                  <span className={styles.progressText}>82% Funded</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectIcon}>💧</div>
                <h3 className={styles.projectTitle}>Water Access</h3>
                <p className={styles.projectDescription}>
                  Installing clean water wells and sanitation facilities in communities lacking safe water resources.
                </p>
                <div className={styles.projectProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '55%'}}></div>
                  </div>
                  <span className={styles.progressText}>55% Funded</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectIcon}>🌱</div>
                <h3 className={styles.projectTitle}>Agricultural Development</h3>
                <p className={styles.projectDescription}>
                  Teaching sustainable farming practices and providing seeds/tools to increase food security and income.
                </p>
                <div className={styles.projectProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{width: '68%'}}></div>
                  </div>
                  <span className={styles.progressText}>68% Funded</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.partnersSection} id="partners">
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>PARTNERSHIPS</span>
              <h2 className={styles.sectionHeading}>Our Partners</h2>
              <p className={styles.sectionDescription}>
                Working with organizations and individuals committed to the same vision of global transformation.
              </p>
            </div>

            <div className={styles.partnersGrid}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <div className={styles.logoBg}>Partner Logo</div>
                </div>
                <h3 className={styles.partnerName}>Global Education Foundation</h3>
                <p className={styles.partnerRole}>Education Partner</p>
                <p className={styles.partnerDescription}>
                  Supporting our scholarship and educational programs across West Africa.
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <div className={styles.logoBg}>Partner Logo</div>
                </div>
                <h3 className={styles.partnerName}>Medical Aid International</h3>
                <p className={styles.partnerRole}>Healthcare Partner</p>
                <p className={styles.partnerDescription}>
                  Providing medical equipment and training for our health initiatives.
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <div className={styles.logoBg}>Partner Logo</div>
                </div>
                <h3 className={styles.partnerName}>Hope Development Agency</h3>
                <p className={styles.partnerRole}>Community Development Partner</p>
                <p className={styles.partnerDescription}>
                  Collaborating on sustainable community development and advocacy.
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <div className={styles.logoBg}>Partner Logo</div>
                </div>
                <h3 className={styles.partnerName}>Youth Empowerment Initiative</h3>
                <p className={styles.partnerRole}>Youth Partner</p>
                <p className={styles.partnerDescription}>
                  Supporting skills training and youth leadership development programs.
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <div className={styles.logoBg}>Partner Logo</div>
                </div>
                <h3 className={styles.partnerName}>Clean Water Foundation</h3>
                <p className={styles.partnerRole}>Water & Sanitation Partner</p>
                <p className={styles.partnerDescription}>
                  Helping establish clean water access and sanitation infrastructure.
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <div className={styles.logoBg}>Partner Logo</div>
                </div>
                <h3 className={styles.partnerName}>Sustainable Agriculture Network</h3>
                <p className={styles.partnerRole}>Agriculture Partner</p>
                <p className={styles.partnerDescription}>
                  Promoting sustainable farming and food security initiatives.
                </p>
              </div>
            </div>

            <div className={styles.partneredBanner}>
              <h3>Become a Partner</h3>
              <p>Organizations and institutions interested in partnering with us are welcome to reach out.</p>
              <a href="#" className={styles.partnersCtaButton}>Get in Touch</a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
