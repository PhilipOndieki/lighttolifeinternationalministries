"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "./team.module.css";
import { adminDb } from '../../lib/server/firebaseAdmin';
import { LEADERSHIP, TeamMember } from '../../lib/leadership';

function dedupeByName(list: TeamMember[]) {
  const seen = new Set<string>();
  return list.filter((m) => {
    const key = (m.name || '').trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default async function TeamPage() {
  const snapshot = await adminDb.collection('team_members').orderBy('name').get();
  const firestoreMembers: TeamMember[] = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));

  // Merge leadership first so they appear at top, then other members; dedupe by name.
  const merged = dedupeByName([...LEADERSHIP, ...firestoreMembers]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>OUR PEOPLE</span>
            <h1>Leadership & Team</h1>
            <p>
              Meet the leaders and dedicated team members who serve our ministry
              around the world.
            </p>
            <Link href="/contact" className={styles.cta}>
              Contact the Team
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Leadership & Directors</h2>
            <div className={styles.grid}>
              {leadership.map((m) => (
                <article key={m.id} className={styles.card}>
                  <Avatar name={m.name} />
                  <div className={styles.info}>
                    <h3>{m.name}</h3>
                    <p className={styles.role}>{m.role}</p>
                    <p className={styles.bio}>{m.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Team Members</h2>
            <div className={styles.grid}>
              {members.map((m) => (
                <article key={m.id} className={styles.card}>
                  <Avatar name={m.name} />
                  <div className={styles.info}>
                    <h3>{m.name}</h3>
                    <p className={styles.role}>{m.role}</p>
                    <p className={styles.bio}>{m.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}