import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Sun, Wind, TrendingUp, Leaf, Users, Target, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Sun,
      title: 'Solar Projects',
      description: 'Comprehensive solar project design, installation, compliance, and optimization services.',
      features: ['Project Design', 'Installation', 'Compliance', 'Optimization']
    },
    {
      icon: Wind,
      title: 'Wind Projects',
      description: 'Expert consultancy on wind power generation setups and renewable energy solutions.',
      features: ['Site Assessment', 'Consultancy', 'Implementation', 'Maintenance']
    },
    {
      icon: TrendingUp,
      title: 'Power Trading',
      description: 'Navigate energy trading markets and identify profitable opportunities.',
      features: ['Market Analysis', 'Trading Strategy', 'Risk Management', 'Optimization']
    },
    {
      icon: Leaf,
      title: 'Sustainability Consulting',
      description: 'Guide individuals and businesses toward greener, more sustainable practices.',
      features: ['Assessment', 'Strategy', 'Implementation', 'Monitoring']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50MW+', label: 'Energy Generated' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
                Powering a 
                <span className="holographic-text"> Sustainable</span> Future
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                Leading clean energy solutions provider specializing in solar, wind, power trading, and sustainability consulting. Transform your energy landscape with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="liquid-button text-slate-900 font-semibold"
                  onClick={() => onNavigate('services')}
                >
                  Explore Our Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="liquid-glass border-slate-400 text-slate-900 hover:bg-slate-200/50 hover:text-slate-900 font-semibold"
                  onClick={() => onNavigate('contact')}
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 liquid-glass border-y border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold chromatic-text mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Comprehensive clean energy solutions tailored to meet your specific needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 liquid-card iridescent-border liquid-glow">
                <CardHeader>
                  <div className="w-12 h-12 crystal-surface rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <CardTitle className="text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-700">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="liquid-glass border-slate-400 text-slate-900 hover:bg-slate-200/50 hover:text-slate-900 font-semibold"
              onClick={() => onNavigate('services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 liquid-glass border-y border-white/10">
        <div className="container">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Removed image section */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Why Choose PowerStemSolutions?
              </h2>
              <p className="text-lg text-slate-700">
                We're more than just an energy solutions provider. We're your partners in creating a sustainable future through innovative technology and expert guidance.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 crystal-surface rounded-lg flex items-center justify-center mt-1 liquid-glow">
                    <Users className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Expert Team</h3>
                    <p className="text-slate-700">Certified professionals with years of experience in renewable energy solutions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 crystal-surface rounded-lg flex items-center justify-center mt-1 liquid-glow">
                    <Target className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Tailored Solutions</h3>
                    <p className="text-slate-700">Custom approaches designed specifically for your unique energy needs and goals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 crystal-surface rounded-lg flex items-center justify-center mt-1 liquid-glow">
                    <Award className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-900">Proven Results</h3>
                    <p className="text-slate-700">Track record of successful projects delivering measurable environmental and financial benefits.</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="liquid-button text-slate-900 font-semibold"
                onClick={() => onNavigate('contact')}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 holographic-gradient text-slate-900 relative overflow-hidden">
        <div className="container text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Go Green?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-800">
            Join hundreds of satisfied clients who have transformed their energy infrastructure with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="crystal-surface text-slate-900 hover:scale-105 transition-transform font-semibold"
              onClick={() => onNavigate('contact')}
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              className="liquid-glass border-slate-400 text-slate-900 hover:bg-slate-200/50 font-semibold"
              onClick={() => onNavigate('services')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}