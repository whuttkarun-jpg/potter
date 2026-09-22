"use client";

import React from 'react';
import {
  Stethoscope,
  Smile,
  Pill,
  HeartPulse,
  Activity,
  Microscope,
  UserCheck,
  ShieldPlus,
  Radio,
  Sparkles,
  ChevronRight,
  Search,
  BookOpen
} from 'lucide-react';
import { FacultyData } from '../types';

interface FacultyGridProps {
  faculties: FacultyData[];
  onSelectFaculty: (facultyId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const getFacultyIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Stethoscope':
      return <Stethoscope className="w-5 h-5" />;
    case 'Smile':
      return <Smile className="w-5 h-5" />;
    case 'Pill':
      return <Pill className="w-5 h-5" />;
    case 'HeartPulse':
      return <HeartPulse className="w-5 h-5" />;
    case 'Activity':
      return <Activity className="w-5 h-5" />;
    case 'Microscope':
      return <Microscope className="w-5 h-5" />;
    case 'UserCheck':
      return <UserCheck className="w-5 h-5" />;
    case 'ShieldPlus':
      return <ShieldPlus className="w-5 h-5" />;
    case 'Radio':
      return <Radio className="w-5 h-5" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5" />;
    default:
      return <BookOpen className="w-5 h-5" />;
  }
};

export const FacultyGrid: React.FC<FacultyGridProps> = ({
  faculties,
  onSelectFaculty,
  searchQuery,
  onSearchChange,
}) => {
  const filtered = faculties.filter((f) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      f.name.toLowerCase().includes(q) ||
      f.meta.toLowerCase().includes(q) ||
      Object.keys(f.unis).some((u) => u.toLowerCase().includes(q))
    );
  });

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
            เลือกคณะสายสุขภาพที่ต้องการดูเกณฑ์
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            แตะชื่อคณะเพื่อดูเกณฑ์คะแนน สัดส่วนรายวิชา และจำนวนรับแต่ละมหาวิทยาลัย
          </p>
        </div>

        {/* Search Box */}
        <div className="relative min-w-[240px] sm:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ค้นหาชื่อคณะ หรือวิชา..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              ล้าง
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="p-8 text-center rounded-2xl border border-dashed border-stone-300 bg-stone-50">
          <p className="text-stone-600 text-sm">
            ไม่พบคณะที่ตรงกับคำค้นหา &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="mt-3 text-xs font-medium text-teal-700 underline cursor-pointer"
          >
            แสดงคณะทั้งหมด
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filtered.map((fac) => {
            const uniCount = Object.keys(fac.unis).length;
            const hasData = uniCount > 0;

            return (
              <button
                key={fac.id}
                type="button"
                onClick={() => onSelectFaculty(fac.id)}
                className={`group relative text-left p-4 rounded-xl border transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                  hasData
                    ? 'bg-white border-stone-200/90 hover:border-teal-600 hover:shadow-md'
                    : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        hasData
                          ? 'bg-teal-100 border border-teal-300 text-teal-900 group-hover:bg-teal-200 group-hover:text-teal-950 transition-colors'
                          : 'bg-stone-200/60 text-stone-500'
                      }`}
                    >
                      {getFacultyIcon(fac.iconName)}
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        hasData
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {hasData ? `${uniCount} มหาวิทยาลัย` : 'รอข้อมูลเกณฑ์'}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {fac.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {fac.meta}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-stone-600 group-hover:text-teal-700">
                  <span>{hasData ? 'ดูเกณฑ์คะแนน' : 'ดูรายละเอียด'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
