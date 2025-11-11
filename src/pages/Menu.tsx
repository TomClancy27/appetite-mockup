import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import dishSteak from "@/assets/dish-steak.jpg";
import dishRisotto from "@/assets/dish-risotto.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import { cn } from "@/lib/utils";

const menuCategories = {
  starters: [
    {
      name: "Truffle Mushroom Bruschetta",
      description: "Wild mushrooms kissed by truffle oil on artisan bread",
      price: "₹420",
      image: dishRisotto,
    },
    {
      name: "Seared Scallops",
      description: "Ocean-fresh scallops with citrus-infused foam",
      price: "₹680",
      image: dishSteak,
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      description: "Creamy burrata crowned with heritage tomatoes",
      price: "₹520",
      image: dishDessert,
    },
  ],
  mains: [
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
      name: "Pan-Seared Sea Bass",
      description: "Delicate fish atop a bed of seasonal greens",
      price: "₹1,280",
      image: dishSteak,
    },
    {
      name: "Wild Mushroom Pasta",
      description: "Handmade pasta entwined with forest mushrooms",
      price: "₹820",
      image: dishRisotto,
    },
  ],
  desserts: [
    {
      name: "Dark Chocolate Soufflé",
      description: "A cloud of melted Belgian chocolate",
      price: "₹480",
      image: dishDessert,
    },
    {
      name: "Vanilla Panna Cotta",
      description: "Silky custard with berry compote whispers",
      price: "₹420",
      image: dishDessert,
    },
    {
      name: "Tiramisu",
      description: "Layers of espresso dreams and mascarpone silk",
      price: "₹460",
      image: dishDessert,
    },
  ],
};

type CategoryKey = keyof typeof menuCategories;

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("starters");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Our Menu
          </h1>
          <div className="divider-elegant">
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Each dish is a story, crafted with passion and served with soul
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {(Object.keys(menuCategories) as CategoryKey[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories[activeCategory].map((dish, index) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
