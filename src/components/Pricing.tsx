import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "START",
    price: "$49",
    period: "one-time",
    description: "Basic computer diagnostics and cleaning",
    features: [
      "Full system diagnostics",
      "Software optimization",
      "Dust cleaning",
      "Basic virus scan",
      "Performance report",
    ],
    bonus: null,
    featured: false,
  },
  {
    name: "GAMER PRO",
    price: "$149",
    period: "one-time",
    description: "Complete gaming PC optimization",
    features: [
      "Everything in START",
      "Gaming performance tuning",
      "Driver updates & optimization",
      "Thermal paste replacement",
      "RGB setup & configuration",
      "Overclocking consultation",
    ],
    bonus: "Free gaming mouse pad",
    featured: true,
  },
  {
    name: "OFFICE CARE",
    price: "$79",
    period: "per month",
    description: "Monthly business IT support",
    features: [
      "Monthly maintenance visits",
      "Priority phone support",
      "Network monitoring",
      "Data backup management",
      "Security updates",
      "Hardware inventory",
    ],
    bonus: "First month 50% off",
    featured: false,
  },
  {
    name: "WEB START",
    price: "$299",
    period: "starting at",
    description: "Professional web presence",
    features: [
      "Custom website design",
      "Mobile responsive",
      "SEO optimization",
      "Contact forms",
      "Google Analytics setup",
      "1 year hosting included",
    ],
    bonus: "Free domain for 1 year",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="packages" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing with no hidden fees. Choose the package that fits your needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={pkg.featured ? "card-pricing-featured" : "card-pricing"}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-lg font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-sm text-muted-foreground ml-1">/{pkg.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bonus */}
              {pkg.bonus && (
                <div className="mb-6 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">🎁 {pkg.bonus}</span>
                </div>
              )}

              {/* CTA Button */}
              <a
                href="#contact"
                className={pkg.featured ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
