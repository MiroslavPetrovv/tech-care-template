import { AlertTriangle, Power, Bug, Monitor, FileX, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const problems = [
  {
    icon: AlertTriangle,
    title: "Компютърът работи бавно или забива",
    description: "Системата стартира трудно, програмите се отварят бавно, а работата ви се забавя ежедневно.",
  },
  {
    icon: Power,
    title: "Устройството не се включва или се изключва само",
    description: "Черeн екран, странни шумове или внезапно спиране на захранването.",
  },
  {
    icon: Bug,
    title: "Вируси и зловреден софтуер",
    description: "Непознати програми, изскачащи реклами и риск за личните ви данни.",
  },
  {
    icon: Monitor,
    title: "Счупен екран или хардуерен проблем",
    description: "Пукнат дисплей, повредена клавиатура, проблем с батерията или твърдия диск.",
  },
  {
    icon: FileX,
    title: "Загуба на важни файлове",
    description: "Изтрити документи, повреден диск или невъзможност за достъп до данни.",
  },
];

const Problems = () => {
  return (
    <section id="problems" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Често срещани проблеми
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Имате проблем с компютъра или лаптопа си?
          </h2>
          <p className="text-lg text-muted-foreground">
            Вижте най-честите технически проблеми, които отстраняваме всеки ден.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {problems.map((problem, index) => (
              <AccordionItem
                key={index}
                value={`problem-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline gap-4 py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <problem.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-foreground">
                      {problem.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-14 pb-5 text-base leading-relaxed">
                  {problem.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground mb-4">
            Ако имате тези проблеми
          </p>
          <a href="#contact" className="btn-primary group">
            Свържи се с нас
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problems;
