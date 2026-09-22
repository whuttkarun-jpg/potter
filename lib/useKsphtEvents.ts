"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import {
  KSPHT_70_EVENTS,
  type KsphtCalendarEvent,
} from "@/ais/data/ksphtCalendarData";

// ดึงกิจกรรมปฏิทินจาก Supabase (ตาราง kspht_events) ถ้าเชื่อมต่อไว้
// ถ้ายังไม่ต่อ จะใช้ข้อมูล static จาก AI Studio (KSPHT_70_EVENTS)
export function useKsphtEvents(): KsphtCalendarEvent[] {
  const [events, setEvents] = useState<KsphtCalendarEvent[]>(KSPHT_70_EVENTS);

  useEffect(() => {
    const sb = createClient();
    if (!sb) return;
    sb.from("kspht_events")
      .select("id,title,start,end,url,note")
      .order("start", { ascending: true })
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) {
          setEvents(data as KsphtCalendarEvent[]);
        }
      });
  }, []);

  return events;
}
