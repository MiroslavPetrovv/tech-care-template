import { Target, Zap, ShieldCheck, HandCoins, Wrench, CheckCircle } from "lucide-react";

const differentiators = [
  { icon: Zap, title: "Бързина", text: "Повечето ремонти приключват в рамките на 24–48 часа." },
  { icon: ShieldCheck, title: "Надеждност", text: "Гаранция за всяка извършена услуга и използвани части." },
  { icon: HandCoins, title: "Прозрачни цени", text: "Без скрити такси – знаете цената преди да започнем." },
  { icon: Wrench, title: "Практични решения", text: "Не продаваме ненужни услуги – поправяме това, което наистина има нужда." },
];

const services = [
  "Ремонт на компютри и лаптопи",
  "Хардуерна и софтуерна диагностика",
  "Инсталация и оптимизация на операционни системи",
  "Премахване на вируси и зловреден софтуер",
  "Настройка на мрежи и интернет свързаност",
  "Архивиране и прехвърляне на данни",
  "Поддръжка на периферни устройства",
];

const About = () => {
  return (
    <section id="about" className="section-padding tech-pattern">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            За нас
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Кои сме ние
          </h2>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
            <Target className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Нашата мисия</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Global Net</strong> е IT сервиз в Кърджали, създаден с една ясна цел – да предоставяме бързи, надеждни и достъпни технически решения за хора и малки бизнеси. Вярваме, че технологията трябва да работи за вас, а не обратното.
          </p>
        </div>

        {/* Two-column: Services + Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Services */}
          <div className="card-service">
            <h3 className="text-xl font-bold text-foreground mb-6">Какво правим</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Differentiators */}
          <div className="space-y-4">
            {differentiators.map((item, i) => (
              <div key={i} className="card-service flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border">
            <p className="text-lg font-semibold text-foreground max-w-lg">
              Не оставяйте техническите проблеми да спират работата ви. Доверете се на екипа на Global Net.
            </p>
            <a href="#contact" className="btn-primary">
              Свържи се с нас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
