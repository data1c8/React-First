import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <Mail className="h-16 w-16 mx-auto mb-6 text-blue-200" />
        <h2 className="text-3xl font-bold mb-4">
          Подпишитесь на нашу рассылку
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Получайте полезные советы по уходу за техникой, новости о скидках и акциях
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-gray-900"
          />
          <Button type="submit" variant="secondary">
            Подписаться
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;