import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Star, CheckCircle } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      icon: Award,
      title: 'Лучший сервис 2023',
      description: 'Награда от ассоциации IT-сервисов',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'ISO 9001:2015',
      description: 'Сертификат качества услуг',
      color: 'text-blue-500'
    },
    {
      icon: Star,
      title: 'Выбор клиентов',
      description: 'Рейтинг 4.9/5 на Яндекс.Картах',
      color: 'text-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Авторизованный сервис',
      description: 'Официальный партнер производителей',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Сертификаты и награды
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наше качество подтверждено официальными документами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8">
                  <IconComponent className={`h-16 w-16 ${cert.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;