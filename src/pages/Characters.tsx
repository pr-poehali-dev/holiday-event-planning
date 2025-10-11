import { useState } from "react";
import Header from "@/components/Header";
import CharactersSection from "@/components/CharactersSection";
import Footer from "@/components/Footer";

const Characters = () => {
  const [activeSection, setActiveSection] = useState("characters");

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

  const characters = [
    { 
      name: "Дед Мороз", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/aaa5f9fb-f044-477a-b4e9-cb60a82faac6.jpg", 
      description: "Добрый волшебник с мешком подарков",
      fullDescription: "Главный волшебник Нового года! Дед Мороз приносит детям подарки, рассказывает зимние сказки и создает настоящее новогоднее чудо. С длинной белой бородой, посохом и большим мешком подарков он дарит радость и исполняет заветные желания."
    },
    { 
      name: "Снегурочка", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/651ae26e-5d23-4f5b-b955-dbe530a002dd.jpg", 
      description: "Внучка Деда Мороза, помощница и красавица",
      fullDescription: "Прекрасная внучка Деда Мороза в голубой шубке. Она помогает дедушке раздавать подарки, водит хороводы вокруг ёлки и поет новогодние песни. Снегурочка очень добрая и веселая, она дружит со снежинками и знает все зимние игры."
    },
    { 
      name: "Снеговик", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/ebab66f3-6d57-40ce-b232-cf178c4806f7.jpg", 
      description: "Веселый друг, любит играть и танцевать",
      fullDescription: "Забавный снежный друг с морковкой вместо носа! Снеговик обожает веселиться, играть в снежки и устраивать танцы. Он знает множество зимних игр и загадок, всегда рассмешит детей и создаст праздничное настроение."
    },
    { 
      name: "Снежинка", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/d1307bf6-c1e3-45bc-9bae-192f57bcbbf6.jpg", 
      description: "Волшебная фея зимнего праздника",
      fullDescription: "Сверкающая фея зимы в белоснежном наряде. Снежинка умеет создавать волшебство и превращать обычный день в сказку. Она кружится в танце, рассыпает серебристую пыльцу и учит детей зимним чудесам. С ней всегда происходят удивительные превращения!"
    },
    { 
      name: "Эльф", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/07c1f68f-a2bd-4000-9b15-10210629e203.jpg", 
      description: "Проказник и весельчак из мастерской",
      fullDescription: "Веселый помощник Деда Мороза прямо из волшебной мастерской! Эльф помогает делать игрушки и упаковывать подарки. Он очень шустрый, любит пошалить и повеселиться. Знает секреты создания подарков и всегда готов поиграть в активные игры!"
    },
    { 
      name: "Пингвин", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/e365cbb5-c6db-416f-866c-fd07eadb65fd.jpg", 
      description: "Забавный гость с Северного полюса",
      fullDescription: "Милый гость с далекого Северного полюса! Пингвин приехал на праздник, чтобы повеселиться с детьми. Он немного неуклюжий, но очень обаятельный, любит танцевать и кувыркаться. Расскажет интересные истории о холодных льдинах и своих друзьях-пингвинах."
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
              <h1 className="text-5xl font-bold">Волшебные персонажи праздника</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Познакомьтесь с нашими героями! Каждый персонаж — это профессиональный артист 
                в потрясающем костюме. Мы создаем настоящую сказку, в которой дети становятся главными героями.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-red-50 to-blue-50 p-6 rounded-xl shadow-lg text-left">
                  <div className="text-4xl mb-4">🎅</div>
                  <h3 className="text-xl font-bold mb-2">Традиционные герои</h3>
                  <p className="text-muted-foreground">
                    Дед Мороз и Снегурочка — классика новогоднего праздника. Они создают атмосферу настоящего волшебства.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg text-left">
                  <div className="text-4xl mb-4">⛄</div>
                  <h3 className="text-xl font-bold mb-2">Веселые помощники</h3>
                  <p className="text-muted-foreground">
                    Снеговик, Снежинка и Эльф добавят еще больше веселья и игр в ваш праздник.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-green-50 p-6 rounded-xl shadow-lg text-left">
                  <div className="text-4xl mb-4">🐧</div>
                  <h3 className="text-xl font-bold mb-2">Необычные гости</h3>
                  <p className="text-muted-foreground">
                    Пингвин с Северного полюса и другие удивительные персонажи порадуют детей.
                  </p>
                </div>
              </div>
              <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">💫 Почему дети любят наших героев?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Профессиональные костюмы</h4>
                      <p className="text-sm text-muted-foreground">
                        Яркие, детализированные наряды создают полное погружение в сказку
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Актерское мастерство</h4>
                      <p className="text-sm text-muted-foreground">
                        Герои живые, искренние и по-настоящему добрые
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Интерактивность</h4>
                      <p className="text-sm text-muted-foreground">
                        Герои играют с детьми, а не просто показывают представление
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Индивидуальный подход</h4>
                      <p className="text-sm text-muted-foreground">
                        Учитываем возраст и характер каждого ребенка
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CharactersSection characters={characters} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Characters;