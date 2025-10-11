import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Program {
  title: string;
  duration: string;
  description: string;
  price: string;
  icon: string;
  features: string[];
}

interface ProgramsSectionProps {
  programs: Program[];
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ProgramsSection = ({ programs, handleBooking }: ProgramsSectionProps) => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Наши программы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальный вариант для вашего праздника
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={program.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  {program.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <p className="text-3xl font-bold magical-gradient bg-clip-text text-transparent">
                    {program.price}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Заказать
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Бронирование: {program.title}</DialogTitle>
                      <DialogDescription>Заполните форму, и мы свяжемся с вами</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <Input placeholder="Ваше имя" required />
                      <Input type="tel" placeholder="Телефон" required />
                      <Input type="email" placeholder="Email" />
                      <Textarea placeholder="Комментарий к заказу" />
                      <Button type="submit" className="w-full">Отправить заявку</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
