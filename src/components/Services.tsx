import { 
  Laptop, 
  Monitor, 
  Settings, 
  Database, 
  Shield, 
  Cpu,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Laptop Repair",
    description: "Professional laptop diagnostics and repair services. Screen replacement, keyboard repair, and hardware upgrades.",
  },
  {
    icon: Monitor,
    title: "Desktop PC Repair",
    description: "Complete desktop computer repair and maintenance. From hardware issues to system optimization.",
  },
  {
    icon: Settings,
    title: "Software Installation",
    description: "Operating system installation, software setup, and configuration for optimal performance.",
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Secure data backup solutions and professional data recovery services for lost files.",
  },
  {
    icon: Shield,
    title: "Antivirus & Security",
    description: "Comprehensive security solutions including virus removal, firewall setup, and malware protection.",
  },
  {
    icon: Cpu,
    title: "Spare Parts & Upgrades",
    description: "Quality replacement parts and hardware upgrades to extend the life of your equipment.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding tech-pattern">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            We fix computers & business servers. Professional IT solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
