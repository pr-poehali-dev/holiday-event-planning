import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Отзывы родителей</h2>
          <p className="text-xl text-muted-foreground">
            Что говорят наши клиенты
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardDescription>{review.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
