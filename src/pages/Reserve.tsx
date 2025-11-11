import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, Phone } from "lucide-react";

export default function Reserve() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Requested",
      description: "We'll confirm your booking shortly via phone or email.",
    });
    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Reserve a Table
          </h1>
          <div className="divider-elegant">
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Secure your seat for an unforgettable dining experience
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="card-shadow bg-card rounded-2xl p-8 md:p-10 animate-fade-in">
              <h2 className="font-serif text-3xl font-bold text-card-foreground mb-8">
                Book Your Table
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-card-foreground mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-12"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-card-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="h-12 pl-11"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <Label htmlFor="date" className="text-card-foreground mb-2 block">
                    Date
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="h-12 pl-11"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <Label htmlFor="time" className="text-card-foreground mb-2 block">
                    Time
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="h-12 pl-11"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <Label htmlFor="guests" className="text-card-foreground mb-2 block">
                    Number of Guests
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full h-12 pl-11 pr-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button type="submit" variant="premium" size="lg" className="w-full">
                  Confirm Reservation
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">Or call us directly</p>
                <a
                  href="tel:+919876543210"
                  className="block text-center font-semibold text-primary hover:text-primary/80 transition-colors text-lg"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Map & Info */}
            <div className="space-y-8 animate-slide-up">
              {/* Map */}
              <div className="card-shadow rounded-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9404344443273!2d72.82229931490213!3d19.01858458711643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec6a1d8e2b7%3A0x46a8c4e0f5b5d5b5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location"
                ></iframe>
              </div>

              {/* Opening Hours */}
              <div className="card-shadow bg-card rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">
                  Opening Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span className="font-semibold text-card-foreground">12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span className="font-semibold text-card-foreground">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-card-foreground">11:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
