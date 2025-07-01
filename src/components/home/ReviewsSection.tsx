import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличный сервис! Быстро отремонтировали мой ноутбук, заменили экран. Работают профессионально, цены адекватные.',
      date: '15 января 2024'
    },
    {
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Обратился с проблемой компьютера - не включался. Мастер приехал на дом, быстро нашел проблему и устранил. Рекомендую!',
      date: '8 января 2024'
    },
    {
      name: 'Елена Козлова',
      rating: 5,
      text: 'Восстанавливали данные с жесткого диска. Думала, что все потеряно, но специалисты смогли восстановить 95% файлов. Спасибо!',
      date: '3 января 2024'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 1000 довольных клиентов доверили нам ремонт своей техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Средняя оценка: 4.9/5
            </h3>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">
              На основе 247 отзывов на Яндекс.Картах и Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;