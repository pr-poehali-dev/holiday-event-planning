import { useState } from "react";
import Header from "@/components/Header";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Reviews = () => {
  const [activeSection, setActiveSection] = useState("reviews");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        menuItems={menuItems} 
      />
      <div className="pt-20">
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl font-bold">Отзывы наших клиентов</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы гордимся каждым праздником, который проводим. Прочитайте, что говорят о нас родители, 
                которые доверили нам самое дорогое — счастье своих детей.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg text-left">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/63dd95b8-267c-4b77-9923-6fd20b498e9e.jpg"
                    alt="Счастливые дети"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4">🌟 Почему нам доверяют</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span><strong>5+ лет опыта</strong> в организации праздников</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span><strong>500+ счастливых детей</strong> ежегодно</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span><strong>98% клиентов</strong> рекомендуют нас</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span><strong>Гарантия качества</strong> или возврат средств</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-xl shadow-lg text-left">
                  <h3 className="text-2xl font-bold mb-4">💬 Что говорят родители</h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-accent pl-4 italic">
                      "Дочка еще неделю вспоминает праздник и рассматривает фото. Это бесценно!"
                    </blockquote>
                    <blockquote className="border-l-4 border-accent pl-4 italic">
                      "Артисты профессионалы, пунктуальны и очень добрые. Рекомендую!"
                    </blockquote>
                    <blockquote className="border-l-4 border-accent pl-4 italic">
                      "Лучший подарок ребенку на Новый год. Спасибо за сказку!"
                    </blockquote>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl">🌟</span>
                      <span className="text-2xl font-bold">4.9/5.0</span>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">Средняя оценка на основе 200+ отзывов</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl text-left">
                <h3 className="text-2xl font-bold mb-4">🎯 Наши принципы работы</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">💖 Искренность</h4>
                    <p className="text-sm text-muted-foreground">
                      Мы любим свою работу и делаем каждый праздник от души
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">⭐ Качество</h4>
                    <p className="text-sm text-muted-foreground">
                      Только профессиональные артисты и премиальные костюмы
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">🔒 Надежность</h4>
                    <p className="text-sm text-muted-foreground">
                      Всегда приходим вовремя и выполняем обещания
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ReviewsSection reviews={reviews} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Reviews;