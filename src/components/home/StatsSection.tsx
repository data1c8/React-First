import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, Award, Shield } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Довольных клиентов',
      description: 'За 10 лет работы'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Поддержка',
      description: 'Круглосуточно'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Успешных ремонтов',
      description: 'С первого раза'
    },
    {
      icon: Shield,
      number: '1 год',
      label: 'Гарантия',
      description: 'На все работы'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;