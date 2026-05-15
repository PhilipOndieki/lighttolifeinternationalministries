"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/app/components/ImageUpload/ImageUpload";
import { DashboardLoading } from "@/app/dashboard/loading";
import {
  Project,
  createProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from "@/app/lib/firebase/firestore";
import styles from "./projects.module.css";
import dashStyles from "@/app/dashboard/dashboard.module.css";

export default function AdminProjectsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [projects, setProjects] = useState<(Project & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Project>({
    title: "",
    description: "",
    status: "ongoing",
    startDate: new Date().toISOString().split("T")[0],
    imageUrl: "",
  });

  useEffect(() => {
    let unsub: any = null;
    (async () => {
      try {
        await import("@/app/lib/firebase/config");
        const firebaseAuth = await import("firebase/auth");
        const auth = firebaseAuth.getAuth();
        unsub = firebaseAuth.onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) setUser(currentUser);
          else router.push("/login");
          setLoading(false);
        });
      } catch (e) {
        console.error("AdminProjects auth init error:", e);
        setLoading(false);
      }
    })();
    return () => { if (unsub) unsub(); };
  }, [router]);

  const fetchProjects = async () => {
    try { const fetched = await getAllProjects(); setProjects(fetched); } catch (e) { console.error(e); }
  };

  useEffect(() => { if (!loading && user) fetchProjects(); }, [loading, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) await updateProject(editingId, formData);
      else await createProject(formData);
      await fetchProjects(); resetForm();
    } catch (e) { console.error(e); }
  };

  const handleDelete = async (id: string) => { if (!confirm("Delete this project?")) return; try { await deleteProject(id); await fetchProjects(); } catch (e) { console.error(e); } };

  const handleEdit = (p: Project & { id: string }) => { setFormData({ ...p, imageUrl: p.imageUrl || "" }); setEditingId(p.id); setShowForm(true); };
  const handleSelectImage = (image: { url: string } | null) => setFormData((c) => ({ ...c, imageUrl: image?.url || "" }));
  const resetForm = () => { setFormData({ title: "", description: "", status: "ongoing", startDate: new Date().toISOString().split("T")[0], imageUrl: "" }); setEditingId(null); setShowForm(false); };

  const handleLogout = async () => { try { const firebaseAuth = await import("firebase/auth"); const auth = firebaseAuth.getAuth(); await firebaseAuth.signOut(auth); } catch (e) { console.error(e); } router.push("/"); };

  if (loading) return <DashboardLoading />;
  if (!user) return null;

  return (
    <div className={dashStyles.page}>
      <div className={dashStyles.dashboard}>
        <aside className={dashStyles.sidebar}>
          <div className={dashStyles.sidebarHeader}><Image src="/logo.jpeg" alt="Light to Life Logo" width={160} height={76} className={dashStyles.logo} priority /></div>
          <nav className={dashStyles.sidebarNav}><ul><li><a href="/dashboard/profile" className={dashStyles.navLink}>👤 Profile</a></li><li><a href="/admin/blogs" className={dashStyles.navLink}>📝 Manage Blogs</a></li><li><a href="/admin/events" className={dashStyles.navLink}>📅 Manage Events</a></li><li><a href="/admin/projects" className={dashStyles.navLink}>🏗️ Manage Projects</a></li></ul></nav>
          <div className={dashStyles.sidebarFooter}><ul><li><a href="/dashboard/settings" className={dashStyles.navLink}>⚙️ Settings</a></li><li><button onClick={handleLogout} className={dashStyles.logoutBtn}>🚪 Logout</button></li></ul></div>
        </aside>
        <main className={dashStyles.main}>
          <div className={styles.container}>
            <div className={styles.header}><h1>🏗️ Manage Projects</h1><button className={styles.addBtn} onClick={() => setShowForm(!showForm)}>{showForm ? "Cancel" : "+ Add Project"}</button></div>
            {showForm && (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}><label>Project Title *</label><input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required /></div>
                <div className={styles.formGroup}><label>Description *</label><textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required rows={4} /></div>
                <div className={styles.formRow}><div className={styles.formGroup}><label>Status *</label><select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value as any })} required><option value="ongoing">Ongoing</option><option value="completed">Completed</option><option value="planned">Planned</option></select></div>
                <div className={styles.formGroup}><label>Start Date *</label><input type="date" value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} required /></div>
                <div className={styles.formGroup}><label>End Date</label><input type="date" value={formData.endDate || ""} onChange={(e) => setFormData({ ...formData, endDate: e.target.value || undefined })} /></div></div>
                <div className={styles.formGroup}><label>Image URL</label><input type="text" value={formData.imageUrl || ""} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} placeholder="Select an uploaded image or paste a Cloudinary URL" /></div>
                <div className={styles.formGroup}><label>Choose from uploaded images</label><ImageUpload onSelectImage={handleSelectImage} initialSelectedUrl={formData.imageUrl || undefined} /></div>
                <button type="submit" className={styles.submitBtn}>{editingId ? "Update Project" : "Create Project"}</button>
              </form>
            )}
            <div className={styles.projectsList}>{projects.length === 0 ? <p className={styles.empty}>No projects yet. Create your first project!</p> : projects.map((p) => (
              <div key={p.id} className={styles.projectCard}><div className={styles.projectInfo}><h3>{p.title}</h3><p>{p.description}</p><div className={styles.projectMeta}><span className={`${styles.status} ${styles[p.status]}`}>{p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span><span>📅 {p.startDate}</span>{p.endDate && <span>✓ {p.endDate}</span>}</div></div><div className={styles.actions}><button className={styles.editBtn} onClick={() => handleEdit(p)}>Edit</button><button className={styles.deleteBtn} onClick={() => handleDelete(p.id!)}>Delete</button></div></div>
            ))}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
