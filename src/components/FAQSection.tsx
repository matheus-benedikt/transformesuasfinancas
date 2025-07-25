import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria das pessoas começa a ver melhorias significativas em suas finanças dentro de 30 dias aplicando as estratégias do eBook. Em 90 dias, você já terá uma base sólida para sua saúde financeira."
  },
  {
    question: "O método funciona para qualquer nível de endividamento?",
    answer: "Sim! O eBook foi desenvolvido para funcionar desde pequenas dívidas de cartão até casos mais complexos. As estratégias são escaláveis e se adaptam à sua situação específica."
  },
  {
    question: "Preciso de conhecimento prévio em finanças?",
    answer: "Absolutamente não! O material foi criado em linguagem simples e clara, com exemplos práticos. Qualquer pessoa pode aplicar as técnicas, independente do nível de conhecimento financeiro."
  },
  {
    question: "A garantia é real?",
    answer: "Sim, oferecemos 7 dias de garantia total. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "Como recebo o material?",
    answer: "Após a confirmação do pagamento, você recebe o eBook completo + bônus diretamente no seu e-mail em até 5 minutos. É tudo digital e pode acessar de qualquer dispositivo."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="glass overflow-hidden">
          <button
            className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/10 transition-colors duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold text-foreground pr-4">
              {faq.question}
            </h3>
            <div className="text-celestial-gold">
              {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6">
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};