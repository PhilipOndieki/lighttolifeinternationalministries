'use client';
import React, { useEffect, useState } from 'react';
import { db, auth } from '../lib/firebaseClient';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  DocumentData,
} from 'firebase/firestore';
import { onAuthStateChanged, getIdTokenResult } from 'firebase/auth';

type TeamMember = {
  id?: string;
  name: string;
  role?: string;
  bio?: string;
  imageUrl?: string;
};

export default function AdminTeamDashboard() {
  const [userIsAdmin, setUserIsAdmin] = useState<boolean | null>(null);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // form state
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUserIsAdmin(false);
        return;
      }
      try {
        const token = await getIdTokenResult(u);
        setUserIsAdmin(Boolean((token.claims as any).admin));
      } catch (e) {
        setUserIsAdmin(false);
      }
    });

    const q = query(collection(db, 'team_members'), orderBy('name'));
    const unsubscribeSnap = onSnapshot(q, (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...(d.data() as DocumentData) }));
      setMembers(data);
    }, (err) => {
      setError(err.message);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSnap();
    };
  }, []);

  async function uploadToCloudinary(file: File) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !preset) throw new Error('Cloudinary not configured');

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', preset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: 'POST',
      body: fd,
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error?.message || 'Cloudinary upload failed');
    return json.secure_url as string;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let imageUrl: string | undefined = undefined;
      if (imageFile) imageUrl = await uploadToCloudinary(imageFile);

      const payload = { name, role, bio, imageUrl };
      if (editingId) {
        const ref = doc(db, 'team_members', editingId);
        await updateDoc(ref, payload as any);
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'team_members'), payload as any);
      }

      setName('');
      setRole('');
      setBio('');
      setImageFile(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEdit(m: TeamMember) {
    setEditingId(m.id || null);
    setName(m.name || '');
    setRole(m.role || '');
    setBio(m.bio || '');
  }

  async function handleDelete(id?: string) {
    if (!id) return;
    if (!confirm('Delete this member?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteDoc(doc(db, 'team_members', id));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (userIsAdmin === null) return <div>Checking permissions...</div>;
  if (!userIsAdmin) return <div>Not authorized. Admin access required.</div>;

  return (
    <div>
      <h2>Admin: Team Members</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Role</label>
          <input value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <div>
          <label>Bio</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>
        <div>
          <label>Image (optional)</label>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
        </div>

        <button type="submit" disabled={loading}>{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setName(''); setRole(''); setBio(''); setImageFile(null); }}>Cancel</button>}
      </form>

      {loading && <p>Processing...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <hr />

      <ul>
        {members.map((m) => (
          <li key={m.id} style={{ marginBottom: 16 }}>
            {m.imageUrl ? <img src={m.imageUrl} alt={m.name} width={80} /> : null}
            <div>
              <strong>{m.name}</strong> — {m.role}
            </div>
            <div>{m.bio}</div>
            <button onClick={() => handleEdit(m)}>Edit</button>
            <button onClick={() => handleDelete(m.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
