import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Contacts = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("contacts");

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
              <h1 className="text-5xl font-bold">Свяжитесь с нами</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы всегда на связи и готовы ответить на все ваши вопросы. 
                Звоните, пишите или оставьте заявку — мы ответим в течение 15 минут!
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg text-left">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/aaa5f9fb-f044-477a-b4e9-cb60a82faac6.jpg"
                    alt="Свяжитесь с нами"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-6">📞 Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">📱</div>
                      <div>
                        <p className="font-bold">Телефон</p>
                        <a href="tel:+79991234567" className="text-accent hover:underline">+7 (999) 123-45-67</a>
                        <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 22:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">📧</div>
                      <div>
                        <p className="font-bold">Email</p>
                        <a href="mailto:info@dedmoroz-show.ru" className="text-accent hover:underline">info@dedmoroz-show.ru</a>
                        <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">📍</div>
                      <div>
                        <p className="font-bold">Адрес</p>
                        <p className="text-muted-foreground">Москва, ул. Примерная, д. 123</p>
                        <p className="text-sm text-muted-foreground">Выезд по всей Москве</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💬</div>
                      <div>
                        <p className="font-bold">Мессенджеры</p>
                        <div className="flex gap-3 mt-2">
                          <a href="#" className="text-accent hover:underline">WhatsApp</a>
                          <a href="#" className="text-accent hover:underline">Telegram</a>
                          <a href="#" className="text-accent hover:underline">Viber</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-4">⏰ График работы</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Понедельник - Пятница</span>
                        <span className="font-bold">9:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота - Воскресенье</span>
                        <span className="font-bold">10:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Новогодние праздники</span>
                        <span className="font-bold">Круглосуточно</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-4">🚀 Быстрый отклик</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Ответ на звонки в течение 1 минуты</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Ответ на сообщения в течение 15 минут</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Бесплатная консультация по программам</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        <span>Поможем выбрать идеальный вариант</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg text-left">
                    <h3 className="text-xl font-bold mb-4">🎁 Специальное предложение</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      При заказе до 20 декабря — фотограф в подарок!
                    </p>
                    <div className="bg-white p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-accent">🔥 -15%</p>
                      <p className="text-xs text-muted-foreground">на все программы</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">📝 Как оформить заказ</h3>
                <div className="grid md:grid-cols-4 gap-6 text-left">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <p className="font-bold text-sm">Свяжитесь с нами</p>
                      <p className="text-xs text-muted-foreground">По телефону или через форму</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <p className="font-bold text-sm">Выберите программу</p>
                      <p className="text-xs text-muted-foreground">Поможем подобрать лучшее</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <p className="font-bold text-sm">Внесите предоплату</p>
                      <p className="text-xs text-muted-foreground">30% для бронирования</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <p className="font-bold text-sm">Наслаждайтесь</p>
                      <p className="text-xs text-muted-foreground">Мы позаботимся об остальном</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactsSection handleBooking={handleBooking} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Contacts;