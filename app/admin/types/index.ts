export interface BaseEntity {
  id: number;
  created_at: string;
}

export interface Driver extends BaseEntity {
  driver_name: string;
  phone_number: string;
  vehicle_type: string;
  vehicle_number: string;
  vehicle_color: string;
}

export interface DriverFormData {
  driver_name: string;
  phone_number: string;
  vehicle_type: string;
  vehicle_number: string;
  vehicle_color: string;
}

export interface Student extends BaseEntity {
  student_name: string;
  parent_name: string;
  parent_phone: string;
  school_id: number;
  school_name: string;
  grade: string;
  class: string;
}

export interface StudentFormData {
  student_name: string;
  parent_name: string;
  parent_phone: string;
  school_id: number;
  grade: string;
  class: string;
}

export interface Parent extends BaseEntity {
  parent_name: string;
  phone_number: string;
  email: string;
  address: string;
}

export interface ParentFormData {
  parent_name: string;
  phone_number: string;
  email: string;
  address: string;
}

export interface School extends BaseEntity {
  school_name: string;
  address: string;
  phone: string;
  email: string;
}

export interface SchoolFormData {
  school_name: string;
  address: string;
  phone: string;
  email: string;
}

export interface Trip extends BaseEntity {
  trip_name: string;
  school_id: number;
  school_name: string;
  driver_id: number;
  driver_name: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  start_time: string;
  end_time: string;
  students_count: number;
}

export interface TripFormData {
  trip_name: string;
  school_id: number;
  driver_id: number;
  start_time: string;
  end_time: string;
}

export interface Absence extends BaseEntity {
  student_id: number;
  student_name: string;
  parent_name: string;
  date: string;
  type: 'excused' | 'unexcused';
  reason: string;
}

export interface AbsenceFormData {
  student_id: number;
  date: string;
  type: 'excused' | 'unexcused';
  reason: string;
} 