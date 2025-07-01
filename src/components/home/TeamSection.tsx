import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const team = [
    {
      name: 'Алексей Петров',
      position: 'Главный инженер',
      experience: '12 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Ремонт материнских плат'
    },
    {
      name: 'Мария Сидорова',
      position: 'Специалист по ноутбукам',
      experience: '8 лет опыта',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Замена экранов и клавиатур'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Эксперт по восстановлению данных',
      experience: '10 лет опыта',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: 'Восстановление с поврежденных носителей'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наша команда экспертов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с нашими ведущими специалистами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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
                <p className="text-gray-600 mb-2">
                  {member.experience}
                </p>
                <p className="text-sm text-gray-500">
                  {member.specialization}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/team">Вся команда</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;