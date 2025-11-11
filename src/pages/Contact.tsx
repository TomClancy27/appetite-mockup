import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Contact Us
          </h1>
          <div className="divider-elegant">
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Location */}
            <div className="card-shadow bg-card rounded-xl p-8 text-center hover-lift animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 icon-glow">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                Location
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                123 Culinary Lane<br />
                Mumbai, Maharashtra<br />
                India 400001
              </p>
            </div>

            {/* Phone */}
            <div
              className="card-shadow bg-card rounded-xl p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 icon-glow">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                Phone
              </h3>
              <a
                href="tel:+919876543210"
                className="text-muted-foreground hover:text-primary transition-colors block mb-1"
              >
                +91 98765 43210
              </a>
              <a
                href="tel:+919876543211"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                +91 98765 43211
              </a>
            </div>

            {/* Email */}
            <div
              className="card-shadow bg-card rounded-xl p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 icon-glow">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                Email
              </h3>
              <a
                href="mailto:hello@anurags.in"
                className="text-muted-foreground hover:text-primary transition-colors block mb-1"
              >
                hello@anurags.in
              </a>
              <a
                href="mailto:reservations@anurags.in"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                reservations@anurags.in
              </a>
            </div>

            {/* Hours */}
            <div
              className="card-shadow bg-card rounded-xl p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 icon-glow">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                Hours
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mon-Thu: 12 PM - 11 PM<br />
                Fri-Sat: 12 PM - 12 AM<br />
                Sun: 11 AM - 11 PM
              </p>
            </div>
          </div>

          {/* Map - Lazy Load */}
          <div className="card-shadow rounded-2xl overflow-hidden h-[500px] animate-slide-up">
            <div
              id="map-placeholder-contact"
              role="button"
              aria-label="Load map"
              tabIndex={0}
              className="cursor-pointer h-full relative"
              onClick={(e) => {
                const target = e.currentTarget;
                const iframe = document.createElement("iframe");
                iframe.src =
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9404344443273!2d72.82229931490213!3d19.01858458711643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec6a1d8e2b7%3A0x46a8c4e0f5b5d5b5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123";
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.style.border = "0";
                iframe.loading = "lazy";
                iframe.referrerPolicy = "no-referrer-when-downgrade";
                iframe.title = "Restaurant location map";
                target.replaceWith(iframe);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.currentTarget.click();
                }
              }}
            >
              <img
                src="/placeholder.svg"
                alt="Map placeholder - Tap to load map"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "48px",
                  left: "16px",
                  color: "#6B554F",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.9)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                Tap to load map
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
