import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Users, Award, Wrench, Phone } from 'lucide-react';

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Быстрый ремонт',
      description: 'Большинство ремонтов выполняем в день обращения'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды работ до 1 года'
    },
    {
      icon: Users,
      title: 'Опытные мастера',
      description: 'Команда сертифицированных специалистов с опытом 10+ лет'
    },
    {
      icon: Award,
      title: 'Оригинальные запчасти',
      description: 'Используем только качественные комплектующие'
    },
    {
      icon: Wrench,
      title: 'Современное оборудование',
      description: 'Профессиональные инструменты для точной диагностики'
    },
    {
      icon: Phone,
      title: 'Выезд на дом',
      description: 'Бесплатный выезд мастера в пределах МКАД'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем качественные услуги ремонта с индивидуальным подходом к каждому клиенту
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
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

export default WhyChooseUsSection;