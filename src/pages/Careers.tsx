import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const Careers = () => {
  const vacancies = [
    {
      title: 'Мастер по ремонту ноутбуков',
      department: 'Технический отдел',
      location: 'Москва, Центральный офис',
      type: 'Полная занятость',
      salary: '80 000 - 120 000 ₽',
      experience: 'От 3 лет',
      description: 'Ищем опытного мастера для ремонта ноутбуков различных марок',
      requirements: [
        'Опыт ремонта ноутбуков от 3 лет',
        'Знание схемотехники',
        'Умение работать с паяльным оборудованием',
        'Ответственность и внимательность'
      ],
      responsibilities: [
        'Диагностика неисправностей ноутбуков',
        'Ремонт материнских плат',
        'Замена компонентов',
        'Ведение документации'
      ]
    },
    {
      title: 'Специалист по восстановлению данных',
      department: 'Технический отдел',
      location: 'Москва, Центральный офис',
      type: 'Полная занятость',
      salary: '90 000 - 150 000 ₽',
      experience: 'От 5 лет',
      description: 'Требуется эксперт по восстановлению данных с различных носителей',
      requirements: [
        'Опыт восстановления данных от 5 лет',
        'Знание файловых систем',
        'Опыт работы с RAID массивами',
        'Знание специализированного ПО'
      ],
      responsibilities: [
        'Восстановление данных с HDD/SSD',
        'Работа с поврежденными носителями',
        'Консультации клиентов',
        'Составление отчетов'
      ]
    },
    {
      title: 'Менеджер по работе с клиентами',
      department: 'Отдел продаж',
      location: 'Москва, Филиал на юге',
      type: 'Полная занятость',
      salary: '60 000 - 90 000 ₽',
      experience: 'От 2 лет',
      description: 'Ищем активного менеджера для работы с клиентами',
      requirements: [
        'Опыт работы с клиентами от 2 лет',
        'Коммуникабельность',
        'Знание основ IT',
        'Грамотная речь'
      ],
      responsibilities: [
        'Прием заявок от клиентов',
        'Консультации по услугам',
        'Ведение клиентской базы',
        'Контроль качества обслуживания'
      ]
    },
    {
      title: 'Курьер-диагност',
      department: 'Служба доставки',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '50 000 - 70 000 ₽',
      experience: 'Без опыта',
      description: 'Требуется курьер для выездной диагностики и доставки техники',
      requirements: [
        'Наличие автомобиля',
        'Водительские права категории B',
        'Базовые знания компьютерной техники',
        'Пунктуальность'
      ],
      responsibilities: [
        'Выезд к клиентам для диагностики',
        'Доставка техники в сервис',
        'Первичная консультация клиентов',
        'Ведение документооборота'
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда + премии за качество'
    },
    {
      icon: Users,
      title: 'Дружный коллектив',
      description: 'Работа в команде профессионалов'
    },
    {
      icon: Clock,
      title: 'Гибкий график',
      description: 'Возможность удаленной работы для некоторых позиций'
    },
    {
      icon: MapPin,
      title: 'Удобное расположение',
      description: 'Офисы рядом с метро'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Карьера в РемонтСервис
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов и развивайтесь вместе с нами
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему стоит работать с нами
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="pt-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Открытые вакансии
            </h2>
            <p className="text-xl text-gray-600">
              Найдите подходящую позицию и станьте частью нашей команды
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                  <CardDescription>{vacancy.description}</CardDescription>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{vacancy.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{vacancy.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{vacancy.salary}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Требования:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {vacancy.requirements.map((req, idx) => (
                          <li key={idx}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Обязанности:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {vacancy.responsibilities.map((resp, idx) => (
                          <li key={idx}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full mt-6">
                      Откликнуться на вакансию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не нашли подходящую вакансию?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
          </p>
          <Button size="lg" variant="secondary">
            Отправить резюме
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;