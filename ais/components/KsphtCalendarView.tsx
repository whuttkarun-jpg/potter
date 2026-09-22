"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Filter,
  Flame,
  Info
} from 'lucide-react';
import {
  KSPHT_70_EVENTS,
  KsphtCalendarEvent,
  EventStatus,
  analyzeEventTime,
  formatEventDateThai
} from '../data/ksphtCalendarData';
import { useKsphtEvents } from '@/lib/useKsphtEvents';

interface KsphtCalendarViewProps {
  onNavigateToFaculties?: () => void;
}

export const KsphtCalendarView: React.FC<KsphtCalendarViewProps> = ({ onNavigateToFaculties }) => {
  // Real-time clock updated every second
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());
  // Selected event override if user clicks a specific timeline card (null = auto-current)
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  // Accordion state for timeline cards (ids of expanded notes)
  const [expandedCardIds, setExpandedCardIds] = useState<Record<number, boolean>>({});
  // Filter for timeline items: 'all' | 'active' | 'upcoming' | 'passed'
  const [filterMode, setFilterMode] = useState<'all' | 'active' | 'upcoming' | 'passed'>('all');

  // กิจกรรมจาก Supabase (ถ้าต่อไว้) ไม่งั้นใช้ static จาก AI Studio
  const allEvents = useKsphtEvents();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute status for all events based on real-time current time
  const eventsWithStatus = useMemo(() => {
    return allEvents.map((event) => {
      const analysis = analyzeEventTime(event, currentTime);
      return {
        ...event,
        ...analysis
      };
    });
  }, [allEvents, currentTime]);

  // Auto-detect the next active or upcoming event that hasn't ended yet
  const autoCurrentEvent = useMemo(() => {
    const activeOrUpcoming = eventsWithStatus.find((e) => e.status === 'active' || e.status === 'upcoming');
    return activeOrUpcoming || eventsWithStatus[eventsWithStatus.length - 1];
  }, [eventsWithStatus]);

  // The active event displayed in the Hero Card
  const heroEvent = useMemo(() => {
    if (selectedEventId !== null) {
      const found = eventsWithStatus.find((e) => e.id === selectedEventId);
      if (found) return found;
    }
    return autoCurrentEvent;
  }, [selectedEventId, autoCurrentEvent, eventsWithStatus]);

  // Countdown calculations for the Hero event
  const countdown = useMemo(() => {
    const nowMs = currentTime.getTime();
    const diffMs = Math.max(0, heroEvent.targetTimestamp - nowMs);
    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      isZero: totalSeconds === 0
    };
  }, [currentTime, heroEvent]);

  // Toggle accordion expansion for a timeline card
  const toggleAccordion = (id: number) => {
    setExpandedCardIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filtered timeline events
  const filteredEvents = useMemo(() => {
    if (filterMode === 'all') return eventsWithStatus;
    return eventsWithStatus.filter((e) => e.status === filterMode);
  }, [eventsWithStatus, filterMode]);

  // Format website URL into a safe full href
  const getFullUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  const isHeroActive = heroEvent.status === 'active';
  const isHeroPassed = heroEvent.status === 'passed';

  return (
    <div className="space-y-8 animate-fade-in">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (จุดโฟกัสหลัก: Auto-detect + Real-time Countdown) */}
      {/* ========================================================================= */}
      <section
        aria-label="กิจกรรมสำคัญและนาฬิกานับถอยหลัง"
        className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500 border ${
          isHeroActive
            ? 'bg-amber-50/90 border-amber-300 shadow-md text-slate-900'
            : isHeroPassed
            ? 'bg-stone-50 border-stone-300 shadow-xs text-slate-800'
            : 'bg-gradient-to-br from-teal-50 via-emerald-50 to-stone-50 border-teal-300 shadow-xs text-slate-900'
        }`}
      >
        <div className="relative z-10">
          {/* Header row: Live status badge + reset if manually selected */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              {isHeroActive ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-red-100 text-red-900 border border-red-300 shadow-xs animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <Flame className="w-3.5 h-3.5 text-red-600" />
                  กำลังเปิดรับสมัคร (LIVE)
                </div>
              ) : isHeroPassed ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-600" />
                  สิ้นสุดกิจกรรมแล้ว
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-950 border border-teal-300">
                  <Sparkles className="w-3.5 h-3.5 text-teal-800" />
                  กิจกรรมถัดไปที่ต้องเตรียมตัว
                </div>
              )}

              {heroEvent.isLastDay && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-stone-900 animate-bounce">
                  วันสุดท้าย!
                </span>
              )}
            </div>

            {selectedEventId !== null && (
              <button
                type="button"
                onClick={() => setSelectedEventId(null)}
                className="text-xs underline font-medium cursor-pointer text-teal-900 hover:text-teal-950"
              >
                ← กลับไปแสดงกิจกรรมปัจจุบันอัตโนมัติ
              </button>
            )}
          </div>

          {/* Title & Timing info */}
          <div className="mb-6">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-2 text-slate-900">
              {heroEvent.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Calendar className="w-4 h-4 shrink-0 text-teal-800" />
                <span>{formatEventDateThai(heroEvent.start, heroEvent.end)}</span>
              </div>

              {isHeroActive && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">
                  <Clock className="w-3.5 h-3.5" />
                  ปิดระบบเวลา 23:59:59 น.
                </span>
              )}
            </div>
          </div>

          {/* Real-time Countdown Timer Display */}
          <div className="p-5 sm:p-6 rounded-2xl mb-6 bg-white border border-teal-200 shadow-xs text-slate-900">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs uppercase font-semibold tracking-wider flex items-center gap-1.5 text-slate-800">
                <Clock className="w-3.5 h-3.5 text-teal-800" />
                {isHeroActive
                  ? 'เหลือเวลาก่อนสิ้นสุดการรับสมัคร'
                  : isHeroPassed
                  ? 'กิจกรรมนี้ผ่านพ้นไปแล้ว'
                  : 'นับถอยหลังเปิดระบบ / เริ่มกิจกรรม'}
              </span>

              <span className="text-xs font-mono tabular-nums font-medium text-slate-700">
                เวลาปัจจุบัน: {currentTime.toLocaleTimeString('th-TH', { hour12: false })} น.
              </span>
            </div>

            {isHeroPassed ? (
              <div className="py-2 text-center text-sm font-medium text-stone-600">
                กิจกรรมนี้เสร็จสิ้นแล้ว สามารถตรวจสอบผลหรือขั้นตอนถัดไปในไทม์ไลน์ด้านล่าง
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl">
                {/* Days */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl text-center bg-stone-50 border border-stone-200">
                  <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold font-mono tabular-nums leading-none mb-1 text-teal-950">
                    {String(countdown.days).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700">
                    วัน
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl text-center bg-stone-50 border border-stone-200">
                  <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold font-mono tabular-nums leading-none mb-1 text-teal-950">
                    {String(countdown.hours).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700">
                    ชั่วโมง
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl text-center bg-stone-50 border border-stone-200">
                  <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold font-mono tabular-nums leading-none mb-1 text-teal-950">
                    {String(countdown.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700">
                    นาที
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl text-center bg-stone-50 border border-stone-200">
                  <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold font-mono tabular-nums leading-none mb-1 text-red-700">
                    {String(countdown.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700">
                    วินาที
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action CTA & Note Box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {heroEvent.note ? (
              <div className="text-xs sm:text-sm font-medium flex items-start gap-2 max-w-xl text-slate-800">
                <FileText className="w-4 h-4 shrink-0 mt-0.5 text-teal-800" />
                <span>
                  <strong>เอกสาร/ข้อกำหนด:</strong> {heroEvent.note}
                </span>
              </div>
            ) : (
              <div className="text-xs text-stone-500 italic">
                ไม่มีข้อกำหนดเอกสารพิเศษเพิ่มเติม
              </div>
            )}

            {/* Direct CTA button if url exists */}
            {heroEvent.url && (
              <a
                href={getFullUrl(heroEvent.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-sm shadow-xs transition-all shrink-0 cursor-pointer bg-amber-400 hover:bg-amber-300 text-slate-950 border border-amber-500"
              >
                <span>
                  {isHeroActive ? 'เข้าสู่ระบบรับสมัครทันที' : 'เข้าชมเว็บไซต์ทางการ'} ({heroEvent.url})
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TIMELINE SECTION (Vertical Timeline Cards: Clean, Minimalist, Scannable) */}
      {/* ========================================================================= */}
      <section aria-label="ไทม์ไลน์กำหนดการ กสพท70" className="space-y-4">
        {/* Section Header with Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-800" />
              <h2 className="font-heading font-bold text-lg md:text-xl text-stone-900">
                กำหนดการสำคัญ กสพท70 & TCAS รอบ 3
              </h2>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              ไล่เรียงตามลำดับเวลา 11 เหตุการณ์หลัก กวาดสายตารอบเดียวครบทุกขั้นตอน
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-teal-100 text-teal-950 border border-teal-700 shadow-xs'
                  : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
              }`}
            >
              ทั้งหมด ({eventsWithStatus.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('active')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap inline-flex items-center gap-1 cursor-pointer ${
                filterMode === 'active'
                  ? 'bg-amber-100 text-amber-950 border border-amber-600 shadow-xs'
                  : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              กำลังดำเนินการ ({eventsWithStatus.filter((e) => e.status === 'active').length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('upcoming')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                filterMode === 'upcoming'
                  ? 'bg-teal-100 text-teal-950 border border-teal-700 shadow-xs'
                  : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
              }`}
            >
              เร็วๆ นี้ ({eventsWithStatus.filter((e) => e.status === 'upcoming').length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('passed')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                filterMode === 'passed'
                  ? 'bg-stone-200 text-stone-900 border border-stone-600 shadow-xs'
                  : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
              }`}
            >
              สิ้นสุดแล้ว ({eventsWithStatus.filter((e) => e.status === 'passed').length})
            </button>
          </div>
        </div>

        {/* Vertical Timeline Card List */}
        <div className="relative pl-6 sm:pl-8 space-y-3.5 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
          {filteredEvents.map((event) => {
            const isActive = event.status === 'active';
            const isPassed = event.status === 'passed';
            const isUpcoming = event.status === 'upcoming';
            const isExpanded = !!expandedCardIds[event.id];
            const hasDetails = !!event.note || !!event.url;

            return (
              <div
                key={event.id}
                className={`relative group rounded-2xl transition-all duration-300 ${
                  isPassed
                    ? 'opacity-50 hover:opacity-85'
                    : isActive
                    ? 'ring-2 ring-amber-500/60 shadow-md'
                    : 'hover:shadow-xs'
                }`}
              >
                {/* Node indicator on the vertical timeline line */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    isActive
                      ? 'bg-amber-500 border-stone-100 shadow-md ring-4 ring-amber-400/40 animate-pulse'
                      : isPassed
                      ? 'bg-stone-300 border-stone-100'
                      : 'bg-teal-700 border-stone-100'
                  }`}
                />

                {/* Main Card Container */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-amber-500/5 border-amber-400/80'
                      : isPassed
                      ? 'bg-stone-50 border-stone-200'
                      : 'bg-white border-stone-200 hover:border-teal-600'
                  }`}
                >
                  {/* Card Main Row: Date + Title + Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="min-w-0">
                        {/* [วัน/เดือน/ปี] */}
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span
                            className={`text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-md font-mono ${
                              isActive
                                ? 'bg-amber-500/20 text-amber-950 font-bold'
                                : isPassed
                                ? 'bg-stone-200 text-stone-700'
                                : 'bg-teal-100 text-teal-950'
                            }`}
                          >
                            {formatEventDateThai(event.start, event.end)}
                          </span>

                          <span className="text-xs text-stone-500 font-medium">
                            ลำดับที่ {event.id}
                          </span>
                        </div>

                        {/* [ชื่อกิจกรรม] */}
                        <h3
                          className={`font-heading font-bold text-base sm:text-lg tracking-tight leading-snug ${
                            isActive
                              ? 'text-stone-900'
                              : isPassed
                              ? 'text-stone-500 line-through decoration-stone-400/60'
                              : 'text-stone-900'
                          }`}
                        >
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* [ป้ายสถานะ] + Action Controls */}
                    <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                      {/* Status badge */}
                      {isActive && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                          กำลังเปิดรับสมัคร
                        </span>
                      )}
                      {isUpcoming && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                          <Clock className="w-3 h-3 text-stone-400" />
                          เร็วๆ นี้
                        </span>
                      )}
                      {isPassed && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-stone-200/70 text-stone-400">
                          <CheckCircle2 className="w-3 h-3" />
                          สิ้นสุดแล้ว
                        </span>
                      )}

                      {/* Quick countdown view trigger */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedEventId(event.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        title="ดูเวลานับถอยหลังของกิจกรรมนี้ด้านบน"
                        className="text-xs px-2 py-1 rounded-md text-stone-500 hover:text-teal-700 hover:bg-stone-100 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Clock className="w-3 h-3" />
                        <span>นับถอยหลัง</span>
                      </button>

                      {/* Accordion trigger for note/docs */}
                      {hasDetails && (
                        <button
                          type="button"
                          onClick={() => toggleAccordion(event.id)}
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg border border-stone-200 hover:border-teal-600 text-stone-600 hover:text-teal-700 bg-white/80 transition-colors cursor-pointer"
                          aria-label={isExpanded ? 'ซ่อนรายละเอียด' : 'ดูรายละเอียดเพิ่มเติม'}
                        >
                          <span>{isExpanded ? 'ย่อ' : 'รายละเอียด'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Accordion Content (Revealed smoothly on click) */}
                  {isExpanded && hasDetails && (
                    <div className="mt-3 pt-3 border-t border-stone-100 text-xs sm:text-sm text-stone-600 space-y-2 animate-fade-in">
                      {event.note && (
                        <div className="flex items-start gap-2 bg-stone-100/70 p-2.5 rounded-xl">
                          <FileText className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-stone-700">
                              ข้อกำหนดและเอกสาร:
                            </span>{' '}
                            {event.note}
                          </div>
                        </div>
                      )}

                      {event.url && (
                        <div className="flex items-center justify-between gap-2 pt-1">
                          <span className="text-stone-400">เว็บไซต์ที่ใช้ดำเนินการ:</span>
                          <a
                            href={getFullUrl(event.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:underline cursor-pointer"
                          >
                            <span>{event.url}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick link banner to the Health Faculty Requirements Database */}
      {onNavigateToFaculties && (
        <section
          aria-label="ลิงก์ไปหน้าเกณฑ์รับสมัคร"
          className="p-5 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
        >
          <div className="space-y-0.5">
            <h3 className="font-heading font-bold text-stone-900 text-sm sm:text-base">
              พร้อมเช็กเกณฑ์คะแนนรับสมัคร 10 คณะสายสุขภาพแล้วหรือยัง?
            </h3>
            <p className="text-xs text-stone-500">
              ฐานข้อมูลสัดส่วนคะแนน กสพท, A-Level, TGAT, TPAT และ GPAX ขั้นต่ำแยกตามมหาวิทยาลัย
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateToFaculties}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-teal-100 hover:bg-teal-200 text-teal-950 border border-teal-700 shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <span>ดูเกณฑ์คะแนน 10 คณะ</span>
            <ArrowRight className="w-4 h-4 text-teal-900" />
          </button>
        </section>
      )}
    </div>
  );
};
