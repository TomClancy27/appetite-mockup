import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishRisotto from "@/assets/dish-risotto.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const galleryImages = [
  { src: heroBg, alt: "Restaurant interior ambiance", category: "interior" },
  { src: dishSteak, alt: "Signature steak dish", category: "food" },
  { src: dishRisotto, alt: "Saffron risotto", category: "food" },
  { src: dishDessert, alt: "Chocolate soufflé", category: "food" },
  { src: heroBg, alt: "Elegant dining setup", category: "interior" },
  { src: dishSteak, alt: "Herb-crusted lamb", category: "food" },
  { src: dishRisotto, alt: "Truffle mushroom bruschetta", category: "food" },
  { src: dishDessert, alt: "Tiramisu layers", category: "food" },
  { src: heroBg, alt: "Chef plating a dish", category: "interior" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Gallery
          </h1>
          <div className="divider-elegant">
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              A visual feast of flavors and moments
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group relative overflow-hidden rounded-xl card-shadow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-background font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 text-background hover:text-primary transition-colors text-6xl font-light"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="max-w-5xl max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center text-background mt-4 text-lg">
              {galleryImages[selectedImage].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-background hover:text-primary transition-colors text-6xl font-light"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
