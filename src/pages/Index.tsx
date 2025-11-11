import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, UtensilsCrossed, Leaf, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishRisotto from "@/assets/dish-risotto.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const featuredDishes = [
  {
    name: "Herb-Crusted Lamb Rack",
    description: "Tender lamb embraced by rosemary and thyme",
    price: "₹1,450",
    image: dishSteak,
  },
  {
    name: "Saffron Risotto",
    description: "Arborio rice bathed in golden saffron essence",
    price: "₹890",
    image: dishRisotto,
  },
  {
    name: "Dark Chocolate Soufflé",
    description: "A cloud of melted Belgian chocolate",
    price: "₹480",
    image: dishDessert,
  },
];

const Index = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Fine dining experience"
            className="w-full h-full object-cover animate-parallax"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Logo Watermark */}
        <div className="absolute top-24 left-8 opacity-20 z-10">
          <div className="text-background font-serif text-4xl font-bold tracking-wider">A</div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-background mb-6 drop-shadow-2xl">
            Where Flavor Meets Elegance
          </h1>
          <p className="text-xl md:text-2xl text-background/95 mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            Modern dining, handcrafted with local ingredients and timeless recipes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="premium"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Link to="/reserve">Reserve a Table</Link>
            </Button>
            <Button
              asChild
              variant="elegant"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Signature Dishes
            </h2>
            <div className="divider-elegant">
              <p className="text-muted-foreground text-lg">Handcrafted excellence on every plate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group card-shadow rounded-2xl overflow-hidden bg-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-bold text-primary text-lg whitespace-nowrap ml-2">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="premium" size="lg">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dine With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Dine With Us
            </h2>
            <div className="divider-elegant">
              <p className="text-muted-foreground text-lg">Excellence in every detail</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group animate-fade-in">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 icon-glow group-hover:scale-110 transition-transform duration-300">
                <UtensilsCrossed className="text-primary" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Warm Ambience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Candlelit elegance and curated acoustics envelope every table in quiet luxury
              </p>
            </div>

            <div className="text-center group animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 icon-glow group-hover:scale-110 transition-transform duration-300">
                <Leaf className="text-primary" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Fresh Ingredients
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Farm-to-table philosophy ensuring each ingredient arrives at peak ripeness
              </p>
            </div>

            <div className="text-center group animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 icon-glow group-hover:scale-110 transition-transform duration-300">
                <Award className="text-primary" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Signature Dishes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Michelin-trained techniques married with heirloom family recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden card-shadow animate-fade-in">
              <img
                src={heroBg}
                alt="Our story"
                className="w-full h-full object-cover blur-sm opacity-90"
              />
              <div className="absolute inset-0 bg-foreground/20" />
            </div>

            {/* Text */}
            <div className="animate-slide-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                At Anurag's Fine Dining, we believe that food is more than sustenance—it's a journey. Every dish tells a story of heritage, innovation, and the passionate hands that crafted it. From farm-fresh ingredients to the final plating, we honor tradition while embracing creativity.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed mb-8">
                Our chef-driven menu celebrates the seasons, the soil, and the soul of modern gastronomy. We invite you to join us in creating moments that linger long after the last bite—memories crafted with flavor, care, and love.
              </p>
              <Button asChild variant="premium" size="lg">
                <Link to="/our-story">Read Our Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA - Mobile Only */}
      {showStickyCTA && (
        <Link
          to="/reserve"
          className="fixed bottom-6 right-6 z-50 md:hidden animate-fade-in"
        >
          <Button
            variant="premium"
            size="lg"
            className="rounded-full shadow-2xl button-glow px-6 py-6 gap-3"
          >
            <Phone size={20} />
            <span className="font-semibold">Reserve Now</span>
          </Button>
        </Link>
      )}

      <Footer />
    </div>
  );
};

export default Index;
