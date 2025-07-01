import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Как продлить жизнь ноутбука: 10 простых советов',
      excerpt: 'Узнайте, как правильно ухаживать за ноутбуком, чтобы он служил вам долгие годы без поломок.',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Алексей Петров',
      date: '15 января 2024',
      category: 'Советы'
    },
    {
      id: 2,
      title: 'Признаки того, что пора менять жесткий диск',
      excerpt: 'Какие симптомы указывают на скорый выход из строя HDD или SSD и как предотвратить потерю данных.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Мария Сидорова',
      date: '12 января 2024',
      category: 'Диагностика'
    },
    {
      id: 3,
      title: 'Вирусы в 2024: новые угрозы и защита',
      excerpt: 'Обзор актуальных киберугроз и современных методов защиты компьютера от вредоносного ПО.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Дмитрий Козлов',
      date: '10 января 2024',
      category: 'Безопасность'
    },
    {
      id: 4,
      title: 'SSD vs HDD: что выбрать в 2024 году',
      excerpt: 'Сравнение твердотельных и жестких дисков по скорости, надежности и цене.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Алексей Петров',
      date: '8 января 2024',
      category: 'Железо'
    },
    {
      id: 5,
      title: 'Перегрев компьютера: причины и решения',
      excerpt: 'Почему компьютер перегревается и как решить эту проблему самостоятельно.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Мария Сидорова',
      date: '5 января 2024',
      category: 'Ремонт'
    },
    {
      id: 6,
      title: 'Как выбрать блок питания для компьютера',
      excerpt: 'Подробное руководство по выбору БП: мощность, сертификаты, модульность.',
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Дмитрий Козлов',
      date: '3 января 2024',
      category: 'Железо'
    }
  ];

  const categories = ['Все', 'Советы', 'Диагностика', 'Безопасность', 'Железо', 'Ремонт'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Блог о ремонте компьютеров
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Полезные статьи, советы экспертов и новости из мира компьютерных технологий
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Рекомендуемая статья</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {posts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{posts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{posts[0].author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {posts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {posts[0].excerpt}
                  </p>
                  <Button asChild>
                    <Link to={`/blog/${posts[0].id}`}>
                      Читать далее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Последние статьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Читать
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Подпишитесь на нашу рассылку
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получайте полезные советы по уходу за техникой и новости о наших услугах
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button variant="secondary">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;