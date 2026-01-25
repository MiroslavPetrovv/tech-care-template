import { ShieldCheck, AlertCircle, Clock, FileText } from "lucide-react";

const warrantyPoints = [
  {
    icon: ShieldCheck,
    title: "90-Day Repair Warranty",
    description: "All hardware repairs come with a 90-day warranty covering parts and labor.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs completed within 24-48 hours. Rush service available for urgent cases.",
  },
  {
    icon: FileText,
    title: "Transparent Quotes",
    description: "Free diagnostics with detailed cost estimates before any work begins.",
  },
  {
    icon: AlertCircle,
    title: "No Fix, No Fee",
    description: "If we can't solve your problem, you don't pay for the repair attempt.",
  },
];

const Warranty = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
              Our Guarantee
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Warranty & Conditions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We stand behind our work with comprehensive warranties and transparent policies. 
              Your satisfaction and trust are our top priorities.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Warranty void if device has water or physical damage after repair</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Customer data backup is customer's responsibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Original receipt required for warranty claims</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Extended warranty options available upon request</span>
              </li>
            </ul>

            <a href="#contact" className="btn-primary">
              Contact for Details
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {warrantyPoints.map((point, index) => (
              <div key={index} className="card-service">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
