import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

interface Character {
  name: string;
  emoji: string;
  description: string;
}

interface CharactersSectionProps {
  characters: Character[];
}

const CharactersSection = ({ characters }: CharactersSectionProps) => {
  return (
    <section id="characters" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Наши персонажи</h2>
          <p className="text-xl text-muted-foreground">
            Познакомьтесь с волшебными героями праздника
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {characters.map((character, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.05}>
              <Card className="text-center hover:scale-105 transition-transform h-full">
              <CardHeader>
                <div className="text-6xl mb-2">{character.emoji}</div>
                <CardTitle className="text-lg">{character.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{character.description}</p>
              </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;