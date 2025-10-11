import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricesSection = () => {
  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Цены и опции</h2>
          <p className="text-xl text-muted-foreground">
            Гибкие тарифы для любого бюджета
          </p>
        </div>
        <Tabs defaultValue="base" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="base">Базовые</TabsTrigger>
            <TabsTrigger value="extra">Дополнительно</TabsTrigger>
            <TabsTrigger value="packages">Пакеты</TabsTrigger>
          </TabsList>
          <TabsContent value="base" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Базовые программы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">Экспресс-поздравление (20 мин)</p>
                    <p className="text-sm text-muted-foreground">Дед Мороз + Снегурочка</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">2 000 ₽</p>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">Волшебный час (60 мин)</p>
                    <p className="text-sm text-muted-foreground">Полная программа с играми</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">5 000 ₽</p>
                </div>
                <div className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">Корпоративный праздник</p>
                    <p className="text-sm text-muted-foreground">Для организаций и групп</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">от 8 000 ₽</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="extra" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Дополнительные персонажи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>⛄ Снеговик</span>
                  <span className="font-semibold">+ 1 500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>✨ Снежинка</span>
                  <span className="font-semibold">+ 1 500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>🧝 Эльф</span>
                  <span className="font-semibold">+ 1 500 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>🐧 Пингвин</span>
                  <span className="font-semibold">+ 1 500 ₽</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="packages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Специальные пакеты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-2 border-primary rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-lg">VIP Праздник</p>
                    <p className="text-2xl font-bold text-primary">12 000 ₽</p>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>✓ 2 часа программы</li>
                    <li>✓ 4 персонажа на выбор</li>
                    <li>✓ Профессиональная фотосъемка</li>
                    <li>✓ Подарки для всех детей</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-lg">Корпоративный максимум</p>
                    <p className="text-2xl font-bold text-primary">15 000 ₽</p>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>✓ До 50 детей</li>
                    <li>✓ 2 часа программы</li>
                    <li>✓ Все персонажи</li>
                    <li>✓ Видеосъемка</li>
                    <li>✓ Новогодние подарки</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricesSection;
