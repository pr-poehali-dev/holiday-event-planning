import { useState } from "react";
import Header from "@/components/Header";
import PricesSection from "@/components/PricesSection";
import Footer from "@/components/Footer";

const Prices = () => {
  const [activeSection, setActiveSection] = useState("prices");

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
              <h1 className="text-5xl font-bold">Прозрачные цены без скрытых платежей</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы ценим ваше время и деньги. Все цены фиксированные, без доплат за выезд по Москве. 
                Стоимость зависит только от выбранной программы и количества персонажей.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg text-left">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/aaa5f9fb-f044-477a-b4e9-cb60a82faac6.jpg"
                    alt="Дед Мороз с подарками"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4">💰 Что входит в стоимость</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Работа профессиональных артистов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Премиальные костюмы и реквизит</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Интерактивная программа с играми</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Выезд по всей Москве</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Музыкальное сопровождение</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent text-xl">✓</span>
                      <span>Фотосессия с героями</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-3">🎁 Дополнительные услуги</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Дополнительный персонаж</span>
                        <span className="font-bold">+1 500 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Продление программы (+30 мин)</span>
                        <span className="font-bold">+2 000 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Фотограф на мероприятие</span>
                        <span className="font-bold">+3 000 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Видеосъемка</span>
                        <span className="font-bold">+4 000 ₽</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-3">⭐ Специальные предложения</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span>🔥</span>
                        <span><strong>Раннее бронирование:</strong> -10% при заказе за месяц</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>🎉</span>
                        <span><strong>Повторный заказ:</strong> скидка 15% для постоянных клиентов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>👥</span>
                        <span><strong>Групповые праздники:</strong> индивидуальные условия для садов и школ</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-3">📋 Условия оплаты</h3>
                    <p className="text-sm text-muted-foreground">
                      Предоплата 30% для бронирования даты. Остальную сумму можно оплатить наличными или картой непосредственно артисту после выступления.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PricesSection />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Prices;