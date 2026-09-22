"use client";

import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Printer,
  Calculator,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FacultyData, UniversityInfo, ProgramRequirement } from '../types';

interface RequirementDetailProps {
  faculty: FacultyData;
  university: UniversityInfo;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (programCode: string | null) => void;
  onShowToast: (msg: string) => void;
}

export const RequirementDetail: React.FC<RequirementDetailProps> = ({
  faculty,
  university,
  onBack,
  isSaved,
  onToggleSave,
  onShowToast,
}) => {
  const uniData = faculty.unis[university.id];
  const [selectedProgIndex, setSelectedProgIndex] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);
  const [userScores, setUserScores] = useState<Record<number, number | ''>>({});

  // Normalize programs
  const programs: ProgramRequirement[] = useMemo(() => {
    if (!uniData) return [];
    if (uniData.programs && uniData.programs.length > 0) {
      return uniData.programs;
    }
    return [
      {
        code: null,
        title: undefined,
        gpax: null,
        minTotal: null,
        weights: uniData.weights || [],
        subjects: uniData.subjects || [],
        note: uniData.note,
        noteType: uniData.noteType,
      },
    ];
  }, [uniData]);

  const currentProg = programs[selectedProgIndex] || programs[0];

  // Calculate sum of subject weights to verify 100%
  const totalSubjectPct = useMemo(() => {
    if (!currentProg) return 0;
    return currentProg.subjects.reduce((sum, s) => sum + s.pct, 0);
  }, [currentProg]);

  // Handle score simulator inputs
  const handleScoreChange = (index: number, val: string) => {
    if (val === '') {
      setUserScores((prev) => ({ ...prev, [index]: '' }));
      return;
    }
    const num = parseFloat(val);
    if (isNaN(num)) return;
    const clamped = Math.min(100, Math.max(0, num));
    setUserScores((prev) => ({ ...prev, [index]: clamped }));
  };

  const handleResetScores = () => {
    setUserScores({});
  };

  const handleFillPreset = (presetScore: number) => {
    const scores: Record<number, number> = {};
    currentProg.subjects.forEach((subject, idx) => {
      if (subject.exam === 'GPAX') {
        scores[idx] = parseFloat(((presetScore / 100) * 4).toFixed(2));
      } else {
        scores[idx] = presetScore;
      }
    });
    setUserScores(scores);
  };

  // Calculate simulated composite score
  const simulationResults = useMemo(() => {
    let totalWeightedScore = 0;
    let allMinPassed = true;
    let anyEntered = false;

    currentProg.subjects.forEach((subject, idx) => {
      const score = userScores[idx];
      if (typeof score === 'number') {
        anyEntered = true;
        const effectiveScore =
          subject.exam === 'GPAX' && score <= 4.0
            ? (score / 4.0) * 100
            : score;
        totalWeightedScore += (effectiveScore * subject.pct) / 100;
        if (subject.minScoreValue) {
          if (subject.exam === 'GPAX' && subject.minScoreValue <= 4.0) {
            const rawGpax = score > 4.0 ? (score * 4.0) / 100 : score;
            if (rawGpax < subject.minScoreValue) {
              allMinPassed = false;
            }
          } else if (score < subject.minScoreValue) {
            allMinPassed = false;
          }
        }
      } else if (subject.minScoreValue) {
        allMinPassed = false;
      }
    });

    const meetsTotalMin =
      currentProg.minTotal == null || totalWeightedScore >= currentProg.minTotal;

    return {
      totalWeightedScore: parseFloat(totalWeightedScore.toFixed(2)),
      allMinPassed,
      meetsTotalMin,
      anyEntered,
    };
  }, [currentProg, userScores]);

  // Share handler
  const handleShare = async () => {
    const summaryText =
      `${faculty.name}${currentProg.code ? ' (รหัส ' + currentProg.code + ')' : ''} - ${university.name}\n` +
      `รอบ: ${uniData.round}\n` +
      (currentProg.gpax ? `GPAX ขั้นต่ำ: ${currentProg.gpax}\n` : '') +
      (currentProg.minTotal != null ? `คะแนนขั้นต่ำรวม: ${currentProg.minTotal}\n` : '') +
      `สัดส่วน: ` +
      currentProg.weights.map((w) => `${w.label} ${w.pct}%`).join(' | ') +
      `\nรายวิชา:\n` +
      currentProg.subjects
        .map(
          (s) =>
            `- [${s.exam}] ${s.name}: ${s.pct}%${s.min ? ` (เกณฑ์ขั้นต่ำ: ${s.min})` : ''}`
        )
        .join('\n');

    if (navigator.share) {
      try {
        await navigator.share({
          title: `เกณฑ์คะแนน ${faculty.name} ${university.name}`,
          text: summaryText,
        });
        return;
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(summaryText);
      onShowToast('คัดลอกข้อมูลเกณฑ์สรุปลงคลิปบอร์ดแล้ว');
    } catch {
      onShowToast('ไม่สามารถคัดลอกได้อัตโนมัติ');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!uniData) {
    return (
      <div className="p-8 text-center">
        <p>ไม่พบข้อมูล</p>
        <button type="button" onClick={onBack} className="mt-4 text-teal-700 underline">
          กลับ
        </button>
      </div>
    );
  }

  return (
    <div className="mt-2">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        กลับไปเลือกมหาวิทยาลัย
      </button>

      {/* Main Requirement Card */}
      <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        {/* Card Header */}
        <header className="p-5 sm:p-6 border-b border-stone-200 bg-stone-50/50 flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-stone-950 border border-stone-200 font-heading font-bold text-lg shrink-0 shadow-xs"
              style={{ backgroundColor: university.color ? `${university.color}20` : '#f1f5f9', color: '#0f172a' }}
              aria-hidden="true"
            >
              {university.short.slice(0, 3)}
            </div>
            <div>
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 mb-1.5">
                {uniData.round}
              </span>
              <h1 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
                {university.name}
              </h1>
              <p className="text-sm text-stone-600 mt-0.5">
                {faculty.name}
                {currentProg.code && (
                  <span className="font-medium text-teal-800 ml-1.5">
                    · รหัสรับ {currentProg.code}
                  </span>
                )}
                {currentProg.title && (
                  <span className="text-stone-500 ml-1">
                    ({currentProg.title})
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Quick Actions in Header */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSave(currentProg.code)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-teal-600'
              }`}
              aria-pressed={isSaved}
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isSaved ? 'fill-stone-950 text-stone-950' : 'text-stone-500'
                }`}
              />
              <span>{isSaved ? 'บันทึกแล้ว' : 'บันทึกเกณฑ์นี้'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl border border-stone-300 bg-white text-stone-700 hover:text-teal-700 transition-colors cursor-pointer"
              title="แชร์ข้อมูลเกณฑ์นี้"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">แชร์</span>
            </button>
          </div>
        </header>

        {/* Program Tabs if multiple codes exist (e.g. Chula 121-127, 128-131) */}
        {programs.length > 1 && (
          <div className="px-5 sm:px-6 pt-4 pb-2 border-b border-stone-200 bg-stone-50/70">
            <div className="text-xs font-medium text-stone-500 mb-2">
              เลือกรหัสรับเข้า ({programs.length} รูปแบบ):
            </div>
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="เลือกรหัสรับเข้า"
            >
              {programs.map((p, idx) => {
                const active = idx === selectedProgIndex;
                return (
                  <button
                    key={p.code || idx}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setSelectedProgIndex(idx);
                      setUserScores({});
                    }}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-heading font-semibold rounded-lg border transition-all cursor-pointer ${
                      active
                        ? 'bg-teal-100 text-teal-950 border-teal-700 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-teal-600'
                    }`}
                  >
                    รหัส {p.code}
                    {p.title && (
                      <span className="opacity-80 text-[11px] font-normal ml-1 hidden md:inline">
                        ({p.title.replace('รูปแบบ', '')})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Key Facts & Exam Overview Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-stone-200 border-b border-stone-200 bg-white">
          <div className="p-4 sm:p-5">
            <span className="text-xs sm:text-sm font-medium text-stone-600 block mb-1">
              GPAX ขั้นต่ำ
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className={`font-heading text-lg sm:text-xl font-bold tabular-nums ${
                currentProg.gpax && currentProg.gpax !== 'ไม่กำหนด' && currentProg.gpax !== 'ไม่กำหนดขั้นต่ำ' && !currentProg.gpax.includes('ตามเกณฑ์')
                  ? 'text-teal-900'
                  : 'text-stone-900'
              }`}>
                {currentProg.gpax ? currentProg.gpax : 'ไม่กำหนด'}
              </span>
            </div>
            {currentProg.requiredCredits && (
              <span className="text-xs text-stone-600 block mt-1 font-medium">
                วิทย์ {currentProg.requiredCredits.science} นก. / คณิต {currentProg.requiredCredits.math} นก.
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs sm:text-sm font-medium text-stone-600 block mb-1">
              วิชาความถนัด TPAT
            </span>
            <div className="flex flex-wrap items-center gap-1">
              {currentProg.tpatUsed && currentProg.tpatUsed.length > 0 ? (
                currentProg.tpatUsed.map((tpat) => (
                  <span
                    key={tpat}
                    className="inline-flex items-center px-2 py-0.5 rounded-md text-xs sm:text-sm font-bold font-mono bg-sky-100 text-sky-950 border border-sky-300"
                  >
                    ใช้ {tpat}
                  </span>
                ))
              ) : (
                <span className="text-sm font-medium text-stone-600">
                  ไม่ใช้ TPAT
                </span>
              )}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs sm:text-sm font-medium text-stone-600 block mb-1">
              สัดส่วน A-Level รวม
            </span>
            {(() => {
              const alevelSubjects = currentProg.subjects.filter((s) => s.exam === 'A-Level');
              const alevelTotal = alevelSubjects.reduce((acc, s) => acc + s.pct, 0);
              return (
                <div>
                  <span className="font-heading text-lg sm:text-xl font-bold text-teal-900 tabular-nums">
                    {alevelTotal > 0 ? `${alevelTotal}%` : 'ไม่ใช้'}
                  </span>
                  {alevelTotal > 0 && (
                    <span className="text-xs sm:text-sm text-stone-600 ml-1 font-medium">
                      ({alevelSubjects.length} วิชา)
                    </span>
                  )}
                </div>
              );
            })()}
          </div>

          <div className="p-4 sm:p-5">
            <span className="text-xs sm:text-sm font-medium text-stone-600 block mb-1">
              คะแนนขั้นต่ำรวม
            </span>
            <span className="font-heading text-lg sm:text-xl font-bold text-stone-900 tabular-nums">
              {currentProg.minTotal != null ? currentProg.minTotal : 'ไม่กำหนด'}
            </span>
          </div>
        </div>

        {/* Visual Stacked Percentage Bar */}
        <section className="p-5 sm:p-6 border-b border-stone-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-heading text-sm font-bold text-stone-800 uppercase tracking-wide">
              สัดส่วนคะแนนภาพรวม (Exam Groups)
            </h3>
            <span className="text-xs text-stone-500">
              รวมตามหมวดการสอบ
            </span>
          </div>

          {/* Progress Segment Bar */}
          <div
            className="flex h-9 rounded-xl overflow-hidden border border-stone-200 shadow-2xs"
            role="img"
            aria-label={currentProg.weights
              .map((w) => `${w.label} ${w.pct}%`)
              .join(', ')}
          >
            {currentProg.weights.map((w, i) => (
              <div
                key={i}
                style={{
                  width: `${w.pct}%`,
                  backgroundColor: w.color,
                }}
                className="flex items-center justify-center font-heading font-bold text-xs sm:text-sm text-stone-900 px-1 overflow-hidden select-none transition-all"
                title={`${w.label}: ${w.pct}%`}
              >
                {w.pct >= 15 ? `${w.label} ${w.pct}%` : w.pct >= 10 ? `${w.pct}%` : ''}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-xs text-stone-700">
            {currentProg.weights.map((w, i) => (
              <div key={i} className="flex items-center gap-1.5 font-medium">
                <span
                  className="w-3 h-3 rounded-xs shrink-0"
                  style={{ backgroundColor: w.color }}
                />
                <span>
                  {w.label} <strong className="tabular-nums">{w.pct}%</strong>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Subject Requirements Table */}
        <section className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="font-heading text-base font-bold text-stone-900">
                รายวิชาและน้ำหนักคะแนนที่ใช้คิดจริง
              </h3>
              <p className="text-xs text-stone-500">
                คะแนนแต่ละวิชาจะถูกแปลงตามสัดส่วนร้อยละ
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowCalculator(!showCalculator)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                showCalculator
                  ? 'bg-teal-100 text-teal-950 border-teal-700 shadow-xs'
                  : 'bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{showCalculator ? 'ปิดตัวคำนวณ' : 'คำนวณคะแนนตามเกณฑ์นี้'}</span>
            </button>
          </div>

          {/* Interactive Score Simulator Panel */}
          {showCalculator && (
            <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-teal-950/5 border border-teal-800/20 text-stone-900 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-teal-800/15">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 border border-teal-300 text-teal-900 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-teal-950">
                      แบบจำลองคำนวณคะแนนรายวิชา
                    </h4>
                    <p className="text-xs text-stone-500">
                      กรอกคะแนนเต็ม 100 ของแต่ละวิชา เพื่อคำนวณคะแนนรวมและตรวจสอบเกณฑ์ขั้นต่ำ
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-stone-500 hidden sm:inline">
                    ตัวช่วยกรอก:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleFillPreset(50)}
                    className="px-2 py-1 rounded bg-white border border-stone-200 text-stone-700 hover:border-teal-600 cursor-pointer"
                  >
                    50 ทุกวิชา
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFillPreset(70)}
                    className="px-2 py-1 rounded bg-white border border-stone-200 text-stone-700 hover:border-teal-600 cursor-pointer"
                  >
                    70 ทุกวิชา
                  </button>
                  <button
                    type="button"
                    onClick={handleResetScores}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-stone-100 text-stone-600 hover:text-stone-900 cursor-pointer"
                    title="ล้างคะแนนทั้งหมด"
                  >
                    <RotateCcw className="w-3 h-3" />
                    ล้าง
                  </button>
                </div>
              </div>

              {/* Real-time calculated total score card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white border border-teal-800/20 shadow-2xs">
                  <span className="text-xs text-stone-500 block">
                    คะแนนรวมถ่วงน้ำหนัก
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-heading text-2xl font-bold text-teal-800 tabular-nums">
                      {simulationResults.totalWeightedScore}
                    </span>
                    <span className="text-xs text-stone-500">/ 100</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-teal-800/20 shadow-2xs">
                  <span className="text-xs text-stone-500 block">
                    เกณฑ์ขั้นต่ำรายวิชา
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-sm font-semibold">
                    {!simulationResults.anyEntered ? (
                      <span className="text-stone-400">รอการกรอกคะแนน</span>
                    ) : simulationResults.allMinPassed ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> ผ่านเกณฑ์ทุกวิชา
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> ตกเกณฑ์ขั้นต่ำบางวิชา
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-teal-800/20 shadow-2xs">
                  <span className="text-xs text-stone-500 block">
                    คะแนนรวมขั้นต่ำ
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-sm font-semibold">
                    {currentProg.minTotal == null ? (
                      <span className="text-stone-500">ไม่มีกำหนดขั้นต่ำ</span>
                    ) : !simulationResults.anyEntered ? (
                      <span className="text-stone-400">ต้องได้ {currentProg.minTotal}+</span>
                    ) : simulationResults.meetsTotalMin ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> ผ่านเกณฑ์รวม ({currentProg.minTotal})
                      </span>
                    ) : (
                      <span className="text-amber-600 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" /> ยังไม่ถึง {currentProg.minTotal}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left border-collapse min-w-[500px] sm:min-w-full">
              <thead>
                <tr className="bg-stone-100/80 text-xs sm:text-sm font-bold text-stone-700 border-b border-stone-200">
                  <th scope="col" className="p-3.5 sm:px-4">
                    วิชาสอบ
                  </th>
                  <th scope="col" className="p-3.5 sm:px-4 text-center">
                    ประเภทข้อสอบ
                  </th>
                  <th scope="col" className="p-3.5 sm:px-4 text-right">
                    น้ำหนักสัดส่วน
                  </th>
                  <th scope="col" className="p-3.5 sm:px-4">
                    เกณฑ์คะแนนขั้นต่ำ
                  </th>
                  {showCalculator && (
                    <th scope="col" className="p-3.5 sm:px-4 text-right">
                      คะแนนที่ได้
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm sm:text-base">
                {currentProg.subjects.map((subject, idx) => {
                  const userScore = userScores[idx];
                  const hasScore = typeof userScore === 'number';
                  const failedMin =
                    hasScore &&
                    subject.minScoreValue &&
                    (subject.exam === 'GPAX' && subject.minScoreValue <= 4.0
                      ? (userScore > 4.0 ? (userScore * 4.0) / 100 : userScore) < subject.minScoreValue
                      : userScore < subject.minScoreValue);
                  const effectiveScore =
                    hasScore && subject.exam === 'GPAX' && userScore <= 4.0
                      ? (userScore / 4.0) * 100
                      : userScore;
                  const weightedVal =
                    hasScore && typeof effectiveScore === 'number'
                      ? ((effectiveScore * subject.pct) / 100).toFixed(2)
                      : null;

                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-stone-50/70 transition-colors ${
                        failedMin ? 'bg-red-50/50' : ''
                      }`}
                    >
                      <td className="p-3.5 sm:px-4 font-semibold text-stone-900">
                        <div className="flex items-center gap-2 flex-wrap">
                          {subject.code && (
                            <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-stone-200 text-stone-800 shrink-0">
                              รหัส {subject.code}
                            </span>
                          )}
                          <span className="text-sm sm:text-base">{subject.name}</span>
                        </div>
                      </td>
                      <td className="p-3.5 sm:px-4 text-center">
                        <span
                          className={`inline-block text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded font-mono border ${
                            subject.exam === 'A-Level'
                              ? 'bg-teal-50 text-teal-900 border-teal-300'
                              : subject.exam.startsWith('TPAT1')
                              ? 'bg-sky-50 text-sky-900 border-sky-300'
                              : subject.exam.startsWith('TPAT')
                              ? 'bg-indigo-50 text-indigo-900 border-indigo-300'
                              : subject.exam === 'TGAT'
                              ? 'bg-amber-50 text-amber-950 border-amber-300'
                              : subject.exam === 'GPAX'
                              ? 'bg-purple-50 text-purple-900 border-purple-300'
                              : 'bg-stone-100 text-stone-900 border-stone-300'
                          }`}
                        >
                          {subject.exam}
                        </span>
                      </td>
                      <td className="p-3.5 sm:px-4 text-right font-heading font-bold text-base sm:text-lg text-stone-900 tabular-nums">
                        {subject.pct}%
                      </td>
                      <td className="p-3.5 sm:px-4">
                        {subject.min ? (
                          <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-300">
                            {subject.min}
                          </span>
                        ) : (
                          <span className="text-xs sm:text-sm text-stone-500 font-medium">ไม่ระบุ</span>
                        )}
                      </td>
                      {showCalculator && (
                        <td className="p-3.5 sm:px-4 text-right">
                          <div className="inline-flex items-center justify-end gap-2">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step={subject.exam === 'GPAX' ? '0.01' : '0.5'}
                              value={userScore ?? ''}
                              onChange={(e) => handleScoreChange(idx, e.target.value)}
                              placeholder={subject.exam === 'GPAX' ? '0.00-4.00' : '0-100'}
                              className={`w-20 px-2 py-1 text-right text-xs sm:text-sm font-semibold rounded-md border focus:outline-none focus:ring-2 tabular-nums ${
                                failedMin
                                  ? 'border-red-500 bg-red-50 text-red-700 focus:ring-red-500'
                                  : 'border-stone-300 bg-white text-stone-900 focus:ring-teal-600'
                              }`}
                            />
                            {weightedVal && (
                              <span className="text-xs font-mono font-bold text-teal-800 tabular-nums w-12 text-right">
                                = {weightedVal}
                              </span>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Warning & Info Notes */}
        {totalSubjectPct !== 100 && (
          <div className="mx-5 sm:mx-6 mb-5 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <strong>หมายเหตุสัดส่วนคะแนน:</strong> น้ำหนักในตารางต้นทางรวมได้{' '}
              {totalSubjectPct}% ไม่ครบ 100% โปรดตรวจสอบกับประกาศอย่างเป็นทางการของ{' '}
              {university.name} ก่อนยื่นคะแนน
            </div>
          </div>
        )}

        {currentProg.note && (
          <div
            className={`mx-5 sm:mx-6 mb-5 p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
              currentProg.noteType === 'info'
                ? 'bg-sky-50 border-sky-300 text-sky-900'
                : 'bg-amber-50 border-amber-300 text-amber-900'
            }`}
          >
            {currentProg.noteType === 'info' ? (
              <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div>
              <strong>คำแนะนำและเงื่อนไขเพิ่มเติม:</strong> {currentProg.note}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <footer className="p-4 sm:p-5 bg-stone-50/80 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSave(currentProg.code)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                isSaved
                  ? 'bg-amber-400 hover:bg-amber-300 text-stone-950 border border-amber-500 font-bold'
                  : 'bg-teal-100 hover:bg-teal-200 text-teal-950 border border-teal-700 font-bold shadow-xs'
              }`}
            >
              {isSaved ? '✓ บันทึกเกณฑ์นี้แล้ว' : 'บันทึกเกณฑ์นี้'}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border border-stone-300 bg-white text-stone-700 hover:border-teal-600 transition-colors cursor-pointer"
            >
              แชร์ข้อมูล
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border border-stone-300 bg-white text-stone-700 hover:border-teal-600 transition-colors hidden sm:inline-flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              พิมพ์
            </button>
          </div>

          <div className="text-xs text-stone-500">
            อ้างอิงรอบ {uniData.round}
          </div>
        </footer>
      </article>

      {/* Official Disclaimer */}
      <div className="mt-5 p-4 rounded-xl border border-dashed border-stone-300 text-xs text-stone-500 leading-relaxed">
        <strong>ข้อควรทราบ:</strong> เกณฑ์ของจุฬาลงกรณ์มหาวิทยาลัย (ทันตแพทยศาสตร์
        และเภสัชศาสตร์) แสดงตามข้อมูลระบุ ส่วนคณะและสถาบันอื่นๆ
        จัดทำขึ้นเพื่อเป็นแนวทางเตรียมตัวสอบ TCAS
        โปรดตรวจสอบระเบียบการอย่างเป็นทางการจากระบบ myTCAS
        และมหาวิทยาลัยอีกครั้งก่อนดำเนินการสมัคร
      </div>
    </div>
  );
};
