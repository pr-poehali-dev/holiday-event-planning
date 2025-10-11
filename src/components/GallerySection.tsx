import AnimatedSection from "@/components/AnimatedSection";

interface GallerySectionProps {
  gallery: string[];
}

const GallerySection = ({ gallery }: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Галерея праздников</h2>
          <p className="text-xl text-muted-foreground">
            Моменты радости и волшебства
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((image, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <img src={image} alt={`Праздник ${idx + 1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;