"use client";

import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <h1>Register</h1>
        <form className={styles.form}>
          <label>
            Full name
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit" className={styles.primary}>Create account</button>
        </form>
      </main>
    </div>
  );
}
