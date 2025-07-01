import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Диагностика компьютера',
      description: 'Полная диагностика всех компонентов компьютера',
      price: 'Бесплатно',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Диагностика'
    },
    {
      id: 2,
      title: 'Замена экрана ноутбука 15.6"',
      description: 'Замена разбитого экрана ноутбука с диагональю 15.6 дюймов',
      price: 'от 8000 ₽',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Ремонт ноутбуков'
    },
    {
      id: 3,
      title: 'Восстановление данных (простое)',
      description: 'Восстановление случайно удаленных файлов',
      price: 'от 3000 ₽',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Восстановление данных'
    },
    {
      id: 4,
      title: 'Чистка от пыли и замена термопасты',
      description: 'Полная чистка системы охлаждения и замена термопасты',
      price: '2500 ₽',
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Обслуживание'
    },
    {
      id: 5,
      title: 'Установка Windows + драйверы',
      description: 'Установка операционной системы и всех необходимых драйверов',
      price: '2000 ₽',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Программное обеспечение'
    }
  ]);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Избранные услуги
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Услуги, которые вас заинтересовали
            </p>
          </div>
        </div>
      </section>

      {/* Favorites Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {favorites.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Избранное ({favorites.length})
                </h2>
                <Button 
                  variant="outline" 
                  onClick={clearAllFavorites}
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Очистить все
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favorites.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <button
                        onClick={() => removeFromFavorites(item.id)}
                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                      >
                        <Heart className="h-5 w-5 text-red-500 fill-current" />
                      </button>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-sm text-blue-600 font-medium">{item.category}</span>
                          <CardTitle className="text-lg mt-1">{item.title}</CardTitle>
                        </div>
                        <span className="text-lg font-bold text-blue-600">{item.price}</span>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Заказать
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => removeFromFavorites(item.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Heart className="h-24 w-24 mx-auto mb-6 text-gray-300" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Избранное пусто
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                Добавьте интересующие вас услуги в избранное для быстрого доступа
              </p>
              <Button size="lg" asChild>
                <a href="/services">Посмотреть услуги</a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Recommendations */}
      {favorites.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Рекомендуем также
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Комплексное обслуживание</CardTitle>
                  <CardDescription>
                    Полная диагностика + чистка + установка ПО
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">4500 ₽</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Экстренный ремонт</CardTitle>
                  <CardDescription>
                    Срочный ремонт в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">+50%</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Годовое обслуживание</CardTitle>
                  <CardDescription>
                    Регулярное обслуживание техники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">15000 ₽</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Favorites;