export type UserRole = 'admin' | 'leadership' | 'user';

export interface userDetails {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
  branchLocation?: string; // e.g., "East Africa - Main Church Headquarters", "Kisumu", "Nakuru"
  branchMapUrl?: string;
  role?: UserRole; // admin or leadership
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserAuthState {
  user: userDetails | null;
  loading: boolean;
  error: string | null;
}
