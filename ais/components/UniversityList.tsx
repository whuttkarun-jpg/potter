"use client";

import React from 'react';
import { ArrowLeft, ChevronRight, School, Sparkles } from 'lucide-react';
import { FacultyData, UniversityInfo } from '../types';

interface UniversityListProps {
  faculty: FacultyData;
  universities: Record<string, UniversityInfo>;
  onSelectUniversity: (uniId: string) => void;
  onBack: () => void;
}

export const UniversityList: React.FC<UniversityListProps> = ({
  faculty,
  universities,
  onSelectUniversity,
  onBack,
}) => {
  const uniKeys = Object.keys(faculty.unis);
  const count = uniKeys.length;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        กลับไปเลือกคณะ
      </button>

      <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200 shadow-xs mb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800">
              สายวิทยาศาสตร์สุขภาพ
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {faculty.name}
            </h1>
            <p className="text-sm text-stone-600 mt-1">
              {faculty.meta}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-stone-500">
              มหาวิทยาลัยในระบบ
            </span>
            <div className="font-heading text-xl font-bold text-teal-800">
              {count} สถาบัน
            </div>
          </div>
        </div>
      </div>

      {count === 0 ? (
        <div className="bg-white border border-dashed border-stone-300 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
            <School className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-semibold text-base text-stone-800">
            ยังไม่มีข้อมูลเกณฑ์ของคณะนี้ในระบบ
          </h3>
          <p className="text-sm text-stone-500 mt-1 max-w-md mx-auto">
            กำลังรอประกาศอย่างเป็นทางการจากมหาวิทยาลัยและ ทปอ. สำหรับปีการศึกษา 2570
            คุณสามารถเลือกดูเกณฑ์คณะที่มีข้อมูลแล้วได้ทันที
          </p>
          <button
            type="button"
            onClick={onBack}
            className="mt-4 px-4 py-2 text-sm font-bold rounded-lg bg-teal-100 hover:bg-teal-200 text-teal-950 border border-teal-700 transition-colors cursor-pointer"
          >
            เลือกคณะอื่น
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {uniKeys.map((uid) => {
            const uni = universities[uid] || {
              id: uid,
              name: uid,
              short: uid,
              color: '#0E3B34'
            };
            const uniData = faculty.unis[uid];
            const programCount = uniData.programs ? uniData.programs.length : 1;
            const progs = uniData.programs || [];

            // Extract unique TPAT used across programs
            const allTpat = Array.from(
              new Set(
                progs.flatMap((p) => p.tpatUsed || [])
              )
            );

            // Extract GPAX requirements
            const gpaxReqs = Array.from(
              new Set(
                progs
                  .map((p) => p.gpax)
                  .filter((g): g is string => !!g && g !== 'ไม่กำหนด' && g !== 'ไม่กำหนดขั้นต่ำ')
              )
            );

            // Extract A-Level weight
            const firstProgAlevel = progs[0]?.weights.find((w) => w.label.includes('A-Level') || w.label.includes('กสพท'));

            return (
              <button
                key={uid}
                type="button"
                onClick={() => onSelectUniversity(uid)}
                className="w-full group text-left p-4 sm:p-5 rounded-xl border border-stone-200 bg-white hover:border-teal-600 hover:shadow-md transition-all flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-stone-950 border border-stone-200 font-heading font-bold text-sm shrink-0 shadow-xs group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: uni.color ? `${uni.color}20` : '#f1f5f9', color: '#0f172a' }}
                    aria-hidden="true"
                  >
                    {uni.short.slice(0, 3)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 group-hover:text-teal-700 transition-colors">
                      {uni.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-sky-100 text-sky-900 border border-sky-300">
                        {uniData.round}
                      </span>
                      {allTpat.map((tpat) => (
                        <span
                          key={tpat}
                          className="text-xs px-2 py-0.5 rounded-full font-bold font-mono bg-blue-100 text-blue-900 border border-blue-300"
                        >
                          {tpat}
                        </span>
                      ))}
                      {firstProgAlevel && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
                          {firstProgAlevel.label}
                        </span>
                      )}
                      {gpaxReqs.length > 0 && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-stone-200 text-stone-900">
                          GPAX {gpaxReqs.some((g) => g.includes('-')) ? '' : '≥ '}{gpaxReqs.join(', ')}
                        </span>
                      )}
                      {programCount > 1 && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-amber-100 text-amber-950 border border-amber-300">
                          {programCount} รูปแบบ
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm font-semibold text-teal-800 group-hover:translate-x-1 transition-transform shrink-0">
                  <span className="hidden sm:inline">ดูเกณฑ์คะแนน</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
