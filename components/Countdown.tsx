"use client";

import { memo, useEffect, useState } from "react";

interface CountdownProps {
  cardBg: string;
}

function CountdownTimer({ cardBg }: CountdownProps) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-12-13T09:00:00-03:00").getTime();

    const calculateCountdown = () => {
      const now = Date.now();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {[
        { value: countdown.days, label: countdown.days > 1 ? "Dias" : "Dia" },
        {
          value: countdown.hours,
          label: countdown.hours > 1 ? "Horas" : "Hora",
        },
        {
          value: countdown.minutes,
          label: countdown.minutes > 1 ? "Mins" : "Min",
        },
        {
          value: countdown.seconds,
          label: countdown.seconds > 1 ? "Segs" : "Seg",
        },
      ].map((item) => (
        <div
          key={item.label}
          className={`${cardBg} rounded-xl p-4 min-w-[80px]`}
        >
          <div className="text-3xl sm:text-4xl font-bold font-league-spartan text-[#FFB237]">
            {item.value}
          </div>
          <div className="text-xs text-cyan-100 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default memo(CountdownTimer);
