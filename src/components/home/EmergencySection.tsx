import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Clock, Zap } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Zap className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Экстренный ремонт 24/7
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Критическая поломка? Мы приедем в любое время суток!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="pt-6 text-center">
              <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Выезд в течение часа</h3>
              <p className="text-red-100">Мастер приедет максимально быстро</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="pt-6 text-center">
              <Phone className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Круглосуточная связь</h3>
              <p className="text-red-100">Диспетчер ответит в любое время</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="pt-6 text-center">
              <Zap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ремонт на месте</h3>
              <p className="text-red-100">Большинство проблем решаем сразу</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" className="text-red-600">
            <Phone className="mr-2 h-5 w-5" />
            Вызвать экстренную службу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;