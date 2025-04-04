import { FC, useCallback, useEffect, useState } from 'react';

interface ICountdown {
  targetDate: Date | string;
}

const Countdown: FC<ICountdown> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="countdown uppercase mb-0">
      {timeLeft.days || 0}d {timeLeft.hours || 0}h {timeLeft.minutes || 0}m{' '}
      {timeLeft.seconds || 0}s
    </div>
  );
};

export default Countdown;
