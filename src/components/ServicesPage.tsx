import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Sun, 
  Wind, 
  TrendingUp, 
  Leaf, 
  CheckCircle, 
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
  Settings
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: 'solar',
      icon: Sun,
      title: 'Solar Projects',
      subtitle: 'Complete Solar Energy Solutions',
      description: 'From initial design to final optimization, we provide comprehensive solar project services that maximize energy output and ensure long-term reliability.',
      image: 'https://images.unsplash.com/photo-1668097613572-40b7c11c8727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1ODY0MDk0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Site Assessment & Feasibility Studies',
        'Custom System Design & Engineering',
        'Professional Installation Services',
        'Regulatory Compliance & Permitting',
        'Performance Monitoring & Optimization',
        'Maintenance & Support Services'
      ],
      benefits: [
        'Reduce electricity costs by up to 90%',
        'Increase property value',
        'Federal and state tax incentives',
        '25-year system warranties'
      ]
    },
    {
      id: 'wind',
      icon: Wind,
      title: 'Wind Projects',
      subtitle: 'Wind Power Generation Expertise',
      description: 'Expert consultancy services for wind power projects, from site evaluation to implementation and ongoing maintenance of wind energy systems.',
      image: 'https://images.unsplash.com/photo-1629707921873-e926840b5417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMGVuZXJneXxlbnwxfHx8fDE3NTg3MDM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Wind Resource Assessment',
        'Site Selection & Analysis',
        'Turbine Selection & Specification',
        'Environmental Impact Studies',
        'Grid Connection Planning',
        'Project Management & Implementation'
      ],
      benefits: [
        'Harness consistent wind resources',
        'Long-term energy cost stability',
        'Minimal environmental impact',
        'Community economic benefits'
      ]
    },
    {
      id: 'trading',
      icon: TrendingUp,
      title: 'Power Trading',
      subtitle: 'Energy Market Navigation',
      description: 'Navigate complex energy trading markets with our expert guidance, identifying opportunities and optimizing your energy portfolio for maximum returns.',
      image: 'https://images.unsplash.com/photo-1722750813160-d58602421953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2x1dGlvbnN8ZW58MXx8fHwxNzU4NzAzNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Market Analysis & Forecasting',
        'Trading Strategy Development',
        'Risk Management Solutions',
        'Portfolio Optimization',
        'Regulatory Compliance',
        'Real-time Market Monitoring'
      ],
      benefits: [
        'Maximize energy revenue streams',
        'Reduce market exposure risks',
        'Access to wholesale markets',
        'Expert market insights'
      ]
    },
    {
      id: 'sustainability',
      icon: Leaf,
      title: 'Sustainability Consulting',
      subtitle: 'Green Business Transformation',
      description: 'Comprehensive sustainability consulting services to help individuals and businesses adopt greener practices and achieve their environmental goals.',
      image: 'https://images.unsplash.com/photo-1678699255640-a1b75cec7718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmlsaXR5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4NzAzNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Sustainability Assessments',
        'Carbon Footprint Analysis',
        'Green Strategy Development',
        'Implementation Planning',
        'Progress Monitoring & Reporting',
        'Certification Support'
      ],
      benefits: [
        'Reduce operational costs',
        'Improve brand reputation',
        'Meet regulatory requirements',
        'Attract eco-conscious customers'
      ]
    }
  ];

  const processSteps = [
    {
      icon: Shield,
      title: 'Assessment',
      description: 'Comprehensive evaluation of your current energy needs and sustainability goals.'
    },
    {
      icon: Settings,
      title: 'Planning',
      description: 'Custom strategy development tailored to your specific requirements and budget.'
    },
    {
      icon: Zap,
      title: 'Implementation',
      description: 'Professional execution of your clean energy project with ongoing support.'
    },
    {
      icon: BarChart3,
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to maximize efficiency and returns.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 energy-flow border-b border-white/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="holographic-text">Comprehensive Clean Energy Services</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              From solar installations to sustainability consulting, we provide end-to-end solutions for your renewable energy needs.
            </p>
            <Button 
              size="lg"
              className="liquid-button text-slate-900 font-semibold"
              onClick={() => onNavigate('contact')}
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 crystal-surface rounded-lg flex items-center justify-center liquid-glow">
                      <service.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                      <p className="chromatic-text font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-slate-900">What We Offer:</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-slate-900">Key Benefits:</h3>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <ArrowRight className="h-4 w-4 text-slate-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="liquid-button text-slate-900 font-semibold"
                    onClick={() => onNavigate('contact')}
                  >
                    Get Quote for {service.title}
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-lg blur-3xl" />
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover relative border border-white/10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 liquid-glass border-y border-white/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="holographic-text">Our Proven Process</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your clean energy project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative liquid-card iridescent-border liquid-glow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 crystal-surface rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 holographic-gradient text-slate-900 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-700">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 holographic-gradient text-slate-900 relative overflow-hidden">
        <div className="container text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-800">
            Let our experts help you choose the right clean energy solution for your needs. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="crystal-surface text-slate-900 hover:scale-105 transition-transform font-semibold"
              onClick={() => onNavigate('contact')}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              className="liquid-glass border-slate-400 text-slate-900 hover:bg-slate-200/50 font-semibold"
              onClick={() => onNavigate('home')}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}