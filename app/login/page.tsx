"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "./login.module.css";

export default function LoginPage() {
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
          <h2>Welcome Back</h2>
          <p className={styles.description}>Sign in to your account to continue</p>

          <form className={styles.form}>
            <label>
              Email Address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="••••••••" required />
            </label>
            <button type="submit" className={styles.primary}>Sign In</button>
          </form>

          <p className={styles.switchText}>
            Don&apos;t have an account? <Link href="/register">Create one</Link>
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
