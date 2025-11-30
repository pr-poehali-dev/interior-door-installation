import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-2xl text-foreground">
            ДверьСервис
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('consultation')} className="text-muted-foreground hover:text-foreground transition-colors">
              Консультация
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Профессиональная установка дверей
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Межкомнатные и входные двери любой сложности. Гарантия качества и точные сроки.
            </p>
            <Button 
              size="lg" 
              className="mt-8 text-lg px-8 py-6"
              onClick={() => scrollToSection('consultation')}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/75fc151a-57f5-4939-a0d4-a45da97fd1ef/files/24d56025-b159-4374-94d7-095c131c5c1c.jpg" 
                  alt="Межкомнатная дверь"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Home" className="text-primary" size={28} />
                  <h3 className="font-heading text-2xl font-semibold">Межкомнатные двери</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Установка дверей между комнатами с точной подгонкой и безупречной геометрией. 
                  Работаем с любыми материалами и конструкциями.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Замер и консультация</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Демонтаж старой двери</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Установка и регулировка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/75fc151a-57f5-4939-a0d4-a45da97fd1ef/files/a14bafa0-d687-4ec1-b86c-0f8d34b8bd1f.jpg" 
                  alt="Входная дверь"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-primary" size={28} />
                  <h3 className="font-heading text-2xl font-semibold">Входные двери</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Монтаж металлических и бронированных входных дверей с гарантией безопасности. 
                  Усиленная конструкция и надежная фурнитура.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Укрепление проема</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Установка замков</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary" size={18} />
                    <span>Шумоизоляция</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Онлайн-консультация
            </h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Ваш вопрос</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-12">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Контакты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>

            <Card className="text-center p-8 border-0 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">info@dverservice.ru</p>
            </Card>

            <Card className="text-center p-8 border-0 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Режим работы</h3>
              <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2024 ДверьСервис. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
