import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Laptop, HardDrive, Shield, Wrench, Smartphone, Printer, Wifi } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Ремонт компьютеров',
      description: 'Диагностика и ремонт настольных ПК, замена комплектующих, чистка от пыли',
      features: ['Замена материнской платы', 'Ремонт блока питания', 'Установка ОС', 'Чистка от пыли'],
      price: 'от 1500 ₽',
      link: '/services/computer-repair'
    },
    {
      icon: Laptop,
      title: 'Ремонт ноутбуков',
      description: 'Замена экранов, клавиатур, материнских плат, чистка системы охлаждения',
      features: ['Замена экрана', 'Ремонт клавиатуры', 'Замена батареи', 'Чистка охлаждения'],
      price: 'от 2000 ₽',
      link: '/services/laptop-repair'
    },
    {
      icon: HardDrive,
      title: 'Восстановление данных',
      description: 'Восстановление файлов с поврежденных жестких дисков и флешек',
      features: ['Восстановление с HDD', 'Восстановление с SSD', 'Восстановление с флешек', 'Восстановление RAID'],
      price: 'от 3000 ₽',
      link: '/services/data-recovery'
    },
    {
      icon: Shield,
      title: 'Удаление вирусов',
      description: 'Полная очистка от вредоносного ПО, установка антивируса',
      features: ['Удаление вирусов', 'Установка антивируса', 'Настройка брандмауэра', 'Обучение безопасности'],
      price: 'от 1000 ₽',
      link: '/services/virus-removal'
    },
    {
      icon: Wrench,
      title: 'Модернизация ПК',
      description: 'Апгрейд комплектующих для повышения производительности',
      features: ['Увеличение RAM', 'Замена процессора', 'Установка SSD', 'Замена видеокарты'],
      price: 'от 2500 ₽',
      link: '/services/upgrade'
    },
    {
      icon: Smartphone,
      title: 'Ремонт планшетов',
      description: 'Ремонт планшетов и мобильных устройств',
      features: ['Замена экрана', 'Ремонт разъемов', 'Замена батареи', 'Восстановление ПО'],
      price: 'от 1800 ₽',
      link: '/services/tablet-repair'
    },
    {
      icon: Printer,
      title: 'Ремонт принтеров',
      description: 'Обслуживание и ремонт принтеров, МФУ, заправка картриджей',
      features: ['Ремонт принтеров', 'Заправка картриджей', 'Чистка печатающих головок', 'Настройка печати'],
      price: 'от 1200 ₽',
      link: '/services/printer-repair'
    },
    {
      icon: Wifi,
      title: 'Настройка сетей',
      description: 'Настройка домашних и офисных сетей, Wi-Fi, интернета',
      features: ['Настройка Wi-Fi', 'Настройка роутера', 'Создание домашней сети', 'Настройка VPN'],
      price: 'от 1500 ₽',
      link: '/services/network-setup'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <p className="text-blue-600 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={service.link}>Заказать услугу</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не нашли нужную услугу?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами, и мы поможем решить любую проблему с вашей техникой
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;