import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: "Maria C.",
    location: "Porto Alegre",
    text: "Eu estava endividada até o pescoço, mas depois de aplicar as dicas deste eBook, consegui reduzir minhas dívidas em 60% em menos de 6 meses. Finalmente, tenho controle sobre minhas finanças."
  },
  {
    name: "João S.",
    location: "São Paulo",
    text: "Este método mudou completamente minha vida! Em 4 meses consegui quitar meu cartão de crédito e ainda sobrou dinheiro para começar uma reserva de emergência."
  },
  {
    name: "Ana L.",
    location: "Rio de Janeiro",
    text: "Achei que nunca sairia das dívidas, mas seguindo o passo a passo do eBook, consegui me organizar e hoje já estou investindo. Recomendo para todos!"
  },
  {
    name: "Carlos M.",
    location: "Belo Horizonte",
    text: "Em apenas 3 meses aplicando as estratégias, consegui negociar minhas dívidas e reduzir os juros em 70%. Minha vida financeira está totalmente transformada."
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <Card className="glass p-6 mx-auto max-w-2xl">
              <div className="text-center">
                <div className="text-4xl text-celestial-gold mb-4">"</div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="text-celestial-gold font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.location}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-celestial-gold scale-125' 
                : 'bg-muted hover:bg-celestial-gold/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};