import { DateTime } from "luxon";
import { useState, useEffect } from "react";
export function useDailyTime(timezone) {
    const [timeLeft, setTimeLeft] = useState("");
    const updateCountdown = () => {
        const now = DateTime.now().setZone(timezone);
        let target = now.set({ hour: 4, minute: 0, second: 0, millisecond: 0 });
        if (now > target) {
          target = target.plus({ days: 1 });
        }
        const diff = target.diff(now, ["hours", "minutes", "seconds"]).toObject();
        const formatted = `H:${String(Math.floor(diff.hours)).padStart(2, "0")} M:${String(Math.floor(diff.minutes)).padStart(2, "0")} S:${String(Math.floor(diff.seconds)).padStart(2, "0")}`;
        setTimeLeft(formatted);
    };
    useEffect(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);
    return timeLeft;
}
export function useWeeklyTime(timezone) {
    const [timeLeft, setTimeLeft] = useState("");
    const updateCountdown = () => {
        const now = DateTime.now().setZone(timezone);
        let target = now.set({ weekday: 1, hour: 4, minute: 0, second: 0, millisecond: 0 });
        if (now > target) {
          target = target.plus({ weeks: 1 });
        }
        const diff = target.diff(now, ["days", "hours", "minutes", "seconds"]).toObject();
        const formatted = `D:${String(Math.floor(diff.days)).padStart(2, "0")} H:${String(Math.floor(diff.hours)).padStart(2, "0")} M:${String(Math.floor(diff.minutes)).padStart(2, "0")} S:${String(Math.floor(diff.seconds)).padStart(2, "0")}`;
        setTimeLeft(formatted);
    };
    useEffect(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);
    return timeLeft;
}