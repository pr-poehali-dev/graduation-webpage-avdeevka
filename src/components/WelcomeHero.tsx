import { School } from "lucide-react";

const WelcomeHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <School size={48} className="text-purple-600" />
          </div>
        </div>

        <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Выпуск <span className="text-purple-600">2025</span>
        </h1>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100">
          <h2 className="font-montserrat text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            11 класс
          </h2>
          <p className="text-lg text-gray-600 font-open-sans leading-relaxed">
            Средняя общеобразовательная школа
            <br />
            c. Авдеевка Кировского района
          </p>
        </div>

        <div className="mt-8">
          <p className="text-xl text-gray-600 font-open-sans">
            Наш путь к мечте завершается здесь 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
