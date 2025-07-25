import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CountdownTimer } from '@/components/CountdownTimer';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { FAQSection } from '@/components/FAQSection';
import { CheckCircle, Star, Shield, Gift, TrendingUp, DollarSign, PiggyBank } from 'lucide-react';
import heroImage from '@/assets/hero-financial-freedom.jpg';
import planningImage from '@/assets/financial-planning.jpg';
import growthImage from '@/assets/financial-growth.jpg';

const FinancialLanding = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = 'Última Chance de Transformar Sua Vida Financeira';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-gold text-accent-foreground">
              🔥 OFERTA ESPECIAL - 50% DE DESCONTO
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-celestial-gold animate-typing border-r-2 border-celestial-gold">
                {typingText}
              </span>
              <br />
              <span className="text-celestial-blue">
                Como Sair das Dívidas e Construir Uma Saúde Financeira Duradoura
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Este é o momento de dar o primeiro passo para a liberdade financeira. 
              <br />
              <span className="text-celestial-gold font-semibold">
                Não deixe essa oportunidade passar – as vagas são limitadas e o desconto expira em apenas 24 horas.
              </span>
            </p>
            
            <div className="flex flex-col items-center gap-6">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToOffer}
              className="text-xl px-12 py-6"
            >
              Sim, quero sair das dívidas agora! 💰
            </Button>
              
              <div className="text-sm text-muted-foreground">
                ⏰ Oferta expira em:
              </div>
              <CountdownTimer />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-celestial-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-celestial-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-celestial-purple">
                O que você irá aprender
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Este eBook foi projetado para dar a você as estratégias comprovadas que 
                milhares de pessoas já usaram para sair das dívidas e alcançar a liberdade financeira.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={planningImage} 
                  alt="Planejamento Financeiro" 
                  className="rounded-lg shadow-celestial animate-float"
                />
              </div>
              
              <div className="space-y-6">
                <Card className="glass p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="text-celestial-gold mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Estratégias de Quitação</h3>
                      <p className="text-muted-foreground">
                        Métodos comprovados para negociar e quitar suas dívidas com até 70% de desconto
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="glass p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <PiggyBank className="text-celestial-gold mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Planejamento Financeiro</h3>
                      <p className="text-muted-foreground">
                        Como criar um orçamento eficaz e construir sua reserva de emergência
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="glass p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <DollarSign className="text-celestial-gold mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Renda Extra</h3>
                      <p className="text-muted-foreground">
                        Técnicas para aumentar sua renda e acelerar o processo de quitação
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Button variant="celestial" size="lg" onClick={scrollToOffer} className="w-full">
                  Quero começar agora!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-celestial">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 text-foreground">
              Por que escolher nosso método?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glass p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Resultados Rápidos</h3>
                <p className="text-muted-foreground">
                  Veja mudanças em até 30 dias aplicando as estratégias
                </p>
              </Card>
              
              <Card className="glass p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Para Todos os Níveis</h3>
                <p className="text-muted-foreground">
                  Não precisa de conhecimento prévio em finanças
                </p>
              </Card>
              
              <Card className="glass p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Suporte Completo</h3>
                <p className="text-muted-foreground">
                  Acesso à comunidade exclusiva de apoio
                </p>
              </Card>
              
              <Card className="glass p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Bônus Exclusivos</h3>
                <p className="text-muted-foreground">
                  Planilhas e templates personalizados inclusos
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-celestial-purple">
                Veja o que os outros têm a dizer
              </h2>
              <p className="text-xl text-muted-foreground">
                Milhares de pessoas já transformaram suas vidas financeiras
              </p>
            </div>
            
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer-section" className="py-20 bg-gradient-celestial">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-destructive text-destructive-foreground animate-pulse">
              ⚠️ APENAS 50 VAGAS DISPONÍVEIS
            </Badge>
            
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Oferta Exclusiva por Tempo Limitado!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Uma vez que as vagas se esgotarem, você perderá a chance de obter 
              planilhas financeiras personalizadas GRATUITAS.
            </p>
            
            <div className="mb-8">
              <CountdownTimer />
            </div>
            
            <Card className="glass p-8 max-w-lg mx-auto">
              <div className="text-center space-y-4">
                <img 
                  src={growthImage} 
                  alt="Crescimento Financeiro" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <h3 className="text-2xl font-bold">
                  Liberdade Financeira Completa
                </h3>
                
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-celestial-gold" size={20} />
                    <span>eBook Completo (120 páginas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-celestial-gold" size={20} />
                    <span>Planilhas de Controle Financeiro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-celestial-gold" size={20} />
                    <span>Templates de Negociação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-celestial-gold" size={20} />
                    <span>Acesso à Comunidade VIP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-celestial-gold" size={20} />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="text-lg text-muted-foreground line-through">
                    De R$ 197,00
                  </div>
                  <div className="text-4xl font-bold text-celestial-gold">
                    R$ 97,00
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Oferta especial com 50% de desconto
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full text-xl py-6"
                  onClick={() => window.open('https://pay.kiwify.com.br/pVliXms', '_blank')}
                >
                  ADQUIRIR COM DESCONTO 🚀
                </Button>
                
                <div className="text-xs text-muted-foreground">
                  💳 Parcelamento em até 12x sem juros
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-gold p-8 rounded-lg shadow-glow">
              <Shield className="mx-auto mb-4 text-accent-foreground" size={64} />
              <h2 className="text-3xl font-bold mb-4 text-accent-foreground">
                Garantia de Satisfação de 7 Dias
              </h2>
              <p className="text-lg text-accent-foreground/80">
                Eu tenho tanta confiança que este eBook vai mudar sua vida financeira, 
                que ofereço uma garantia de satisfação de 7 dias. Se não ficar 100% satisfeito, 
                devolvemos seu dinheiro sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-celestial">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Dúvidas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Esclarecemos as principais dúvidas sobre o método
              </p>
            </div>
            
            <FAQSection />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-celestial-purple">
              Não perca essa oportunidade!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A oferta de 50% de desconto expira em 24 horas. 
              <br />
              Sua liberdade financeira está a um clique de distância.
            </p>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full text-xl py-6 animate-glow-pulse"
              onClick={() => window.open('https://pay.kiwify.com.br/pVliXms', '_blank')}
            >
              Sim, quero sair das dívidas agora! 💎
            </Button>
            
            <div className="mt-6 text-sm text-muted-foreground">
              🔒 Compra 100% segura e protegida
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">
            © 2024 Liberdade Financeira. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Este produto não substitui aconselhamento financeiro profissional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FinancialLanding;