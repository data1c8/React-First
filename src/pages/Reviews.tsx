import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Quote, ThumbsUp, Calendar, User } from 'lucide-react';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    text: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличный сервис! Быстро отремонтировали мой ноутбук, заменили экран. Работают профессионально, цены адекватные. Мастер приехал на дом, все объяснил понятно. Рекомендую!',
      date: '15 января 2024',
      service: 'Замена экрана ноутбука',
      helpful: 12
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Обратился с проблемой компьютера - не включался. Мастер приехал на дом, быстро нашел проблему (сгорел блок питания) и устранил. Работа заняла 2 часа. Очень доволен!',
      date: '8 января 2024',
      service: 'Ремонт компьютера',
      helpful: 8
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 5,
      text: 'Восстанавливали данные с жесткого диска. Думала, что все потеряно, но специалисты смогли восстановить 95% файлов. Работа заняла 3 дня, но результат превзошел ожидания. Спасибо!',
      date: '3 января 2024',
      service: 'Восстановление данных',
      helpful: 15
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      rating: 4,
      text: 'Чистили ноутбук от пыли и меняли термопасту. Работу выполнили качественно, температура процессора снизилась значительно. Единственный минус - пришлось ждать мастера дольше обещанного.',
      date: '28 декабря 2023',
      service: 'Чистка ноутбука',
      helpful: 6
    },
    {
      id: 5,
      name: 'Ольга Смирнова',
      rating: 5,
      text: 'Устанавливали Windows и настраивали программы для работы. Мастер все сделал быстро и качественно, объяснил как пользоваться. Цена приятно удивила - дешевле чем в других местах.',
      date: '20 декабря 2023',
      service: 'Установка ПО',
      helpful: 9
    },
    {
      id: 6,
      name: 'Александр Иванов',
      rating: 5,
      text: 'Ремонтировали материнскую плату ноутбука. Сложный случай, но справились! Работа заняла 4 дня, но зато ноутбук работает как новый. Гарантию дали на год.',
      date: '15 декабря 2023',
      service: 'Ремонт материнской платы',
      helpful: 11
    },
    {
      id: 7,
      name: 'Мария Федорова',
      rating: 5,
      text: 'Удаляли вирусы с компьютера и настраивали антивирус. Работу выполнили на дому, все объяснили и показали. Теперь компьютер работает быстро и стабильно.',
      date: '10 декабря 2023',
      service: 'Удаление вирусов',
      helpful: 7
    },
    {
      id: 8,
      name: 'Сергей Петров',
      rating: 4,
      text: 'Меняли клавиатуру на ноутбуке. Работу выполнили качественно, но запчасть пришлось ждать 2 дня. В целом доволен результатом.',
      date: '5 декабря 2023',
      service: 'Замена клавиатуры',
      helpful: 4
    }
  ];

  const stats = [
    { label: 'Средняя оценка', value: '4.9', icon: Star },
    { label: 'Всего отзывов', value: '247', icon: Quote },
    { label: 'Положительных', value: '98%', icon: ThumbsUp }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review:', newReview);
    // Handle review submission
    setNewReview({ name: '', email: '', rating: 5, text: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Узнайте, что говорят о нас наши клиенты
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="pt-8">
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reviews List */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Отзывы наших клиентов</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <User className="h-5 w-5 text-gray-400" />
                            <span className="font-semibold text-gray-900">{review.name}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{review.date}</span>
                            </div>
                            <span className="text-blue-600">{review.service}</span>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <Quote className="h-6 w-6 text-blue-600 mb-2" />
                      <p className="text-gray-600 mb-4">"{review.text}"</p>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Полезно ({review.helpful})
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Review Form */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={newReview.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={newReview.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Оценка
                      </label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setNewReview({...newReview, rating})}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`h-6 w-6 ${rating <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваш отзыв *
                      </label>
                      <Textarea
                        name="text"
                        value={newReview.text}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Расскажите о вашем опыте..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Отправить отзыв
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;