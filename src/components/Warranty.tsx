import { ShieldCheck, AlertCircle, Clock, FileText } from "lucide-react";

const warrantyPoints = [
  {
    icon: ShieldCheck,
    title: "30-дневна гаранция на ремонта",
    description: "Хардуерните ремонти се извършват с до 30 дни гаранция,покриваща единствено извършената услуга и вложените части.",
  },
  {
    icon: Clock,
    title: "Срокове за ремонт",
    description: "Срокът за изпълнение зависи от сложността на ремонта и наличността на резервни части.",
  },
  {
    icon: FileText,
    title: "Предварителна диагностика",
    description: "Диагностиката се извършва предварително.Ремонт се извършва само след съгласие на клиента.",
  },
  {
    icon: AlertCircle,
    title: "Ограничения на отговорността",
    description: "GlobalNet Service Solutions EOOD не носи отговорностза софтуерни проблеми и загуба на данни.",
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
              Нашата гаранция
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Гаранция и условия
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
             Предлагаме ясно дефинирани гаранционни условия за извършените услуги и ремонти,
              с цел сигурност и коректност към клиента.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Гаранцията отпада при наличие на физически щети или следи от влага</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Клиентът носи отговорност за архивиране и съхранение на личните си данни</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">За гаранционни претенции е необходим оригинален платежен документ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                <span className="text-muted-foreground">Разширена гаранция се предлага при предварителна уговорка</span>
              </li>
            </ul>

            <a href="#contact" className="btn-primary">
              Пълните гаранционни условия
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
