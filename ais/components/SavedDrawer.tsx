"use client";

import React from 'react';
import { X, Bookmark, Trash2, ExternalLink, ArrowRight } from 'lucide-react';
import { FacultyData, UniversityInfo } from '../types';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedKeys: string[];
  faculties: FacultyData[];
  universities: Record<string, UniversityInfo>;
  onSelectSaved: (facultyId: string, uniId: string, programCode: string | null) => void;
  onRemoveSaved: (key: string) => void;
  onClearAll: () => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedKeys,
  faculties,
  universities,
  onSelectSaved,
  onRemoveSaved,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-stone-950/40 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-modal-title"
    >
      <div className="w-full max-w-md h-full bg-white border-l border-stone-200 shadow-2xl flex flex-col animate-slideLeft">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2
                id="saved-modal-title"
                className="font-heading font-bold text-base text-stone-900"
              >
                เกณฑ์ที่บันทึกไว้
              </h2>
              <p className="text-xs text-stone-500">
                {savedKeys.length} รายการที่บันทึกไว้ในเครื่อง
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 flex items-center justify-center transition-colors"
            aria-label="ปิดหน้าต่าง"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5">
          {savedKeys.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-sm text-stone-800 mb-1">
                ยังไม่มีเกณฑ์ที่บันทึกไว้
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
                คุณสามารถแตะปุ่ม &ldquo;บันทึกเกณฑ์นี้&rdquo; ในหน้ารายละเอียดเกณฑ์
                เพื่อเก็บไว้เปรียบเทียบสัดส่วนวิชาภายหลังได้
              </p>
            </div>
          ) : (
            savedKeys.map((k) => {
              const [fId, uId, code] = k.split(':');
              const fac = faculties.find((f) => f.id === fId);
              const uni = universities[uId];
              if (!fac || !uni) return null;

              return (
                <div
                  key={k}
                  className="group p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-teal-600 transition-all flex items-center justify-between gap-3"
                >
                  <button
                    type="button"
                    onClick={() => {
                      onSelectSaved(fId, uId, code || null);
                      onClose();
                    }}
                    className="flex items-center gap-3 text-left flex-1 min-w-0 cursor-pointer"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-stone-950 border border-stone-200 font-heading font-bold text-xs shrink-0 shadow-2xs"
                      style={{ backgroundColor: uni.color ? `${uni.color}20` : '#f1f5f9', color: '#0f172a' }}
                    >
                      {uni.short.slice(0, 3)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-xs sm:text-sm text-teal-900 truncate">
                        {fac.name}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-stone-900 truncate">
                        {uni.name}
                      </div>
                      {code && (
                        <span className="inline-block text-xs font-mono px-1.5 py-0.5 rounded bg-stone-200 text-stone-800 mt-0.5">
                          รหัส {code}
                        </span>
                      )}
                    </div>
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        onSelectSaved(fId, uId, code || null);
                        onClose();
                      }}
                      className="p-1.5 text-stone-400 hover:text-teal-700 rounded-md"
                      title="ดูเกณฑ์"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemoveSaved(k)}
                      className="p-1.5 text-stone-400 hover:text-rose-600 rounded-md transition-colors"
                      title="ลบออกจากที่บันทึก"
                      aria-label={`ลบ ${fac.name} ${uni.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {savedKeys.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs font-medium text-rose-600 hover:underline"
            >
              ลบทั้งหมด
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-stone-200 text-stone-900 border border-stone-400 hover:bg-stone-300 cursor-pointer"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
