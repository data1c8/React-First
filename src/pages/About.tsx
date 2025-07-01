import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'лет опыта' },
    { number: '5000+', label: 'довольных клиентов' },
    { number: '15', label: 'специалистов' },
    { number: '24/7', label: 'поддержка' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Профессионализм',
      description: 'Наши мастера имеют сертификаты и постоянно повышают квалификацию'
    },
    {
      icon: Heart,
      title: 'Забота о клиентах',
      description: 'Индивидуальный подход к каждому клиенту и его потребностям'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Гарантия на все виды работ и использование качественных запчастей'
    },
    {
      icon: Clock,
      title: 'Оперативность',
      description: 'Быстрое реагирование на заявки и выполнение работ в срок'
    }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Главный инженер',
      experience: '12 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Мария Сидорова',
      position: 'Специалист по ноутбукам',
      experience: '8 лет опыта',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Эксперт по восстановлению данных',
      experience: '10 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              О компании РемонтСервис
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Мы — команда профессионалов с многолетним опытом в сфере ремонта компьютерной техники. 
              Наша миссия — обеспечить надежную работу вашей техники.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Компания РемонтСервис была основана в 2014 году группой энтузиастов, 
                  которые решили изменить подход к ремонту компьютерной техники в Москве.
                </p>
                <p>
                  За годы работы мы выросли от небольшой мастерской до крупного сервисного 
                  центра с командой из 15 специалистов и двумя офисами в разных районах города.
                </p>
                <p>
                  Сегодня мы гордимся тем, что помогли более чем 5000 клиентам решить 
                  проблемы с их техникой, и продолжаем развиваться, внедряя новые 
                  технологии и методы ремонта.
                </p>
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="pt-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с нашими ведущими специалистами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Сертификаты и награды
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Лучший сервис 2023</h3>
                <p className="text-gray-600">Награда от ассоциации IT-сервисов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600">Сертификат качества услуг</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <Users className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Выбор клиентов</h3>
                <p className="text-gray-600">Рейтинг 4.9/5 на Яндекс.Картах</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;