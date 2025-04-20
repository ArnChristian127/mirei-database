import React from "react";
import { useDailyTime, useWeeklyTime } from './reset-functions';
export default function Resetime({timezone, type}) {
    const time = type == "daily" ? useDailyTime(timezone) : useWeeklyTime(timezone);
    return (
        <p className="text-xl font-bold">{time}</p>
    )
}
