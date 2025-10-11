import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Устроим <span className="magical-gradient bg-clip-text text-transparent">волшебный</span> праздник для ваших детей
            </h1>
            <p className="text-xl text-muted-foreground">
              Дед Мороз, Снегурочка и их друзья создадут незабываемую новогоднюю сказку прямо у вас дома или в организации
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("programs")} className="bg-primary hover:bg-primary/90">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Выбрать программу
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contacts")}>
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Award" size={24} className="text-accent" />
                <span className="text-sm">5 лет опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={24} className="text-primary" />
                <span className="text-sm">500+ счастливых детей</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/63dd95b8-267c-4b77-9923-6fd20b498e9e.jpg"
              alt="Новогодний праздник"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;