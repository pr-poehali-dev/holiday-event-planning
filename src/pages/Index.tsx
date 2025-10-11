import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import CharactersSection from "@/components/CharactersSection";
import PricesSection from "@/components/PricesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
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
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        menuItems={menuItems} 
      />
      <HeroSection scrollToSection={scrollToSection} />
      <ProgramsSection programs={programs} handleBooking={handleBooking} />
      <CharactersSection characters={characters} />
      <PricesSection />
      <GallerySection gallery={gallery} />
      <ReviewsSection reviews={reviews} />
      <ContactsSection handleBooking={handleBooking} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
