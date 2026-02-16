import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Моля, попълнете всички задължителни полета.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim() || null,
        phone: form.phone.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      toast({ title: "Съобщението е изпратено успешно!" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Грешка при изпращане. Опитайте отново.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Контакти
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Свържете се с нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Опишете проблема си и ние ще се свържем с вас възможно най-скоро.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Име *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Вашето име"
              value={form.name}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Имейл</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+359 ..."
              value={form.phone}
              onChange={handleChange}
              maxLength={20}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Съобщение *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Опишете проблема си..."
              value={form.message}
              onChange={handleChange}
              maxLength={1000}
              rows={5}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Изпращане..." : "Свържи се с нас"}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
