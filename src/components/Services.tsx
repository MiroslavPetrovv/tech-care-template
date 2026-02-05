import { 
  Laptop, 
  Monitor, 
  Settings, 
  Database, 
  Shield, 
  Cpu,
  Globe,
  Wrench,
  HardDriveDownload,
  ArrowDownToLine,
  Clock,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Диагностика и профилактика на техника",
    description: [
      "Хардуерна и софтуерна диагностика",
      "Профилактика на машини",
      "Диагностика на системата ви",
    ],
  },
  {
    icon: ArrowDownToLine,
    title: "Инсталация и конфигурация на софтуер",
    description: [
      "Инсталация на Windows",
      "Инсталация на Драйвери",
      "Първоначална настройка",
    ],
  },
  {
    icon: Clock,
    title: "Поддръжка и актуализация на системи",
    description: [
      "Актуализации",
      "Оптимизация",
      "Office пакети",
    ],
  },
  {
    icon: Wrench,
    title: "Ремонт и хардуерен ъпгрейд",
    description: [
      "Ремонт на компютри и лаптопи",
      "Смяна / монтаж на SSD, RAM",
      "Принтери ",
    ],
  },
  {
    icon: HardDriveDownload,
    title: "Архивиране и възстановяване на данни",
    description:  [
      "Запазване и прехвърляне на данни",
      "Възстановяване при проблем",
      "Архивиране ",
    ],
  },
  {
    icon: Globe,
    title: "Уеб услуги и онлайн решения",
    description: [
      "Уебсайтове",
      "Онлайн магазини",
      "Домейни и хостинг ",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding tech-pattern">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Какво предлагаме
          </h2>
          <p className="text-lg text-muted-foreground">
            Поправяме компютъри и бизнес сървъри. Професионални IT решения, адаптирани към вашите нужди.
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
                {Array.isArray(service.description) ? (
                  <ul className="text-muted-foreground mb-6 leading-relaxed list-disc list-inside text-black">
                    {service.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <span>{service.description}</span>
                )}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
              >
                Научи пoвече
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
