import { Monitor, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Laptop Repair",
    "Desktop PC Repair",
    "Software Installation",
    "Data Recovery",
    "Antivirus Solutions",
    "Web Development",
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#packages" },
    { name: "Contact", href: "#contact" },
  ];

  const social = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Tech<span className="text-primary">Pro</span>
              </span>
            </a>
            <p className="text-steel-light mb-6 leading-relaxed">
              Professional IT services for homes and businesses. Reliable solutions, expert support.
            </p>
            <div className="flex gap-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-lg bg-navy-light hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-steel-light hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-steel-light hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-steel-light">123 Technology Drive, Suite 100<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:(415) 555-0123" className="text-steel-light hover:text-white transition-colors">
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@techpro.com" className="text-steel-light hover:text-white transition-colors">
                  info@techpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-steel-light">
            © {currentYear} TechPro IT Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-steel-light hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-steel-light hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
