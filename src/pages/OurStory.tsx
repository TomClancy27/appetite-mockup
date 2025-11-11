import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    description: "It all started in a small kitchen in Lyon, where Chef Anurag trained under Michelin-starred masters.",
  },
  {
    year: "2015",
    title: "Homecoming",
    description: "Returned to India with a vision to blend French technique with local heritage and seasonal bounty.",
  },
  {
    year: "2018",
    title: "First Recognition",
    description: "Awarded 'Best New Restaurant' by Culinary Excellence India for innovative farm-to-table cuisine.",
  },
  {
    year: "2020",
    title: "Sustainable Sourcing",
    description: "Established partnerships with local farmers, ensuring every ingredient tells a story of the land.",
  },
  {
    year: "2025",
    title: "A Legacy Continues",
    description: "Today, we serve not just meals, but memories — crafted with passion and served with soul.",
  },
];

export default function OurStory() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Chef Anurag in the kitchen preparing gourmet dishes — culinary journey and heritage"
            className="w-full h-full object-cover animate-parallax"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 animate-fade-in">
            Our Story
          </h1>
          <div className="divider-elegant">
            <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto">
              A journey from passion to plate
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden card-shadow animate-fade-in">
              <img
                src={heroBg}
                alt="Portrait of Chef Anurag — Michelin-trained chef with passion for farm-to-table cuisine"
                className="w-full h-full object-cover blur-sm opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/20" />
            </div>

            {/* Text */}
            <div className="animate-slide-up">
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                It began in a small kitchen in Lyon, where the scent of fresh herbs and simmering stocks became my first language. Under the tutelage of Michelin-starred masters, I learned that cooking is not merely technique — it is emotion, memory, and storytelling on a plate.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                When I returned to India, I brought with me the precision of French cuisine but sought to honor the vibrant, ancient flavors of our land. Every dish at Anurag's is a conversation between tradition and innovation, between the soil of our farms and the fire of our kitchen.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed mb-8">
                We source locally, seasonally, and sustainably — because true luxury lies not in rarity, but in respect for the ingredients and the hands that grew them. Our restaurant is not just a place to dine; it is a sanctuary where every guest becomes part of our story.
              </p>
              <p className="font-quote italic text-2xl text-primary leading-relaxed">
                "We don't just feed hunger. We nourish the soul."
              </p>
              <p className="mt-4 text-muted-foreground tracking-widest text-sm">— CHEF ANURAG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Milestones
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 hidden md:block" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative mb-12 md:mb-16 animate-fade-in ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                {/* Content Card */}
                <div className="card-shadow bg-card rounded-xl p-6 hover-lift">
                  <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
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
