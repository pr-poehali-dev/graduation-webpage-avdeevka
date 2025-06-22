const InvitationCard = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-b from-green-100 to-pink-100 flex flex-col justify-center items-center">
              <div className="text-6xl font-bold text-gray-600 mb-2">28</div>
              <div className="text-4xl font-bold text-gray-600 mb-2">06</div>
              <div className="text-4xl font-bold text-gray-600">25</div>
            </div>

            {/* Основной контент */}
            <div className="ml-32 md:ml-40">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-700 text-center mb-8">
                РАДЫ ПРИГЛАСИТЬ ВАС
                <br />
                НА ВЫПУСКНОЙ
              </h2>

              {/* Фото выпускниц */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-80 h-96 bg-gray-200 rounded-full overflow-hidden shadow-xl">
                    <img
                      src="https://cdn.poehali.dev/files/51c45493-519c-425d-b31d-a03e437c7566.jpg"
                      alt="Выпускницы 11-1 класса"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Декоративные листочки */}
                  <div className="absolute -top-4 -left-4 text-2xl">🌿</div>
                  <div className="absolute top-8 -right-6 text-xl">🌸</div>
                  <div className="absolute -bottom-2 -left-8 text-lg">🍃</div>
                  <div className="absolute bottom-12 -right-4 text-xl">💐</div>
                </div>
              </div>

              {/* Информация о мероприятии */}
              <div className="text-center space-y-4">
                <p className="text-lg text-gray-600 font-open-sans">
                  «Средняя общеобразовательная школа с.
                  <br />
                  Авдеевка» Кировского района
                  <br />
                  ул.Центральная, 18
                </p>

                <div className="bg-purple-50 rounded-2xl p-6 inline-block">
                  <p className="text-xl font-semibold text-purple-800">
                    Начало: 16:00
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-montserrat text-4xl font-bold text-purple-600 italic">
                    11-1 класс
                  </h3>
                </div>
              </div>
            </div>

            {/* Декоративные элементы по краям */}
            <div className="absolute top-8 right-8 text-3xl opacity-50">🌿</div>
            <div className="absolute bottom-8 right-12 text-2xl opacity-50">
              🌸
            </div>
            <div className="absolute top-1/2 right-4 text-xl opacity-30">
              🍃
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;
