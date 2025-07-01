import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'ASUS', logo: 'https://via.placeholder.com/150x80/f0f0f0/666?text=ASUS' },
    { name: 'HP', logo: 'https://via.placeholder.com/150x80/f0f0f0/666?text=HP' },
    { name: 'Dell', logo: 'https://via.placeholder.com/150x80/f0f0f0/666?text=Dell' },
    { name: 'Lenovo', logo: 'https://via.placeholder.com/150x80/f0f0f0/666?text=Lenovo' },
    { name: 'Acer', logo: 'https://via.placeholder.com/150x80/f0f0f0/666?text=Acer' },
    { name: 'MSI', logo: 'https://via.placeholder.com/150x80/f0f0f0/666?text=MSI' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши партнеры
          </h2>
          <p className="text-xl text-gray-600">
            Мы работаем с ведущими производителями техники
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;