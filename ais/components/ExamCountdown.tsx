"use client";

import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { ExamCountdownItem } from '../types';

interface ExamCountdownProps {
  exams: ExamCountdownItem[];
}

export const ExamCountdown: React.FC<ExamCountdownProps> = ({ exams }) => {
  const getDaysLeft = (isoDate: string) => {
    const target = new Date(isoDate + 'T00:00:00');
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const diffTime = target.getTime() - now.getTime();
    return Math.round(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatThaiDate = (isoDate: string) => {
    try {
      const d = new Date(isoDate + 'T00:00:00');
      return d.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return isoDate;
    }
  };

  return (
    <section
      aria-label="นับถอยหลังวันสอบ TCAS"
      className="relative overflow-hidden rounded-2xl bg-teal-50 text-slate-900 p-5 md:p-6 shadow-xs border border-teal-200"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-800" />
            <h2 className="font-heading font-bold text-sm md:text-base tracking-wide text-teal-950 uppercase">
              นับถอยหลังวันสอบ TCAS / กสพท
            </h2>
          </div>
          <span className="text-xs text-slate-700 hidden sm:inline-flex items-center gap-1 font-medium">
            <Calendar className="w-3.5 h-3.5 text-teal-800" />
            ข้อมูลอ้างอิงกำหนดการสอบ
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {exams.map((exam) => {
            const days = getDaysLeft(exam.date);
            const isDone = days < 0;
            const isToday = days === 0;

            return (
              <div
                key={exam.id}
                className={`relative rounded-xl p-4 transition-all ${
                  isDone
                    ? 'bg-stone-100 border border-stone-200 opacity-70 text-slate-700'
                    : 'bg-white hover:border-teal-400 border border-teal-200 text-slate-900 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-950 font-mono">
                    {exam.code}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isDone
                        ? 'bg-stone-200 text-stone-700'
                        : isToday
                        ? 'bg-red-100 text-red-900 border border-red-300 animate-pulse'
                        : 'bg-amber-100 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isDone ? 'สอบแล้ว' : isToday ? 'สอบวันนี้' : `อีก ${days} วัน`}
                  </span>
                </div>

                <div className="text-sm font-bold text-slate-900 mb-1 line-clamp-1">
                  {exam.name}
                </div>

                <div className="flex items-baseline gap-1.5 my-1">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-teal-950 tabular-nums leading-none">
                    {isDone ? '-' : isToday ? '0' : days}
                  </span>
                  {!isDone && !isToday && (
                    <span className="text-xs font-bold text-slate-700">วัน</span>
                  )}
                </div>

                <div className="text-xs text-slate-700 flex items-center gap-1 mt-2 font-medium">
                  <Calendar className="w-3 h-3 text-teal-800 shrink-0" />
                  <span>{formatThaiDate(exam.date)}</span>
                </div>

                {exam.description && (
                  <p className="text-[11px] text-slate-600 mt-1.5 line-clamp-1">
                    {exam.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
