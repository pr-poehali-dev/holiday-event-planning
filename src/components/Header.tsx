import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  menuItems: Array<{ id: string; label: string; icon: string }>;
}

const Header = ({ activeSection, scrollToSection, menuItems }: HeaderProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/d4ea635a-e57e-43f8-ba39-0674adfca256.jpg" 
            alt="Дед Мороз Деткам" 
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="text-xl font-bold magical-gradient bg-clip-text text-transparent">Дед Мороз Деткам!</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon name={item.icon as any} size={16} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Calendar" size={16} className="mr-2" />
                Забронировать
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Календарь бронирования</DialogTitle>
                <DialogDescription>Выберите удобную дату для праздника</DialogDescription>
              </DialogHeader>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </DialogContent>
          </Dialog>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img 
                    src="https://cdn.poehali.dev/projects/b4288ae9-5860-48b0-a635-c6eefd31df1d/files/d4ea635a-e57e-43f8-ba39-0674adfca256.jpg" 
                    alt="Логотип" 
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="magical-gradient bg-clip-text text-transparent">Меню</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Забронировать
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Календарь бронирования</DialogTitle>
                      <DialogDescription>Выберите удобную дату для праздника</DialogDescription>
                    </DialogHeader>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </DialogContent>
                </Dialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
