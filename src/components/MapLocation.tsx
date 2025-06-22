import { MapPin, Navigation } from "lucide-react";

const MapLocation = () => {
  const schoolAddress =
    "Средняя общеобразовательная школа c. Авдеевка Кировского района";

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Место проведения
          </h2>
          <p className="text-lg text-gray-600 font-open-sans">
            Найдите нас на карте
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-purple-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Карта */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin size={48} className="text-purple-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">
                    Карта местоположения
                  </p>
                  <p className="text-sm text-gray-500">с. Авдеевка</p>
                </div>
              </div>
            </div>

            {/* Информация */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={24}
                  className="text-purple-600 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-2">
                    Адрес
                  </h3>
                  <p className="text-gray-600 font-open-sans leading-relaxed">
                    {schoolAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Navigation
                  size={24}
                  className="text-purple-600 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-2">
                    Как добраться
                  </h3>
                  <p className="text-gray-600 font-open-sans leading-relaxed">
                    Школа расположена в центре села Авдеевка. Удобный подъезд на
                    автомобиле и общественном транспорте.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                <p className="text-sm text-gray-600 font-open-sans">
                  💡 <strong>Совет:</strong> Приезжайте заранее, чтобы найти
                  удобное место для парковки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
