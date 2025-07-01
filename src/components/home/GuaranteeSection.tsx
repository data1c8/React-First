import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, RefreshCw, CheckCircle, Clock } from 'lucide-react';

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Гарантия до 1 года',
      description: 'На все виды работ и установленные запчасти'
    },
    {
      icon: RefreshCw,
      title: 'Бесплатное устранение',
      description: 'Если проблема повторится в гарантийный период'
    },
    {
      icon: CheckCircle,
      title: 'Качественные запчасти',
      description: 'Используем только оригинальные комплектующие'
    },
    {
      icon: Clock,
      title: 'Быстрое реагирование',
      description: 'Гарантийное обслуживание в течение 24 часов'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши гарантии
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы уверены в качестве наших услуг и предоставляем расширенные гарантии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600">
                    {guarantee.description}
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

export default GuaranteeSection;