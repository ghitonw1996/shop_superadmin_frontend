// src/types/lotto.ts

export interface LottoRules {
  schedule_type?: 'monthly' | 'daily';
  close_dates?: number[];
  [key: string]: any; 
}

// 1. เพิ่มฟิลด์ให้ตรงกับตาราง lotto_types ใน db.sql
export interface LottoType {
  id: string; // UUID จาก Postgres
  name: string;
  code: string;
  category: string;
  img_url?: string;
  is_active: boolean;
  open_time?: string;
  close_time?: string;
  result_time?: string;
  open_days?: string[];
  rules?: LottoRules;
  created_at?: string;
  
  // เพิ่ม 2 บรรทัดนี้เพื่อแก้ Error TS2339
  rate_profile_id?: string; 
  api_link?: string;
}

// 2. เพิ่ม Interface RateProfile เพื่อแก้ Error TS2305
export interface RateProfile {
  id: string;
  name: string;
  rates: Record<string, any>; // รองรับ JSONB จาก SQL
  shop_id?: string;
  created_at?: string;
  updated_at?: string;
}

// 3. เพิ่ม Interface CartItem เพื่อแก้ Error ในหน้า BettingRoom
export interface CartItem {
  id?: string;
  number: string;
  bet_type: string;
  amount: number;
  reward_rate: number;
}

// ส่วนประกอบอื่นๆ คงเดิม...
export interface Category {
  id: string;
  label: string;
  color: string;
  order_index?: number;
}
export interface LottoCardProps {
  lotto: LottoType;
  now: Date;
  onNavigate: (lottoId: string) => void;
}

export interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  formatted: string;
}
