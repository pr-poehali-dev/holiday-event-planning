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
        <ReviewsSection reviews={reviews} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Reviews;
