import { MapPin, Phone, Clock, Mail } from "lucide-react";

const locations = [
  {
    name: "Офис/Магазин",
    address: "Бул. Бупаир 27",
    city: "Кържали",
    phone: "089 260 2620",
    hours: "Пн-Пт: 9:00 - 18:30",
    weekend: "Сьб. 9:30 - 4:30",
  },
  {
    name: "GlobalNet",
    address: "бул Христо Ботев 76",
    city: "Кърджали",
    phone: "0893 39 25 09",
    hours: "Пн-Пт: 8:30 - 17:30",
    weekend: "",
  },
];

const Locations = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Намери ни
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Локации и Работни часове
          </h2>
          <p className="text-lg text-muted-foreground">
            Посетете една от нашите удобни локации или се свържете с нас за помощ.
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
              <h3 className="text-lg font-semibold text-foreground mb-1">Нуждаете се от помощ на сайтa?</h3>
              <p className="text-sm text-muted-foreground">Свържете се с нас още днес и получете професионално решение</p>
            </div>
            <a href="tel:(415) 555-0123" className="btn-primary whitespace-nowrap">
              Свържи се 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
