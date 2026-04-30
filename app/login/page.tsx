"use client";

import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <h1>Login</h1>
        <form className={styles.form}>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit" className={styles.primary}>Sign in</button>
        </form>
      </main>
    </div>
  );
}
