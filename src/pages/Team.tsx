import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Award } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Алексей Петров',
      position: 'Главный инженер',
      experience: '12 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Ремонт материнских плат, восстановление данных',
      education: 'МГТУ им. Баумана, Радиоэлектроника',
      certifications: ['Сертификат Intel', 'Сертификат AMD'],
      email: 'a.petrov@repair-service.ru',
      phone: '+7 (495) 123-45-67'
    },
    {
      name: 'Мария Сидорова',
      position: 'Специалист по ноутбукам',
      experience: '8 лет опыта',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Замена экранов, ремонт клавиатур, диагностика',
      education: 'МЭИ, Компьютерные системы',
      certifications: ['Сертификат HP', 'Сертификат Dell'],
      email: 'm.sidorova@repair-service.ru',
      phone: '+7 (495) 123-45-68'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Эксперт по восстановлению данных',
      experience: '10 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Восстановление с поврежденных носителей, RAID массивы',
      education: 'МИФИ, Информационная безопасность',
      certifications: ['Сертификат Seagate', 'Сертификат Western Digital'],
      email: 'd.kozlov@repair-service.ru',
      phone: '+7 (495) 123-45-69'
    },
    {
      name: 'Анна Волкова',
      position: 'Специалист по сетевому оборудованию',
      experience: '6 лет опыта',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Настройка сетей, роутеры, серверное оборудование',
      education: 'МТУСИ, Сети связи',
      certifications: ['Cisco CCNA', 'Mikrotik MTCNA'],
      email: 'a.volkova@repair-service.ru',
      phone: '+7 (495) 123-45-70'
    },
    {
      name: 'Сергей Иванов',
      position: 'Мастер по принтерам и МФУ',
      experience: '7 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Ремонт принтеров, заправка картриджей, настройка печати',
      education: 'Колледж связи, Техническое обслуживание',
      certifications: ['Сертификат Canon', 'Сертификат Epson'],
      email: 's.ivanov@repair-service.ru',
      phone: '+7 (495) 123-45-71'
    },
    {
      name: 'Елена Смирнова',
      position: 'Менеджер по работе с клиентами',
      experience: '5 лет опыта',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Консультации, прием заявок, координация работ',
      education: 'МГУ, Менеджмент',
      certifications: ['Сертификат по клиентскому сервису'],
      email: 'e.smirnova@repair-service.ru',
      phone: '+7 (495) 123-45-72'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Наша команда
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Познакомьтесь с профессионалами, которые решают ваши технические проблемы
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
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
                    <p className="text-gray-600 mb-4">
                      {member.experience}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Специализация:</h4>
                      <p className="text-sm text-gray-600">{member.specialization}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Образование:</h4>
                      <p className="text-sm text-gray-600">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        Сертификаты:
                      </h4>
                      <ul className="text-sm text-gray-600">
                        {member.certifications.map((cert, idx) => (
                          <li key={idx}>• {cert}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center space-x-2 mb-2">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href={`mailto:${member.email}`} className="text-sm text-blue-600 hover:underline">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <a href={`tel:${member.phone}`} className="text-sm text-blue-600 hover:underline">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;