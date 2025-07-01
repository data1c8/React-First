import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Car, Train, Bus } from 'lucide-react';

const Offices = () => {
  const offices = [
    {
      id: 1,
      name: 'Центральный офис',
      address: 'г. Москва, ул. Примерная, д. 123, офис 45',
      metro: 'Тверская',
      metroTime: '5 минут пешком',
      phone: '+7 (495) 123-45-67',
      workHours: 'Пн-Вс: 9:00-21:00',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Главный офис компании с полным спектром услуг',
      services: [
        'Ремонт компьютеров и ноутбуков',
        'Восстановление данных',
        'Диагностика техники',
        'Продажа запчастей'
      ],
      transport: [
        { type: 'metro', name: 'м. Тверская', time: '5 мин пешком' },
        { type: 'bus', name: 'Автобус 15, 25', time: 'остановка рядом' },
        { type: 'car', name: 'Парковка', time: 'бесплатная' }
      ],
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 2,
      name: 'Филиал на юге',
      address: 'г. Москва, ул. Южная, д. 456, офис 12',
      metro: 'Нагорная',
      metroTime: '3 минуты пешком',
      phone: '+7 (495) 987-65-43',
      workHours: 'Пн-Вс: 10:00-20:00',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Удобный филиал для жителей южных районов',
      services: [
        'Ремонт ноутбуков',
        'Чистка от пыли',
        'Установка ПО',
        'Консультации'
      ],
      transport: [
        { type: 'metro', name: 'м. Нагорная', time: '3 мин пешком' },
        { type: 'bus', name: 'Автобус 196, 224', time: 'остановка рядом' },
        { type: 'car', name: 'Парковка', time: 'платная' }
      ],
      coordinates: { lat: 55.6736, lng: 37.6086 }
    }
  ];

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'metro': return Train;
      case 'bus': return Bus;
      case 'car': return Car;
      default: return MapPin;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Наши офисы
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Два удобных офиса в разных районах Москвы для вашего комфорта
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {offices.map((office) => (
              <div key={office.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="order-2 lg:order-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600 flex items-center">
                        <MapPin className="h-6 w-6 mr-2" />
                        {office.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Address */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Адрес:</h3>
                        <p className="text-gray-600">{office.address}</p>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            Телефон:
                          </h3>
                          <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">
                            {office.phone}
                          </a>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Режим работы:
                          </h3>
                          <p className="text-gray-600">{office.workHours}</p>
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Услуги:</h3>
                        <ul className="text-gray-600 space-y-1">
                          {office.services.map((service, idx) => (
                            <li key={idx}>• {service}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Transport */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Как добраться:</h3>
                        <div className="space-y-2">
                          {office.transport.map((transport, idx) => {
                            const IconComponent = getTransportIcon(transport.type);
                            return (
                              <div key={idx} className="flex items-center space-x-2">
                                <IconComponent className="h-4 w-4 text-blue-600" />
                                <span className="text-gray-600">
                                  {transport.name} — {transport.time}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="flex-1">
                          Записаться на прием
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Построить маршрут
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="order-1 lg:order-2">
                  <img 
                    src={office.image} 
                    alt={office.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  <p className="text-gray-600 mt-4 text-center">
                    {office.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Расположение на карте
            </h2>
            <p className="text-xl text-gray-600">
              Выберите ближайший к вам офис
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Здесь будет интерактивная карта с отметками офисов</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <Card key={office.id} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {office.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{office.address}</p>
                  <div className="flex justify-center space-x-4">
                    <Button size="sm">
                      Показать на карте
                    </Button>
                    <Button size="sm" variant="outline">
                      Маршрут
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не можете добраться до офиса?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Закажите выезд мастера на дом — бесплатно в пределах МКАД
          </p>
          <Button size="lg" variant="secondary">
            Вызвать мастера на дом
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Offices;