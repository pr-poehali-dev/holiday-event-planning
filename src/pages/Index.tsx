import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎄",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения",
    });
  };

  const programs = [
    {
      title: "Экспресс-поздравление",
      duration: "20 минут",
      description: "Дед Мороз и Снегурочка поздравят ребенка, вручат подарок и создадут волшебную атмосферу",
      price: "2 000 ₽",
      icon: "Clock",
      features: ["Поздравление", "Вручение подарка", "Фото с героями"]
    },
    {
      title: "Волшебный час",
      duration: "60 минут",
      description: "Полноценная праздничная программа с играми, конкурсами и новогодним весельем",
      price: "5 000 ₽",
      icon: "Sparkles",
      features: ["Интерактивная программа", "Игры и конкурсы", "Вручение подарков", "Фотосессия"]
    },
    {
      title: "Корпоративный праздник",
      duration: "1-2 часа",
      description: "Групповое мероприятие для детского сада, школы или организации",
      price: "от 8 000 ₽",
      icon: "Users",
      features: ["Программа для группы", "Новогодние игры", "Хороводы", "Подарки всем детям"]
    }
  ];

  const characters = [
    { name: "Дед Мороз", emoji: "🎅", description: "Добрый волшебник с мешком подарков" },
    { name: "Снегурочка", emoji: "❄️", description: "Внучка Деда Мороза, помощница и красавица" },
    { name: "Снеговик", emoji: "⛄", description: "Веселый друг, любит играть и танцевать" },
    { name: "Снежинка", emoji: "✨", description: "Волшебная фея зимнего праздника" },
    { name: "Эльф", emoji: "🧝", description: "Проказник и весельчак из мастерской" },
    { name: "Пингвин", emoji: "🐧", description: "Забавный гость с Северного полюса" }
  ];

  const reviews = [
    {
      name: "Мария Петрова",
      rating: 5,
      text: "Невероятно! Дочка была в восторге. Дед Мороз и Снегурочка очень профессиональные, нашли подход к ребенку сразу. Спасибо за сказку!",
      date: "15 декабря 2024"
    },
    {
      name: "Алексей Смирнов",
      rating: 5,
      text: "Заказывали корпоративный праздник для детского сада. 25 детей были в полном восторге! Организация на высшем уровне.",
      date: "10 декабря 2024"
    },
    {
      name: "Елена Иванова",
      rating: 5,
      text: "Волшебный час пролетел незаметно. Игры, конкурсы, фотосессия - всё было продумано до мелочей. Рекомендую!",
      date: "8 декабря 2024"
    }
  ];

  const gallery = [
    "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/63dd95b8-267c-4b77-9923-6fd20b498e9e.jpg",
    "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/fbf83355-377c-4761-bd3f-ebe2fc73785b.jpg",
    "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/02abca0d-eea8-4fc8-a559-da1d2f928e24.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎄</span>
            <span className="text-xl font-bold magical-gradient bg-clip-text text-transparent">Волшебные Праздники</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: "home", label: "Главная", icon: "Home" },
              { id: "programs", label: "Программы", icon: "Calendar" },
              { id: "characters", label: "Персонажи", icon: "Users" },
              { id: "prices", label: "Цены", icon: "DollarSign" },
              { id: "gallery", label: "Галерея", icon: "Image" },
              { id: "reviews", label: "Отзывы", icon: "Star" },
              { id: "contacts", label: "Контакты", icon: "Phone" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </button>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Calendar" size={16} className="mr-2" />
                Забронировать
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Календарь бронирования</DialogTitle>
                <DialogDescription>Выберите удобную дату для праздника</DialogDescription>
              </DialogHeader>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Устроим <span className="magical-gradient bg-clip-text text-transparent">волшебный</span> праздник для ваших детей
              </h1>
              <p className="text-xl text-muted-foreground">
                Дед Мороз, Снегурочка и их друзья создадут незабываемую новогоднюю сказку прямо у вас дома или в организации
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("programs")} className="bg-primary hover:bg-primary/90">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Выбрать программу
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contacts")}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-accent" />
                  <span className="text-sm">5 лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-primary" />
                  <span className="text-sm">500+ счастливых детей</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <img
                src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/63dd95b8-267c-4b77-9923-6fd20b498e9e.jpg"
                alt="Новогодний праздник"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Наши программы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный вариант для вашего праздника
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-3xl font-bold magical-gradient bg-clip-text text-transparent">
                      {program.price}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Заказать
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Бронирование: {program.title}</DialogTitle>
                        <DialogDescription>Заполните форму, и мы свяжемся с вами</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <Input placeholder="Ваше имя" required />
                        <Input type="tel" placeholder="Телефон" required />
                        <Input type="email" placeholder="Email" />
                        <Textarea placeholder="Комментарий к заказу" />
                        <Button type="submit" className="w-full">Отправить заявку</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="characters" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Наши персонажи</h2>
            <p className="text-xl text-muted-foreground">
              Познакомьтесь с волшебными героями праздника
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {characters.map((character, idx) => (
              <Card key={idx} className="text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-6xl mb-2">{character.emoji}</div>
                  <CardTitle className="text-lg">{character.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{character.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Цены и опции</h2>
            <p className="text-xl text-muted-foreground">
              Гибкие тарифы для любого бюджета
            </p>
          </div>
          <Tabs defaultValue="base" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="base">Базовые</TabsTrigger>
              <TabsTrigger value="extra">Дополнительно</TabsTrigger>
              <TabsTrigger value="packages">Пакеты</TabsTrigger>
            </TabsList>
            <TabsContent value="base" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Базовые программы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">Экспресс-поздравление (20 мин)</p>
                      <p className="text-sm text-muted-foreground">Дед Мороз + Снегурочка</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">2 000 ₽</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">Волшебный час (60 мин)</p>
                      <p className="text-sm text-muted-foreground">Полная программа с играми</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">5 000 ₽</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">Корпоративный праздник</p>
                      <p className="text-sm text-muted-foreground">Для организаций и групп</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">от 8 000 ₽</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="extra" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Дополнительные персонажи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>⛄ Снеговик</span>
                    <span className="font-semibold">+ 1 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>✨ Снежинка</span>
                    <span className="font-semibold">+ 1 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>🧝 Эльф</span>
                    <span className="font-semibold">+ 1 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span>🐧 Пингвин</span>
                    <span className="font-semibold">+ 1 500 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="packages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Специальные пакеты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border-2 border-primary rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-lg">VIP Праздник</p>
                      <p className="text-2xl font-bold text-primary">12 000 ₽</p>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>✓ 2 часа программы</li>
                      <li>✓ 4 персонажа на выбор</li>
                      <li>✓ Профессиональная фотосъемка</li>
                      <li>✓ Подарки для всех детей</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-lg">Корпоративный максимум</p>
                      <p className="text-2xl font-bold text-primary">15 000 ₽</p>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>✓ До 50 детей</li>
                      <li>✓ 2 часа программы</li>
                      <li>✓ Все персонажи</li>
                      <li>✓ Видеосъемка</li>
                      <li>✓ Новогодние подарки</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Галерея праздников</h2>
            <p className="text-xl text-muted-foreground">
              Моменты радости и волшебства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <img src={image} alt={`Праздник ${idx + 1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Отзывы родителей</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Закажите праздник или задайте вопрос
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Форма заказа</CardTitle>
                  <CardDescription>Заполните форму, и мы перезвоним</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <Input placeholder="Ваше имя *" required />
                    <Input type="tel" placeholder="Телефон *" required />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Расскажите о вашем празднике" rows={4} />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@magic-events.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">Москва, ул. Новогодняя, д. 1</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Время работы</p>
                        <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🎄</span>
                <span className="text-xl font-bold">Волшебные Праздники</span>
              </div>
              <p className="text-white/80">
                Создаем незабываемые новогодние праздники для детей с 2019 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                {["Программы", "Персонажи", "Цены", "Отзывы"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Icon name="Facebook" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
                <Icon name="Instagram" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
                <Icon name="Twitter" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2024 Волшебные Праздники. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
