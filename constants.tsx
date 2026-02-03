
import React from 'react';
import { NGO, User, UserRole } from './types';

export const MOCK_NGOS: NGO[] = [
  {
    id: 'ngo-1',
    name: 'HelpAge India Foundation',
    registrationNumber: 'NGO/REG/2021/8872',
    address: 'Q-1, Hauz Khas Enclave, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    contactEmail: 'contact@helpageindia.org',
    contactPhone: '+91 11-41688955',
    verificationStatus: 'VERIFIED',
    category: 'Old Age Home',
    donationsTotal: 1250000,
    donorCount: 450
  },
  {
    id: 'ngo-2',
    name: 'Aanchal Care Home',
    registrationNumber: 'NGO/REG/2022/1042',
    address: 'Plot No. 45, Sector 12, Dwarka',
    city: 'New Delhi',
    state: 'Delhi',
    contactEmail: 'info@aanchalcare.org',
    contactPhone: '+91 9876543210',
    verificationStatus: 'VERIFIED',
    category: 'Old Age Home',
    donationsTotal: 840000,
    donorCount: 210
  },
  {
    id: 'ngo-3',
    name: 'Swasthya Seva Trust',
    registrationNumber: 'NGO/REG/2020/5561',
    address: 'Hospital Road, Salt Lake City',
    city: 'Kolkata',
    state: 'West Bengal',
    contactEmail: 'support@swasthyaseva.in',
    contactPhone: '+91 33-24567890',
    verificationStatus: 'VERIFIED',
    category: 'Healthcare',
    donationsTotal: 2500000,
    donorCount: 1200
  },
  {
    id: 'ngo-4',
    name: 'Nanhi Jaan Foundation',
    registrationNumber: 'NGO/REG/2023/3321',
    address: 'MG Road, Near Gandhi Maidan',
    city: 'Pune',
    state: 'Maharashtra',
    contactEmail: 'reach@nanhijaan.org',
    contactPhone: '+91 20-22334455',
    verificationStatus: 'PENDING',
    category: 'Child Care',
    donationsTotal: 0,
    donorCount: 0
  }
];

export const MOCK_USER: User = {
  id: 'user-123',
  email: 'rajesh.kumar@example.com',
  name: 'Rajesh Kumar',
  role: UserRole.USER,
  isVerified: true
};

export const MOCK_NGO_USER: User = {
  id: 'ngo-user-456',
  email: 'admin@helpageindia.org',
  name: 'NGO Administrator',
  role: UserRole.NGO,
  isVerified: true
};
