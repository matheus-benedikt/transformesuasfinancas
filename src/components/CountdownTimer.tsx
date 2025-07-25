import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export const CountdownTimer = ({ hours = 24, minutes = 0, seconds = 0 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds;

        if (newSeconds > 0) {
          newSeconds--;
        } else {
          newSeconds = 59;
          if (newMinutes > 0) {
            newMinutes--;
          } else {
            newMinutes = 59;
            if (newHours > 0) {
              newHours--;
            } else {
              // Timer expired
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-center">
      <div className="glass rounded-lg p-4 min-w-[80px]">
        <div className="text-2xl font-bold text-celestial-gold">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-muted-foreground">HORAS</div>
      </div>
      <div className="text-celestial-gold text-2xl">:</div>
      <div className="glass rounded-lg p-4 min-w-[80px]">
        <div className="text-2xl font-bold text-celestial-gold">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-muted-foreground">MIN</div>
      </div>
      <div className="text-celestial-gold text-2xl">:</div>
      <div className="glass rounded-lg p-4 min-w-[80px]">
        <div className="text-2xl font-bold text-celestial-gold">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-muted-foreground">SEG</div>
      </div>
    </div>
  );
};