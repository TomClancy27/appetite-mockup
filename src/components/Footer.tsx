import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="font-quote italic text-xl md:text-2xl text-background/90 leading-relaxed">
            "Every guest leaves not just satisfied, but transformed."
          </p>
          <p className="mt-4 text-sm text-background/70 tracking-widest">— CHEF ANURAG</p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Anurag's Fine Dining</h3>
            <p className="text-background/80 leading-relaxed">
              Modern dining, handcrafted with local ingredients and timeless recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-background/80 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-background/80 hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-background/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/reserve" className="text-background/80 hover:text-primary transition-colors">
                  Reserve a Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-background/80">
                  123 Culinary Lane, Mumbai, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+919876543210" className="text-background/80 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:hello@anurags.in" className="text-background/80 hover:text-primary transition-colors">
                  hello@anurags.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-background/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-background/30 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-background/20">
          <p className="text-background/70 text-sm">
            © 2025 Anurag's Fine Dining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
