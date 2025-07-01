import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const categories = [
    {
      title: 'Общие вопросы',
      faqs: [
        {
          question: 'Сколько времени занимает ремонт?',
          answer: 'Время ремонта зависит от сложности проблемы. Простые задачи (установка ПО, чистка от пыли) выполняем в течение дня. Сложные ремонты (замена материнской платы, восстановление данных) могут занять 2-5 дней.'
        },
        {
          question: 'Предоставляете ли вы гарантию?',
          answer: 'Да, мы предоставляем гарантию до 1 года на все виды работ и до 6 месяцев на установленные запчасти. Гарантия не распространяется на механические повреждения и попадание жидкости.'
        },
        {
          question: 'Выезжаете ли вы на дом?',
          answer: 'Да, мы предоставляем бесплатный выезд мастера в пределах МКАД. За МКАД взимается доплата 30 рублей за километр. Выезд возможен в день обращения.'
        },
        {
          question: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем наличные, банковские карты (Visa, MasterCard, МИР), безналичный расчет для юридических лиц. Оплата производится после выполнения работ.'
        }
      ]
    },
    {
      title: 'Ремонт компьютеров',
      faqs: [
        {
          question: 'Компьютер не включается. Что делать?',
          answer: 'Причин может быть несколько: неисправность блока питания, материнской платы, оперативной памяти. Рекомендуем обратиться для диагностики - она бесплатная.'
        },
        {
          question: 'Компьютер сильно шумит и перегревается',
          answer: 'Скорее всего, требуется чистка от пыли и замена термопасты. Эта процедура стоит 2500₽ и занимает 2-3 часа.'
        },
        {
          question: 'Можно ли увеличить производительность старого компьютера?',
          answer: 'Да, возможна модернизация: увеличение оперативной памяти, установка SSD диска, замена видеокарты. Проведем диагностику и предложим оптимальные варианты апгрейда.'
        }
      ]
    },
    {
      title: 'Ремонт ноутбуков',
      faqs: [
        {
          question: 'Разбился экран ноутбука. Сколько стоит замена?',
          answer: 'Стоимость замены экрана зависит от модели ноутбука и диагонали. В среднем от 8000₽ до 25000₽. Точную стоимость назовем после диагностики.'
        },
        {
          question: 'Ноутбук не заряжается. В чем может быть проблема?',
          answer: 'Возможные причины: неисправность зарядного устройства, разъема питания, батареи или контроллера питания. Диагностика покажет точную причину.'
        },
        {
          question: 'Залил ноутбук жидкостью. Можно ли его спасти?',
          answer: 'Шансы на восстановление есть, если сразу выключить ноутбук и обратиться к нам. Чем быстрее - тем больше вероятность успешного ремонта.'
        }
      ]
    },
    {
      title: 'Восстановление данных',
      faqs: [
        {
          question: 'Случайно удалил важные файлы. Можно ли их восстановить?',
          answer: 'Да, в большинстве случаев файлы можно восстановить, если не производилась перезапись данных. Стоимость восстановления от 3000₽.'
        },
        {
          question: 'Жесткий диск не определяется. Можно ли восстановить данные?',
          answer: 'Возможно. Причины могут быть разные: логические ошибки, повреждение файловой системы, физические повреждения. Проведем диагностику и оценим возможности восстановления.'
        },
        {
          question: 'Сколько времени занимает восстановление данных?',
          answer: 'От нескольких часов до нескольких дней, в зависимости от объема данных и сложности повреждений. Простое восстановление - 1-2 дня, сложное - до недели.'
        }
      ]
    },
    {
      title: 'Цены и оплата',
      faqs: [
        {
          question: 'Почему диагностика бесплатная?',
          answer: 'Мы уверены в своем профессионализме и хотим, чтобы клиенты могли оценить качество наших услуг. Бесплатная диагностика - это наш способ показать экспертность.'
        },
        {
          question: 'Можно ли получить скидку?',
          answer: 'Да, мы предоставляем скидки постоянным клиентам, пенсионерам, студентам. Также действуют сезонные акции. Уточняйте актуальные предложения у менеджеров.'
        },
        {
          question: 'Что входит в стоимость ремонта?',
          answer: 'В стоимость входит: диагностика, работа мастера, гарантия на выполненные работы, бесплатный выезд в пределах МКАД. Запчасти оплачиваются отдельно.'
        }
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
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы наших клиентов
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами, и мы ответим на любые вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Задать вопрос</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Позвонить: +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;