
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const addictionTypes = [
  {
    id: 'alcohol',
    title: 'Алкогольная зависимость',
    icon: 'Wine',
    description: 'Алкоголизм — хроническое заболевание, характеризующееся неконтролируемым употреблением алкоголя. Приводит к физической и психологической зависимости.',
    symptoms: ['Постоянная тяга к алкоголю', 'Потеря контроля над количеством', 'Абстинентный синдром', 'Толерантность (нужно больше для эффекта)'],
    treatment: ['Детоксикация под наблюдением врачей', 'Медикаментозная терапия', 'Психотерапия (индивидуальная и групповая)', 'Программы 12 шагов', 'Реабилитация в стационаре']
  },
  {
    id: 'drugs',
    title: 'Наркотическая зависимость',
    icon: 'Pill',
    description: 'Наркомания — болезнь, вызванная систематическим употреблением наркотических веществ. Быстро разрушает физическое и психическое здоровье.',
    symptoms: ['Непреодолимое желание употребления', 'Изменение поведения и личности', 'Физическая зависимость', 'Социальная деградация', 'Проблемы со здоровьем'],
    treatment: ['Медицинская детоксикация', 'Стационарная реабилитация (от 3 месяцев)', 'Работа с психологом и наркологом', 'Социальная адаптация', 'Программы взаимопомощи', 'Амбулаторное наблюдение']
  },
  {
    id: 'gaming',
    title: 'Игровая зависимость',
    icon: 'Gamepad2',
    description: 'Лудомания — патологическая страсть к азартным играм, букмекерским ставкам, онлайн-казино. Приводит к финансовым проблемам и разрушению семьи.',
    symptoms: ['Постоянные мысли об игре', 'Увеличение ставок', 'Невозможность остановиться', 'Ложь близким о проигрышах', 'Займы для игры'],
    treatment: ['Когнитивно-поведенческая терапия', 'Групповая терапия для зависимых', 'Семейное консультирование', 'Финансовое планирование', 'Программы самопомощи']
  }
];

const successStories = [
  {
    name: 'Александр, 34 года',
    addiction: 'Алкогольная зависимость',
    story: 'Употреблял алкоголь 12 лет, потерял работу и семью. Прошёл 4-месячную программу реабилитации. Сейчас 2 года в ремиссии, восстановил отношения с детьми, работаю менеджером.',
    duration: '2 года трезвости'
  },
  {
    name: 'Мария, 28 лет',
    addiction: 'Наркотическая зависимость',
    story: 'Начала употреблять в 19 лет. Провела 6 месяцев в центре реабилитации, продолжаю посещать группы поддержки. Закончила колледж, открыла своё дело. Жизнь изменилась полностью.',
    duration: '3 года без наркотиков'
  },
  {
    name: 'Дмитрий, 41 год',
    addiction: 'Игровая зависимость',
    story: 'Проиграл квартиру и влез в долги на 3 миллиона. Прошёл курс когнитивной терапии, научился контролировать импульсы. Выплатил долги, восстановил доверие жены.',
    duration: '1.5 года без игры'
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Heart" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Путь к выздоровлению</h1>
            </div>
            <a href="tel:88005553535" className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
              <Icon name="Phone" size={20} />
              <span className="font-semibold hidden sm:inline">8-800-555-35-35</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Помощь при зависимости — первый шаг к новой жизни
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Круглосуточная поддержка, профессиональные центры реабилитации и истории тех, кто победил зависимость
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a href="tel:88005553535">
                <Button size="lg" className="text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon name="PhoneCall" size={24} />
                  Горячая линия 24/7
                </Button>
              </a>
              <a href="#info">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2">
                  <Icon name="Info" size={24} />
                  Подробнее о лечении
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} className="text-primary" />
                <span>Анонимно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={18} className="text-primary" />
                <span>Конфиденциально</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span>24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Виды зависимости и методы лечения</h2>
          <Tabs defaultValue="alcohol" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full mb-8">
              {addictionTypes.map(type => (
                <TabsTrigger key={type.id} value={type.id} className="gap-2">
                  <Icon name={type.icon as any} size={20} />
                  <span className="hidden sm:inline">{type.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {addictionTypes.map(type => (
              <TabsContent key={type.id} value={type.id} className="space-y-6 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon name={type.icon as any} size={28} className="text-primary" />
                      {type.title}
                    </CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} className="text-destructive" />
                        Основные симптомы
                      </h4>
                      <ul className="space-y-2">
                        {type.symptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="ChevronRight" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Stethoscope" size={20} className="text-secondary" />
                        Методы лечения
                      </h4>
                      <ul className="space-y-2">
                        {type.treatment.map((method, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="info" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Истории выздоровления</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Реальные истории людей, которые смогли преодолеть зависимость и вернуться к полноценной жизни
          </p>
          
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
            {successStories.map((story, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">{story.duration}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm font-medium">{story.addiction}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Как понять, что у близкого человека зависимость?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Основные признаки: изменение поведения, потеря интереса к прежним увлечениям, скрытность, проблемы на работе/учёбе, 
                финансовые трудности, изменение внешнего вида, агрессивность или апатия. Важно не игнорировать эти сигналы и обратиться за помощью.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Сколько длится реабилитация?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Длительность зависит от типа и стадии зависимости. Минимальная программа — 1-3 месяца, стандартная — 3-6 месяцев, 
                долгосрочная — до года. После основной реабилитации рекомендуется амбулаторное наблюдение и участие в группах поддержки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Гарантирует ли реабилитация полное избавление от зависимости?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Зависимость — хроническое заболевание, но при правильном лечении достигается устойчивая ремиссия. 
                Успех зависит от мотивации пациента, выбранной программы, поддержки близких и соблюдения рекомендаций после реабилитации.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Конфиденциальна ли информация о прохождении реабилитации?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, все центры реабилитации соблюдают врачебную тайну. Информация о пациентах строго конфиденциальна 
                и не передаётся третьим лицам без письменного согласия. Возможна анонимная консультация и лечение.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Что делать, если человек отказывается от помощи?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Важно не давить, но продолжать показывать заботу. Обратитесь на горячую линию за консультацией — 
                специалисты помогут выбрать правильную стратегию мотивации. В критических случаях возможна мотивационная интервенция с участием психолога.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Phone" size={56} className="mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Не откладывайте — позвоните прямо сейчас</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Круглосуточная горячая линия. Консультация бесплатна, анонимна и конфиденциальна
          </p>
          <a href="tel:88005553535">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 text-primary hover:text-primary/90 font-bold shadow-xl">
              8-800-555-35-35
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={20} className="text-primary" />
              <span>© 2024 Путь к выздоровлению</span>
            </div>
            <p className="text-center">Информационный портал о помощи при зависимостях</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
              <a href="#" className="hover:text-foreground transition-colors">О проекте</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}