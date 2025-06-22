import { Camera, Users, Heart } from "lucide-react";

const PhotoGallery = () => {
  const placeholderPhotos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Выпускник ${i + 1}`,
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=300&h=300&fit=crop&crop=face`,
  }));

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Camera size={32} className="text-purple-600" />
            </div>
          </div>

          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши выпускники
          </h2>

          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
            Каждое лицо — это история успеха, каждая улыбка — воспоминание на
            всю жизнь
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {placeholderPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <Users size={40} className="text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-open-sans text-gray-700">
                    {photo.name}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-open-sans text-sm font-medium">
                    {photo.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Heart size={24} className="text-purple-600" />
            </div>
            <p className="font-open-sans text-gray-700 text-lg leading-relaxed">
              <strong>11 лет вместе</strong>
              <br />
              От первого звонка до выпускного бала — мы прошли этот путь рука об
              руку
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
