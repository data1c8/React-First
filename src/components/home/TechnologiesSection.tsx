import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, HardDrive, Monitor, Smartphone } from 'lucide-react';

const TechnologiesSection = () => {
  const technologies = [
    {
      icon: Cpu,
      title: 'Современное оборудование',
      description: 'Профессиональные паяльные станции и диагностическое оборудование'
    },
    {
      icon: HardDrive,
      title: 'Восстановление данных',
      description: 'Специализированное ПО для восстановления информации'
    },
    {
      icon: Monitor,
      title: 'Тестирование компонентов',
      description: 'Полная диагностика всех узлов и компонентов'
    },
    {
      icon: Smartphone,
      title: 'Мобильная диагностика',
      description: 'Выездная служба с портативным оборудованием'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Современные технологии
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Используем передовое оборудование для точной диагностики и качественного ремонта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
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

export default TechnologiesSection;