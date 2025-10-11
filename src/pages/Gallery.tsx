import { useState } from "react";
import Header from "@/components/Header";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [activeSection, setActiveSection] = useState("gallery");

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
      <div className="pt-20">
        <GallerySection gallery={gallery} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Gallery;
