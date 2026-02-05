import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { icon: Shield, label: "Сертифицирани експерти", value: "10+" },
    { icon: Clock, label: "Години опит", value: "10+" },
    { icon: Users, label: "Доволни клиенти", value: "999+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="IT Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80H10z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-electric/20" />
                <circle cx="10" cy="10" r="2" className="fill-electric/30" />
                <circle cx="90" cy="90" r="2" className="fill-electric/30" />
                <path d="M10 50h30M60 50h30M50 10v30M50 60v30" stroke="currentColor" strokeWidth="0.5" className="text-electric/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            <span className="text-sm font-medium text-electric">Надежден партньор за IT решения</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Професионални IT услуги за{" "}
            <span className="gradient-text">Дома и Бизнеса</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-steel-light mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Диагностика, поддръжка, софтуерни решения и уеб услуги.
            Предоставяме всеобхватна IT поддръжка, за да може вашата технология работи гладко.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="btn-primary group">
              Свържи се с нас
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy">
              Преглед на услуги
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-electric" />
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-sm text-steel-light">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
