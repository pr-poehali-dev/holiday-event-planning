import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const Programs = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("programs");

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/";
    } else {
      window.location.href = `/${sectionId}`;
    }
  };

  const menuItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "programs", label: "Программы", icon: "Calendar" },
    { id: "characters", label: "Персонажи", icon: "Users" },
    { id: "prices", label: "Цены", icon: "DollarSign" },
    { id: "gallery", label: "Галерея", icon: "Image" },
    { id: "reviews", label: "Отзывы", icon: "Star" },
    { id: "contacts", label: "Контакты", icon: "Phone" }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        menuItems={menuItems} 
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl font-bold">Новогодние программы для детей</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы создаем незабываемые праздники для детей с 2019 года. Каждая программа тщательно продумана 
                и адаптирована под возраст ребенка. Наши артисты — профессионалы с актерским образованием 
                и огромной любовью к детям.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/63dd95b8-267c-4b77-9923-6fd20b498e9e.jpg"
                    alt="Детский праздник"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">🎭 Профессиональные актеры</h3>
                  <p className="text-muted-foreground">
                    Все наши артисты имеют актерское образование и многолетний опыт работы с детьми. 
                    Они умеют найти подход к каждому ребенку и создать атмосферу настоящего волшебства.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/fbf83355-377c-4761-bd3f-ebe2fc73785b.jpg"
                    alt="Игры на празднике"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">🎮 Интерактивные программы</h3>
                  <p className="text-muted-foreground">
                    Мы не просто показываем представление — мы вовлекаем детей в игру! 
                    Конкурсы, загадки, танцы и волшебные превращения — каждый ребенок становится участником сказки.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/02abca0d-eea8-4fc8-a559-da1d2f928e24.jpg"
                    alt="Фотосессия с героями"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">📸 Яркие воспоминания</h3>
                  <p className="text-muted-foreground">
                    После праздника у вас останутся не только подарки, но и множество фотографий! 
                    Профессиональная фотосессия с любимыми героями входит в программу.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-2">🎁 Индивидуальный подход</h3>
                  <p className="text-muted-foreground mb-4">
                    Мы учитываем возраст, интересы и особенности каждого ребенка. 
                    Можем адаптировать программу под ваши пожелания и добавить любимых персонажей.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Возраст 2-12 лет</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Выезд по всей Москве</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Работаем без выходных</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>Гарантия качества</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProgramsSection programs={programs} handleBooking={handleBooking} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Programs;