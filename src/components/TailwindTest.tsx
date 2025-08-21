import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="p-8 bg-blue-500 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS Başarıyla Kuruldu!</h1>
      <p className="text-lg">
        Bu komponent Tailwind CSS sınıflarını kullanıyor. Eğer bu metni mavi bir arka plan üzerinde beyaz yazı olarak görüyorsanız, 
        Tailwind CSS başarıyla çalışıyor demektir.
      </p>
      <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors">
        Test Butonu
      </button>
    </div>
  );
};

export default TailwindTest;
