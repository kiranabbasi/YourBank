import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetPercentage, duration }) => {
  const [percentage, setPercentage] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (isCounting && percentage < targetPercentage) {
      const interval = duration / targetPercentage;
      const increment = () => setPercentage((prev) => Math.min(prev + 1, targetPercentage));

      const timer = setInterval(increment, interval);

      return () => clearInterval(timer);
    }
  }, [isCounting, percentage, targetPercentage, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef}>
      <p>{percentage}%</p>
    </div>
  );
}

export default Counter;
