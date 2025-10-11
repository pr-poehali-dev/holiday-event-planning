import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import AnimatedSection from "@/components/AnimatedSection";

interface ContactsSectionProps {
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactsSection = ({ handleBooking }: ContactsSectionProps) => {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Закажите праздник или задайте вопрос
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card>
              <CardHeader>
                <CardTitle>Форма заказа</CardTitle>
                <CardDescription>Заполните форму, и мы перезвоним</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBooking} className="space-y-4">
                  <Input placeholder="Ваше имя *" required />
                  <Input type="tel" placeholder="Телефон *" required />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Расскажите о вашем празднике" rows={4} />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@magic-events.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">Москва, ул. Новогодняя, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;