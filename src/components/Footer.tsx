import Icon from "@/components/ui/icon";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/d4ea635a-e57e-43f8-ba39-0674adfca256.jpg" 
                alt="Дед Мороз Деткам" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Дед Мороз Деткам!</span>
            </div>
            <p className="text-white/80">
              Создаем незабываемые новогодние праздники для детей с 2019 года
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              {["Программы", "Персонажи", "Цены", "Отзывы"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <Icon name="Facebook" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
              <Icon name="Instagram" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
              <Icon name="Twitter" size={24} className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>© 2024 Волшебные Праздники. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
