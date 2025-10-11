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
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl font-bold">Моменты счастья</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Загляните в нашу галерею и увидьте, как мы создаем волшебство! 
                Каждое фото — это история счастливого ребенка и незабываемого праздника.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="space-y-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/63dd95b8-267c-4b77-9923-6fd20b498e9e.jpg"
                    alt="Детский праздник"
                    className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-sm text-muted-foreground">Интерактивная программа с играми</p>
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/fbf83355-377c-4761-bd3f-ebe2fc73785b.jpg"
                    alt="Веселье на празднике"
                    className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-sm text-muted-foreground">Веселье и смех для всех детей</p>
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/02abca0d-eea8-4fc8-a559-da1d2f928e24.jpg"
                    alt="Фотосессия с героями"
                    className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-sm text-muted-foreground">Профессиональная фотосессия</p>
                </div>
              </div>
              <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">📸 Что вы получите</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎉</div>
                    <div>
                      <h4 className="font-bold mb-2">Яркие кадры</h4>
                      <p className="text-sm text-muted-foreground">
                        Каждое мероприятие — это множество эмоций и счастливых лиц. Мы запечатлеем каждый момент.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">🎭</div>
                    <div>
                      <h4 className="font-bold mb-2">Профессиональные артисты</h4>
                      <p className="text-sm text-muted-foreground">
                        Все наши персонажи выглядят как из сказки благодаря качественным костюмам.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">👶</div>
                    <div>
                      <h4 className="font-bold mb-2">Радость детей</h4>
                      <p className="text-sm text-muted-foreground">
                        Самое главное — искренние эмоции детей. Их счастье — наша лучшая награда!
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">🎁</div>
                    <div>
                      <h4 className="font-bold mb-2">Памятные моменты</h4>
                      <p className="text-sm text-muted-foreground">
                        Эти фотографии станут частью семейного альбома на долгие годы.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GallerySection gallery={gallery} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Gallery;