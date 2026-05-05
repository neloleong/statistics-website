import { useEffect, useMemo, useState } from "react";
import { Eye } from "lucide-react";
import { hasSupabaseConfig, supabase } from "../lib/supabaseClient";

function getTodayStartISO() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.toISOString();
}

function getVisitorKey() {
  const storageKey = "statmap_visitor_key";
  const existingKey = localStorage.getItem(storageKey);

  if (existingKey) {
    return existingKey;
  }

  const newKey = `visitor_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2)}`;

  localStorage.setItem(storageKey, newKey);

  return newKey;
}

function VisitorCounter() {
  const [totalVisits, setTotalVisits] = useState(null);
  const [todayVisits, setTodayVisits] = useState(null);
  const [hasError, setHasError] = useState(false);

  const displayTotal = useMemo(() => {
    if (typeof totalVisits !== "number") return "—";
    return totalVisits.toLocaleString();
  }, [totalVisits]);

  const displayToday = useMemo(() => {
    if (typeof todayVisits !== "number") return "—";
    return todayVisits.toLocaleString();
  }, [todayVisits]);

  useEffect(() => {
    async function recordVisitAndLoadStats() {
      if (!hasSupabaseConfig || !supabase) {
        setHasError(true);
        return;
      }

      try {
        const visitorKey = getVisitorKey();

        const currentHash = window.location.hash.replace("#", "") || "home";
        const page = currentHash.split("/")[0] || "home";

        await supabase.from("site_visits").insert({
          page,
          visitor_key: visitorKey,
          user_agent: navigator.userAgent
        });

        const { count: totalCount, error: totalError } = await supabase
          .from("site_visits")
          .select("*", {
            count: "exact",
            head: true
          });

        if (totalError) {
          throw totalError;
        }

        const todayStartISO = getTodayStartISO();

        const { count: todayCount, error: todayError } = await supabase
          .from("site_visits")
          .select("*", {
            count: "exact",
            head: true
          })
          .gte("visited_at", todayStartISO);

        if (todayError) {
          throw todayError;
        }

        setTotalVisits(totalCount || 0);
        setTodayVisits(todayCount || 0);
      } catch (error) {
        console.error("Visitor counter error:", error);
        setHasError(true);
      }
    }

    recordVisitAndLoadStats();
  }, []);

  if (hasError) {
    return null;
  }

  return (
    <div className="visitor-counter">
      <span>
        <Eye size={14} />
        總瀏覽：{displayTotal}
      </span>

      <span>今日瀏覽：{displayToday}</span>
    </div>
  );
}

export default VisitorCounter;