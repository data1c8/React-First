import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Phone, Mail, Clock, ChevronDown, Heart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Цены', href: '/prices' },
    { 
      name: 'О компании', 
      href: '/about',
      submenu: [
        { name: 'О нас', href: '/about' },
        { name: 'Наша команда', href: '/team' },
        { name: 'История компании', href: '/history' },
        { name: 'Вакансии', href: '/careers' }
      ]
    },
    { 
      name: 'Контакты', 
      href: '/contacts',
      submenu: [
        { name: 'Связаться с нами', href: '/contacts' },
        { name: 'Наши офисы', href: '/offices' }
      ]
    },
    { name: 'Блог', href: '/blog' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'FAQ', href: '/faq' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@repair-service.ru</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Пн-Вс: 9:00-21:00</span>
              </div>
              <Link to="/favorites" className="flex items-center space-x-1 hover:text-blue-200">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Избранное</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="text-xl font-bold">PC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">РемонтСервис</h1>
              <p className="text-sm text-gray-600">Ремонт компьютеров и ноутбуков</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link 
                          to={subItem.href}
                          className={`w-full ${isActive(subItem.href) ? 'text-blue-600 font-medium' : ''}`}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive(item.href) ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex">
              <Link to="/contacts">Заказать звонок</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={`text-gray-700 hover:text-blue-600 transition-colors py-2 block ${
                          isActive(item.href) ? 'text-blue-600 font-medium' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`text-gray-600 hover:text-blue-600 transition-colors py-1 block text-sm ${
                                isActive(subItem.href) ? 'text-blue-600 font-medium' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button asChild className="mt-4">
                    <Link to="/contacts" onClick={() => setIsOpen(false)}>
                      Заказать звонок
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;