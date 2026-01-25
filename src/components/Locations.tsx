import { MapPin, Phone, Clock, Mail } from "lucide-react";

const locations = [
  {
    name: "Main Office",
    address: "123 Technology Drive, Suite 100",
    city: "San Francisco, CA 94105",
    phone: "(415) 555-0123",
    email: "sf@techpro.com",
    hours: "Mon-Fri: 9AM - 6PM",
    weekend: "Sat: 10AM - 4PM",
  },
  {
    name: "Downtown Branch",
    address: "456 Market Street, Floor 3",
    city: "San Francisco, CA 94102",
    phone: "(415) 555-0456",
    email: "downtown@techpro.com",
    hours: "Mon-Fri: 8AM - 7PM",
    weekend: "Sat-Sun: 10AM - 5PM",
  },
];

const Locations = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Locations & Hours
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit us at one of our convenient locations or get in touch for on-site support.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <div key={index} className="card-service">
              <h3 className="text-xl font-bold text-foreground mb-6">{location.name}</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground">{location.address}</p>
                    <p className="text-muted-foreground">{location.city}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground">{location.hours}</p>
                    <p className="text-muted-foreground">{location.weekend}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">Need On-Site Support?</h3>
              <p className="text-sm text-muted-foreground">We offer same-day service for business clients</p>
            </div>
            <a href="tel:(415) 555-0123" className="btn-primary whitespace-nowrap">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
