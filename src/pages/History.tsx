import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2014',
      title: 'Основание компании',
      description: 'Алексей Петров и Мария Сидорова открыли небольшую мастерскую в центре Москвы',
      icon: Calendar
    },
    {
      year: '2015',
      title: 'Первые 100 клиентов',
      description: 'Достигли отметки в 100 довольных клиентов и получили первые положительные отзывы',
      icon: Users
    },
    {
      year: '2016',
      title: 'Расширение команды',
      description: 'Приняли на работу специалиста по восстановлению данных Дмитрия Козлова',
      icon: TrendingUp
    },
    {
      year: '2017',
      title: 'Первая награда',
      description: 'Получили награду "Лучший сервисный центр года" от ассоциации IT-компаний',
      icon: Award
    },
    {
      year: '2018',
      title: 'Открытие второго офиса',
      description: 'Открыли филиал на юге Москвы для удобства клиентов',
      icon: TrendingUp
    },
    {
      year: '2019',
      title: '1000 клиентов',
      description: 'Преодолели отметку в 1000 обслуженных клиентов',
      icon: Users
    },
    {
      year: '2020',
      title: 'Онлайн-сервисы',
      description: 'Запустили онлайн-консультации и удаленную диагностику',
      icon: TrendingUp
    },
    {
      year: '2021',
      title: 'Сертификация ISO',
      description: 'Получили сертификат качества ISO 9001:2015',
      icon: Award
    },
    {
      year: '2022',
      title: 'Команда из 15 человек',
      description: 'Расширили команду до 15 специалистов различных направлений',
      icon: Users
    },
    {
      year: '2023',
      title: '5000 клиентов',
      description: 'Достигли отметки в 5000 довольных клиентов',
      icon: Users
    },
    {
      year: '2024',
      title: 'Новые технологии',
      description: 'Внедрили современное диагностическое оборудование и AI-диагностику',
      icon: TrendingUp
    }
  ];

  const milestones = [
    { number: '10+', label: 'лет на рынке' },
    { number: '5000+', label: 'довольных клиентов' },
    { number: '15', label: 'специалистов' },
    { number: '2', label: 'офиса в Москве' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              История нашей компании
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Путь от небольшой мастерской до ведущего сервисного центра Москвы
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{milestone.number}</div>
                <div className="text-gray-600">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наш путь развития
            </h2>
            <p className="text-xl text-gray-600">
              Ключевые моменты в истории РемонтСервис
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {timeline.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <Card className="ml-8 flex-1">
                        <CardContent className="pt-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                            <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                          </div>
                          <p className="text-gray-600">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наша миссия и видение
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Миссия</h3>
                  <p className="text-gray-600">
                    Обеспечить надежную и качественную работу компьютерной техники наших клиентов, 
                    предоставляя профессиональные услуги ремонта и технической поддержки.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Видение</h3>
                  <p className="text-gray-600">
                    Стать ведущим сервисным центром в России, известным своим качеством, 
                    инновационными решениями и исключительным сервисом.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Ценности</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Качество превыше всего</li>
                    <li>• Честность и прозрачность</li>
                    <li>• Постоянное развитие</li>
                    <li>• Забота о клиентах</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Наша команда" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;