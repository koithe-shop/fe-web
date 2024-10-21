// src/types/user.ts
export interface Role {
  _id: string;
  roleName: string;
}

export interface User {
  _id: string;
  key: number;
  fullName: string;
  username: string;
  phoneNumber: string;
  address: string;
  status: boolean;
  roleId: Role;
  createdAt: string;
  updatedAt: string;
}
export interface Coupon {
  _id: string;
  couponName: string;
  code: string;
  validFrom: string;
  validTo: string;
  discountRate: number;
  status: number;
  description: string;
}
