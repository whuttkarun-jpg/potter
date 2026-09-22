"use client";

import React from 'react';
import { Bookmark, GraduationCap, Calendar, Compass } from 'lucide-react';

interface TopBarProps {
  darkMode?: boolean;
  onToggleTheme?: () => void;
  savedCount: number;
  onOpenSaved: () => void;
  onHome: () => void;
  activeTab?: 'calendar' | 'faculties';
  onSelectTab?: (tab: 'calendar' | 'faculties') => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  savedCount,
  onOpenSaved,
  onHome,
  activeTab = 'calendar',
  onSelectTab,
}) => {
  return (
    <header className="flex flex-col gap-4 pb-5 mb-5 border-b border-emerald-900/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          aria-label="กลับไปหน้าแรก"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-100 border border-teal-300 text-teal-950 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-teal-900" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-base md:text-lg text-emerald-950 group-hover:text-teal-700 transition-colors">
                ปฏิทิน กสพท70
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900">
                + เกณฑ์คะแนนรอบ 3
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              นับถอยหลังวันสำคัญ TCAS69 / กสพท พร้อมคลังเกณฑ์คะแนนคณะสายสุขภาพ
            </p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSaved}
            className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg border border-stone-200 bg-white/90 text-stone-700 hover:border-teal-600 hover:text-teal-700 shadow-xs transition-all cursor-pointer"
            aria-label={`รายการที่บันทึกไว้ (${savedCount} รายการ)`}
          >
            <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500/20" />
            <span className="hidden sm:inline">เกณฑ์ที่บันทึก</span>
            {savedCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-full bg-amber-500 text-stone-900">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Feature Tabs */}
      {onSelectTab && (
        <div className="flex items-center p-1 rounded-xl bg-stone-200/80 max-w-md">
          <button
            type="button"
            onClick={() => onSelectTab('calendar')}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer ${
              activeTab === 'calendar'
                ? 'bg-white text-teal-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-teal-700" />
            <span>ปฏิทิน กสพท70</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('faculties')}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer ${
              activeTab === 'faculties'
                ? 'bg-white text-teal-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Compass className="w-4 h-4 text-teal-700" />
            <span>เกณฑ์คะแนน 10 คณะ</span>
          </button>
        </div>
      )}
    </header>
  );
};

