import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const CaseStudiesSection = () => {
  const cases = [
    {
      title: 'Восстановление данных с поврежденного SSD',
      problem: 'Клиент случайно удалил важные документы с SSD диска',
      solution: 'Использовали специализированное ПО для восстановления',
      result: 'Восстановлено 95% данных за 2 дня',
      client: 'ООО "Строительная компания"'
    },
    {
      title: 'Ремонт игрового ноутбука',
      problem: 'Перегрев и выключение во время игр',
      solution: 'Полная чистка системы охлаждения и замена термопасты',
      result: 'Температура снижена на 20°C, стабильная работа',
      client: 'Частный клиент'
    },
    {
      title: 'Настройка корпоративной сети',
      problem: 'Медленная работа сети в офисе на 50 сотрудников',
      solution: 'Модернизация сетевого оборудования и настройка',
      result: 'Скорость сети увеличена в 3 раза',
      client: 'IT-компания'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Истории успеха
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные случаи из нашей практики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {caseStudy.client}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1">Проблема:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Решение:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Результат:
                    </h4>
                    <p className="text-sm text-gray-600">{caseStudy.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;