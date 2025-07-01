import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Prices = () => {
  const computerRepair = [
    { service: 'Диагностика компьютера', price: 'Бесплатно' },
    { service: 'Чистка от пыли', price: '1500 ₽' },
    { service: 'Замена термопасты', price: '1000 ₽' },
    { service: 'Установка Windows', price: '2000 ₽' },
    { service: 'Замена блока питания', price: '1500 ₽' },
    { service: 'Замена материнской платы', price: 'от 3000 ₽' },
    { service: 'Замена процессора', price: 'от 2500 ₽' },
    { service: 'Установка оперативной памяти', price: '800 ₽' },
  ];

  const laptopRepair = [
    { service: 'Диагностика ноутбука', price: 'Бесплатно' },
    { service: 'Чистка системы охлаждения', price: '2500 ₽' },
    { service: 'Замена экрана 15.6"', price: 'от 8000 ₽' },
    { service: 'Замена клавиатуры', price: 'от 3000 ₽' },
    { service: 'Замена батареи', price: 'от 4000 ₽' },
    { service: 'Ремонт разъема питания', price: 'от 3500 ₽' },
    { service: 'Замена жесткого диска', price: '1500 ₽' },
    { service: 'Ремонт материнской платы', price: 'от 5000 ₽' },
  ];

  const otherServices = [
    { service: 'Удаление вирусов', price: '1500 ₽' },
    { service: 'Восстановление данных (простое)', price: 'от 3000 ₽' },
    { service: 'Восстановление данных (сложное)', price: 'от 8000 ₽' },
    { service: 'Настройка Wi-Fi роутера', price: '1500 ₽' },
    { service: 'Установка программ', price: '500 ₽/шт' },
    { service: 'Настройка принтера', price: '1200 ₽' },
    { service: 'Выезд мастера (в пределах МКАД)', price: 'Бесплатно' },
    { service: 'Срочный ремонт (доплата)', price: '+50%' },
  ];

  const packages = [
    {
      title: 'Базовый',
      price: '3500 ₽',
      description: 'Для простых задач',
      features: [
        'Диагностика',
        'Чистка от пыли',
        'Установка ОС',
        'Базовая настройка',
        'Гарантия 3 месяца'
      ]
    },
    {
      title: 'Стандартный',
      price: '6500 ₽',
      description: 'Популярный выбор',
      features: [
        'Все из базового',
        'Замена термопасты',
        'Установка драйверов',
        'Настройка антивируса',
        'Гарантия 6 месяцев'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: '9500 ₽',
      description: 'Максимальный сервис',
      features: [
        'Все из стандартного',
        'Оптимизация системы',
        'Настройка программ',
        'Обучение пользователя',
        'Гарантия 1 год'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Цены на услуги
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат. Бесплатная диагностика и выезд мастера
            </p>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Комплексные пакеты
            </h2>
            <p className="text-xl text-gray-600">
              Выгодные предложения для полного обслуживания вашей техники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-blue-500 border-2' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600 mt-4">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                    Заказать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Prices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Подробный прайс-лист
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Computer Repair */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Ремонт компьютеров</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {computerRepair.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-gray-600">{item.service}</span>
                      <span className="font-semibold text-blue-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Laptop Repair */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Ремонт ноутбуков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {laptopRepair.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-gray-600">{item.service}</span>
                      <span className="font-semibold text-blue-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Other Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Дополнительные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {otherServices.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-gray-600">{item.service}</span>
                      <span className="font-semibold text-blue-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Важная информация</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Что входит в стоимость:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Бесплатная диагностика</li>
                    <li>• Работа мастера</li>
                    <li>• Гарантия на выполненные работы</li>
                    <li>• Бесплатный выезд в пределах МКАД</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Дополнительно оплачивается:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Стоимость запчастей</li>
                    <li>• Выезд за МКАД (30 ₽/км)</li>
                    <li>• Срочный ремонт (+50% к стоимости)</li>
                    <li>• Работа в выходные и праздники (+30%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Prices;