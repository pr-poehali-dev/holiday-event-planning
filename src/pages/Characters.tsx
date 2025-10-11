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
        <CharactersSection characters={characters} />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Characters;
