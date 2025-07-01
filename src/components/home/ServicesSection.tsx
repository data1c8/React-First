import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Laptop, HardDrive, Shield, Wrench, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Ремонт компьютеров',
      description: 'Диагностика и ремонт настольных ПК любой сложности',
      price: 'от 1500 ₽',
      link: '/services/computer-repair'
    },
    {
      icon: Laptop,
      title: 'Ремонт ноутбуков',
      description: 'Замена экранов, клавиатур, материнских плат',
      price: 'от 2000 ₽',
      link: '/services/laptop-repair'
    },
    {
      icon: HardDrive,
      title: 'Восстановление данных',
      description: 'Восстановление файлов с поврежденных носителей',
      price: 'от 3000 ₽',
      link: '/services/data-recovery'
    },
    {
      icon: Shield,
      title: 'Удаление вирусов',
      description: 'Полная очистка от вредоносного ПО',
      price: 'от 1000 ₽',
      link: '/services/virus-removal'
    },
    {
      icon: Wrench,
      title: 'Модернизация ПК',
      description: 'Апгрейд комплектующих для повышения производительности',
      price: 'от 2500 ₽',
      link: '/services/upgrade'
    },
    {
      icon: Smartphone,
      title: 'Ремонт планшетов',
      description: 'Ремонт планшетов и мобильных устройств',
      price: 'от 1800 ₽',
      link: '/services/tablet-repair'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и обслуживанию компьютерной техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-blue-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;