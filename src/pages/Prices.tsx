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
        <PricesSection />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Prices;
