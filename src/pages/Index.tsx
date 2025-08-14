import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface TicketType {
  id: string
  name: string
  price: number
  features: string[]
  popular?: boolean
}

const ticketTypes: TicketType[] = [
  {
    id: 'early-bird',
    name: 'Early Bird',
    price: 15000,
    features: ['2 дня конференции', 'Кофе-брейки', 'Материалы конференции']
  },
  {
    id: 'standard',
    name: 'Стандартный',
    price: 25000,
    features: ['2 дня конференции', 'Кофе-брейки', 'Материалы конференции', 'Обед'],
    popular: true
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 45000,
    features: ['2 дня конференции', 'Кофе-брейки', 'Материалы конференции', 'Обед', 'Networking ужин', 'Приоритетные места']
  }
]

const speakers = [
  { name: 'Анна Петрова', role: 'AI Research Director, Яндекс', topic: 'Будущее машинного обучения' },
  { name: 'Михаил Иванов', role: 'Head of AI, Сбер', topic: 'ИИ в финтехе' },
  { name: 'Елена Сидорова', role: 'ML Engineer, VK', topic: 'Этика искусственного интеллекта' },
  { name: 'Дмитрий Козлов', role: 'CTO, Recognos', topic: 'Computer Vision в продакшене' }
]

const partners = [
  'Яндекс', 'Сбер', 'VK', 'Mail.ru Group', 'Тинькофф', 'Авито', 'OZON', 'Wildberries'
]

const news = [
  {
    title: 'Объявлена программа AI Conference 2024',
    date: '10 августа 2024',
    excerpt: 'Опубликована полная программа конференции с докладами ведущих экспертов в области ИИ.'
  },
  {
    title: 'Открыта регистрация на конференцию',
    date: '5 августа 2024',
    excerpt: 'Доступны билеты всех категорий. Специальные цены действуют до 1 сентября.'
  },
  {
    title: 'Партнёры конференции',
    date: '1 августа 2024',
    excerpt: 'К конференции присоединились ведущие технологические компании России.'
  }
]

export default function Index() {
  const [selectedTicket, setSelectedTicket] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              AI Conference 2024
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
              <a href="#registration" className="hover:text-primary transition-colors">Регистрация</a>
              <a href="#speakers" className="hover:text-primary transition-colors">Спикеры</a>
              <a href="#partners" className="hover:text-primary transition-colors">Партнёры</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Conference 2024
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Ведущая конференция по искусственному интеллекту в России
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <div className="flex items-center gap-2 text-lg">
                  <Icon name="Calendar" className="text-primary" size={20} />
                  <span>15-16 ноября 2024</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>Москва, Экспоцентр</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="#registration">Зарегистрироваться</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Программа
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/9ab0517b-2d7e-4309-9c1d-1367976002f6.jpg" 
                alt="AI Conference" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Регистрация</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите подходящий тариф и зарегистрируйтесь на главное событие года в области ИИ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ticketTypes.map((ticket) => (
              <Card 
                key={ticket.id} 
                className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedTicket === ticket.id ? 'ring-2 ring-primary' : ''
                } ${ticket.popular ? 'border-primary' : ''}`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                {ticket.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    {ticket.price.toLocaleString('ru-RU')} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {ticket.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Форма регистрации</CardTitle>
              <CardDescription className="text-center">
                Заполните данные для участия в конференции
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Должность</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Расскажите о своих интересах в области ИИ..."
                  />
                </div>
                {selectedTicket && (
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="font-medium">
                      Выбранный тариф: {ticketTypes.find(t => t.id === selectedTicket)?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Стоимость: {ticketTypes.find(t => t.id === selectedTicket)?.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                )}
                <Button type="submit" size="lg" className="w-full" disabled={!selectedTicket}>
                  Зарегистрироваться
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Спикеры</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ведущие эксперты индустрии поделятся своим опытом и знаниями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {speakers.map((speaker, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{speaker.name}</CardTitle>
                  <CardDescription>{speaker.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src="/img/726ed4f9-723b-4dfb-9a9e-f22f243ddcf6.jpg" 
              alt="Conference Speakers" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Партнёры</h2>
            <p className="text-xl text-muted-foreground">
              Ведущие технологические компании поддерживают конференцию
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Icon name="Building" size={24} className="text-white" />
                </div>
                <p className="font-medium text-sm">{partner}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Новости</h2>
            <p className="text-xl text-muted-foreground">
              Последние обновления о конференции
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <Button variant="link" className="p-0 mt-4">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами по любым вопросам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Icon name="Mail" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@aiconference2024.ru</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="MapPin" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, Экспоцентр<br />Краснопресненская наб., 14</p>
            </Card>
            <Card className="text-center p-6">
              <Icon name="MessageSquare" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@aiconference2024</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-4">
              AI Conference 2024
            </div>
            <p className="text-muted-foreground mb-6">
              Главное событие года в области искусственного интеллекта
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              © 2024 AI Conference. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}