import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, Phone, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: 'Главная страница', href: '/', icon: Home },
    { name: 'Наши услуги', href: '/services', icon: Search },
    { name: 'Контакты', href: '/contacts', icon: Phone }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
            <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Страница не найдена
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                На главную
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Назад
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Популярные страницы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {popularPages.map((page, index) => {
                const IconComponent = page.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Link to={page.href} className="block text-center">
                        <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                        <h3 className="font-semibold text-gray-900">{page.name}</h3>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Help Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Нужна помощь?
              </h3>
              <p className="text-gray-600 mb-4">
                Если вы не можете найти нужную информацию, свяжитесь с нами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+74951234567">Позвонить: +7 (495) 123-45-67</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;