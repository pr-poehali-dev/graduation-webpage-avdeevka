import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-28T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 min-w-[100px]">
      <div className="text-3xl md:text-4xl font-bold text-purple-600 font-montserrat">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-gray-500 font-open-sans mt-1 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Calendar size={24} className="text-purple-600" />
            <span className="font-open-sans text-gray-700 font-medium">
              До выпускного
            </span>
          </div>
        </div>

        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Обратный отсчёт
        </h2>

        <p className="text-xl text-gray-600 font-open-sans mb-12">
          28 июня 2025 года • 10:00
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="дней" />
          <TimeUnit value={timeLeft.hours} label="часов" />
          <TimeUnit value={timeLeft.minutes} label="минут" />
          <TimeUnit value={timeLeft.seconds} label="секунд" />
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={20} />
            <span className="font-open-sans">
              Время до начала торжественной части
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
