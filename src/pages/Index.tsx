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
    { 
      name: "Дед Мороз", 
      image: "https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/a536969e-ce2b-4726-bd5f-5ed714a2facf.jpg", 
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