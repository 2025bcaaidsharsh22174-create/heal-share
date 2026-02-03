
export enum UserRole {
  USER = 'USER',
  NGO = 'NGO',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  isVerified: boolean;
}

export interface NGO {
  id: string;
  name: string;
  registrationNumber: string;
  address: string;
  city: string;
  state: string;
  contactEmail: string;
  contactPhone: string;
  verificationStatus: 'VERIFIED' | 'PENDING' | 'REJECTED';
  category: 'Old Age Home' | 'Healthcare' | 'Child Care' | 'Education';
  donationsTotal: number;
  donorCount: number;
}

export interface Donation {
  id: string;
  userId: string;
  ngoId: string;
  amount: number;
  date: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  type: 'ONE_TIME' | 'MONTHLY';
  receiptUrl?: string;
}

export interface MedicineVerificationResult {
  isValid: boolean;
  medicineName?: string;
  expiryDate?: string;
  isExpired?: boolean;
  safetyRating: number; // 1-10
  reason: string;
  warnings?: string[];
}
