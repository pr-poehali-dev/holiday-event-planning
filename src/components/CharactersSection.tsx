import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";

interface Character {
  name: string;
  image: string;
  description: string;
  fullDescription: string;
}

interface CharactersSectionProps {
  characters: Character[];
}

const CharactersSection = ({ characters }: CharactersSectionProps) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

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
              <Card 
                className="text-center hover:scale-105 transition-transform h-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedCharacter(character)}
              >
              <CardHeader className="pb-2">
                <div className="w-full h-32 mb-3 flex items-center justify-center overflow-hidden rounded-lg">
                  <img 
                    src={character.image} 
                    alt={character.name} 
                    className="w-full h-full object-cover hover:scale-125 transition-transform duration-300"
                  />
                </div>
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

      <Dialog open={!!selectedCharacter} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCharacter && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedCharacter.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedCharacter.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src={selectedCharacter.image} 
                    alt={selectedCharacter.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCharacter.fullDescription}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CharactersSection;