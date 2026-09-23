"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { TopBar } from './components/TopBar';
import { KsphtCalendarView } from './components/KsphtCalendarView';
import { FacultyGrid } from './components/FacultyGrid';
import { UniversityList } from './components/UniversityList';
import { RequirementDetail } from './components/RequirementDetail';
import { SavedDrawer } from './components/SavedDrawer';
import { EXAMS, UNIS, FACULTIES, DISCLAIMER_TEXT } from './data/healthFacultiesData';
import { Bookmark, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'hac_saved_v1';
const THEME_KEY = 'hac_theme_v1';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'faculty' | 'requirement'>('home');
  const [activeHomeTab, setActiveHomeTab] = useState<'calendar' | 'faculties'>('calendar');
  const [selectedFacultyId, setSelectedFacultyId] = useState<string | null>(null);
  const [selectedUniId, setSelectedUniId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Force Light Mode on document root and storage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    try {
      localStorage.setItem(THEME_KEY, 'light');
    } catch {}
  }, []);

  // Saved bookmarks state
  const [savedKeys, setSavedKeys] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist saved items
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedKeys));
    } catch {}
  }, [savedKeys]);

  // Toast helper
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  // Navigation handlers
  const handleGoHome = () => {
    setCurrentView('home');
    setSelectedFacultyId(null);
    setSelectedUniId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFaculty = (facultyId: string) => {
    setSelectedFacultyId(facultyId);
    setSelectedUniId(null);
    setCurrentView('faculty');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectUniversity = (uniId: string) => {
    setSelectedUniId(uniId);
    setCurrentView('requirement');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFacultyList = () => {
    setCurrentView('home');
    setSelectedFacultyId(null);
    setSelectedUniId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToUniList = () => {
    setCurrentView('faculty');
    setSelectedUniId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Save criterion helper
  const handleToggleSave = (programCode: string | null) => {
    if (!selectedFacultyId || !selectedUniId) return;
    const key = `${selectedFacultyId}:${selectedUniId}${programCode ? `:${programCode}` : ''}`;
    if (savedKeys.includes(key)) {
      setSavedKeys((prev) => prev.filter((k) => k !== key));
      showToast('ลบออกจากเกณฑ์ที่บันทึกแล้ว');
    } else {
      setSavedKeys((prev) => [...prev, key]);
      showToast('บันทึกเกณฑ์นี้เรียบร้อยแล้ว');
    }
  };

  const handleRemoveSaved = (key: string) => {
    setSavedKeys((prev) => prev.filter((k) => k !== key));
    showToast('ลบรายการที่บันทึกแล้ว');
  };

  const handleClearAllSaved = () => {
    setSavedKeys([]);
    showToast('ล้างรายการที่บันทึกทั้งหมดแล้ว');
  };

  const handleSelectSaved = (
    facultyId: string,
    uniId: string,
    _programCode: string | null
  ) => {
    setSelectedFacultyId(facultyId);
    setSelectedUniId(uniId);
    setCurrentView('requirement');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Current entity lookups
  const currentFaculty = FACULTIES.find((f) => f.id === selectedFacultyId);
  const currentUniversity = selectedUniId ? UNIS[selectedUniId] : undefined;

  const isCurrentSaved = (programCode: string | null) => {
    if (!selectedFacultyId || !selectedUniId) return false;
    const key = `${selectedFacultyId}:${selectedUniId}${programCode ? `:${programCode}` : ''}`;
    return savedKeys.includes(key);
  };

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{ backgroundColor: '#ffffff', color: '#000000' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
        {/* Top Navigation Bar */}
        <TopBar
          savedCount={savedKeys.length}
          onOpenSaved={() => setIsSavedDrawerOpen(true)}
          onHome={handleGoHome}
          activeTab={activeHomeTab}
          onSelectTab={(tab) => {
            setCurrentView('home');
            setActiveHomeTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* View Router */}
        <main>
          {currentView === 'home' && (
            <div className="space-y-6">
              {activeHomeTab === 'calendar' ? (
                /* หน้าเว็บปฏิทิน กสพท70: Hero Section with Real-time Countdown + Clean Vertical Timeline */
                <KsphtCalendarView
                  onNavigateToFaculties={() => {
                    setActiveHomeTab('faculties');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ) : (
                /* หน้าเกณฑ์คะแนน 10 คณะสายสุขภาพ */
                <>
                  <div className="p-4 rounded-xl border border-amber-300 bg-amber-50 text-xs sm:text-sm text-amber-900 leading-relaxed flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>ข้อมูลอ้างอิงปี 69 — อยู่ระหว่างตรวจสอบ:</strong>{" "}
                      บางมหาวิทยาลัย/บางคณะยังไม่ครบและอาจคลาดเคลื่อนได้
                      หน้านี้ใช้ดูประกอบการวางแผนเท่านั้น
                      กรุณายึดประกาศทางการของมหาวิทยาลัยและ mytcas.com เป็นหลัก
                    </div>
                  </div>

                  <FacultyGrid
                    faculties={FACULTIES}
                    onSelectFaculty={handleSelectFaculty}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                  />

                  {/* Quick Saved Criteria Section (if any saved) */}
              {savedKeys.length > 0 && (
                <section
                  aria-label="เกณฑ์ที่บันทึกไว้ล่าสุด"
                  className="mt-10 p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <h3 className="font-heading font-bold text-base text-stone-900">
                        เกณฑ์ที่คุณบันทึกไว้ ({savedKeys.length})
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSavedDrawerOpen(true)}
                      className="text-xs font-semibold text-teal-800 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      ดูทั้งหมด
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {savedKeys.slice(0, 4).map((k) => {
                      const [fId, uId, code] = k.split(':');
                      const fac = FACULTIES.find((f) => f.id === fId);
                      const uni = UNIS[uId];
                      if (!fac || !uni) return null;

                      return (
                        <button
                          key={k}
                          type="button"
                          onClick={() => handleSelectSaved(fId, uId, code || null)}
                          className="text-left p-3 rounded-xl border border-stone-200 hover:border-teal-600 bg-stone-50/70 hover:bg-white transition-all flex items-center justify-between gap-3 group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-950 border border-stone-200 font-heading font-bold text-xs shrink-0"
                              style={{ backgroundColor: uni.color ? `${uni.color}20` : '#f1f5f9', color: '#0f172a' }}
                            >
                              {uni.short.slice(0, 3)}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-bold text-teal-900 truncate">
                                {fac.name}
                              </div>
                              <div className="text-xs sm:text-sm text-stone-800 font-medium truncate">
                                {uni.name}
                                {code && ` (รหัส ${code})`}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Disclaimer Notice */}
              <div className="mt-8 p-4 rounded-xl border border-dashed border-stone-300 bg-white/70 text-xs sm:text-sm text-stone-600 leading-relaxed flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-800">ประกาศข้อกำหนดข้อมูล:</strong> {DISCLAIMER_TEXT}
                </div>
              </div>
            </>
          )}
        </div>
      )}

          {currentView === 'faculty' && currentFaculty && (
            <UniversityList
              faculty={currentFaculty}
              universities={UNIS}
              onSelectUniversity={handleSelectUniversity}
              onBack={handleBackToFacultyList}
            />
          )}

          {currentView === 'requirement' && currentFaculty && currentUniversity && (
            <RequirementDetail
              faculty={currentFaculty}
              university={currentUniversity}
              onBack={handleBackToUniList}
              isSaved={isCurrentSaved(null)}
              onToggleSave={handleToggleSave}
              onShowToast={showToast}
            />
          )}
        </main>

        {/* Saved Criteria Slide Drawer */}
        <SavedDrawer
          isOpen={isSavedDrawerOpen}
          onClose={() => setIsSavedDrawerOpen(false)}
          savedKeys={savedKeys}
          faculties={FACULTIES}
          universities={UNIS}
          onSelectSaved={handleSelectSaved}
          onRemoveSaved={handleRemoveSaved}
          onClearAll={handleClearAllSaved}
        />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-teal-100 text-teal-950 text-xs sm:text-sm font-bold shadow-lg border-2 border-teal-700 flex items-center gap-2 animate-fadeIn"
          >
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
