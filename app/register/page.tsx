"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.header}>
          <Image
            src="/favicon.ico"
            alt="Light to Life Logo"
            width={40}
            height={40}
            className={styles.icon}
          />
          <div>
            <h1>Light to Life</h1>
            <p className={styles.subtitle}>International Ministries</p>
          </div>
        </div>

        <div className={styles.cardContent}>
          <h2>Create Your Account</h2>
          <p className={styles.description}>Join our community and be part of our mission</p>

          <form className={styles.form}>
            <label>
              Full Name
              <input type="text" name="name" placeholder="John Doe" required />
            </label>
            <label>
              Email Address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="••••••••" required />
            </label>
            <label>
              Confirm Password
              <input type="password" name="repeatPassword" placeholder="••••••••" required />
            </label>
            <button type="submit" className={styles.primary}>Create Account</button>
          </form>

          <p className={styles.switchText}>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>

          <div className={styles.divider}></div>

          <p className={styles.footer}>
            <Link href="/">Back to Home</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
