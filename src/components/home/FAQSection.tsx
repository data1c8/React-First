import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Сколько времени занимает ремонт?',
      answer: 'Время ремонта зависит от сложности проблемы. Простые задачи выполняем в течение дня, сложные могут занять 2-3 дня.'
    },
    {
      question: 'Предоставляете ли вы гарантию?',
      answer: 'Да, мы предоставляем гарантию до 1 года на все виды работ и до 6 месяцев на установленные запчасти.'
    },
    {
      question: 'Выезжаете ли вы на дом?',
      answer: 'Да, мы предоставляем бесплатный выезд мастера в пределах МКАД. За МКАД - 30 рублей за километр.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем наличные, банковские карты, безналичный расчет для юридических лиц.'
    },
    {
      question: 'Работаете ли вы с юридическими лицами?',
      answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем все необходимые документы.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы наших клиентов
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/faq">Все вопросы и ответы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;