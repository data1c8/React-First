import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Нужен ремонт? Свяжитесь с нами!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Бесплатная консультация и диагностика. Выезд мастера в день обращения.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-200" />
                <span className="text-lg">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-200" />
                <span className="text-lg">info@repair-service.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-200" />
                <span className="text-lg">Ежедневно с 9:00 до 21:00</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contacts">Заказать звонок</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Наши адреса</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-start space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold">Центральный офис</p>
                      <p className="text-blue-100">г. Москва, ул. Примерная, д. 123</p>
                      <p className="text-blue-100">м. Тверская (5 мин пешком)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-3 mb-2">
                    <MapPin className="h-5 w-5 text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold">Филиал на юге</p>
                      <p className="text-blue-100">г. Москва, ул. Южная, д. 456</p>
                      <p className="text-blue-100">м. Нагорная (3 мин пешком)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;