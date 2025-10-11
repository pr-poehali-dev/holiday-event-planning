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
        <ProgramsSection programs={programs} handleBooking={handleBooking} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Programs;