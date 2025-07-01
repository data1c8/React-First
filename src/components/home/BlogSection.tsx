import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: 'Как продлить жизнь ноутбука: 10 простых советов',
      excerpt: 'Узнайте, как правильно ухаживать за ноутбуком, чтобы он служил вам долгие годы.',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Алексей Петров',
      date: '15 января 2024'
    },
    {
      id: 2,
      title: 'Признаки того, что пора менять жесткий диск',
      excerpt: 'Какие симптомы указывают на скорый выход из строя HDD или SSD.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Мария Сидорова',
      date: '12 января 2024'
    },
    {
      id: 3,
      title: 'Вирусы в 2024: новые угрозы и защита',
      excerpt: 'Обзор актуальных киберугроз и современных методов защиты.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Дмитрий Козлов',
      date: '10 января 2024'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Полезные статьи
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Советы экспертов и новости из мира компьютерных технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
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
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
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
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/blog/${post.id}`}>
                    Читать далее
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/blog">Все статьи</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;